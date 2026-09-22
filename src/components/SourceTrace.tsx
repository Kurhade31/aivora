import React from 'react';
import { ExternalLink, CheckCircle2, FileText, Globe, Code2, BookOpen } from 'lucide-react';
import { SourceReference } from '@/types';

interface SourceTraceProps {
  sources: SourceReference[];
  lastVerified: string;
}

export const SourceTrace: React.FC<SourceTraceProps> = ({ sources, lastVerified }) => {
  const getSourceBadge = (type?: SourceReference['type']) => {
    switch (type) {
      case 'paper':
        return { label: 'RESEARCH PAPER', icon: <FileText className="w-3 h-3 text-secondary" />, color: 'border-secondary/30 text-secondary bg-secondary/10' };
      case 'official_doc':
        return { label: 'OFFICIAL DOCS', icon: <BookOpen className="w-3 h-3 text-primary" />, color: 'border-primary/30 text-primary bg-primary/10' };
      case 'repo':
        return { label: 'GITHUB REPO', icon: <Code2 className="w-3 h-3 text-accent" />, color: 'border-accent/30 text-accent bg-accent/10' };
      default:
        return { label: 'VERIFIED SOURCE', icon: <Globe className="w-3 h-3 text-muted" />, color: 'border-border text-muted bg-surface-elevated' };
    }
  };

  return (
    <div className="p-4 rounded-xl bg-surface border border-border/80">
      <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span>SOURCE-FIRST AUDIT TRACE</span>
        </div>
        <span className="text-[11px] font-mono text-muted">
          Last verified: {lastVerified}
        </span>
      </div>

      <div className="space-y-2">
        {sources.map((src, idx) => {
          const badge = getSourceBadge(src.type);
          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-surface-elevated/40 border border-border/40 gap-2"
            >
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded border ${badge.color}`}>
                  {badge.icon}
                  {badge.label}
                </span>
                <span className="text-xs font-medium text-foreground">{src.title}</span>
              </div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline font-mono inline-flex items-center gap-1 shrink-0"
              >
                Inspect Source <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
