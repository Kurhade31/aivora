'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ZoomIn, ZoomOut, RotateCcw, Filter, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { getAllConcepts } from '@/lib/data';
import { Concept } from '@/types';
import { AivoraBadge } from './AivoraBadge';

interface MapNodePosition {
  id: string;
  slug: string;
  title: string;
  category: Concept['category'];
  x: number;
  y: number;
  orbitRadius: number;
}

export const AiKnowledgeMap: React.FC = () => {
  const concepts = getAllConcepts();
  const [selectedNode, setSelectedNode] = useState<Concept | null>(concepts[0] || null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // 12 Planetary/Orbital Coordinates around central AI Core (500, 360)
  const nodeLayouts: MapNodePosition[] = [
    { id: 'c-ai-foundations', slug: 'artificial-intelligence', title: 'Artificial Intelligence', category: 'Foundation', x: 500, y: 360, orbitRadius: 0 },
    { id: 'c-machine-learning', slug: 'machine-learning', title: 'Machine Learning', category: 'Foundation', x: 500, y: 220, orbitRadius: 140 },
    { id: 'c-deep-learning', slug: 'deep-learning', title: 'Deep Learning', category: 'Mechanism', x: 630, y: 260, orbitRadius: 160 },
    { id: 'c-embeddings', slug: 'embeddings', title: 'Embeddings & Vectors', category: 'Mechanism', x: 660, y: 400, orbitRadius: 170 },
    { id: 'c-foundation-models', slug: 'foundation-models', title: 'Foundation Models', category: 'Model', x: 580, y: 510, orbitRadius: 175 },
    { id: 'c-llms', slug: 'llms', title: 'Large Language Models', category: 'Model', x: 420, y: 510, orbitRadius: 175 },
    { id: 'c-generative-ai', slug: 'generative-ai', title: 'Generative AI', category: 'Application', x: 340, y: 400, orbitRadius: 170 },
    { id: 'c-inference', slug: 'inference', title: 'Inference Optimization', category: 'Mechanism', x: 370, y: 260, orbitRadius: 160 },
    { id: 'c-rag', slug: 'rag', title: 'RAG Systems', category: 'System', x: 740, y: 200, orbitRadius: 280 },
    { id: 'c-agents', slug: 'agents', title: 'Autonomous Agents', category: 'System', x: 780, y: 480, orbitRadius: 310 },
    { id: 'c-fine-tuning', slug: 'fine-tuning', title: 'Fine-Tuning & PEFT', category: 'Mechanism', x: 260, y: 500, orbitRadius: 280 },
    { id: 'c-ai-safety', slug: 'ai-safety', title: 'AI Safety & Guardrails', category: 'System', x: 230, y: 220, orbitRadius: 300 },
  ];

  // Interconnected pathways (graph edges)
  const pathways = [
    { from: 'artificial-intelligence', to: 'machine-learning' },
    { from: 'machine-learning', to: 'deep-learning' },
    { from: 'deep-learning', to: 'embeddings' },
    { from: 'deep-learning', to: 'foundation-models' },
    { from: 'foundation-models', to: 'llms' },
    { from: 'foundation-models', to: 'generative-ai' },
    { from: 'llms', to: 'inference' },
    { from: 'llms', to: 'rag' },
    { from: 'llms', to: 'agents' },
    { from: 'llms', to: 'fine-tuning' },
    { from: 'embeddings', to: 'rag' },
    { from: 'agents', to: 'ai-safety' },
    { from: 'llms', to: 'ai-safety' },
  ];

  const handleNodeClick = (slug: string) => {
    const found = concepts.find((c) => c.slug === slug);
    if (found) setSelectedNode(found);
  };

  const getCategoryColor = (category: Concept['category']) => {
    switch (category) {
      case 'Foundation':
        return '#06B6D4'; // Cyan
      case 'Mechanism':
        return '#38BDF8'; // Sky
      case 'Model':
        return '#3B82F6'; // Cobalt
      case 'System':
        return '#10B981'; // Emerald
      case 'Application':
        return '#F59E0B'; // Amber
      default:
        return '#94A3B8';
    }
  };

  const filteredNodes = nodeLayouts.filter(
    (n) => activeCategoryFilter === 'all' || n.category === activeCategoryFilter
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full h-[780px]">
      {/* Visual Canvas Area */}
      <div className="flex-1 rounded-2xl bg-surface border border-border relative overflow-hidden flex flex-col shadow-inner">
        {/* Controls Toolbar */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 bg-surface/90 backdrop-blur-md p-1.5 rounded-xl border border-border text-xs">
          <button
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-colors ${
              activeCategoryFilter === 'all'
                ? 'bg-primary text-primary-foreground font-bold'
                : 'text-muted hover:text-foreground'
            }`}
          >
            ALL
          </button>
          {['Foundation', 'Mechanism', 'Model', 'System', 'Application'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-colors ${
                activeCategoryFilter === cat
                  ? 'bg-primary text-primary-foreground font-bold'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Zoom & Reset Controls */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-surface/90 backdrop-blur-md p-1.5 rounded-xl border border-border">
          <button
            onClick={() => setZoomLevel((z) => Math.min(1.8, z + 0.15))}
            className="p-1.5 text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-muted px-1.5">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.15))}
            className="p-1.5 text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setZoomLevel(1);
              setPanOffset({ x: 0, y: 0 });
            }}
            className="p-1.5 text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated"
            aria-label="Reset zoom and position"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive SVG Orbit Canvas */}
        <div className="flex-1 w-full h-full overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center relative">
          <svg
            viewBox="0 0 1000 720"
            className="w-full h-full select-none"
            style={{
              transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            <defs>
              <linearGradient id="map-orbit-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.6" />
                <stop offset="100%" stop-color="#10B981" stop-opacity="0.6" />
              </linearGradient>
            </defs>

            {/* Background Orbit Rings */}
            <circle cx="500" cy="360" r="140" stroke="#1E293B" stroke-width="1.5" stroke-dasharray="4 6" fill="none" opacity="0.4" />
            <circle cx="500" cy="360" r="170" stroke="#1E293B" stroke-width="1.5" stroke-dasharray="6 8" fill="none" opacity="0.3" />
            <circle cx="500" cy="360" r="290" stroke="#1E293B" stroke-width="1.5" stroke-dasharray="8 12" fill="none" opacity="0.2" />

            {/* Connecting Pathways */}
            {pathways.map((path, idx) => {
              const fromNode = nodeLayouts.find((n) => n.slug === path.from);
              const toNode = nodeLayouts.find((n) => n.slug === path.to);
              if (!fromNode || !toNode) return null;

              const isHighlighted =
                selectedNode &&
                (selectedNode.slug === path.from || selectedNode.slug === path.to);

              return (
                <line
                  key={idx}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={isHighlighted ? '#06B6D4' : '#1E293B'}
                  strokeWidth={isHighlighted ? 2.5 : 1.2}
                  strokeDasharray={isHighlighted ? undefined : '4 4'}
                  opacity={isHighlighted ? 0.9 : 0.4}
                />
              );
            })}

            {/* Render Nodes */}
            {filteredNodes.map((node) => {
              const isSelected = selectedNode?.slug === node.slug;
              const color = getCategoryColor(node.category);

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => handleNodeClick(node.slug)}
                  className="cursor-pointer group"
                >
                  {/* Outer pulse when selected */}
                  {isSelected && (
                    <circle cx="0" cy="0" r="28" fill={color} fillOpacity="0.2" className="animate-pulse" />
                  )}

                  {/* Node Body */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isSelected ? 18 : 14}
                    fill="#0F172A"
                    stroke={color}
                    strokeWidth={isSelected ? 3 : 2}
                  />

                  {/* Inner Node Accent */}
                  <circle cx="0" cy="0" r={isSelected ? 6 : 4} fill={color} />

                  {/* Node Label */}
                  <text
                    x="0"
                    y={28}
                    textAnchor="middle"
                    fill={isSelected ? '#F8FAFC' : '#94A3B8'}
                    fontSize={isSelected ? "11" : "10"}
                    fontWeight={isSelected ? "700" : "500"}
                    fontFamily="system-ui, sans-serif"
                    className="pointer-events-none"
                  >
                    {node.title}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Node Inspector Drawer / Sidebar */}
      <div className="w-full lg:w-96 rounded-2xl bg-surface border border-border p-6 flex flex-col justify-between overflow-y-auto">
        {selectedNode ? (
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <AivoraBadge variant="primary" size="sm">
                  {selectedNode.category}
                </AivoraBadge>
                <span className="text-xs font-mono text-muted">
                  Difficulty: {selectedNode.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {selectedNode.title}
              </h3>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                {selectedNode.summary}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-primary-subtle border border-primary/20">
              <span className="text-[10px] font-mono text-primary font-bold uppercase block mb-1">
                Mental Model:
              </span>
              <p className="text-xs text-foreground leading-relaxed">
                {selectedNode.mentalModel}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-2">
                Connected Knowledge Pathways ({selectedNode.related.concepts?.length || 0}):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.related.concepts?.map((rel) => (
                  <button
                    key={rel}
                    onClick={() => handleNodeClick(rel)}
                    className="px-2.5 py-1 rounded bg-surface-elevated text-[11px] font-mono text-foreground hover:border-primary border border-border transition-colors"
                  >
                    {rel.replace(/-/g, ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1.5">
                Core Applications:
              </span>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {selectedNode.applications.slice(0, 3).map((app, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-accent">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-border flex items-center justify-between">
              <span className="text-[11px] font-mono text-muted">
                Audit Verified: {selectedNode.lastVerified}
              </span>
              <Link
                href={`/learn/concept/${selectedNode.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-mono font-bold hover:bg-primary-hover transition-colors"
              >
                Deep Dive →
              </Link>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center text-muted text-xs">
            <Sparkles className="w-8 h-8 text-primary mb-2 opacity-60" />
            <p className="font-mono">Select any node on the Knowledge Orbit canvas to inspect its mechanisms and connections.</p>
          </div>
        )}
      </div>
    </div>
  );
};
