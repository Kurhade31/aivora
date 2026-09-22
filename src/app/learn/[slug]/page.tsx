import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllRoadmaps, getRoadmapBySlug, getAllConcepts } from '@/lib/data';
import { ProgressRing } from '@/components/ProgressRing';

interface RoadmapPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const roadmaps = getAllRoadmaps();
  return roadmaps.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: RoadmapPageProps): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);
  if (!roadmap) return { title: 'Roadmap Not Found' };
  return {
    title: `${roadmap.title} — AI Learning Path`,
    description: roadmap.description,
  };
}

export default async function RoadmapDetailPage({ params }: RoadmapPageProps) {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);
  if (!roadmap) notFound();

  const allConcepts = getAllConcepts();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Link */}
      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to All Learning Paths
      </Link>

      {/* Path Header */}
      <div className="p-8 rounded-2xl bg-surface border border-border shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <AivoraBadge variant="primary" size="md">
            Level: {roadmap.level}
          </AivoraBadge>
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted">
            <Clock className="w-3.5 h-3.5" />
            <span>Estimated Duration: {roadmap.estimatedHours} Hours</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
          {roadmap.title}
        </h1>
        <p className="text-sm font-semibold text-primary font-sans">{roadmap.tagline}</p>
        <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-3xl">
          {roadmap.description}
        </p>
      </div>

      {/* Module Sequence */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-foreground">
          Curriculum Sequence ({roadmap.modules.length} Modules)
        </h2>

        <div className="space-y-4">
          {roadmap.modules.map((module, idx) => (
            <div
              key={module.id}
              className="p-6 rounded-2xl bg-surface border border-border space-y-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-primary font-bold">
                  Module 0{idx + 1}
                </span>
                <span className="text-[11px] font-mono text-muted">
                  {module.conceptSlugs.length} Core Topics
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">{module.title}</h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">{module.description}</p>
              </div>

              {/* Concepts within module */}
              <div className="pt-3 border-t border-border/60">
                <span className="text-[11px] font-mono text-muted uppercase block mb-2">
                  Knowledge Deep Dives:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {module.conceptSlugs.map((cSlug) => {
                    const concept = allConcepts.find((c) => c.slug === cSlug);
                    if (!concept) return null;
                    return (
                      <Link
                        key={cSlug}
                        href={`/learn/concept/${cSlug}`}
                        className="p-3 rounded-xl bg-surface-elevated border border-border/70 hover:border-primary transition-all flex items-center justify-between group"
                      >
                        <div>
                          <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors block">
                            {concept.title}
                          </span>
                          <span className="text-[10px] font-mono text-muted">
                            {concept.category} • {concept.difficulty}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
