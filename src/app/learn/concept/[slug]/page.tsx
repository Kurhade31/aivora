import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllConcepts, getConceptBySlug } from '@/lib/data';
import { ConceptDepth } from '@/components/ConceptDepth';
import { SourceTrace } from '@/components/SourceTrace';

interface ConceptPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const concepts = getAllConcepts();
  return concepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);
  if (!concept) return { title: 'Concept Not Found' };
  return {
    title: `${concept.title} — AI Knowledge & Architecture`,
    description: concept.summary,
  };
}

export default async function ConceptDetailPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);
  if (!concept) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Navigation breadcrumbs */}
      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Knowledge Curriculum
      </Link>

      {/* Header Banner */}
      <div className="p-8 rounded-2xl bg-surface border border-border shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AivoraBadge variant="primary" size="md">
              {concept.category}
            </AivoraBadge>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-elevated text-muted border border-border">
              Level: {concept.difficulty}
            </span>
          </div>
          <span className="text-xs font-mono text-accent flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Verified Technical Specification
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
          {concept.title}
        </h1>
        <p className="text-sm sm:text-base text-muted leading-relaxed max-w-3xl">
          {concept.summary}
        </p>
      </div>

      {/* 6 Knowledge Layers Depth Inspector (Sections 1-11) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">
            Aivora 6-Layer Knowledge Architecture
          </h2>
          <span className="text-xs font-mono text-muted">
            Foundation • Mechanism • Ecosystem • Application • Trade-Offs • Practice
          </span>
        </div>

        <ConceptDepth concept={concept} />
      </div>

      {/* Source-First Audit Trail (Section 12 & 34) */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">
          Academic Papers & Verified Sources
        </h2>
        <SourceTrace sources={concept.sources} lastVerified={concept.lastVerified} />
      </div>
    </div>
  );
}
