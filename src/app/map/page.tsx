import React from 'react';
import { Metadata } from 'next';
import { AiKnowledgeMap } from '@/components/AiKnowledgeMap';
import { AivoraBadge } from '@/components/AivoraBadge';

export const metadata: Metadata = {
  title: 'Interactive AI Knowledge Map',
  description:
    'Explore the interconnected AI ecosystem: zoom, pan, and trace relationships between machine learning foundations, models, frameworks, and agents.',
};

export default function MapPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <AivoraBadge variant="primary" size="sm">
          Signature Feature
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Knowledge Orbit & Ecosystem Map
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Navigate artificial intelligence as a connected, living topology. Inspect how statistical foundations flow into deep learning, foundation models, inference optimization, RAG, and autonomous agent loops.
        </p>
      </div>

      {/* Interactive Map Component */}
      <AiKnowledgeMap />
    </div>
  );
}
