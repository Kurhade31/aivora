'use client';

import React, { useState } from 'react';
import { Sparkles, Layers, Shield, DollarSign, ArrowRight, RotateCcw, Check, Info } from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { buildStackRecommendation } from '@/lib/data';
import { StackBuilderAnswer, StackRecommendation } from '@/types';

export default function StackBuilderPage() {
  const [answers, setAnswers] = useState<StackBuilderAnswer>({
    applicationType: 'Enterprise Document Intelligence',
    audience: 'Internal Enterprise Team',
    executionMode: 'hybrid',
    retrievalNeed: true,
    agenticNeed: false,
    multimodalNeed: false,
    budgetPreference: 'moderate',
    privacyTier: 'confidential',
    technicalLevel: 'developer',
  });

  const recommendation: StackRecommendation = buildStackRecommendation(answers);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <AivoraBadge variant="primary" size="sm">
          Signature Decision Engine
        </AivoraBadge>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-2 tracking-tight">
          Find Your AI Stack
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Configure your operational constraints and technical requirements. Aivora generates an objective, factual architectural stack explaining layers, trade-offs, and cost considerations without commercial provider bias.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form: Parameter Controls */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-surface border border-border space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-foreground">
              Architecture Requirements
            </h3>
            <button
              onClick={() =>
                setAnswers({
                  applicationType: 'Enterprise Document Intelligence',
                  audience: 'Internal Enterprise Team',
                  executionMode: 'hybrid',
                  retrievalNeed: true,
                  agenticNeed: false,
                  multimodalNeed: false,
                  budgetPreference: 'moderate',
                  privacyTier: 'confidential',
                  technicalLevel: 'developer',
                })
              }
              className="text-xs text-muted hover:text-foreground font-mono flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Execution Mode */}
          <div>
            <label className="text-xs font-mono font-semibold text-muted uppercase block mb-2">
              Execution Runtime
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'api', label: 'Cloud API' },
                { id: 'hybrid', label: 'Hybrid' },
                { id: 'local', label: 'Local / Edge' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setAnswers({ ...answers, executionMode: m.id as any })}
                  className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                    answers.executionMode === m.id
                      ? 'bg-primary text-primary-foreground font-bold shadow-sm'
                      : 'bg-surface-elevated text-muted border border-border hover:text-foreground'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Retrieval Need (RAG) */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-border">
            <div>
              <span className="text-xs font-semibold text-foreground block">
                External Knowledge / RAG Needed?
              </span>
              <span className="text-[11px] text-muted">
                Requires vector indexing and document retrieval
              </span>
            </div>
            <input
              type="checkbox"
              checked={answers.retrievalNeed}
              onChange={(e) => setAnswers({ ...answers, retrievalNeed: e.target.checked })}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary"
            />
          </div>

          {/* Autonomous Agents Need */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-border">
            <div>
              <span className="text-xs font-semibold text-foreground block">
                Autonomous Tools / Agent Loops?
              </span>
              <span className="text-[11px] text-muted">
                Needs code sandboxing, tool calling, and multi-step reflection
              </span>
            </div>
            <input
              type="checkbox"
              checked={answers.agenticNeed}
              onChange={(e) => setAnswers({ ...answers, agenticNeed: e.target.checked })}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary"
            />
          </div>

          {/* Privacy Tier */}
          <div>
            <label className="text-xs font-mono font-semibold text-muted uppercase block mb-2">
              Data Privacy & Security Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'public', label: 'Public Web' },
                { id: 'confidential', label: 'Confidential' },
                { id: 'air-gapped', label: 'Air-Gapped' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setAnswers({ ...answers, privacyTier: p.id as any })}
                  className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                    answers.privacyTier === p.id
                      ? 'bg-secondary text-secondary-foreground font-bold shadow-sm'
                      : 'bg-surface-elevated text-muted border border-border hover:text-foreground'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Tier */}
          <div>
            <label className="text-xs font-mono font-semibold text-muted uppercase block mb-2">
              Budget & Resource Profile
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'minimal', label: 'Lean / Open' },
                { id: 'moderate', label: 'Mid Tier' },
                { id: 'scale', label: 'Enterprise' },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setAnswers({ ...answers, budgetPreference: b.id as any })}
                  className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                    answers.budgetPreference === b.id
                      ? 'bg-accent text-accent-foreground font-bold shadow-sm'
                      : 'bg-surface-elevated text-muted border border-border hover:text-foreground'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technical Level */}
          <div>
            <label className="text-xs font-mono font-semibold text-muted uppercase block mb-2">
              Team Technical Background
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'no-code', label: 'Low-Code' },
                { id: 'developer', label: 'Full Stack' },
                { id: 'ml-engineer', label: 'ML / CUDA' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setAnswers({ ...answers, technicalLevel: t.id as any })}
                  className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                    answers.technicalLevel === t.id
                      ? 'bg-foreground text-background font-bold shadow-sm'
                      : 'bg-surface-elevated text-muted border border-border hover:text-foreground'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output: Dynamic Factual Architecture Blueprint */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-xl">
            <div className="border-b border-border pb-5 mb-6">
              <span className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider">
                Factual Architecture Recommendation
              </span>
              <h2 className="text-2xl font-bold text-foreground mt-1">
                {recommendation.title}
              </h2>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                {recommendation.summary}
              </p>
            </div>

            {/* Architectural Stack Layers */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-muted uppercase tracking-wider block">
                System Layer Breakdown:
              </span>
              {recommendation.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface-elevated border border-border/70 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground font-mono">
                      Layer 0{idx + 1}: {layer.layer}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {layer.recommended.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-background border border-border text-xs font-mono font-semibold text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px]">
                    <div className="p-2 rounded bg-background/60 text-muted leading-relaxed">
                      <span className="font-semibold text-foreground block mb-0.5">Rationale:</span>
                      {layer.rationale}
                    </div>
                    <div className="p-2 rounded bg-background/60 text-muted leading-relaxed">
                      <span className="font-semibold text-warning block mb-0.5">Trade-off:</span>
                      {layer.tradeoffs}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cost & Privacy Notes */}
            <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-surface-elevated border border-border">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-foreground mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-accent" />
                  <span>Cost Profile</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {recommendation.costEstimateNote}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-elevated border border-border">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-foreground mb-1">
                  <Shield className="w-3.5 h-3.5 text-secondary" />
                  <span>Privacy Assessment</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {recommendation.privacyEvaluation}
                </p>
              </div>
            </div>

            {/* Alternative Path Advice */}
            <div className="mt-4 p-3.5 rounded-xl bg-primary-subtle border border-primary/20 text-xs">
              <span className="font-mono font-bold text-primary block mb-1">
                Aivora Engineering Perspective:
              </span>
              <p className="text-foreground leading-relaxed">
                {recommendation.alternativePath}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
