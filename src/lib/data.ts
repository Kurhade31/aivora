import { CONCEPTS } from '@/data/concepts';
import { MODELS } from '@/data/models';
import { TOOLS } from '@/data/tools';
import { FRAMEWORKS } from '@/data/frameworks';
import { ARCHITECTURES } from '@/data/architectures';
import { PROJECTS } from '@/data/projects';
import { ROADMAPS } from '@/data/roadmaps';
import { SAFETY_TOPICS } from '@/data/safety';
import { GLOSSARY } from '@/data/glossary';
import { TIMELINE } from '@/data/timeline';
import { CAREERS } from '@/data/careers';
import { StackBuilderAnswer, StackRecommendation } from '@/types';

// Data accessors
export function getAllConcepts() {
  return CONCEPTS;
}

export function getConceptBySlug(slug: string) {
  return CONCEPTS.find((c) => c.slug === slug);
}

export function getAllModels() {
  return MODELS;
}

export function getModelBySlug(slug: string) {
  return MODELS.find((m) => m.slug === slug);
}

export function getAllTools() {
  return TOOLS;
}

export function getToolBySlug(slug: string) {
  return TOOLS.find((t) => t.slug === slug);
}

export function getAllFrameworks() {
  return FRAMEWORKS;
}

export function getFrameworkBySlug(slug: string) {
  return FRAMEWORKS.find((f) => f.slug === slug);
}

export function getAllArchitectures() {
  return ARCHITECTURES;
}

export function getArchitectureBySlug(slug: string) {
  return ARCHITECTURES.find((a) => a.slug === slug);
}

export function getAllProjects() {
  return PROJECTS;
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllRoadmaps() {
  return ROADMAPS;
}

export function getRoadmapBySlug(slug: string) {
  return ROADMAPS.find((r) => r.slug === slug);
}

export function getAllSafetyTopics() {
  return SAFETY_TOPICS;
}

export function getSafetyTopicBySlug(slug: string) {
  return SAFETY_TOPICS.find((s) => s.slug === slug);
}

export function getAllGlossaryTerms() {
  return GLOSSARY;
}

export function getGlossaryTermBySlug(slug: string) {
  return GLOSSARY.find((g) => g.slug === slug);
}

export function getAllTimelineMilestones() {
  return TIMELINE;
}

export function getAllCareers() {
  return CAREERS;
}

export function getCareerBySlug(slug: string) {
  return CAREERS.find((c) => c.slug === slug);
}

// Global Knowledge Graph Search
export interface SearchResultItem {
  id: string;
  type: 'concept' | 'model' | 'tool' | 'framework' | 'architecture' | 'project' | 'glossary' | 'roadmap';
  title: string;
  description: string;
  url: string;
  badges?: string[];
  relatedCount?: number;
}

export function searchKnowledgeGraph(query: string): SearchResultItem[] {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();

  const results: SearchResultItem[] = [];

  // Search Concepts
  CONCEPTS.forEach((c) => {
    if (
      c.title.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q) ||
      c.howItWorks.toLowerCase().includes(q)
    ) {
      results.push({
        id: c.id,
        type: 'concept',
        title: c.title,
        description: c.summary,
        url: `/learn/concept/${c.slug}`,
        badges: [c.category, c.difficulty],
        relatedCount: (c.related.concepts?.length || 0) + (c.related.models?.length || 0)
      });
    }
  });

  // Search Models
  MODELS.forEach((m) => {
    if (
      m.name.toLowerCase().includes(q) ||
      m.provider.toLowerCase().includes(q) ||
      m.capabilities.some((cap) => cap.toLowerCase().includes(q))
    ) {
      results.push({
        id: m.id,
        type: 'model',
        title: m.name,
        description: `${m.provider} • ${m.category} • ${m.contextWindow}`,
        url: `/ecosystem/models?highlight=${m.slug}`,
        badges: [m.provider, m.category, m.deployment]
      });
    }
  });

  // Search Tools
  TOOLS.forEach((t) => {
    if (
      t.name.toLowerCase().includes(q) ||
      t.problemSolved.toLowerCase().includes(q) ||
      t.job.toLowerCase().includes(q)
    ) {
      results.push({
        id: t.id,
        type: 'tool',
        title: t.name,
        description: t.problemSolved,
        url: `/ecosystem/tools?highlight=${t.slug}`,
        badges: [t.job, t.pricingModel]
      });
    }
  });

  // Search Frameworks
  FRAMEWORKS.forEach((f) => {
    if (
      f.name.toLowerCase().includes(q) ||
      f.description.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q)
    ) {
      results.push({
        id: f.id,
        type: 'framework',
        title: f.name,
        description: f.description,
        url: `/ecosystem/frameworks?highlight=${f.slug}`,
        badges: [f.category]
      });
    }
  });

  // Search Architectures
  ARCHITECTURES.forEach((a) => {
    if (
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q)
    ) {
      results.push({
        id: a.id,
        type: 'architecture',
        title: a.title,
        description: a.summary,
        url: `/build/architectures#${a.slug}`,
        badges: [a.difficulty]
      });
    }
  });

  // Search Projects
  PROJECTS.forEach((p) => {
    if (
      p.title.toLowerCase().includes(q) ||
      p.problem.toLowerCase().includes(q) ||
      p.learningGoal.toLowerCase().includes(q)
    ) {
      results.push({
        id: p.id,
        type: 'project',
        title: p.title,
        description: p.learningGoal,
        url: `/build#${p.slug}`,
        badges: [p.difficulty, p.hardwareReq.includes('8GB') ? 'Consumer HW' : 'Standard']
      });
    }
  });

  // Search Glossary
  GLOSSARY.forEach((g) => {
    if (
      g.term.toLowerCase().includes(q) ||
      g.shortDefinition.toLowerCase().includes(q) ||
      g.technicalExplanation.toLowerCase().includes(q)
    ) {
      results.push({
        id: g.slug,
        type: 'glossary',
        title: g.term,
        description: g.shortDefinition,
        url: `/glossary#${g.slug}`,
        badges: [g.category, g.difficulty]
      });
    }
  });

  // Search Roadmaps
  ROADMAPS.forEach((r) => {
    if (
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q)
    ) {
      results.push({
        id: r.id,
        type: 'roadmap',
        title: r.title,
        description: r.description,
        url: `/learn/${r.slug}`,
        badges: [r.level, `${r.estimatedHours}h`]
      });
    }
  });

  return results;
}

