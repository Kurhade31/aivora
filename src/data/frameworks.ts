import { Framework } from '@/types';

export const FRAMEWORKS: Framework[] = [
  {
    id: 'f-vllm',
    name: 'vLLM',
    slug: 'vllm',
    category: 'Inference',
    description: 'A high-throughput, memory-efficient LLM serving and inference library featuring PagedAttention, continuous batching, and chunked prefill.',
    keyFeatures: [
      'PagedAttention algorithm eliminating 96%+ of KV-cache memory fragmentation',
      'Continuous batching of incoming asynchronous requests',
      'Native tensor parallelism across multi-GPU nodes',
      'Drop-in OpenAI-compatible HTTP API server implementation'
    ],
    languages: ['Python', 'C++', 'CUDA'],
    bestFor: 'Serving high-traffic open-weights LLMs in production cloud environments with maximum tokens-per-second per dollar.',
    tradeoffs: [
      'Primarily targets Linux and NVIDIA CUDA or AMD ROCm environments; limited native Windows support without WSL/Docker',
      'Requires operational expertise in GPU memory sizing and tensor parallel topologies'
    ],
    repoUrl: 'https://github.com/vllm-project/vllm',
    docUrl: 'https://docs.vllm.ai/',
    sources: [
      { title: 'PagedAttention Research Paper (Kwon et al., SOSP 2023)', url: 'https://arxiv.org/abs/2309.06180', type: 'paper' },
      { title: 'vLLM Project Official Documentation', url: 'https://docs.vllm.ai/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-langgraph',
    name: 'LangGraph',
    slug: 'langgraph',
    category: 'Agents',
    description: 'A library for building stateful, multi-actor, cyclic applications and agent workflows using graph-based execution semantics.',
    keyFeatures: [
      'First-class support for cyclic graphs and iterative reasoning loops',
      'Built-in persistence and time-travel debugging of agent state transitions',
      'Human-in-the-loop inspection, approval, and state rollback hooks',
      'Streaming token and node execution telemetry'
    ],
    languages: ['Python', 'TypeScript'],
    bestFor: 'Complex, stateful multi-agent systems and production workflows that require branching, loops, and human supervision.',
    tradeoffs: [
      'Steeper learning curve than linear chaining libraries like basic LangChain or prompt templates',
      'Requires understanding graph state schemas and reducer functions'
    ],
    repoUrl: 'https://github.com/langchain-ai/langgraph',
    docUrl: 'https://langchain-ai.github.io/langgraph/',
    sources: [
      { title: 'LangGraph Official Architecture Guide', url: 'https://langchain-ai.github.io/langgraph/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-llamaindex',
    name: 'LlamaIndex',
    slug: 'llamaindex',
    category: 'RAG',
    description: 'A dedicated data framework for connecting custom data sources, documents, and databases to LLMs through advanced ingestion, indexing, and retrieval.',
    keyFeatures: [
      '160+ data connectors (LlamaHub) for databases, Notion, Slack, PDFs, and SQL',
      'Advanced retrieval primitives: HyDE, recursive chunking, sentence-window retrieval',
      'Integration with dense, sparse, and hybrid vector storage engines',
      'Automated synthetic evaluation of retrieval and response faithfulness'
    ],
    languages: ['Python', 'TypeScript'],
    bestFor: 'Production Retrieval-Augmented Generation (RAG) pipelines and enterprise document intelligence applications.',
    tradeoffs: [
      'Rapid API evolution across minor version increments can cause migration churn',
      'Can feel heavyweight for simple 10-line direct vector query scripts'
    ],
    repoUrl: 'https://github.com/run-llama/llama_index',
    docUrl: 'https://docs.llamaindex.ai/',
    sources: [
      { title: 'LlamaIndex Documentation & Production RAG Patterns', url: 'https://docs.llamaindex.ai/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-ollama',
    name: 'Ollama',
    slug: 'ollama',
    category: 'Deployment',
    description: 'A streamlined tool and local runtime for packaging, downloading, running, and managing open-weights LLMs on local hardware with zero cloud dependencies.',
    keyFeatures: [
      'One-line CLI installation and model pull (`ollama run llama3.3`)',
      'Built-in GGUF model quantization and GPU hardware acceleration (Metal, CUDA, ROCm)',
      'Built-in local REST API server compatible with OpenAI client endpoints',
      'Modelfile configuration for custom system prompts and parameter temperature presets'
    ],
    languages: ['Go', 'C++', 'Python SDK', 'JS SDK'],
    bestFor: 'Local AI experimentation, privacy-first offline applications, edge devices, and internal developer testing.',
    tradeoffs: [
      'Optimized for single-tenant local inference; not designed for high-concurrency multi-user enterprise clusters (use vLLM for that)',
      'Model selection bounded by local RAM and GPU VRAM capacity'
    ],
    repoUrl: 'https://github.com/ollama/ollama',
    docUrl: 'https://ollama.com/',
    sources: [
      { title: 'Ollama Official Documentation & Modelfile Spec', url: 'https://github.com/ollama/ollama/tree/main/docs', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-dspy',
    name: 'DSPy',
    slug: 'dspy',
    category: 'Orchestration',
    description: 'A programmatic framework that replaces brittle prompt strings with composable modules and systematically compiles and optimizes prompts and weights against verifiable metric functions.',
    keyFeatures: [
      'Separation of program logic (Signatures) from prompt wording strategies',
      'Automatic prompt compiler and teleprompter optimizers (MIPROv2, BootstrapFewShot)',
      'Systematic optimization against quantitative evaluation metrics (e.g. accuracy, JSON validity)',
      'Cross-model compilation (e.g. compile on GPT-4o, deploy on Llama 3.3)'
    ],
    languages: ['Python'],
    bestFor: 'Engineers who want to treat LLM pipelines as software programs with automated optimization rather than trial-and-error prompt tweaking.',
    tradeoffs: [
      'Different mental model from standard prompt engineering requiring programmatic thinking',
      'Compiling prompts requires running training evaluations which consume API tokens'
    ],
    repoUrl: 'https://github.com/stanfordnlp/dspy',
    docUrl: 'https://dspy-docs.vercel.app/',
    sources: [
      { title: 'Khattab et al.: DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines (Stanford)', url: 'https://arxiv.org/abs/2310.03714', type: 'paper' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-ragas',
    name: 'Ragas',
    slug: 'ragas',
    category: 'Evaluation',
    description: 'A framework for reference-free evaluation of Retrieval-Augmented Generation (RAG) pipelines, measuring faithfulness, answer relevancy, and context recall.',
    keyFeatures: [
      'Faithfulness metric detecting ungrounded hallucinations against retrieved context',
      'Answer Relevancy metric verifying completeness without redundant rambling',
      'Context Precision & Context Recall metrics isolating retrieval quality from generation quality',
      'Integration with CI/CD test suites to prevent regression in production RAG systems'
    ],
    languages: ['Python'],
    bestFor: 'Systematically quantifying and benchmarking RAG pipeline quality before deploying changes to production.',
    tradeoffs: [
      'Uses LLM-as-a-judge for evaluation, which carries inference costs and subtle judge bias',
      'Requires calibrating ground truth test sets for accurate recall measurements'
    ],
    repoUrl: 'https://github.com/explodinggradients/ragas',
    docUrl: 'https://docs.ragas.io/',
    sources: [
      { title: 'Es et al.: Ragas: Automated Evaluation of Retrieval Augmented Generation', url: 'https://arxiv.org/abs/2309.15217', type: 'paper' },
      { title: 'Ragas Official Documentation', url: 'https://docs.ragas.io/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-pytorch',
    name: 'PyTorch',
    slug: 'pytorch',
    category: 'Deep Learning',
    description: 'The foundational open-source deep learning framework providing dynamic computational graphs (eager execution), reverse-mode autodiff, and hardware acceleration.',
    keyFeatures: [
      'Dynamic computational graph (Autograd) with intuitive imperative Python syntax',
      'Distributed training primitives: DistributedDataParallel (DDP), FSDP, and DeepSpeed integration',
      'TorchScript and TorchDynamo (`torch.compile`) for high-performance JIT graph compilation',
      'Dominant research and production standard across modern foundation model architectures'
    ],
    languages: ['Python', 'C++', 'CUDA'],
    bestFor: 'Training, fine-tuning, and implementing deep learning architectures, custom neural layers, and foundation models.',
    tradeoffs: [
      'Low-level framework requiring deep understanding of tensor dimensions, backprop, and CUDA memory management',
      'Overkill for developers solely calling high-level LLM completion APIs'
    ],
    repoUrl: 'https://github.com/pytorch/pytorch',
    docUrl: 'https://pytorch.org/docs/stable/',
    sources: [
      { title: 'Paszke et al.: PyTorch: An Imperative Style, High-Performance Deep Learning Library (NeurIPS)', url: 'https://arxiv.org/abs/1912.01703', type: 'paper' },
      { title: 'PyTorch Official Documentation', url: 'https://pytorch.org/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-transformers',
    name: 'Hugging Face Transformers',
    slug: 'transformers',
    category: 'LLM',
    description: 'The premier open-source library for downloading, training, and running tens of thousands of pretrained Transformer models across text, vision, and audio.',
    keyFeatures: [
      'Universal pipeline API for text generation, classification, and embeddings',
      'Integration with PyTorch, TensorFlow, and JAX backends',
      'Direct compatibility with Hugging Face Model Hub checkpoints',
      'Native support for quantization (bitsandbytes) and FlashAttention'
    ],
    languages: ['Python'],
    bestFor: 'Prototyping, evaluating, and fine-tuning open-weights foundation models with standard Python workflows.',
    tradeoffs: [
      'High-level abstraction can obscure low-level memory optimizations during production high-throughput serving',
      'Inference throughput is significantly lower than specialized serving engines like vLLM'
    ],
    repoUrl: 'https://github.com/huggingface/transformers',
    docUrl: 'https://huggingface.co/docs/transformers',
    sources: [
      { title: 'Wolf et al.: Transformers: State-of-the-Art Natural Language Processing (EMNLP 2020)', url: 'https://arxiv.org/abs/1910.03771', type: 'paper' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-crewai',
    name: 'CrewAI',
    slug: 'crewai',
    category: 'Agents',
    description: 'A framework for orchestrating role-playing autonomous AI agents that collaborate to solve complex, multi-faceted tasks.',
    keyFeatures: [
      'Role-based agent design with clear goals, backstories, and tool assignments',
      'Sequential and hierarchical process execution flows',
      'Built-in delegation and inter-agent communication channels',
      'Integration with major LLM APIs and local Ollama runtimes'
    ],
    languages: ['Python'],
    bestFor: 'Rapidly assembling teams of specialized collaborative agents for research, writing, and analysis workflows.',
    tradeoffs: [
      'Can incur high token costs and latency as agents communicate back and forth',
      'Less fine-grained cycle control than lower-level graph frameworks like LangGraph'
    ],
    repoUrl: 'https://github.com/crewAIInc/crewAI',
    docUrl: 'https://docs.crewai.com/',
    sources: [
      { title: 'CrewAI Documentation and Production Guides', url: 'https://docs.crewai.com/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'f-langchain',
    name: 'LangChain',
    slug: 'langchain',
    category: 'Orchestration',
    description: 'An open-source orchestration framework for building applications with LLMs through composable chains, prompt templates, output parsers, and tool bindings.',
    keyFeatures: [
      'Standardized interfaces for 100+ LLM providers and embedding models',
      'Extensive document loaders and text splitters for data preprocessing',
      'LangChain Expression Language (LCEL) for declarative streaming pipelines',
      'Vast ecosystem of prebuilt integrations with vector databases and SaaS APIs'
    ],
    languages: ['Python', 'TypeScript'],
    bestFor: 'Prototyping generative AI applications, connecting heterogeneous APIs, and building standard multi-step LLM chains.',
    tradeoffs: [
      'Deep class hierarchies and abstraction layers can complicate debugging stack traces',
      'For complex cyclic agent graphs, the LangChain team itself recommends migrating to LangGraph'
    ],
    repoUrl: 'https://github.com/langchain-ai/langchain',
    docUrl: 'https://python.langchain.com/',
    sources: [
      { title: 'LangChain Official Documentation', url: 'https://python.langchain.com/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  }
];
