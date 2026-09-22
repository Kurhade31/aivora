'use client';

import React, { useState } from 'react';
import { Wrench, Search, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllTools } from '@/lib/data';
import { Tool, ToolJob } from '@/types';
import { SourceTrace } from '@/components/SourceTrace';

export default function ToolsExplorerPage() {
  const tools = getAllTools();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<string>('all');

  const jobs: ToolJob[] = [
    'Think',
    'Research',
    'Write',
    'Code',
    'Design',
    'Create',
    'Analyze',
    'Automate',
    'Learn',
    'Build',
  ];

  const filteredTools = tools.filter((t) => {
    const matchesQuery =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.problemSolved.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesJob = selectedJob === 'all' || t.job === selectedJob;

    return matchesQuery && matchesJob;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <AivoraBadge variant="accent" size="sm">
          Jobs-to-be-Done Taxonomy
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Tool Explorer
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Tools categorized strictly by the job they perform rather than marketing popularity. Detailed breakdowns of mechanisms, required environments, and architectural trade-offs.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-surface border border-border flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools by job, problem, or audience..."
            className="w-full pl-9 pr-3 py-2 text-xs font-sans rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted outline-none focus:border-primary"
          />
        </div>

        {/* Job Tabs */}
        <div className="flex flex-wrap gap-1 w-full md:w-auto overflow-x-auto">
          <button
            onClick={() => setSelectedJob('all')}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase transition-colors ${
              selectedJob === 'all'
                ? 'bg-primary text-primary-foreground font-bold'
                : 'bg-surface-elevated text-muted hover:text-foreground border border-border/50'
            }`}
          >
            ALL JOBS
          </button>
          {jobs.map((job) => (
            <button
              key={job}
              onClick={() => setSelectedJob(job)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase transition-colors ${
                selectedJob === job
                  ? 'bg-primary text-primary-foreground font-bold'
                  : 'bg-surface-elevated text-muted hover:text-foreground border border-border/50'
              }`}
            >
              {job}
            </button>
          ))}
        </div>
      </div>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTools.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-primary/60 transition-all space-y-5"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20 font-bold">
                  Job: {t.job}
                </span>
                <span className="text-xs font-mono text-muted">{t.pricingModel}</span>
              </div>
              <h2 className="text-xl font-bold text-foreground">{t.name}</h2>
              <p className="text-xs text-muted leading-relaxed mt-1">
                {t.problemSolved}
              </p>

              {/* Target Audience */}
              <div className="mt-4 p-3 rounded-lg bg-surface-elevated border border-border/60 text-xs">
                <span className="font-mono font-bold text-foreground block mb-0.5">Who is it for?</span>
                <span className="text-muted">{t.targetAudience}</span>
              </div>

              {/* How it Works */}
              <div className="mt-3 text-xs leading-relaxed">
                <span className="font-mono font-bold text-foreground block mb-0.5">How it works:</span>
                <p className="text-muted">{t.howItWorks}</p>
              </div>

              {/* Requirements */}
              <div className="mt-3">
                <span className="font-mono font-bold text-foreground text-xs block mb-1">
                  System Requirements:
                </span>
                <ul className="space-y-1 text-xs text-muted">
                  {t.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trade-offs */}
              <div className="mt-3 p-3 rounded-lg bg-warning-subtle/30 border border-warning/20">
                <span className="font-mono font-bold text-warning text-xs block mb-1">
                  Architectural Trade-offs:
                </span>
                <ul className="space-y-1 text-xs text-foreground">
                  {t.tradeoffs.map((tr, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-warning shrink-0 mt-0.5" />
                      <span>{tr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-between text-xs font-mono">
              <span className="text-muted">Verified: {t.lastVerified}</span>
              <a
                href={t.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-bold"
              >
                Official Site <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
