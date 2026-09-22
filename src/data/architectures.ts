import { Architecture } from '@/types';

export const ARCHITECTURES: Architecture[] = [
  {
    id: 'arch-basic-llm',
    title: 'Basic LLM Application Pattern',
    slug: 'basic-llm-app',
    summary: 'The simplest production pattern: client applications interacting synchronously or via server-sent events (SSE) with an LLM inference API through structured input/output validation.',
    difficulty: 'Beginner',
    components: [
      'Client Frontend (Next.js / React / Mobile UI)',
      'Backend API Gateway (Express / FastAPI / Next.js Route Handler)',
      'Prompt Template & Sanitization Layer',
      'LLM Provider API (OpenAI / Anthropic / Groq / vLLM)',
      'Schema Validator (Zod / Pydantic)'
    ],
    dataFlow: [
      { step: 1, title: 'User Input Transmission', description: 'User enters text into client UI; frontend dispatches authenticated POST request to backend API.' },
      { step: 2, title: 'Sanitization & Parameterization', description: 'Backend validates payload, checks rate limits, and injects user input into a static system prompt template.' },
      { step: 3, title: 'Inference Invocation', description: 'Backend calls external LLM provider over HTTPS with temperature, max_tokens, and streaming flags.' },
      { step: 4, title: 'Token Streaming & Validation', description: 'Tokens stream back through backend via SSE to client, while backend verifies JSON schema compliance.' }
    ],
    executionFlow: [
      { step: 1, actor: 'End User', action: 'Submits prompt query in the browser interface' },
      { step: 2, actor: 'Backend Gateway', action: 'Authenticates user session, checks token rate limits, and applies prompt template' },
      { step: 3, actor: 'LLM Engine', action: 'Executes autoregressive token sampling and streams output tokens' },
      { step: 4, actor: 'Schema Parser', action: 'Validates structural schema integrity before finalizing UI state' }
    ],
    securityConsiderations: [
      'Never expose LLM API secret keys in client-side frontend code',
      'Implement strict token usage budgets and rate limits per user to prevent denial-of-wallet attacks',
      'Sanitize prompt inputs to prevent prompt injection from breaking out of delimiter boundaries'
    ],
    related: {
      concepts: ['llms', 'foundation-models'],
      tools: ['cursor', 'v0'],
      frameworks: ['langchain']
    },
    lastVerified: '2025-02-15'
  },
  {
    id: 'arch-rag-application',
    title: 'Production Hybrid RAG Architecture',
    slug: 'rag-application',
    summary: 'An enterprise-grade document retrieval architecture combining dense vector semantic search, sparse BM25 keyword search, reciprocal rank fusion, and cross-encoder reranking.',
    difficulty: 'Intermediate',
    components: [
      'Document Ingestion Worker (Unstructured / PyPDF / Markdown splitter)',
      'Vector Embedding Engine (Text-embedding-3-large / BGE-large)',
      'Hybrid Vector Store (PostgreSQL with pgvector / Qdrant / Pinecone)',
      'Query Transformation & HyDE Module',
      'Cross-Encoder Reranker (Cohere Rerank / BGE-Reranker)',
      'Foundation LLM Generator (Claude 3.5 Sonnet / GPT-4o)'
    ],
    dataFlow: [
      { step: 1, title: 'Document Ingestion & Chunking', description: 'Documents are parsed, cleaned, split into 500-token semantic chunks with 50-token overlap, and assigned unique UUIDs and metadata.' },
      { step: 2, title: 'Embedding & Hybrid Indexing', description: 'Dense embeddings are computed and stored in an HNSW vector index; text chunks are simultaneously indexed in a BM25 sparse index.' },
      { step: 3, title: 'Query Expansion & Dual Search', description: 'User query generates dense query vector and sparse tokens. System retrieves top 50 dense candidates and top 50 sparse candidates.' },
      { step: 4, title: 'Reciprocal Rank Fusion & Reranking', description: 'Results are fused and passed through a neural Cross-Encoder reranker to extract the top 5 highest-relevance passages.' },
      { step: 5, title: 'Grounded Synthesis', description: 'The 5 passages are formatted into the prompt context with strict citation instructions; LLM generates verified response.' }
    ],
    executionFlow: [
      { step: 1, actor: 'Client User', action: 'Submits domain-specific technical question' },
      { step: 2, actor: 'Query Engine', action: 'Applies query rewriting and dispatches parallel dense + sparse vector lookups' },
      { step: 3, actor: 'Cross-Encoder', action: 'Computes deep attention scores between query and all candidate passages' },
      { step: 4, actor: 'LLM Generator', action: 'Synthesizes grounded output citing chunk source IDs strictly' }
    ],
    securityConsiderations: [
      'Implement strict Access Control Lists (ACLs) so users cannot retrieve document chunks they lack permission to view',
      'Sanitize document chunks during ingestion to mitigate indirect prompt injection attacks hidden inside PDFs',
      'Log retrieved chunk IDs to enable auditing of compliance claims and hallucinations'
    ],
    related: {
      concepts: ['rag', 'embeddings', 'llms'],
      tools: ['notebooklm'],
      frameworks: ['llamaindex', 'ragas']
    },
    lastVerified: '2025-02-15'
  },
  {
    id: 'arch-tool-using-agent',
    title: 'Tool-Using ReAct Agent Architecture',
    slug: 'tool-using-agent',
    summary: 'A cognitive state machine where an LLM alternates between internal reasoning traces (thoughts) and external environment actions (API tool calls) until a goal is accomplished.',
    difficulty: 'Advanced',
    components: [
      'Agent Orchestrator / State Machine (LangGraph / native loop)',
      'Model Context Manager (Working memory + conversation history)',
      'Tool Registry (Typed JSON schemas for search, SQL, bash, calculation)',
      'Isolated Execution Sandbox (Docker container / Firecracker microVM / WebContainer)',
      'Safety Guardrail & Permission Interceptor'
    ],
    dataFlow: [
      { step: 1, title: 'Goal Specification', description: 'User supplies a high-level task with constraints.' },
      { step: 2, title: 'Reasoning & Tool Selection', description: 'Model processes conversation state and tool definitions, generating a <thought> and a structured tool invocation request.' },
      { step: 3, title: 'Sandbox Execution', description: 'Orchestrator parses tool arguments, validates permissions against security rules, and dispatches call inside an isolated sandbox.' },
      { step: 4, title: 'Observation Ingestion', description: 'Execution output (stdout, error, API JSON) is captured and appended to the context as an Observation.' },
      { step: 5, title: 'Evaluation & Termination', description: 'Model inspects observation. If task is complete, it outputs final answer; if incomplete or errored, it self-corrects and iterates.' }
    ],
    executionFlow: [
      { step: 1, actor: 'User', action: 'Issues high-level operational goal' },
      { step: 2, actor: 'Agent Brain', action: 'Evaluates state, writes reasoning thought, and yields tool call payload' },
      { step: 3, actor: 'Sandbox Runtime', action: 'Safely runs tool command and returns stdout/stderr' },
      { step: 4, actor: 'Agent Brain', action: 'Analyzes outcome and decides next step or final synthesis' }
    ],
    securityConsiderations: [
      'Isolate all bash and filesystem operations inside disposable containers with no host network access',
      'Never allow the agent to execute unconstrained SQL drop/delete commands without human approval',
      'Enforce hard limits on maximum loop iterations and maximum token expenditure'
    ],
    related: {
      concepts: ['agents', 'llms', 'ai-safety'],
      tools: ['claude-code', 'cursor'],
      frameworks: ['langgraph']
    },
    lastVerified: '2025-02-15'
  },
  {
    id: 'arch-local-ai-assistant',
    title: 'Zero-Cloud Local AI Assistant',
    slug: 'local-ai-assistant',
    summary: 'A fully offline, privacy-preserving AI system running completely on consumer workstation hardware with local quantized models, embedded vector storage, and zero data telemetry.',
    difficulty: 'Intermediate',
    components: [
      'Local Desktop Client / CLI Interface',
      'Local Model Runtime (Ollama / llama.cpp)',
      'GGUF Quantized Model Checkpoint (e.g. Llama-3.3-70B-Q4 or Qwen-2.5-Coder-32B)',
      'Embedded Vector Database (ChromaDB / LanceDB / DuckDB)',
      'Local Document Parser & Sentence Transformer'
    ],
    dataFlow: [
      { step: 1, title: 'Local File Indexing', description: 'User selects local directories; local Python/Node script parses text files and runs a compact local embedding model (e.g. all-MiniLM-L6-v2).' },
      { step: 2, title: 'Embedded Storage', description: 'Embeddings and metadata are written directly to an on-disk SQLite or Arrow file with no remote server.' },
      { step: 3, title: 'Local Query & Retrieval', description: 'User enters question; local vector distance calculation runs in milliseconds in embedded memory.' },
      { step: 4, title: 'On-Device Generation', description: 'Ollama loads quantized model into local GPU VRAM or unified memory (Apple Silicon Metal) and streams response.' }
    ],
    executionFlow: [
      { step: 1, actor: 'Local User', action: 'Inputs query through terminal CLI or local desktop app' },
      { step: 2, actor: 'Embedded Vector DB', action: 'Performs nearest neighbor search entirely in local memory' },
      { step: 3, actor: 'Ollama Runtime', action: 'Executes quantized tensor math on local GPU/NPU' },
      { step: 4, actor: 'Local UI', action: 'Renders response locally with zero network packets emitted' }
    ],
    securityConsiderations: [
      'Guarantees total data privacy: zero risk of cloud data leakage, IP exposure, or third-party training ingestion',
      'Verify SHA256 checksums of all downloaded GGUF model files to prevent malicious weight tampering',
      'Bind local API endpoints strictly to localhost (127.0.0.1) rather than public network interfaces (0.0.0.0)'
    ],
    related: {
      concepts: ['inference', 'embeddings', 'foundation-models'],
      tools: ['notebooklm'],
      frameworks: ['ollama']
    },
    lastVerified: '2025-02-15'
  }
];
