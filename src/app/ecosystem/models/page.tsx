'use client';

import React, { useState } from 'react';
import { Cpu, Search, ExternalLink, AlertTriangle, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllModels } from '@/lib/data';
import { Model } from '@/types';
import { SourceTrace } from '@/components/SourceTrace';

export default function ModelsExplorerPage() {
  const models = getAllModels();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDeployment, setSelectedDeployment] = useState('all');
  const [activeModel, setActiveModel] = useState<Model | null>(models[0] || null);

  const filteredModels = models.filter((m) => {
    const matchesQuery =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.capabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory;
    const matchesDeployment = selectedDeployment === 'all' || m.deployment === selectedDeployment;

    return matchesQuery && matchesCategory && matchesDeployment;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <AivoraBadge variant="secondary" size="sm">
          Ecosystem Explorer
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Model Explorer
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Detailed technical specifications, context windows, architectures, verified licenses, and real-world limitations across frontier and open-weights foundation models.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-surface border border-border flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by model, provider, capability..."
            className="w-full pl-9 pr-3 py-2 text-xs font-sans rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted outline-none focus:border-primary"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {['all', 'frontier', 'open-weights', 'reasoning', 'vision', 'audio'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase transition-colors ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground font-bold'
                  : 'bg-surface-elevated text-muted hover:text-foreground border border-border/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: List + Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Model Cards List */}
        <div className="lg:col-span-5 space-y-3">
          {filteredModels.map((m) => {
            const isSelected = activeModel?.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setActiveModel(m)}
                className={`p-4 rounded-xl bg-surface border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-primary ring-1 ring-primary bg-surface-elevated'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-muted">{m.provider}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated border border-border uppercase">
                    {m.category}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-foreground">{m.name}</h3>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-muted border-t border-border/50 pt-2">
                  <span>Context: {m.contextWindow}</span>
                  <span className="text-primary font-semibold flex items-center gap-1">
                    Details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Model Full Detail */}
        <div className="lg:col-span-7">
          {activeModel ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border space-y-6 shadow-xl sticky top-24">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-5 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-primary font-bold uppercase">
                      {activeModel.provider}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated border border-border text-muted">
                      {activeModel.license}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{activeModel.name}</h2>
                </div>
                <div className="text-left sm:text-right font-mono text-xs text-muted">
                  <span>Released: {activeModel.releaseDate}</span>
                </div>
              </div>

              {/* Architecture & Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-surface-elevated border border-border/70">
                  <span className="text-muted block mb-0.5">Architecture Type</span>
                  <span className="text-foreground font-semibold">{activeModel.architectureType}</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-elevated border border-border/70">
                  <span className="text-muted block mb-0.5">Parameter Scale</span>
                  <span className="text-foreground font-semibold">{activeModel.parameterCount || 'Not specified'}</span>
                </div>
              </div>

              {/* Modalities & Capabilities */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted mb-2">
                  Modalities Supported
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModel.modalities.map((mod) => (
                    <span
                      key={mod}
                      className="px-2.5 py-1 rounded bg-secondary-subtle text-secondary border border-secondary/20 text-xs font-mono font-semibold"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-2">
                  Verified Capabilities
                </h4>
                <ul className="space-y-1.5 text-xs text-foreground">
                  {activeModel.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Known Limitations */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-warning mb-2">
                  Known Engineering Limitations
                </h4>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {activeModel.knownLimitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-warning shrink-0 mt-0.5" />
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Source-First Audit Trace */}
              <SourceTrace
                sources={activeModel.officialSources}
                lastVerified={activeModel.lastVerified}
              />
            </div>
          ) : (
            <div className="p-12 text-center text-muted font-mono text-xs">
              Select a model to view full technical specification.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
