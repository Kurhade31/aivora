import { CareerRole } from '@/types';

export const CAREERS: CareerRole[] = [
  {
    id: 'role-ai-engineer',
    title: 'AI Engineer',
    slug: 'ai-engineer',
    overview: 'Bridges modern foundation models with software engineering. Builds production applications leveraging LLMs, RAG, agents, structured outputs, and evaluation harnesses.',
    coreResponsibilities: [
      'Architecting and implementing enterprise RAG pipelines with hybrid search and rerankers',
      'Designing robust agentic workflows with tool schemas, sandboxed execution, and memory',
      'Building CI/CD evaluation harnesses using LLM-as-a-judge and reference benchmarks',
      'Optimizing prompt token latency, cost, and cache utilization across providers'
    ],
    keySkills: [
      'TypeScript / Python',
      'Vector Databases & Indexing (pgvector, Qdrant, Chroma)',
      'Prompt Engineering & Structured Schema Decoding (Zod, Pydantic)',
      'Observability & Tracing (LangSmith, OpenInference)',
      'API Security & Rate-Limiting'
    ],
    conceptsToMaster: ['rag', 'agents', 'embeddings', 'llms', 'ai-safety'],
    recommendedTools: ['cursor', 'langsmith', 'v0'],
    recommendedProjects: ['local-rag-cli', 'research-agent', 'guardrails-evaluator'],
    learningPathSlug: 'ai-engineering'
  },
  {
    id: 'role-ml-engineer',
    title: 'Machine Learning Engineer (MLE)',
    slug: 'ml-engineer',
    overview: 'Focuses on training, fine-tuning, optimizing, and deploying machine learning models to production clusters with strict latency and throughput SLAs.',
    coreResponsibilities: [
      'Fine-tuning foundation models with PEFT/LoRA on domain datasets',
      'Deploying high-throughput model serving runtimes using vLLM and TensorRT-LLM',
      'Managing distributed GPU cluster infrastructure, CUDA environments, and Docker containers',
      'Monitoring concept drift, data pipelines, and real-time model inference latencies'
    ],
    keySkills: [
      'PyTorch & Hugging Face Ecosystem',
      'CUDA, GPU Memory Management, and Quantization (FP8, AWQ)',
      'Distributed Training (DDP, FSDP, DeepSpeed)',
      'MLOps, Docker, and Kubernetes',
      'Linux Systems & Performance Profiling'
    ],
    conceptsToMaster: ['deep-learning', 'fine-tuning', 'inference', 'machine-learning'],
    recommendedTools: ['cursor', 'langsmith'],
    recommendedProjects: ['local-rag-cli', 'guardrails-evaluator'],
    learningPathSlug: 'llm-engineering'
  },
  {
    id: 'role-ai-security-engineer',
    title: 'AI Security Engineer',
    slug: 'ai-security-engineer',
    overview: 'Specializes in securing AI applications, foundation models, and agent runtimes against adversarial attacks, prompt injection, data exfiltration, and unauthorized agency.',
    coreResponsibilities: [
      'Performing automated and manual red-teaming against LLM endpoints and tool-calling agents',
      'Architecting defense-in-depth guardrails, delimiter isolation, and input/output sanitizers',
      'Designing sandboxed execution microVMs to contain arbitrary code execution tools',
      'Ensuring data privacy compliance (HIPAA, GDPR, SOC2) and preventing PII leakage'
    ],
    keySkills: [
      'Adversarial Red-Teaming & Prompt Injection Testing',
      'Container Sandboxing (Docker, Firecracker microVMs)',
      'Static & Dynamic Code Analysis',
      'Security Standards (OWASP Top 10 for LLMs, NIST AI RMF)',
      'Network Isolation and Secret Management'
    ],
    conceptsToMaster: ['ai-safety', 'agents', 'llms'],
    recommendedTools: ['cursor', 'langsmith'],
    recommendedProjects: ['guardrails-evaluator', 'research-agent'],
    learningPathSlug: 'ai-safety-path'
  },
  {
    id: 'role-ai-app-developer',
    title: 'AI Application Developer',
    slug: 'ai-app-developer',
    overview: 'Frontend and full-stack software engineer who creates intuitive, responsive, and reliable user interfaces powered by artificial intelligence and real-time streaming.',
    coreResponsibilities: [
      'Implementing low-latency token streaming interfaces using Server-Sent Events (SSE) and WebSockets',
      'Designing generative UI components, interactive canvases, and multimodal chat widgets',
      'Managing client-side optimistic UI state and error boundaries for non-deterministic AI outputs',
      'Integrating commercial AI SDKs and handling client authentication safely'
    ],
    keySkills: [
      'Next.js, React, Tailwind CSS, TypeScript',
      'Vercel AI SDK and Streaming Protocols',
      'Responsive Design & Web Accessibility (WCAG)',
      'Client-side state management and error handling'
    ],
    conceptsToMaster: ['generative-ai', 'llms', 'artificial-intelligence'],
    recommendedTools: ['v0', 'cursor'],
    recommendedProjects: ['local-rag-cli'],
    learningPathSlug: 'ai-foundations'
  },
  {
    id: 'role-ml-researcher',
    title: 'ML Researcher / Research Scientist',
    slug: 'ml-researcher',
    overview: 'Pioneers new algorithms, architectures, training objectives, and mathematical formulations to push the boundary of artificial intelligence capabilities.',
    coreResponsibilities: [
      'Formulating hypotheses and testing novel neural architectures in PyTorch or JAX',
      'Analyzing loss landscapes, scaling laws, and mathematical optimization stability',
      'Publishing peer-reviewed research papers (NeurIPS, ICML, ICLR, CVPR)',
      'Designing rigorous empirical evaluation benchmarks'
    ],
    keySkills: [
      'Advanced Mathematics: Linear Algebra, Probability, Calculus, Information Theory',
      'Deep Theoretical Understanding of Neural Architectures & Attention Mechanisms',
      'Python, PyTorch, JAX, CUDA Kernels',
      'Empirical Experiment Design & Scientific Writing'
    ],
    conceptsToMaster: ['deep-learning', 'foundation-models', 'machine-learning'],
    recommendedTools: ['cursor'],
    recommendedProjects: ['guardrails-evaluator'],
    learningPathSlug: 'ai-foundations'
  }
];
