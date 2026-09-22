'use client';

import React, { useState } from 'react';
import { Compass, Terminal, Code2, AlertTriangle, CheckCircle2, Copy, Check } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllProjects } from '@/lib/data';
import { Project } from '@/types';

export default function BuildProjectsPage() {
  const projects = getAllProjects();
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyCode = (snippet: string, stepIndex: number) => {
    navigator.clipboard.writeText(snippet);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <AivoraBadge variant="primary" size="sm">
          Hands-On Engineering
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          AI Project Lab
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Production-grade system implementations with complete step-by-step code, architectural pipelines, common mistakes, and extension paths.
        </p>
      </div>

      {/* Project Selector Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-border">
        {projects.map((p) => {
          const isSelected = activeProject.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProject(p)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-surface text-muted border border-border hover:text-foreground'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{p.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Project Blueprint */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border space-y-8 shadow-xl">
        {/* Project Header */}
        <div className="border-b border-border pb-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AivoraBadge variant="secondary" size="md">
                Difficulty: {activeProject.difficulty}
              </AivoraBadge>
              <span className="text-xs font-mono text-accent font-semibold px-2 py-0.5 rounded bg-surface-elevated border border-border">
                {activeProject.apiReq}
              </span>
            </div>
            <span className="text-xs font-mono text-muted">
              Hardware: {activeProject.hardwareReq}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {activeProject.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-surface-elevated border border-border/70 text-xs">
              <span className="font-mono font-bold text-danger block mb-1">The Problem:</span>
              <p className="text-muted leading-relaxed">{activeProject.problem}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-primary-subtle border border-primary/20 text-xs">
              <span className="font-mono font-bold text-primary block mb-1">Project Goal:</span>
              <p className="text-foreground leading-relaxed">{activeProject.goal}</p>
            </div>
          </div>
        </div>

        {/* System Architecture Pipeline */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
            System Pipeline & Architecture:
          </h3>
          <div className="p-4 rounded-xl bg-surface-elevated border border-border font-mono text-xs text-foreground overflow-x-auto">
            {activeProject.architecture}
          </div>
        </div>

        {/* Step-by-Step Execution Guide */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-foreground">
            Implementation Steps ({activeProject.steps.length})
          </h3>

          <div className="space-y-6">
            {activeProject.steps.map((step, idx) => (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-surface-elevated/40 border border-border space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-primary">
                    Step {step.step}: {step.title}
                  </span>
                  {step.codeSnippet && (
                    <button
                      onClick={() => copyCode(step.codeSnippet!, idx)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-muted hover:text-foreground px-2 py-1 rounded bg-surface border border-border"
                    >
                      {copiedStep === idx ? (
                        <>
                          <Check className="w-3 h-3 text-accent" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> Copy Code
                        </>
                      )}
                    </button>
                  )}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.instructions}
                </p>

                {step.codeSnippet && (
                  <pre className="p-4 rounded-xl bg-background border border-border text-xs font-mono text-foreground overflow-x-auto">
                    <code>{step.codeSnippet}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expected Result & Common Mistakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
          <div className="p-4 rounded-xl bg-accent-subtle/30 border border-accent/20 space-y-2">
            <h4 className="font-mono font-bold text-accent text-xs uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Expected Outcome
            </h4>
            <p className="text-xs text-foreground leading-relaxed">
              {activeProject.expectedResult}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-danger-subtle/30 border border-danger/20 space-y-2">
            <h4 className="font-mono font-bold text-danger text-xs uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Common Implementation Mistakes
            </h4>
            <ul className="space-y-1 text-xs text-foreground">
              {activeProject.commonMistakes.map((mis, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-danger font-bold">•</span>
                  <span>{mis}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
