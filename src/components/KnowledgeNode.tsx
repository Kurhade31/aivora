'use client';

import React from 'react';
import Link from 'next/link';
import { Concept } from '@/types';
import { AivoraBadge } from './AivoraBadge';

interface KnowledgeNodeProps {
  concept: Concept;
  isSelected?: boolean;
  onClick?: () => void;
}

export const KnowledgeNode: React.FC<KnowledgeNodeProps> = ({
  concept,
  isSelected = false,
  onClick,
}) => {
  const categoryGlow = {
    Foundation: 'hover:border-primary border-primary/30 shadow-glow',
    Mechanism: 'hover:border-info border-info/30',
    Model: 'hover:border-secondary border-secondary/30',
    System: 'hover:border-accent border-accent/30 shadow-glow-accent',
    Application: 'hover:border-warning border-warning/30',
  }[concept.category] || 'hover:border-border border-border';

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl bg-surface border transition-all cursor-pointer relative group flex flex-col justify-between ${
        isSelected ? 'ring-2 ring-primary border-primary bg-surface-elevated' : categoryGlow
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <AivoraBadge variant="outline" size="sm">
            {concept.category}
          </AivoraBadge>
          <span className="text-[10px] font-mono text-muted px-1.5 py-0.5 rounded bg-surface-elevated">
            {concept.difficulty}
          </span>
        </div>
        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
          {concept.title}
        </h3>
        <p className="text-xs text-muted line-clamp-2 mt-1.5 leading-relaxed">
          {concept.summary}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] text-muted font-mono">
        <span>{concept.related.concepts?.length || 0} links</span>
        <Link
          href={`/learn/concept/${concept.slug}`}
          className="text-primary hover:underline font-semibold"
          onClick={(e) => e.stopPropagation()}
        >
          Explore →
        </Link>
      </div>
    </div>
  );
};
