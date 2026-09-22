import React from 'react';
import { Metadata } from 'next';
import { Terminal, Shield, ArrowRight, Layers, Workflow, CheckCircle2 } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllArchitectures } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Architecture Library',
  description:
    'Verified architectural blueprints for production LLM systems: data flows, execution flows, component layers, and security considerations.',
};

export default function ArchitecturesPage() {
  const architectures = getAllArchitectures();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div>
        <AivoraBadge variant="primary" size="sm">
          System Blueprints
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Architecture Library
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Production blueprints covering single-turn LLM pipelines, hybrid RAG topologies, autonomous ReAct agents, and offline local assistants.
        </p>
      </div>

      {/* Architecture Blueprints List */}
      <div className="space-y-10">
        {architectures.map((arch) => (
          <div
            key={arch.id}
            id={arch.slug}
            className="p-6 sm:p-8 rounded-2xl bg-surface border border-border space-y-6 shadow-md"
          >
            <div className="border-b border-border pb-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20 font-bold">
                  Difficulty: {arch.difficulty}
                </span>
                <span className="text-xs font-mono text-muted">Verified: {arch.lastVerified}</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">{arch.title}</h2>
              <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">{arch.summary}</p>
            </div>

            {/* Components List */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted block mb-2">
                Core System Components:
              </span>
              <div className="flex flex-wrap gap-2">
                {arch.components.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-xs font-mono font-medium text-foreground"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Flow Pipeline */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-info flex items-center gap-1.5">
                <Workflow className="w-4 h-4" /> End-to-End Data Flow:
              </span>
              <div className="space-y-2">
                {arch.dataFlow.map((flow) => (
                  <div
                    key={flow.step}
                    className="p-3.5 rounded-xl bg-surface-elevated border border-border/60 flex items-start gap-3"
                  >
                    <span className="h-6 w-6 rounded-full bg-primary-subtle text-primary font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {flow.step}
                    </span>
                    <div className="text-xs">
                      <span className="font-bold text-foreground block mb-0.5">{flow.title}</span>
                      <p className="text-muted leading-relaxed">{flow.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Sequence Flow */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                <Terminal className="w-4 h-4" /> Execution Actors & Operations:
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-surface-elevated/40 text-muted">
                      <th className="py-2.5 px-3 font-semibold">Step</th>
                      <th className="py-2.5 px-3 font-semibold">Actor / Component</th>
                      <th className="py-2.5 px-3 font-semibold">Action Performed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {arch.executionFlow.map((exec) => (
                      <tr key={exec.step} className="hover:bg-surface-elevated/20">
                        <td className="py-2 px-3 text-muted">0{exec.step}</td>
                        <td className="py-2 px-3 font-bold text-primary">{exec.actor}</td>
                        <td className="py-2 px-3 text-foreground font-sans">{exec.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Security Considerations */}
            <div className="p-4 rounded-xl bg-danger-subtle/30 border border-danger/20 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-danger flex items-center gap-1.5">
                <Shield className="w-4 h-4" /> Architectural Security Considerations:
              </span>
              <ul className="space-y-1 text-xs text-foreground">
                {arch.securityConsiderations.map((sec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
