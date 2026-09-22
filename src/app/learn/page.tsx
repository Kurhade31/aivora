import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, Compass, ArrowRight, CheckCircle2, Bookmark, Award } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllRoadmaps, getAllConcepts } from '@/lib/data';
import { KnowledgeNode } from '@/components/KnowledgeNode';

export const metadata: Metadata = {
  title: 'AI Learning Engine & Paths',
  description:
    'Structured AI curriculum progressing from Zero to Research level. Interactive learning tracks covering foundations, LLM engineering, RAG, and autonomous agents.',
};

export default function LearnPage() {
  const roadmaps = getAllRoadmaps();
  const concepts = getAllConcepts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div>
        <AivoraBadge variant="primary" size="sm">
          Aivora Learning Engine
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          Structured AI Learning Curriculum
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          From first principles to production systems. Each track is designed with concrete conceptual checkpoints, hands-on architectural code, and verified source audit trails.
        </p>
      </div>

      {/* Roadmaps Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <h2 className="text-xl font-bold text-foreground">
            Curated Learning Paths ({roadmaps.length})
          </h2>
          <span className="text-xs font-mono text-muted">
            Progress tracked locally in browser
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmaps.map((r) => (
            <div
              key={r.id}
              className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-primary/60 transition-all group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20 font-bold">
                    {r.level}
                  </span>
                  <span className="text-xs font-mono text-muted">~{r.estimatedHours} Hours</span>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">{r.tagline}</p>

                <div className="mt-4 pt-3 border-t border-border/60 space-y-2">
                  <span className="text-[10px] font-mono text-muted uppercase block">
                    Curriculum Modules:
                  </span>
                  {r.modules.map((m) => (
                    <div key={m.id} className="text-xs text-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="line-clamp-1">{m.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/learn/${r.slug}`}
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-surface-elevated text-xs font-mono font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Launch Track →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Concepts Index */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Core Concept Repositories ({concepts.length})
            </h2>
            <p className="text-xs text-muted mt-1">
              Every concept is explored through Aivora's 6 Knowledge Layers: Foundation, Mechanism, Ecosystem, Application, Trade-Offs, and Practice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {concepts.map((c) => (
            <KnowledgeNode key={c.id} concept={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