// Factual Stack Builder Engine
export function buildStackRecommendation(answers: StackBuilderAnswer): StackRecommendation {
  const isLocal = answers.executionMode === 'local' || answers.privacyTier === 'air-gapped';
  const isAgentic = answers.agenticNeed;
  const isRAG = answers.retrievalNeed;
  const isMulti = answers.multimodalNeed;

  let title = 'Cloud-Native Frontier Stack';
  let summary = 'A managed cloud architecture utilizing frontier APIs for rapid delivery and zero infrastructure management.';
  
  if (isLocal) {
    title = 'Zero-Cloud Air-Gapped Local Stack';
    summary = 'A completely offline, privacy-first architecture running on local hardware with open-weight models and embedded vector indexing.';
  } else if (isAgentic) {
    title = 'Autonomous Agentic Orchestration Stack';
    summary = 'A stateful, multi-turn cognitive workflow stack equipped with tool sandboxes, persistent memory, and automated evaluation.';
  } else if (isRAG) {
    title = 'Enterprise Hybrid RAG Stack';
    summary = 'A production document knowledge stack pairing dense vector search with sparse keyword indexing and cross-encoder reranking.';
  }

  const layers: StackRecommendation['layers'] = [];

  // Layer 1: Client / Frontend
  layers.push({
    layer: 'Frontend & User Interaction',
    recommended: ['Next.js 15 (App Router)', 'Tailwind CSS', 'Vercel AI SDK (Streaming UI)'],
    rationale: 'Provides instant streaming token rendering with optimistic UI state updates and server-sent events.',
    tradeoffs: 'Requires Node.js runtime and careful SSR/client boundary management.'
  });

  // Layer 2: Execution / Serving
  if (isLocal) {
    layers.push({
      layer: 'Model Runtime & Inference',
      recommended: ['Ollama (Local GGUF Runtime)', 'llama.cpp', 'ChromaDB (Embedded)'],
      rationale: 'Zero cloud dependencies; keeps all data strictly on-premises on local GPU/Metal unified memory.',
      tradeoffs: 'Limited by workstation RAM/VRAM capacity; lower throughput for concurrent multi-user load.'
    });
  } else {
    layers.push({
      layer: 'Inference & Serving Gateway',
      recommended: answers.budgetPreference === 'minimal' 
        ? ['DeepSeek-R1 via OpenRouter / Groq API', 'Llama 3.3 70B via Together AI'] 
        : ['Claude 3.5 Sonnet (Anthropic API)', 'OpenAI GPT-4o'],
      rationale: 'Guarantees state-of-the-art reasoning and structured JSON output adherence without maintaining GPU clusters.',
      tradeoffs: 'Per-token commercial pricing and dependence on third-party API availability.'
    });
  }

  // Layer 3: Knowledge & Retrieval (if RAG)
  if (isRAG) {
    layers.push({
      layer: 'Retrieval & Vector Storage',
      recommended: isLocal 
        ? ['ChromaDB (Local SQLite/Parquet)', 'all-MiniLM-L6-v2 Embeddings', 'SQLite FTS5 (Sparse)']
        : ['PostgreSQL with pgvector', 'Cohere Rerank v3', 'Text-embedding-3-large'],
      rationale: 'Hybrid search combines dense semantic embeddings with sparse keyword matching to prevent miss of exact IDs or domain codes.',
      tradeoffs: 'Requires two-stage ingestion indexing pipeline and careful chunk boundary tuning.'
    });
  }

  // Layer 4: Agent State & Tools (if Agentic)
  if (isAgentic) {
    layers.push({
      layer: 'Agent State & Execution Sandbox',
      recommended: ['LangGraph (State Machine)', 'Docker / Firecracker Isolated MicroVM', 'Zod Schema Validator'],
      rationale: 'Provides cyclic graph execution, state rollbacks, and sandboxes destructive bash/code tools from the host system.',
      tradeoffs: 'Increased token consumption per user task and non-deterministic execution times.'
    });
  }

  // Layer 5: Observability & Safety
  layers.push({
    layer: 'Observability & Safety Guardrails',
    recommended: ['LangSmith (Trace Telemetry)', 'Llama Guard / Regex PII Masker', 'Ragas (CI Faithfulness Benchmark)'],
    rationale: 'Enables end-to-end trace auditing, prompt injection mitigation, and automated regression testing before deploying updates.',
    tradeoffs: 'Adds a small latency check before and after model generation.'
  });

  const costNote = isLocal
    ? 'Hardware investment only (GPU workstation $1,500 - $3,000); $0 recurring monthly API tokens.'
    : answers.budgetPreference === 'minimal'
    ? 'Estimated API cost: ~$0.20 to $1.50 per 1,000 active sessions with open-weights API providers.'
    : 'Estimated API cost: ~$5.00 to $25.00 per 1,000 active multi-turn sessions with frontier models.';

  const privacyNote = answers.privacyTier === 'air-gapped' || isLocal
    ? 'Full Air-Gap Compliance: Zero external network traffic, 100% HIPAA/GDPR/SOC2 on-premise containment.'
    : 'Cloud Enterprise Tier: Requires Business Associate Agreements (BAA) and Zero-Data-Retention agreements with model providers.';

  const altPath = isLocal
    ? 'Alternative: If local GPU VRAM proves insufficient for 70B models, consider hybrid self-hosting on dedicated cloud GPU instances via vLLM on RunPod/Lambda.'
    : 'Alternative: If cloud API costs scale faster than budget, distill frontier model responses into an open-weight 8B model via LoRA fine-tuning.';

  return {
    title,
    summary,
    layers,
    costEstimateNote: costNote,
    privacyEvaluation: privacyNote,
    alternativePath: altPath
  };
}
