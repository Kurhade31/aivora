import { LearningPath } from '@/types';

export const ROADMAPS: LearningPath[] = [
  {
    id: 'path-ai-foundations',
    title: 'AI Foundations',
    slug: 'ai-foundations',
    level: 'Zero',
    tagline: 'From zero technical background to deep conceptual intuition of modern artificial intelligence.',
    description: 'Deconstructs the hype to understand what AI actually is, how statistical pattern recognition operates, how neural networks learn, and how foundation models differ from traditional software.',
    estimatedHours: 12,
    modules: [
      {
        id: 'mod-1',
        title: 'Core Principles & Mental Models',
        description: 'Understand the fundamental distinctions between deterministic programming, machine learning, and deep learning.',
        conceptSlugs: ['artificial-intelligence', 'machine-learning']
      },
      {
        id: 'mod-2',
        title: 'Neural Networks & Representation Learning',
        description: 'Discover how artificial neurons combine linear algebra and non-linearities to capture complex real-world data.',
        conceptSlugs: ['deep-learning', 'embeddings']
      },
      {
        id: 'mod-3',
        title: 'The Rise of Foundation Models',
        description: 'Explore how self-supervised pre-training at internet scale created general-purpose cognitive models.',
        conceptSlugs: ['foundation-models', 'generative-ai']
      }
    ]
  },
  {
    id: 'path-generative-ai',
    title: 'Generative AI & Multimodality',
    slug: 'generative-ai',
    level: 'Beginner',
    tagline: 'Understand the mechanics of synthetic media creation across text, code, images, and audio.',
    description: 'Learn how autoregressive transformers, latent diffusion, flow matching, and multimodal encoders synthesize novel, high-fidelity artifacts conditioned on prompts.',
    estimatedHours: 16,
    modules: [
      {
        id: 'mod-1',
        title: 'Autoregressive Language Models',
        description: 'Tokens, vocabulary projection, temperature, top-p, and probabilistic sequence generation.',
        conceptSlugs: ['llms', 'generative-ai']
      },
      {
        id: 'mod-2',
        title: 'Diffusion & Continuous Media',
        description: 'Forward noise addition, reverse denoising, and latent diffusion architectures.',
        conceptSlugs: ['deep-learning', 'foundation-models']
      },
      {
        id: 'mod-3',
        title: 'Multimodal Encoders & Cross-Attention',
        description: 'Connecting vision, speech waveforms, and text in unified latent embedding spaces.',
        conceptSlugs: ['embeddings', 'foundation-models']
      }
    ]
  },
  {
    id: 'path-llm-engineering',
    title: 'LLM Engineering & Optimization',
    slug: 'llm-engineering',
    level: 'Builder',
    tagline: 'Take foundation models and engineer robust, high-performance, cost-effective production systems.',
    description: 'Master advanced prompting, structured output enforcement, parameter-efficient fine-tuning (LoRA), and KV-cache inference optimization.',
    estimatedHours: 24,
    modules: [
      {
        id: 'mod-1',
        title: 'Deterministic Structure & Tool Calling',
        description: 'Constrained decoding, JSON schema guarantees, function calling, and system prompt engineering.',
        conceptSlugs: ['llms', 'ai-safety']
      },
      {
        id: 'mod-2',
        title: 'Fine-Tuning & Behavioral Alignment',
        description: 'PEFT, LoRA adapters, dataset curation, and preference alignment with DPO.',
        conceptSlugs: ['fine-tuning', 'foundation-models']
      },
      {
        id: 'mod-3',
        title: 'Inference Architecture & Serving',
        description: 'Continuous batching, PagedAttention, quantization (FP8/AWQ), and serving with vLLM.',
        conceptSlugs: ['inference']
      }
    ]
  },
  {
    id: 'path-rag-engineering',
    title: 'RAG Engineering & Knowledge Systems',
    slug: 'rag-engineering',
    level: 'Engineer',
    tagline: 'Design and deploy production Retrieval-Augmented Generation architectures with zero hallucination.',
    description: 'Comprehensive guide to advanced chunking, hybrid dense/sparse indexing, reciprocal rank fusion, cross-encoder rerankers, and automated evaluation metrics.',
    estimatedHours: 20,
    modules: [
      {
        id: 'mod-1',
        title: 'Vector Spaces & Ingestion Pipelines',
        description: 'Semantic chunking boundaries, contrastive embeddings, and HNSW vector index construction.',
        conceptSlugs: ['embeddings', 'rag']
      },
      {
        id: 'mod-2',
        title: 'Advanced Retrieval & Reranking',
        description: 'HyDE query rewriting, hybrid BM25 + dense fusion, and neural cross-encoder reranking.',
        conceptSlugs: ['rag', 'inference']
      },
      {
        id: 'mod-3',
        title: 'Automated Evaluation & Faithfulness Benchmarking',
        description: 'Measuring context recall, answer relevancy, and citation fidelity using Ragas in CI.',
        conceptSlugs: ['rag', 'ai-safety']
      }
    ]
  },
  {
    id: 'path-ai-agents',
    title: 'Autonomous AI Agents',
    slug: 'ai-agents',
    level: 'Advanced',
    tagline: 'Architect cognitive state machines capable of reasoning, tool use, and multi-step execution.',
    description: 'Go beyond single-turn completion. Build ReAct loops, planning architectures, isolated execution sandboxes, memory systems, and multi-agent coordination topologies.',
    estimatedHours: 30,
    modules: [
      {
        id: 'mod-1',
        title: 'Cognitive Loops & Tool Integration',
        description: 'The ReAct cycle: Thoughts, Actions, Observations, and reflection mechanisms.',
        conceptSlugs: ['agents', 'llms']
      },
      {
        id: 'mod-2',
        title: 'Memory & Long-Term Persistence',
        description: 'Short-term scratchpads vs long-term episodic retrieval and database-backed state machines.',
        conceptSlugs: ['agents', 'rag']
      },
      {
        id: 'mod-3',
        title: 'Multi-Agent Topologies & Sandboxing',
        description: 'Supervisor-worker patterns, swarm coordination, and secure container sandboxing.',
        conceptSlugs: ['agents', 'ai-safety']
      }
    ]
  },
  {
    id: 'path-local-ai',
    title: 'Local AI & On-Premise Deployment',
    slug: 'local-ai',
    level: 'Builder',
    tagline: 'Run frontier-grade open models offline on consumer hardware with zero cloud dependencies.',
    description: 'Demystify local model quantization (GGUF, EXL2, AWQ), runtimes (Ollama, llama.cpp), embedded databases (Chroma, DuckDB), and privacy-preserving architecture.',
    estimatedHours: 14,
    modules: [
      {
        id: 'mod-1',
        title: 'Local Runtimes & Quantization',
        description: 'Understanding bits per weight, GGUF formats, and GPU hardware acceleration.',
        conceptSlugs: ['inference', 'foundation-models']
      },
      {
        id: 'mod-2',
        title: 'Embedded Knowledge Stores',
        description: 'Running vector databases locally without cloud server infrastructure.',
        conceptSlugs: ['embeddings', 'rag']
      }
    ]
  },
  {
    id: 'path-ai-safety',
    title: 'AI Safety & Defensive Engineering',
    slug: 'ai-safety-path',
    level: 'Builder',
    tagline: 'Protect applications against prompt injections, data exfiltration, and autonomous agency risks.',
    description: 'Learn the OWASP Top 10 for LLMs, adversarial red-teaming methodologies, inbound input guardrails, outbound data sanitizers, and human-in-the-loop permission patterns.',
    estimatedHours: 18,
    modules: [
      {
        id: 'mod-1',
        title: 'Inbound Attack Vectors & Prompt Injection',
        description: 'Direct jailbreaks, delimiter bypasses, and indirect injection through external content.',
        conceptSlugs: ['ai-safety', 'llms']
      },
      {
        id: 'mod-2',
        title: 'Data Privacy & Secret Leakage',
        description: 'PII scrubbing, credential exposure prevention, and membership inference mitigation.',
        conceptSlugs: ['ai-safety', 'rag']
      },
      {
        id: 'mod-3',
        title: 'Operational Containment for Agents',
        description: 'Hardening tool access, preventing excessive agency, and implementing approval gates.',
        conceptSlugs: ['ai-safety', 'agents']
      }
    ]
  }
];
