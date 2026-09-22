'use client';

import React, { useState } from 'react';
import { Layers, Search, ExternalLink, GitBranch, BookOpen, AlertTriangle } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllFrameworks } from '@/lib/data';
import { Framework } from '@/types';

export default function FrameworksExplorerPage() {
  const frameworks = getAllFrameworks();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'ML',
    'Deep Learning',
    'LLM',
    'RAG',
    'Agents',
    'Inference',
    'Evaluation',
    'Deployment',
    'Orchestration',
  ];

  const filteredFrameworks = frameworks.filter((f) => {
    const matchesQuery =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.bestFor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <AivoraBadge variant="primary" size="sm">
          Infrastructure & Runtimes
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Framework Explorer
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Open-source runtimes, inference engines, orchestration libraries, and evaluation harnesses powering production AI systems.
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
            placeholder="Search frameworks by name, feature, or language..."
            className="w-full pl-9 pr-3 py-2 text-xs font-sans rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted outline-none focus:border-primary"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1 w-full md:w-auto overflow-x-auto">
          {categories.map((cat) => (
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

      {/* Frameworks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFrameworks.map((f) => (
          <div
            key={f.id}
            className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-primary/60 transition-all space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-info-subtle text-info border border-info/20 font-bold">
                  {f.category}
                </span>
                <div className="flex items-center gap-1">
                  {f.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated text-muted"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-bold text-foreground">{f.name}</h2>
              <p className="text-xs text-muted leading-relaxed mt-1">{f.description}</p>

              {/* Best For */}
              <div className="mt-4 p-3 rounded-lg bg-surface-elevated border border-border/60 text-xs">
                <span className="font-mono font-bold text-foreground block mb-0.5">Best For:</span>
                <span className="text-muted">{f.bestFor}</span>
              </div>

              {/* Key Features */}
              <div className="mt-3">
                <span className="font-mono font-bold text-foreground text-xs block mb-1">
                  Core Engineering Capabilities:
                </span>
                <ul className="space-y-1 text-xs text-muted">
                  {f.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trade-offs */}
              <div className="mt-3 p-3 rounded-lg bg-warning-subtle/30 border border-warning/20 text-xs">
                <span className="font-mono font-bold text-warning block mb-1">
                  Considerations & Trade-offs:
                </span>
                <ul className="space-y-1 text-foreground">
                  {f.tradeoffs.map((tr, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-warning shrink-0 mt-0.5" />
                      <span>{tr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
              <span className="text-muted">Verified: {f.lastVerified}</span>
              <div className="flex items-center gap-3">
                <a
                  href={f.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted hover:text-foreground"
                >
                  <GitBranch className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href={f.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-bold"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Docs
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
