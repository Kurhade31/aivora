import React from 'react';
import { Metadata } from 'next';
import { ShieldAlert, AlertTriangle, CheckCircle2, FileText, Lock, ShieldCheck, ExternalLink } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllSafetyTopics } from '@/lib/data';
import { SourceTrace } from '@/components/SourceTrace';

export const metadata: Metadata = {
  title: 'AI Safety Center',
  description:
    'Vulnerability mitigations, defensive patterns, and security guardrails for production LLM systems and autonomous agents.',
};

export default function SafetyCenterPage() {
  const topics = getAllSafetyTopics();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div>
        <AivoraBadge variant="danger" size="sm">
          Defensive AI Systems
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Safety & Threat Mitigation Center
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Operational defense against adversarial attacks, prompt injection, data exfiltration, and autonomous agency failures with concrete code mitigations.
        </p>
      </div>

      {/* Safety Topics List */}
      <div className="space-y-8">
        {topics.map((topic) => (
          <div
            key={topic.id}
            id={topic.slug}
            className="p-6 sm:p-8 rounded-2xl bg-surface border border-border space-y-6 shadow-md"
          >
            <div className="border-b border-border pb-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded font-bold ${
                      topic.threatLevel === 'Critical'
                        ? 'bg-danger-subtle text-danger border border-danger/20'
                        : 'bg-warning-subtle text-warning border border-warning/20'
                    }`}
                  >
                    Threat Level: {topic.threatLevel}
                  </span>
                  <span className="text-xs font-mono text-muted">{topic.category}</span>
                </div>
                <span className="text-xs font-mono text-muted">Audited: {topic.lastVerified}</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">{topic.title}</h2>
              <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                {topic.description}
              </p>
            </div>

            {/* Real World Scenario & Mechanism */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-elevated border border-border/70 text-xs">
                <span className="font-mono font-bold text-danger flex items-center gap-1.5 mb-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Real-World Attack Scenario:
                </span>
                <p className="text-muted leading-relaxed">{topic.realWorldScenario}</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-elevated border border-border/70 text-xs">
                <span className="font-mono font-bold text-info flex items-center gap-1.5 mb-1.5">
                  <Lock className="w-3.5 h-3.5" /> Vulnerability Mechanism:
                </span>
                <p className="text-muted leading-relaxed">{topic.vulnerabilityMechanism}</p>
              </div>
            </div>

            {/* Practical Mitigations */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Practical Defense Patterns:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topic.practicalMitigations.map((mit, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-accent-subtle/30 border border-accent/20 text-xs text-foreground flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{mit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example (Vulnerable vs Hardened) */}
            {topic.codeExample && (
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
                  Implementation Comparison:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-danger-subtle/20 border border-danger/30 space-y-2">
                    <span className="text-xs font-mono font-bold text-danger block">
                      ❌ Vulnerable Pattern
                    </span>
                    <pre className="p-3 rounded bg-background text-[11px] font-mono text-danger-subtle overflow-x-auto text-foreground">
                      <code>{topic.codeExample.bad}</code>
                    </pre>
                  </div>

                  <div className="p-4 rounded-xl bg-accent-subtle/20 border border-accent/30 space-y-2">
                    <span className="text-xs font-mono font-bold text-accent block">
                      ✓ Hardened Pattern
                    </span>
                    <pre className="p-3 rounded bg-background text-[11px] font-mono text-accent-subtle overflow-x-auto text-foreground">
                      <code>{topic.codeExample.good}</code>
                    </pre>
                  </div>
                </div>
                <p className="text-xs text-muted font-mono">{topic.codeExample.explanation}</p>
              </div>
            )}

            {/* Sources */}
            <SourceTrace sources={topic.sources} lastVerified={topic.lastVerified} />
          </div>
        ))}
      </div>
    </div>
  );
}
