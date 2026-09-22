'use client';

import React, { useState } from 'react';
import { Search, BookOpen, ExternalLink } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllGlossaryTerms } from '@/lib/data';

export default function GlossaryPage() {
  const terms = getAllGlossaryTerms();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredTerms = terms.filter((t) => {
    const matchesQuery =
      t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.technicalExplanation.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDiff = selectedDifficulty === 'all' || t.difficulty === selectedDifficulty;
    return matchesQuery && matchesDiff;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <AivoraBadge variant="secondary" size="sm">
          Reference Taxonomy
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Technical Glossary
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Structured terminology with rigorous mathematical and algorithmic definitions, concrete examples, and academic literature citations.
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
            placeholder="Search AI terms, formulas, mechanisms..."
            className="w-full pl-9 pr-3 py-2 text-xs font-sans rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted outline-none focus:border-primary"
          />
        </div>

        {/* Difficulty Tabs */}
        <div className="flex flex-wrap gap-1 w-full md:w-auto">
          {['all', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase transition-colors ${
                selectedDifficulty === diff
                  ? 'bg-primary text-primary-foreground font-bold'
                  : 'bg-surface-elevated text-muted hover:text-foreground border border-border/50'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Glossary Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map((g) => (
          <div
            key={g.slug}
            id={g.slug}
            className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-primary/60 transition-all space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20 font-bold">
                  {g.category}
                </span>
                <span className="text-xs font-mono text-muted">{g.difficulty}</span>
              </div>

              <h2 className="text-xl font-bold text-foreground">{g.term}</h2>
              <p className="text-xs text-foreground font-medium mt-1 leading-relaxed">
                {g.shortDefinition}
              </p>

              <div className="mt-3 p-3 rounded-lg bg-surface-elevated border border-border/60 text-xs">
                <span className="font-mono font-bold text-muted uppercase block mb-1">
                  Technical Mechanism:
                </span>
                <p className="text-muted leading-relaxed">{g.technicalExplanation}</p>
              </div>

              <div className="mt-3 p-3 rounded-lg bg-primary-subtle/50 border border-primary/20 text-xs">
                <span className="font-mono font-bold text-primary block mb-0.5">Example:</span>
                <p className="text-foreground leading-relaxed">{g.example}</p>
              </div>

              {/* Related Terms */}
              <div className="mt-3">
                <span className="text-[11px] font-mono text-muted uppercase block mb-1">
                  Related Terms:
                </span>
                <div className="flex flex-wrap gap-1">
                  {g.relatedTerms.map((rt) => (
                    <button
                      key={rt}
                      onClick={() => setSearchQuery(rt)}
                      className="px-2 py-0.5 rounded bg-surface-elevated border border-border text-[10px] font-mono text-muted hover:text-foreground"
                    >
                      {rt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border text-[11px] font-mono text-muted">
              <span>Source: {g.sources}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
