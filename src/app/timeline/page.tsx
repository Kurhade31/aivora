import React from 'react';
import { Metadata } from 'next';
import { History, Calendar, ExternalLink, Bookmark } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllTimelineMilestones } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Historical Timeline (1950-Now)',
  description:
    'A verified visual history of foundational artificial intelligence milestones: from the Turing test to transformers and test-time reasoning models.',
};

export default function TimelinePage() {
  const milestones = getAllTimelineMilestones();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div>
        <AivoraBadge variant="primary" size="sm">
          Historical Continuity
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Historical Timeline (1950 – Present)
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Artificial intelligence did not begin in 2022. Trace seven decades of foundational breakthroughs, architectural shifts, and experimental validations from first principles.
        </p>
      </div>

      {/* Timeline Spine */}
      <div className="relative border-l-2 border-border/80 ml-4 sm:ml-32 space-y-10">
        {milestones.map((m) => (
          <div key={m.id} className="relative pl-6 sm:pl-8 group">
            {/* Timeline node marker on the spine */}
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors" />

            {/* Year pill on left for wide screens */}
            <div className="hidden sm:block absolute -left-28 top-1 text-right font-mono font-bold text-sm text-primary">
              {m.year}
            </div>

            {/* Content card */}
            <div className="p-6 rounded-2xl bg-surface border border-border space-y-3 hover:border-primary/50 transition-colors shadow-sm">
              <div className="flex items-center justify-between">
                <span className="sm:hidden font-mono font-bold text-xs text-primary">
                  {m.year}
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-surface-elevated text-muted border border-border">
                  {m.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-foreground">{m.title}</h2>

              <p className="text-xs font-semibold text-primary/90 font-mono">
                Significance: {m.significance}
              </p>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {m.description}
              </p>

              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted">
                <span>Verified Source: {m.sources}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
