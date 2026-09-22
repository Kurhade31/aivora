'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Concept } from '@/types';
import {
  HelpCircle,
  Cpu,
  Layers,
  Rocket,
  AlertTriangle,
  Code2,
  Check,
  AlertCircle,
  ShieldAlert
} from 'lucide-react';

interface ConceptDepthProps {
  concept: Concept;
}

export const ConceptDepth: React.FC<ConceptDepthProps> = ({ concept }) => {
  const [activeTab, setActiveTab] = useState<'foundation' | 'mechanism' | 'ecosystem' | 'application' | 'tradeoffs' | 'practice'>('foundation');

  const tabs = [
    { id: 'foundation', label: '01 Foundation', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: 'mechanism', label: '02 Mechanism', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'ecosystem', label: '03 Ecosystem', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'application', label: '04 Application', icon: <Rocket className="w-3.5 h-3.5" /> },
    { id: 'tradeoffs', label: '05 Trade-Offs', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
    { id: 'practice', label: '06 Practice', icon: <Code2 className="w-3.5 h-3.5" /> },
  ] as const;

  return (
    <div className="rounded-xl bg-surface border border-border overflow-hidden">
      {/* Layer Tabs Header */}
      <div className="flex overflow-x-auto border-b border-border bg-surface-elevated/50 p-1.5 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-surface text-primary font-bold shadow-sm border border-border/80'
                : 'text-muted hover:text-foreground hover:bg-surface/50'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Layer Content View */}
      <div className="p-6">
        {activeTab === 'foundation' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-2">
                First-Principles Definition
              </h4>
              <p className="text-foreground text-sm leading-relaxed">
                {concept.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-primary-subtle border border-primary/20">
              <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-1.5">
                Mental Model
              </h4>
              <p className="text-foreground text-sm leading-relaxed">
                {concept.mentalModel}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">
                Why It Exists
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {concept.whyItExists}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'mechanism' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold text-info uppercase tracking-wider mb-2">
                Algorithmic & Mathematical Mechanics
              </h4>
              <p className="text-foreground text-sm leading-relaxed">
                {concept.howItWorks}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">
                Architecture Pipeline
              </h4>
              <p className="text-sm font-mono text-foreground bg-surface-elevated p-3.5 rounded-lg border border-border">
                {concept.architectureDetails}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">
                Execution Flow / Code Representation
              </h4>
              <pre className="p-4 rounded-xl bg-background border border-border text-xs font-mono text-foreground overflow-x-auto">
                <code>{concept.codeOrFlowExample}</code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'ecosystem' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold text-secondary uppercase tracking-wider mb-3">
                Connected Knowledge Nodes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {concept.related.concepts.map((rel) => (
                  <Link
                    key={rel}
                    href={`/learn/concept/${rel}`}
                    className="p-3 rounded-lg bg-surface-elevated border border-border/70 hover:border-primary transition-colors block"
                  >
                    <span className="text-xs font-semibold text-foreground hover:text-primary">
                      {rel.replace(/-/g, ' ').toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono text-muted block mt-0.5">
                      Related Concept →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {concept.related.models && concept.related.models.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold text-muted uppercase tracking-wider mb-2">
                  Representative Models
                </h4>
                <div className="flex flex-wrap gap-2">
                  {concept.related.models.map((mod) => (
                    <Link
                      key={mod}
                      href={`/ecosystem/models?highlight=${mod}`}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface-elevated border border-border hover:border-secondary transition-colors"
                    >
                      {mod}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'application' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-3">
                Real-World Applications
              </h4>
              <ul className="space-y-2">
                {concept.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Rocket className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-accent-subtle/50 border border-accent/20">
                <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-2">
                  When to Use
                </h4>
                <ul className="space-y-1.5 text-xs text-foreground">
                  {concept.whenToUse.map((w, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-danger-subtle/40 border border-danger/20">
                <h4 className="text-xs font-mono font-bold text-danger uppercase tracking-wider mb-2">
                  When NOT to Use
                </h4>
                <ul className="space-y-1.5 text-xs text-foreground">
                  {concept.whenNotToUse.map((w, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-danger shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tradeoffs' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold text-warning uppercase tracking-wider mb-3">
                Known Technical Limitations
              </h4>
              <ul className="space-y-2 text-sm text-foreground">
                {concept.limitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-danger uppercase tracking-wider mb-3">
                Security & Vulnerability Considerations
              </h4>
              <ul className="space-y-2 text-sm text-foreground">
                {concept.securityConsiderations.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-danger shrink-0 mt-0.5" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-2">
                Common Implementation Mistakes
              </h4>
              <ul className="space-y-2 text-sm text-foreground">
                {concept.commonMistakes.map((mis, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-xs font-mono text-danger font-bold">×</span>
                    <span>{mis}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-border">
              <h4 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider mb-2">
                Recommended Hands-on Projects
              </h4>
              <p className="text-xs text-muted mb-3">
                Turn this conceptual foundation into real executable code inside the Aivora Project Lab.
              </p>
              <Link
                href="/build"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-primary-foreground font-mono text-xs font-bold hover:bg-primary-hover transition-colors"
              >
                Open Project Lab →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
