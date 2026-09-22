'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  BookOpen,
  Layers,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Terminal,
  Cpu,
  Sparkles,
  CheckCircle2,
  GitBranch,
  Search,
  ExternalLink,
  ChevronRight,
  Activity,
  Workflow
} from 'lucide-react';
import { AivoraBadge } from '@/components/AivoraBadge';
import { getAllConcepts, getAllModels, getAllTools, getAllProjects, getAllRoadmaps } from '@/lib/data';

export default function HomePage() {
  const concepts = getAllConcepts();
  const models = getAllModels();
  const tools = getAllTools();
  const projects = getAllProjects();
  const roadmaps = getAllRoadmaps();

  // Interactive Goal Selector State (Section 3 & Section 58)
  const [selectedGoal, setSelectedGoal] = useState<string>('build');

  const goalPaths: Record<string, { title: string; subtitle: string; pathUrl: string; steps: string[] }> = {
    understand: {
      title: 'AI First Principles & Foundations',
      subtitle: 'Demystify statistical learning, neural representation, and foundation models without hype.',
      pathUrl: '/learn/ai-foundations',
      steps: [
        'Explore Concept: Artificial Intelligence vs Deterministic Logic',
        'Learn: How Neural Networks learn representations (Weights & Biases)',
        'Understand: Self-supervised pretraining at internet scale',
        'Inspect: The Transformer self-attention mechanism'
      ]
    },
    learn: {
      title: 'Generative AI & Multimodal Synthesis',
      subtitle: 'Understand autoregressive generation, latent diffusion, and modern vision-language models.',
      pathUrl: '/learn/generative-ai',
      steps: [
        'Study: Tokenization and next-token probability distribution sampling',
        'Explore: Temperature, Top-p, and context window mechanics',
        'Understand: Multimodal alignment between images, audio, and language',
        'Review: Continuous media and latent diffusion architectures'
      ]
    },
    build: {
      title: 'AI Application Engineering & RAG',
      subtitle: 'Turn foundation models into verified, grounded real-world production software.',
      pathUrl: '/learn/rag-engineering',
      steps: [
        'Study: Chunking strategies and dense vector embeddings',
        'Build: Zero-Cloud Local RAG CLI with Ollama and ChromaDB',
        'Implement: Hybrid search combining BM25 keyword matching with pgvector',
        'Benchmark: Ragas faithfulness testing in CI pipelines'
      ]
    },
    code: {
      title: 'Autonomous Coding & AI Tool Orchestration',
      subtitle: 'Master AI-powered software development, terminal agents, and automated refactoring.',
      pathUrl: '/learn/ai-agents',
      steps: [
        'Adopt: Modern code copilots (Cursor, Claude Code, Aider)',
        'Build: ReAct agent capable of running Python in isolated sandboxes',
        'Understand: Tool schema definitions and JSON schema enforcement',
        'Implement: Safety guardrails preventing destructive shell commands'
      ]
    },
    local: {
      title: 'Zero-Cloud Local AI & Edge Deployment',
      subtitle: 'Run frontier-grade open-weights models completely offline on your own workstation.',
      pathUrl: '/learn/local-ai',
      steps: [
        'Install: Ollama runtime and download GGUF quantized models',
        'Master: GPU VRAM sizing and memory bandwidth trade-offs',
        'Deploy: Embedded local vector databases (ChromaDB / LanceDB)',
        'Ensure: 100% air-gapped data confidentiality without cloud leakage'
      ]
    },
    safety: {
      title: 'AI Safety & Defensive Engineering',
      subtitle: 'Harden production applications against prompt injection, jailbreaks, and excessive agency.',
      pathUrl: '/safety',
      steps: [
        'Audit: OWASP Top 10 for Large Language Models',
        'Mitigate: Direct and indirect prompt injection vectors',
        'Implement: Inbound PII redaction and outbound secret scanning',
        'Enforce: Human-in-the-loop gates on high-risk tool execution'
      ]
    }
  };

  const stackLayers = [
    { label: 'Hardware', desc: 'GPUs, TPUs, High-Bandwidth Memory (HBM)', icon: 'GPU', color: 'text-muted' },
    { label: 'Inference', desc: 'vLLM, Ollama, PagedAttention, Quantization', icon: 'RT', color: 'text-info' },
    { label: 'Models', desc: 'DeepSeek-R1, Llama 3.3, Claude 3.5, GPT-4o', icon: 'LLM', color: 'text-primary' },
    { label: 'APIs & Gateways', desc: 'OpenRouter, LiteLLM, Streaming SSE Gateways', icon: 'API', color: 'text-secondary' },
    { label: 'Frameworks', desc: 'LangGraph, LlamaIndex, PyTorch, DSPy', icon: 'FW', color: 'text-accent' },
    { label: 'Agents', desc: 'Tool Sandboxes, Cognitive ReAct Loops, Memory', icon: 'AGT', color: 'text-warning' },
    { label: 'Applications', desc: 'Enterprise Copilots, Autonomous Dev, End-User UIs', icon: 'APP', color: 'text-foreground' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative pt-20 pb-28 overflow-hidden border-b border-border/60">
        {/* Subtle background orbital grid */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: 'url(/patterns/orbit-grid.svg)', backgroundRepeat: 'repeat' }}
        />

        {/* Ambient Orbital Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            {/* Top Badge */}
            <AivoraBadge variant="primary" size="md">
              Knowledge Operating System for the AI Era
            </AivoraBadge>

            {/* Wordmark Logo */}
            <h1 className="font-display font-black text-5xl sm:text-7xl tracking-tight text-foreground">
              AIVORA
            </h1>

            {/* Core Tagline */}
            <p className="text-xl sm:text-2xl font-semibold text-primary font-sans leading-snug">
              Understand AI. Navigate the AI era. Build what's next.
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              An open knowledge platform for understanding artificial intelligence, exploring the technologies behind it, and turning knowledge into real-world systems.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link
                href="/map"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-bold hover:bg-primary-hover shadow-glow transition-all"
              >
                <Compass className="w-4 h-4" />
                EXPLORE AI MAP
              </Link>
              <Link
                href="/learn"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-elevated text-foreground font-mono text-xs font-bold border border-border hover:border-primary/50 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                START LEARNING
              </Link>
              <Link
                href="/stack"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border/80 text-muted hover:text-foreground hover:border-border font-mono text-xs font-semibold transition-all"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                FIND YOUR STACK
              </Link>
            </div>

            {/* Key Value Micro-metrics */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-border/50 text-left">
              <div className="p-3 rounded-lg bg-surface/60 border border-border/40">
                <span className="text-xs font-mono text-muted block">Knowledge Layers</span>
                <span className="text-lg font-bold font-mono text-primary">6 Layers</span>
              </div>
              <div className="p-3 rounded-lg bg-surface/60 border border-border/40">
                <span className="text-xs font-mono text-muted block">Curated Entities</span>
                <span className="text-lg font-bold font-mono text-secondary">100% Traceable</span>
              </div>
              <div className="p-3 rounded-lg bg-surface/60 border border-border/40">
                <span className="text-xs font-mono text-muted block">API Keys Needed</span>
                <span className="text-lg font-bold font-mono text-accent">Zero ($0)</span>
              </div>
              <div className="p-3 rounded-lg bg-surface/60 border border-border/40">
                <span className="text-xs font-mono text-muted block">License</span>
                <span className="text-lg font-bold font-mono text-foreground">Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1: "AI is bigger than a chatbot." */}
      {/* ============================================================ */}
      <section className="py-20 bg-surface/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <AivoraBadge variant="secondary" size="sm">
              Ecosystem Lineage
            </AivoraBadge>
            <h2 className="text-3xl font-extrabold text-foreground mt-3 tracking-tight">
              AI is bigger than a chatbot.
            </h2>
            <p className="text-sm text-muted mt-2">
              Conversational chatbots are merely the user interface. Understand the nested hierarchy of technologies that power modern machine intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {[
              { level: '01', title: 'Artificial Intelligence', subtitle: 'General discipline of machine cognition', slug: 'artificial-intelligence' },
              { level: '02', title: 'Machine Learning', subtitle: 'Learning patterns directly from data', slug: 'machine-learning' },
              { level: '03', title: 'Deep Learning', subtitle: 'Hierarchical multi-layer neural networks', slug: 'deep-learning' },
              { level: '04', title: 'Foundation Models', subtitle: 'Internet-scale self-supervised bedrocks', slug: 'foundation-models' },
              { level: '05', title: 'Generative AI', subtitle: 'Novel media and synthetic generation', slug: 'generative-ai' },
              { level: '06', title: 'AI Agents', subtitle: 'Reasoning loops, tools & execution', slug: 'agents' },
              { level: '07', title: 'AI Applications', subtitle: 'Software delivering real-world value', slug: 'rag' }
            ].map((node, idx) => (
              <Link
                key={node.level}
                href={`/learn/concept/${node.slug}`}
                className="p-4 rounded-xl bg-surface border border-border hover:border-primary transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-primary font-bold">{node.level}</span>
                  <h3 className="font-semibold text-xs text-foreground group-hover:text-primary transition-colors mt-1">
                    {node.title}
                  </h3>
                  <p className="text-[11px] text-muted line-clamp-2 mt-1">
                    {node.subtitle}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-muted group-hover:text-primary mt-3 block">
                  Inspect →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: "See how everything connects." (AI Knowledge Map) */}
      {/* ============================================================ */}
      <section className="py-20 border-b border-border/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <AivoraBadge variant="accent" size="sm">
                Knowledge Orbit
              </AivoraBadge>
              <h2 className="text-3xl font-extrabold text-foreground mt-3 tracking-tight">
                See how everything connects.
              </h2>
              <p className="text-sm text-muted mt-2 max-w-xl">
                AI is an interdependent ecosystem, not a collection of isolated products. The Aivora Knowledge Map tracks relationships between foundations, mechanisms, models, frameworks, and applications.
              </p>
            </div>
            <Link
              href="/map"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-elevated border border-border text-xs font-mono font-semibold text-primary hover:border-primary transition-colors shrink-0"
            >
              Open Fullscreen Interactive Map <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Map Orbit Preview */}
          <div className="p-8 rounded-2xl bg-surface border border-border relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
              {concepts.slice(0, 8).map((c) => (
                <Link
                  key={c.id}
                  href={`/learn/concept/${c.slug}`}
                  className="p-4 rounded-xl bg-surface-elevated/70 border border-border/70 hover:border-primary hover:bg-surface-elevated transition-all group"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-muted mb-2">
                    <span className="uppercase">{c.category}</span>
                    <span className="text-primary">{c.difficulty}</span>
                  </div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {c.title}
                  </h4>
                  <p className="text-xs text-muted line-clamp-2 mt-1">
                    {c.summary}
                  </p>
                  <div className="mt-3 text-[10px] font-mono text-muted flex items-center gap-2">
                    <span>{c.related.concepts?.length || 0} links</span>
                    <span>•</span>
                    <span className="text-accent">Verified</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted font-mono gap-2">
              <span>Interactive Navigation: Click any node to inspect internal mechanisms and trade-offs</span>
              <Link href="/map" className="text-primary hover:underline font-bold">
                Launch Orbit Canvas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: "What are you trying to do?" (Goal Selector) */}
      {/* ============================================================ */}
      <section className="py-20 bg-surface/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <AivoraBadge variant="primary" size="sm">
              Intent-Driven Navigation
            </AivoraBadge>
            <h2 className="text-3xl font-extrabold text-foreground mt-3 tracking-tight">
              What are you trying to do?
            </h2>
            <p className="text-sm text-muted mt-2">
              Select your immediate goal. Aivora creates a tailored, factual pathway directly to the concepts, tools, and code you need.
            </p>
          </div>

          {/* Goal Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
            {[
              { id: 'understand', label: 'Understand AI' },
              { id: 'learn', label: 'Learn Generative AI' },
              { id: 'build', label: 'Build with AI & RAG' },
              { id: 'code', label: 'Build an AI Agent' },
              { id: 'local', label: 'Run AI Locally' },
              { id: 'safety', label: 'Secure AI Systems' }
            ].map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  selectedGoal === goal.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-surface border border-border text-muted hover:text-foreground hover:border-primary/50'
                }`}
              >
                {goal.label}
              </button>
            ))}
          </div>

          {/* Goal Output Card */}
          {goalPaths[selectedGoal] && (
            <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-bold">
                    Recommended Learning Path
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1">
                    {goalPaths[selectedGoal].title}
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    {goalPaths[selectedGoal].subtitle}
                  </p>
                </div>
                <Link
                  href={goalPaths[selectedGoal].pathUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-xs font-bold hover:bg-primary-hover transition-colors shrink-0"
                >
                  Start This Path <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-muted uppercase tracking-wider block">
                  Curated Step Sequence:
                </span>
                {goalPaths[selectedGoal].steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated border border-border/50 text-xs text-foreground"
                  >
                    <span className="h-5 w-5 rounded-full bg-primary-subtle text-primary font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: "Explore the AI stack." */}
      {/* ============================================================ */}
      <section className="py-20 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <AivoraBadge variant="secondary" size="sm">
              Architecture Anatomy
            </AivoraBadge>
            <h2 className="text-3xl font-extrabold text-foreground mt-3 tracking-tight">
              Explore the AI stack.
            </h2>
            <p className="text-sm text-muted mt-2">
              From semiconductor silicon up to autonomous agent workflows: understand the execution pipeline of modern AI engineering.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {stackLayers.map((layer, idx) => (
              <div
                key={layer.label}
                className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className={`w-10 h-10 rounded-lg bg-surface-elevated border border-border flex items-center justify-center font-mono font-bold text-xs ${layer.color}`}>
                    {layer.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {layer.label}
                      </h4>
                      <span className="text-[10px] font-mono text-muted">Layer 0{idx + 1}</span>
                    </div>
                    <p className="text-xs text-muted mt-0.5">{layer.desc}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/build/architectures"
              className="inline-flex items-center gap-2 text-xs font-mono text-primary font-bold hover:underline"
            >
              Browse Full Architecture Library with Data Flow Diagrams →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: "Start from where you are." (Learning Paths) */}
      {/* ============================================================ */}
      <section className="py-20 bg-surface/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <AivoraBadge variant="accent" size="sm">
                Adaptive Progression
              </AivoraBadge>
              <h2 className="text-3xl font-extrabold text-foreground mt-3 tracking-tight">
                Start from where you are.
              </h2>
              <p className="text-sm text-muted mt-2 max-w-xl">
                Structured learning tracks categorized by technical depth—from zero prerequisites through production systems.
              </p>
            </div>
            <Link
              href="/learn"
              className="text-xs font-mono font-semibold text-primary hover:underline"
            >
              View All 9 Roadmaps →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmaps.slice(0, 3).map((r) => (
              <div
                key={r.id}
                className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-primary transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-primary-subtle text-primary border border-primary/20">
                      Level: {r.level}
                    </span>
                    <span className="text-xs font-mono text-muted">~{r.estimatedHours} Hours</span>
                  </div>
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed">
                    {r.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/60 space-y-1.5">
                    <span className="text-[10px] font-mono text-muted uppercase block">Modules:</span>
                    {r.modules.map((m) => (
                      <div key={m.id} className="text-xs text-foreground font-medium flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        <span>{m.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/learn/${r.slug}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-surface-elevated text-xs font-mono font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Enter Roadmap →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: "Build something." (Project Lab) */}
      {/* ============================================================ */}
      <section className="py-20 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <AivoraBadge variant="primary" size="sm">
                Hands-On Engineering
              </AivoraBadge>
              <h2 className="text-3xl font-extrabold text-foreground mt-3 tracking-tight">
                Build something.
              </h2>
              <p className="text-sm text-muted mt-2 max-w-xl">
                Knowledge without execution decays rapidly. The Aivora Project Lab guides you through production systems with executable code and common pitfalls.
              </p>
            </div>
            <Link
              href="/build"
              className="text-xs font-mono font-semibold text-primary hover:underline"
            >
              Browse All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-primary transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-surface-elevated border border-border text-muted">
                      {p.difficulty}
                    </span>
                    <span className="text-[11px] font-mono text-accent font-semibold">{p.apiReq}</span>
                  </div>
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed">
                    {p.problem}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/60">
                    <span className="text-[10px] font-mono text-muted uppercase block mb-1">Technologies:</span>
                    <div className="flex flex-wrap gap-1">
                      {p.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/build#${p.slug}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-surface-elevated text-xs font-mono font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Blueprint & Code →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: "AI changes quickly." (Verification System) */}
      {/* ============================================================ */}
      <section className="py-20 bg-surface/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-surface border border-border">
            <AivoraBadge variant="accent" size="sm">
              Source-First Integrity
            </AivoraBadge>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-3">
              AI changes quickly. Aivora is verified against primary sources.
            </h2>
            <p className="text-sm text-muted mt-3 leading-relaxed">
              We do not fabricate benchmark claims, invent pricing, or recycle generic marketing blurbs. Every technical statement in Aivora is cross-referenced with official academic research papers, developer documentation, or open-source repositories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border text-xs font-mono">
              <div className="p-3 rounded-lg bg-surface-elevated">
                <span className="text-primary font-bold block mb-1">01 Primary Papers</span>
                <span className="text-muted">Direct arXiv citations and technical reports</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-elevated">
                <span className="text-secondary font-bold block mb-1">02 Official Docs</span>
                <span className="text-muted">Vendor documentation and model cards</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-elevated">
                <span className="text-accent font-bold block mb-1">03 Continuous Audits</span>
                <span className="text-muted">Automated schema and dead-link validation in CI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: Open-Source CTA */}
      {/* ============================================================ */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            An open platform for the next generation of AI builders.
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Aivora is free, community-driven, and open source under permissive licensing. No accounts required. No paywalls. Just first-principles engineering knowledge.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/map"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-bold hover:bg-primary-hover transition-colors shadow-glow"
            >
              LAUNCH KNOWLEDGE MAP
            </Link>
            <a
              href="https://github.com/adarsh/aivora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-foreground hover:border-primary/50 font-mono text-xs font-bold transition-colors"
            >
              <GitBranch className="w-4 h-4 text-primary" />
              VIEW ON GITHUB
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
