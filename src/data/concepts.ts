import { Concept } from '@/types';

export const CONCEPTS: Concept[] = [
  {
    id: 'c-ai-foundations',
    title: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    category: 'Foundation',
    difficulty: 'Zero',
    summary: 'The broad scientific and engineering discipline dedicated to creating systems capable of performing tasks that traditionally require human cognitive abilities.',
    mentalModel: 'Think of AI as an overarching umbrella discipline—analogous to "Transportation". Just as transportation encompasses walking, bicycles, steam engines, and jet aircraft, AI encompasses rule-based expert systems, statistical learning, and modern neural foundation models.',
    whyItExists: 'Human cognitive bandwidth is bounded, while data volume, combinatorial complexity, and real-time operational demands grow exponentially. AI exists to automate pattern recognition, decision reasoning, and generative synthesis at superhuman scale.',
    howItWorks: 'Modern AI primarily functions through statistical pattern extraction rather than hand-coded heuristic rules. High-dimensional datasets are ingested into computational models that optimize internal mathematical parameters (weights) through loss minimization algorithms like gradient descent.',
    architectureDetails: 'Data Ingestion Layer → Feature Representation & Tokenization → Mathematical Objective Function → Model Optimization (Optimization algorithms like AdamW) → Inference Pipeline → Evaluation Harness.',
    codeOrFlowExample: `Input Data [Text, Sensors, Images]
      ↓
Preprocessing & Feature Space Mapping
      ↓
Model Parameters: W · x + b  → Activation
      ↓
Prediction vs Ground Truth Error (Loss)
      ↓
Backpropagation to update weights W`,
    applications: [
      'Automated semantic content understanding and summarization',
      'Autonomous system navigation and robotics trajectory planning',
      'Diagnostic medical imaging classification and anomaly detection',
      'Predictive maintenance and anomaly detection in industrial networks',
      'Dynamic language translation and cross-lingual synthesis'
    ],
    whenToUse: [
      'When the underlying operational rules cannot be explicitly enumerated in code',
      'When processing high-dimensional unstructured data (natural language, video, audio)',
      'When patterns evolve dynamically over time and require continuous adaptation'
    ],
    whenNotToUse: [
      'When 100% deterministic mathematical precision is required (e.g. general ledger double-entry bookkeeping)',
      'When regulatory or safety compliance demands exhaustive, formal mathematical verification of every internal decision state',
      'When simple relational database queries or deterministic business rules suffice'
    ],
    limitations: [
      'Statistical correlation does not inherently equal causal reasoning',
      'Susceptible to distributional shift when production environment diverges from training data',
      'High compute requirements for initial model training and low-latency inference'
    ],
    commonMistakes: [
      'Treating AI outputs as authoritative factual truth rather than probabilistic distributions',
      'Attempting to deploy machine learning when a 10-line SQL rule would solve the business problem deterministically',
      'Ignoring training data bias, skew, and out-of-distribution failure modes'
    ],
    securityConsiderations: [
      'Model inversion attacks extracting private training inputs',
      'Adversarial perturbation attacks deceiving classification boundaries',
      'Data poisoning during fine-tuning or continuous learning ingestion pipelines'
    ],
    related: {
      concepts: ['machine-learning', 'foundation-models'],
      frameworks: ['pytorch'],
      architectures: ['basic-llm-app']
    },
    sources: [
      { title: 'Russell & Norvig: Artificial Intelligence: A Modern Approach (4th Ed)', url: 'https://aima.cs.berkeley.edu/', type: 'academic' },
      { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/itl/ai-risk-management-framework', type: 'standard' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-machine-learning',
    title: 'Machine Learning',
    slug: 'machine-learning',
    category: 'Foundation',
    difficulty: 'Beginner',
    summary: 'A subfield of AI focused on algorithms that learn patterns and decision boundaries directly from data without being explicitly programmed with explicit conditional logic.',
    mentalModel: 'Instead of writing code that says "if pixel 12 is green, then it is a leaf", you provide thousands of labeled images and allow the algorithm to discover the mathematical boundary that separates leaves from non-leaves.',
    whyItExists: 'Real-world phenomena have nonlinear interactions and high variance that make handcrafted if-else conditional branches brittle, unmaintainable, and computationally intractable.',
    howItWorks: 'ML algorithms define a hypothesis space parameterized by weights. Given training pairs (X, Y), an optimization algorithm iteratively adjusts the weights to minimize a loss metric measuring the difference between predicted outputs and ground truth labels.',
    architectureDetails: 'Feature Engineering / Raw Tensor Preprocessing → Train/Validation/Test Split → Model Architecture (Regression, Tree-based, SVM, or Neural) → Loss Function Computation → Gradient Descent / Parameter Update → Metrics Evaluation (F1, AUROC, RMSE).',
    codeOrFlowExample: `// Classical ML Formulation
Dataset: { (x_1, y_1), (x_2, y_2), ... (x_n, y_n) }
Target: find f(x; θ) such that:
θ* = argmin_θ ∑ Loss(f(x_i; θ), y_i) + λ·Regularization(θ)`,
    applications: [
      'Tabular fraud detection in financial banking transactions',
      'Customer churn prediction and recommendation systems',
      'Algorithmic load balancing and predictive scaling in cloud infrastructure',
      'Genomic sequence marker identification'
    ],
    whenToUse: [
      'When high-quality historical structured or semi-structured data is available',
      'When the decision boundary is complex but stationary over reasonable time horizons',
      'When probabilistic scoring or risk estimation is needed'
    ],
    whenNotToUse: [
      'When training data has fewer than several dozen instances and domain rules are well known',
      'When the environment is completely unconstrained and dynamic with zero historical precedent',
      'When zero latency budget exists (<1 microsecond in high-frequency trading hardware logic)'
    ],
    limitations: [
      'Requires substantial labeled or carefully curated historical data',
      'Degrades when operating under covariate shift or concept drift',
      'Subject to overfitting if regularization or hyperparameter tuning is poorly executed'
    ],
    commonMistakes: [
      'Data leakage between training and validation sets during feature scaling',
      'Optimizing exclusively for accuracy on imbalanced datasets rather than precision/recall or PR-AUC',
      'Ignoring feature drift in production systems'
    ],
    securityConsiderations: [
      'Membership inference attacks determining whether an individual was in the training set',
      'Model extraction / distillation by adversarial querying of model endpoints'
    ],
    related: {
      concepts: ['artificial-intelligence', 'deep-learning'],
      frameworks: ['pytorch'],
      projects: ['offline-semantic-search']
    },
    sources: [
      { title: 'Goodfellow, Bengio, Courville: Deep Learning', url: 'https://www.deeplearningbook.org/', type: 'academic' },
      { title: 'Scikit-learn Documentation & User Guide', url: 'https://scikit-learn.org/stable/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-deep-learning',
    title: 'Deep Learning & Neural Networks',
    slug: 'deep-learning',
    category: 'Mechanism',
    difficulty: 'Builder',
    summary: 'A class of machine learning methods based on artificial neural networks with multiple hierarchical layers that automatically learn representations from raw data.',
    mentalModel: 'Imagine an assembly line of sensory filters. The earliest layers detect primitive edges and gradients; intermediate layers combine edges into shapes and textures; deeper layers compose textures into complete conceptual objects like faces or sentences.',
    whyItExists: 'Classical machine learning required manual, domain-specific feature engineering (e.g. SIFT, HOG, n-grams). Deep learning eliminates manual feature extraction by learning hierarchical representations end-to-end directly from raw tensors.',
    howItWorks: 'Neurons compute weighted linear combinations of inputs followed by nonlinear activation functions (ReLU, GELU, SwiGLU). Layers stack sequentially or with residual skip connections. Backpropagation computes gradients via the chain rule of calculus to adjust parameters across all layers.',
    architectureDetails: 'Input Layer → Stacked Hidden Layers (Dense, Convolutional, Recurrent, or Attention-based) with Non-linear Activations + Normalization (LayerNorm, RMSNorm) → Output Layer → Global Loss Backpropagation.',
    codeOrFlowExample: `// Mathematical Layer Transformation
h_0 = x
h_{l+1} = σ( W_{l} · h_{l} + b_{l} )
Residual connection variant:
h_{l+1} = LayerNorm(h_{l} + SubLayer(h_{l}))`,
    applications: [
      'Computer vision: image segmentation, object detection, spatial scene parsing',
      'Speech recognition and automated acoustic waveform transcription',
      'Natural language processing and machine translation',
      'Protein structure folding prediction (AlphaFold)'
    ],
    whenToUse: [
      'When working with unstructured data: images, speech audio, video, natural language text',
      'When dataset scale is large enough to prevent catastrophic overfitting',
      'When high-capacity representation learning is required'
    ],
    whenNotToUse: [
      'For small tabular datasets where XGBoost or LightGBM routinely outperform neural nets with vastly lower compute overhead',
      'When extreme model interpretability and coefficient attribution are legally mandated'
    ],
    limitations: [
      'Extreme compute requirements for training (often clusters of enterprise GPUs)',
      'Black-box characteristics making mechanistic interpretability an ongoing research frontier',
      'Susceptibility to catastrophic forgetting when trained sequentially on disparate tasks'
    ],
    commonMistakes: [
      'Failing to monitor gradient vanishing or exploding during training initialization',
      'Omitting learning rate warmups and cosine decay schedules',
      'Neglecting proper tensor dimension checks and batch normalization/layer normalization placement'
    ],
    securityConsiderations: [
      'Backdoor triggers embedded in public pre-trained checkpoints (Trojan neural networks)',
      'Adversarial sample crafting causing high-confidence incorrect classifications'
    ],
    related: {
      concepts: ['machine-learning', 'foundation-models', 'llms'],
      frameworks: ['pytorch', 'transformers'],
      architectures: ['basic-llm-app']
    },
    sources: [
      { title: 'Deep Learning by Ian Goodfellow, Yoshua Bengio, Aaron Courville (MIT Press)', url: 'https://www.deeplearningbook.org/', type: 'academic' },
      { title: 'PyTorch Neural Network Documentation', url: 'https://pytorch.org/docs/stable/nn.html', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-foundation-models',
    title: 'Foundation Models',
    slug: 'foundation-models',
    category: 'Model',
    difficulty: 'Builder',
    summary: 'Large-scale AI models trained on massive, broad, and multimodal datasets at scale that can be adapted to a wide range of downstream tasks.',
    mentalModel: 'A foundational operating bedrock. Rather than training hundreds of separate narrow algorithms for sentiment analysis, grammar checking, translation, and summarization, a single foundation model acquires a general semantic world model that adapts to all of them via prompting or fine-tuning.',
    whyItExists: 'Building specialized machine learning models from scratch for every specific task is economically and computationally prohibitive. Foundation models transfer generalized representations across diverse downstream applications.',
    howItWorks: 'Pre-trained using self-supervised objectives (such as masked language modeling or next-token prediction) on petabytes of unstructured text, code, images, and audio. The resulting representation space captures syntax, semantics, logic, and factual correlations across human knowledge.',
    architectureDetails: 'Massive Pre-training Dataset (Web crawls, curated code, scientific literature) → High-Performance Compute Cluster (e.g. InfiniBand-connected H100s) → Self-Supervised Pretraining → Post-Training (SFT + RLHF / DPO) → Deployment Endpoint / Local Runtime.',
    codeOrFlowExample: `Pretraining: Raw Unlabeled Corpora → Predict Missing/Next Token
        ↓
Base Foundation Weights (General World Knowledge)
        ↓
Post-Training: Instruction Tuning + Alignment (SFT, RLHF, DPO)
        ↓
Adaptable to: Reasoning, Coding, Analysis, Extraction, Agents`,
    applications: [
      'Multi-turn conversational systems and software engineering copilots',
      'Zero-shot document classification and data transformation',
      'Multimodal image reasoning, captioning, and diagram analysis',
      'Autonomous digital agents capable of executing multi-step workflows'
    ],
    whenToUse: [
      'When building applications that demand natural language comprehension and generation',
      'When rapid prototyping is required without collecting thousands of domain-specific labeled examples',
      'When cross-domain reasoning and synthesis across diverse inputs is necessary'
    ],
    whenNotToUse: [
      'When low-latency edge inference on microcontrollers (<10ms on embedded chips) is mandatory without cloud connectivity',
      'When the task is pure arithmetic computation or strict deterministic regex extraction'
    ],
    limitations: [
      'Stochastic generation means responses can hallucinate plausible-sounding falsehoods',
      'Context window constraints and attention degradation over extremely long inputs',
      'Knowledge cutoff dates require augmentation mechanisms (like RAG) for real-time data'
    ],
    commonMistakes: [
      'Confusing base foundation models (raw text continuers) with instruction-tuned/chat models',
      'Assuming the foundation model possesses active internet awareness without explicit tool integration',
      'Passing sensitive credentials directly into prompt contexts without anonymization'
    ],
    securityConsiderations: [
      'Prompt injection altering the model instruction hierarchy',
      'Training data extraction revealing sensitive ingested text strings',
      'Model jailbreaking bypassing ethical guardrails'
    ],
    related: {
      concepts: ['llms', 'generative-ai', 'rag'],
      models: ['claude-3-5-sonnet', 'deepseek-r1', 'llama-3-3-70b'],
      frameworks: ['transformers']
    },
    sources: [
      { title: 'Bommasani et al.: On the Opportunities and Risks of Foundation Models (Stanford CRFM)', url: 'https://arxiv.org/abs/2108.07258', type: 'paper' },
      { title: 'Anthropic Research: Core Views on AI Safety & Capabilities', url: 'https://www.anthropic.com/research', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-llms',
    title: 'Large Language Models (LLMs)',
    slug: 'llms',
    category: 'Model',
    difficulty: 'Builder',
    summary: 'Autoregressive Transformer-based neural networks trained to predict subsequent tokens across billions of textual and code sequences.',
    mentalModel: 'A high-dimensional probability engine that simulates human language and code. Given sequence [t_1, t_2, ... t_k], it computes the probability distribution P(t_{k+1} | t_1...t_k), sampling the most coherent and relevant continuation.',
    whyItExists: 'Natural language is the universal protocol of human intent, knowledge, and system coordination. LLMs provide a computable interface for understanding, transforming, and generating this protocol programmatically.',
    howItWorks: 'Text is partitioned into discrete subword units called tokens using algorithms like Byte-Pair Encoding (BPE). Tokens are converted into dense vector embeddings, passed through alternating Multi-Head Self-Attention layers and Feed-Forward networks, and projected via a softmax head into token vocabulary probabilities.',
    architectureDetails: 'Byte-Pair Tokenizer → Token & Positional Embeddings (RoPE) → N × Transformer Blocks (RMSNorm → Multi-Query/Grouped-Query Attention → SwiGLU FFN) → Final Normalization → Linear LM Head → Top-p/Temperature Sampler.',
    codeOrFlowExample: `import { generate } from 'ai-core';

// Conceptual Autoregressive Generation Loop
async function* autoregressiveTokenStream(prompt: string, maxTokens = 512) {
  let contextTokens = tokenizer.encode(prompt);
  for (let i = 0; i < maxTokens; i++) {
    const logits = await model.forward(contextTokens);
    const nextToken = sampleWithTemperature(logits, { temperature: 0.7 });
    if (nextToken === tokenizer.EOS_TOKEN) break;
    contextTokens.push(nextToken);
    yield tokenizer.decode([nextToken]);
  }
}`,
    applications: [
      'Interactive software development assistants and code refactoring',
      'Automated technical documentation generation and synthesis',
      'Structured entity extraction from semi-structured reports and emails',
      'Synthetic dataset generation for training smaller downstream classifiers'
    ],
    whenToUse: [
      'When working with human-written natural language text, SQL, or code',
      'When mapping unstructured queries into structured JSON schemas',
      'When creative ideation, summarization, or synthesis is required'
    ],
    whenNotToUse: [
      'When exact symbolic calculation is needed without tool verification (use a calculator or interpreter)',
      'When guaranteed deterministic constant-time execution is required'
    ],
    limitations: [
      'Hallucinations when factual ground-truth is uncertain or under-represented in pre-training data',
      'Quadratic or linear memory growth with respect to context sequence length (KV-cache management)',
      'Potential for reasoning failures on multi-step arithmetic without scratchpads'
    ],
    commonMistakes: [
      'Setting temperature too high when extracting strict structured JSON data schemas',
      'Not validating or schema-checking model responses before passing them to database queries',
      'Overloading prompt context with redundant text that degrades retrieval precision'
    ],
    securityConsiderations: [
      'Indirect prompt injection via untrusted ingested documents (e.g. web pages, emails)',
      'System prompt extraction and jailbreak bypasses',
      'Exfiltration of confidential data through unvetted outbound API calls'
    ],
    related: {
      concepts: ['foundation-models', 'rag', 'agents'],
      models: ['deepseek-r1', 'llama-3-3-70b', 'claude-3-5-sonnet'],
      frameworks: ['langchain', 'langgraph', 'vllm']
    },
    sources: [
      { title: 'Vaswani et al.: Attention Is All You Need (Transformer paper)', url: 'https://arxiv.org/abs/1706.03762', type: 'paper' },
      { title: 'OpenAI GPT-4 Technical Report', url: 'https://arxiv.org/abs/2303.08774', type: 'paper' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-generative-ai',
    title: 'Generative AI',
    slug: 'generative-ai',
    category: 'Application',
    difficulty: 'Beginner',
    summary: 'The branch of AI technologies capable of generating novel, high-fidelity artifacts—including text, images, audio, synthetic data, and code—conditioned on user prompts or contextual inputs.',
    mentalModel: 'Contrast with discriminative AI. While a discriminative model acts as a judge (asking "is this an image of a cat or dog?"), a generative model acts as a creator (asking "generate a photorealistic image of a cat sitting on a desk").',
    whyItExists: 'Creation of bespoke digital assets—software code, illustrations, tailored instructional content, synthetic testing environments—traditionally required enormous manual labor. Generative AI drastically lowers the marginal cost of content creation.',
    howItWorks: 'Learns the joint probability distribution P(X) or conditional distribution P(X|Y) of training data. Utilizes diverse model architectures: Autoregressive Transformers for sequential data, Diffusion Models for continuous latent image/audio generation, and Flow-Matching models.',
    architectureDetails: 'Latent Space Representation → Conditional Conditioning Vector (CLIP / T5 embeddings) → Denoising U-Net / DiT (Diffusion Transformer) or Autoregressive Decoder → Latent Decoder (VAE) → Output Media Tensor.',
    codeOrFlowExample: `User Condition: "A diagram of a distributed system in isometric style"
       ↓
Text Encoder (CLIP / T5) → Conditioning Embeddings
       ↓
Latent Diffusion / DiT: Iterative Denoising from Gaussian Noise
       ↓
VAE Decoder: Convert Latent Tensor to High-Resolution Pixels (PNG)`,
    applications: [
      'Synthetic test data generation for privacy-compliant development',
      'Automated UI prototyping and design system asset creation',
      'Voice synthesis, dubbing, and personalized narration',
      'Video generation for simulation and educational walkthroughs'
    ],
    whenToUse: [
      'When synthesizing novel variations of creative media or draft code',
      'When transforming content from one modality to another (e.g. text-to-speech, sketch-to-UI)',
      'When augmenting sparse datasets with synthetic samples'
    ],
    whenNotToUse: [
      'When reproducing exact historical legal records without alteration',
      'When strict deterministic outputs are mandatory without tolerance for stylistic drift'
    ],
    limitations: [
      'Difficulty in maintaining multi-frame physical consistency in video synthesis',
      'Intellectual property and copyright provenance questions regarding training datasets',
      'High GPU VRAM footprint during diffusion sampling steps'
    ],
    commonMistakes: [
      'Assuming generated media accurately depicts real physical causality (e.g. hands with 5 fingers, correct text signage in early diffusion)',
      'Deploying generative endpoints without content moderation and safety filters'
    ],
    securityConsiderations: [
      'Deepfakes used for biometric authentication spoofing and spear-phishing',
      'Watermark removal and copyright infringement vulnerabilities'
    ],
    related: {
      concepts: ['foundation-models', 'llms'],
      models: ['claude-3-5-sonnet'],
      tools: ['cursor', 'v0']
    },
    sources: [
      { title: 'Rombach et al.: High-Resolution Image Synthesis with Latent Diffusion Models (CVPR 2022)', url: 'https://arxiv.org/abs/2112.10752', type: 'paper' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-rag',
    title: 'Retrieval-Augmented Generation (RAG)',
    slug: 'rag',
    category: 'System',
    difficulty: 'Engineer',
    summary: 'An architectural pattern that dynamically retrieves relevant factual documents from external data stores and injects them into an LLM prompt context to ground generation.',
    mentalModel: 'An open-book exam. Instead of forcing a student (the LLM) to memorize every proprietary company handbook or live stock price in advance, you give the student a search engine and library card to look up exact reference pages right before answering.',
    whyItExists: 'LLM pre-training is static, expensive, and blind to private organizational data. RAG eliminates hallucination by grounding responses in verified, retrieved source passages with direct citations without requiring continuous model retraining.',
    howItWorks: 'Documents are chunked, transformed into vector embeddings via an embedding model, and indexed in a vector database. At query time, the user query is embedded, semantically similar chunks are retrieved (often combined with keyword BM25 search in hybrid retrieval), reranked, and injected into the system prompt.',
    architectureDetails: 'Ingestion Pipeline: Documents → Parser → Chunking Strategy → Embedding Model → Vector Index. Query Pipeline: Query → Query Rewriting/HyDE → Hybrid Retrieval (Dense Vector + BM25) → Cross-Encoder Reranker → Prompt Construction → LLM Synthesis → Citation Metadata.',
    codeOrFlowExample: `// RAG Execution Flow
1. Query: "What is our Q3 SLA refund policy?"
2. Ingestion Store: VectorDB (Dense) + BM25 (Sparse)
3. Retrieved: [Chunk 42 (score 0.89): "Q3 SLA refunds are 15% if downtime > 2h..."]
4. Prompt Injection:
   """Context: {retrieved_chunks}
   Question: {user_query}
   Instruction: Answer strictly using the provided context. Cite chunk IDs."""
5. LLM generates grounded answer with verifiable citation.`,
    applications: [
      'Internal enterprise document knowledge bases and policy copilots',
      'Technical API documentation search and developer question answering',
      'Customer support automation with dynamic knowledge base sync',
      'Legal contract discovery and clause comparison across case archives'
    ],
    whenToUse: [
      'When answers must be grounded in private, frequently updating data',
      'When factual auditability, attribution, and source citations are required',
      'When fine-tuning is too expensive or cannot guarantee exact factual recall'
    ],
    whenNotToUse: [
      'When the task is purely stylistic adaptation or tone matching (use fine-tuning or few-shot examples)',
      'When the entire corpus fits comfortably in a standard context window and low call volume allows raw context stuffing'
    ],
    limitations: [
      'Susceptible to garbage-in, garbage-out: if retrieval returns irrelevant chunks, synthesis fails',
      'Chunking boundary artifacts can split critical context across chunk seams',
      'Latency overhead introduced by multi-stage retrieval and reranking steps'
    ],
    commonMistakes: [
      'Using naive fixed-size character chunking that splits sentences or tables in half',
      'Relying solely on cosine similarity without reciprocal rank fusion (RRF) with keyword search',
      'Omitting rerankers (like Cohere Rerank or BGE-Reranker) which significantly boost Top-3 recall'
    ],
    securityConsiderations: [
      'Indirect prompt injection embedded in indexed untrusted documents',
      'Document Access Control List (ACL) leaks where unauthorized users query indexed confidential data',
      'Retrieval poisoning via adversarial search-optimized chunks'
    ],
    related: {
      concepts: ['embeddings', 'llms', 'agents'],
      frameworks: ['llamaindex', 'langchain'],
      architectures: ['rag-application'],
      projects: ['local-rag-cli']
    },
    sources: [
      { title: 'Lewis et al.: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (NeurIPS 2020)', url: 'https://arxiv.org/abs/2005.11401', type: 'paper' },
      { title: 'LlamaIndex Core Documentation on Production RAG', url: 'https://docs.llamaindex.ai/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-agents',
    title: 'Autonomous AI Agents',
    slug: 'agents',
    category: 'System',
    difficulty: 'Advanced',
    summary: 'Autonomous software systems that leverage foundation models as cognitive reasoning engines to iteratively perceive their environment, decompose goals, plan steps, and execute external tools.',
    mentalModel: 'A capable remote intern. Instead of merely answering a question, an agent is given an objective ("Find the bug causing error 500 in auth.py, fix it, run unit tests, and submit a PR"). It creates a plan, uses tools (bash terminal, git, file editor), inspects outputs, self-corrects errors, and completes the task.',
    whyItExists: 'Single-turn LLM calls cannot interact with live environments, execute commands, or self-correct when code breaks. Agents bridge the gap between static text prediction and active real-world software execution.',
    howItWorks: 'Follows structured cognitive architectures such as ReAct (Reasoning + Acting), Plan-and-Solve, or Hierarchical Multi-Agent state machines. The model outputs a thought, selects a tool and JSON arguments, waits for tool execution result in the environment, observes the feedback, and decides the next action.',
    architectureDetails: 'Agent State Machine: Perception Input → Memory (Short-term working context + Long-term episodic/vector) → Planning/Decomposition Engine → Tool Registry (Schema definitions) → Execution Sandbox → Reflection/Critique Loop → Termination Condition.',
    codeOrFlowExample: `Thought: I need to verify if the server is running on port 3000.
Action: execute_command({ "command": "curl http://localhost:3000/health" })
Observation: { "status": "down", "error": "ECONNREFUSED" }
Thought: The service is offline. I must inspect server.log to identify the crash reason.
Action: read_file({ "path": "logs/server.log", "lines": 50 })
... [Repeats loop until termination condition satisfied]`,
    applications: [
      'Automated software engineering and bug fixing (e.g. SWE-bench benchmarks)',
      'Complex multi-source competitive intelligence research and report writing',
      'Autonomous IT operations, infrastructure troubleshooting, and incident response',
      'Automated end-to-end web browser testing and form interaction'
    ],
    whenToUse: [
      'When solving multi-step tasks that require dynamic discovery and feedback loops',
      'When integrating with external APIs, databases, file systems, and bash runtimes',
      'When the workflow path cannot be hardcoded in advance due to runtime branch variations'
    ],
    whenNotToUse: [
      'When the workflow is completely deterministic and linear (use standard scripts or Zapier/n8n)',
      'When infinite loop risk or unbounded latency is unacceptable for consumer synchronous requests',
      'When zero budget exists for multiple LLM reasoning step iterations'
    ],
    limitations: [
      'Vulnerability to compounding error cascades: a wrong assumption on step 2 ruins step 10',
      'Significant token consumption and cost multiplying by the number of reasoning loops',
      'Can get stuck in repetitive action loops without robust escape conditions'
    ],
    commonMistakes: [
      'Granting agents unconstrained bash or file access without a sandboxed container runtime',
      'Omitting maximum step boundaries and spending budget limits',
      'Providing tool descriptions that lack precise parameter typing and usage constraints'
    ],
    securityConsiderations: [
      'Excessive agency: granting delete/write permissions that the agent executes erroneously',
      'Remote code execution via malicious prompt injection in retrieved tool outputs',
      'Credential theft when the agent is allowed to access environment variables'
    ],
    related: {
      concepts: ['llms', 'rag', 'inference'],
      frameworks: ['langgraph', 'crewai'],
      architectures: ['tool-using-agent', 'multi-agent-orchestrator'],
      projects: ['research-agent']
    },
    sources: [
      { title: 'Yao et al.: ReAct: Synergizing Reasoning and Acting in Language Models (ICLR 2023)', url: 'https://arxiv.org/abs/2210.03629', type: 'paper' },
      { title: 'Anthropic: Building Effective Agents Guide', url: 'https://www.anthropic.com/research/building-effective-agents', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-embeddings',
    title: 'Embeddings & Vector Spaces',
    slug: 'embeddings',
    category: 'Mechanism',
    difficulty: 'Builder',
    summary: 'Dense mathematical representations of data in a continuous multi-dimensional geometric space where conceptual similarity corresponds to spatial proximity.',
    mentalModel: 'A cosmic map of ideas. Every word, sentence, or image is assigned coordinates in an N-dimensional galaxy (e.g. 1536 dimensions). The coordinates for "king" and "queen" are close together, and the vector vector("king") - vector("man") + vector("woman") points directly toward vector("queen").',
    whyItExists: 'Computers cannot calculate the semantic meaning of raw text strings. By projecting text into dense mathematical vectors, semantic relationships become computable via geometric distance formulas like cosine similarity.',
    howItWorks: 'Trained via contrastive learning objectives (e.g., InfoNCE loss) where semantically similar pairs are pulled together and dissimilar pairs are pushed apart in the vector space. During inference, inputs produce fixed-length float32 vectors.',
    architectureDetails: 'Raw Text Input → Tokenizer → Transformer Encoder Backbone → Mean Pooling Layer → L2 Normalization → Float32 Embedding Vector (Dimensions: 384 to 3072) → Inverted File (IVF) / HNSW Vector Index.',
    codeOrFlowExample: `// Cosine Similarity Formula between Vectors A and B
similarity = (A · B) / (||A|| * ||B||)

// Distance in 2D toy space:
"Doctor"  -> [0.82, 0.45]
"Surgeon" -> [0.85, 0.48]  // Distance ~ 0.04 (Extremely close)
"Bicycle" -> [-0.60, 0.12] // Distance ~ 1.45 (Distant)`,
    applications: [
      'Semantic search and vector retrieval in RAG architectures',
      'Deduplication and clustering of massive unstructured document datasets',
      'Recommendation systems matching user preferences to item embeddings',
      'Zero-shot classification and anomaly detection'
    ],
    whenToUse: [
      'When searching by meaning and conceptual intent rather than exact keyword matches',
      'When building semantic similarity matching, clustering, or recommendations',
      'As the foundation layer for vector databases in RAG applications'
    ],
    whenNotToUse: [
      'When searching for exact identifiers, SKU numbers, phone numbers, or code error codes (use BM25 / inverted index)',
      'When working on tabular data where raw numerical values carry strict arithmetic meaning'
    ],
    limitations: [
      'Loss of fine-grained negation nuances (e.g. "hotels with pools" vs "hotels without pools" often cluster together)',
      'Information bottleneck: compressing a 2000-word document into a single 1536-float vector discards detailed nuances',
      'High index memory consumption for billions of dense floating-point vectors'
    ],
    commonMistakes: [
      'Comparing vectors generated by different embedding models (vector spaces are incompatible)',
      'Embedding massive documents as a single chunk rather than semantic paragraphs',
      'Neglecting vector quantization (INT8/binary) when scaling to millions of embeddings'
    ],
    securityConsiderations: [
      'Embedding inversion attacks reconstructing original sensitive sentences from vector coordinates',
      'Adversarial drift inducing false nearest-neighbor collisions'
    ],
    related: {
      concepts: ['rag', 'llms', 'machine-learning'],
      frameworks: ['llamaindex'],
      projects: ['offline-semantic-search']
    },
    sources: [
      { title: 'Karpukhin et al.: Dense Passage Retrieval for Open-Domain Question Answering (EMNLP 2020)', url: 'https://arxiv.org/abs/2004.04906', type: 'paper' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-inference',
    title: 'Inference Optimization',
    slug: 'inference',
    category: 'Mechanism',
    difficulty: 'Engineer',
    summary: 'The hardware and algorithmic engineering techniques required to execute pre-trained models with minimal latency, maximum throughput, and optimal VRAM efficiency.',
    mentalModel: 'Optimizing a Formula 1 engine for production mileage. Training is building the engine; inference optimization is tuning fuel delivery, aerodynamics, and weight so the car runs at maximum speed with minimal fuel consumption per customer lap.',
    whyItExists: 'Serving large models at scale is economically punishing. Naive inference consumes tens of gigabytes of VRAM per concurrent user and bottlenecks on memory bandwidth, resulting in slow generation and high server bills.',
    howItWorks: 'Addresses the memory-bandwidth bottleneck of autoregressive generation using techniques such as KV-cache paging (PagedAttention), model quantization (FP8, INT4, AWQ, GPTQ), speculative decoding, tensor parallelism, and continuous batching.',
    architectureDetails: 'Continuous Request Scheduler → PagedAttention Engine → Quantized Weights (FP8 / AWQ) → FlashAttention Kernel → Speculative Draft Model → High-Speed GPU Tensor Cores (H100/A100 SRAM).',
    codeOrFlowExample: `// KV-Cache Memory Impact for Batch B, Sequence Length S:
KV_Cache_Bytes = 2 * Layers * Hidden_Dim * (Key_Length + Val_Length) * Precision
PagedAttention: Divides KV cache into non-contiguous physical blocks (paging),
reducing memory waste from 60-80% fragmentation down to <4%.`,
    applications: [
      'High-throughput LLM API serving platforms (e.g., vLLM, TensorRT-LLM, TGI)',
      'Edge deployment of open models on consumer laptops (e.g., Ollama, llama.cpp)',
      'Real-time low-latency voice and conversational agent backends (<200ms TTFT)',
      'Cost reduction for enterprise self-hosted model deployments'
    ],
    whenToUse: [
      'When deploying open-weight models in production environments with high concurrency',
      'When reducing Time-To-First-Token (TTFT) and maximizing Tokens-Per-Second (TPS)',
      'When running models on edge or consumer hardware with strict VRAM limits'
    ],
    whenNotToUse: [
      'During the experimental model training or fine-tuning phase where FP32/BF16 weights and full gradients are required',
      'When using managed commercial APIs (OpenAI, Anthropic) where inference optimization is handled by the provider'
    ],
    limitations: [
      'Aggressive quantization (<4 bits) can degrade reasoning accuracy and perplexity',
      'Speculative decoding requires pairing complementary draft and target models',
      'Hardware-specific kernel dependencies (CUDA, ROCm, Metal)'
    ],
    commonMistakes: [
      'Assuming GPU compute is the primary bottleneck for token generation when memory bandwidth is the actual constraint',
      'Running naive batch inference that halts for the slowest sequence rather than using continuous batching',
      'Not benchmarking TTFT separately from inter-token latency (ITL)'
    ],
    securityConsiderations: [
      'Side-channel attacks measuring memory access timing to infer prompt token lengths',
      'VRAM memory leakage between un-isolated tenant requests on shared instances'
    ],
    related: {
      concepts: ['llms', 'foundation-models'],
      frameworks: ['vllm', 'ollama'],
      projects: ['local-rag-cli']
    },
    sources: [
      { title: 'Kwon et al.: Efficient Memory Management for Large Language Model Serving with PagedAttention (SOSP 2023)', url: 'https://arxiv.org/abs/2309.06180', type: 'paper' },
      { title: 'vLLM Architecture Documentation', url: 'https://docs.vllm.ai/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-fine-tuning',
    title: 'Fine-Tuning & Alignment',
    slug: 'fine-tuning',
    category: 'Mechanism',
    difficulty: 'Engineer',
    summary: 'The process of taking a pre-trained foundation model and updating a subset or all of its parameters on curated domain data or alignment feedback to adapt behavior, style, or task execution.',
    mentalModel: 'Specialized residency after general medical school. The base pre-training teaches the model general anatomy, biology, and vocabulary; fine-tuning trains it in cardiology protocols and clinical bedside manner.',
    whyItExists: 'Prompting alone cannot reliably instill complex custom token output formats, specialized domain nomenclature, or idiosyncratic organizational formatting at minimal latency and cost.',
    howItWorks: 'Full parameter fine-tuning updates all model weights. Parameter-Efficient Fine-Tuning (PEFT), primarily LoRA (Low-Rank Adaptation), freezes the original weights and trains small low-rank decomposition matrices attached to attention layers, reducing trainable parameters by over 99%.',
    architectureDetails: 'Pretrained Base Weights (Frozen W_0) + Adaptor Matrix ΔW = B · A (Rank r << d) → Forward Pass: h = W_0·x + (B·A·x)·(α/r) → Loss Calculation on Target Outputs → Backpropagation updating only A and B.',
    codeOrFlowExample: `// LoRA Mathematical Principle
W_updated = W_base + (B × A) * (alpha / r)
// Where W_base is (4096 x 4096) -> 16M params (Frozen)
// A is (16 x 4096), B is (4096 x 16) -> 131k params (Trained)`,
    applications: [
      'Aligning open models to follow proprietary enterprise JSON schemas reliably',
      'Domain specialization in medical, legal, or financial document analysis',
      'Stylistic persona and tone enforcement for gaming and brand avatars',
      'Distillation of heavy frontier model capabilities into compact 7B/8B models'
    ],
    whenToUse: [
      'When teaching a model a specialized style, output syntax, or complex multi-turn behavior',
      'When minimizing prompt token overhead by baking instructions into the model weights',
      'When distilling reasoning behaviors from larger models to smaller edge models'
    ],
    whenNotToUse: [
      'When seeking to provide the model with dynamic, changing factual information (use RAG instead)',
      'When you have fewer than a few hundred high-quality, verified instruction pairs'
    ],
    limitations: [
      'Risk of catastrophic forgetting: the model loses general reasoning capability while specializing',
      'Does not solve hallucinations for facts absent from the training data',
      'Requires substantial operational infrastructure for training, evaluation, and checkpoint versioning'
    ],
    commonMistakes: [
      'Fine-tuning to teach factual knowledge rather than behavioral alignment or formatting',
      'Training on low-quality, noisy synthetic data without automated validation filters',
      'Neglecting a comprehensive evaluation benchmark to detect regression on core tasks'
    ],
    securityConsiderations: [
      'Fine-tuning alignment degradation: fine-tuning on harmless datasets can inadvertently erode safety refusals',
      'Data poisoning attacks during fine-tuning data aggregation'
    ],
    related: {
      concepts: ['foundation-models', 'llms', 'inference'],
      frameworks: ['transformers', 'pytorch'],
      projects: ['guardrails-evaluator']
    },
    sources: [
      { title: 'Hu et al.: LoRA: Low-Rank Adaptation of Large Language Models (ICLR 2022)', url: 'https://arxiv.org/abs/2106.09685', type: 'paper' },
      { title: 'Ouyang et al.: Training language models to follow instructions with human feedback (InstructGPT)', url: 'https://arxiv.org/abs/2203.02155', type: 'paper' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'c-ai-safety',
    title: 'AI Safety & Alignment',
    slug: 'ai-safety',
    category: 'System',
    difficulty: 'Builder',
    summary: 'The engineering discipline and research field dedicated to ensuring that AI systems act in accordance with human intent, ethical guidelines, reliability standards, and operational security.',
    mentalModel: 'Seatbelts, anti-lock brakes, crash crumple zones, and air traffic control for the AI vehicle. Speed and horsepower (capabilities) are useless and dangerous without steering, containment, and verified stopping mechanisms (safety).',
    whyItExists: 'Autonomous and generative systems operate probabilistically. Without safety engineering, systems can generate hazardous biological/cyber instructions, hallucinate critical medical errors, leak private credentials, or execute destructive actions.',
    howItWorks: 'Combines multi-layer defense-in-depth: Pre-training data curation → Constitutional AI and alignment training (RLHF/DPO) → Runtime input guardrails (prompt injection filters) → Execution sandboxing → Output validation schemas and automated evaluators.',
    architectureDetails: 'User Input → Inbound Security Guardrail (Prompt Injection / Jailbreak Filter) → System Prompt Boundary Protection → Model Execution → Outbound Content Filter (PII / Secrets / Toxic Regex) → Human Oversight Policy Engine → Client Delivery.',
    codeOrFlowExample: `// Layered Defense in Depth
Input Request
    ↓
[Layer 1] Inbound Guardrail: Is prompt injection or jailbreak detected?
    ↓
[Layer 2] Model Alignment: System instructions + Constitutional RLHF
    ↓
[Layer 3] Tool Sandbox: Strict permissions & confirmation dialogs
    ↓
[Layer 4] Outbound Guardrail: PII detection, secret exfiltration check
    ↓
Verified Safe Response`,
    applications: [
      'Enterprise automated compliance and PII redaction pipelines',
      'Hardened customer-facing conversational interfaces resilient to adversarial jailbreaks',
      'Sandboxed execution environments for AI autonomous coding agents',
      'Safety benchmarks and red-teaming evaluations prior to model release'
    ],
    whenToUse: [
      'In any production application exposing foundation models to user-controlled inputs or external data',
      'When agents have access to tools that modify databases, execute code, or dispatch emails',
      'In high-stakes domains: healthcare, financial lending, critical infrastructure, and legal analysis'
    ],
    whenNotToUse: [
      'Never skip safety in production environments'
    ],
    limitations: [
      'Safety guardrails can introduce false-positive refusals on legitimate benign edge cases',
      'Adversarial red-teaming is an ongoing arms race against novel jailbreak vectors',
      'Slight latency overhead added by inbound and outbound evaluation passes'
    ],
    commonMistakes: [
      'Relying solely on system prompt instructions ("Do not do anything bad") as your only security layer',
      'Passing unsanitized web scrapes directly into agent prompt contexts',
      'Granting write/delete database access to agents without human confirmation checkpoints'
    ],
    securityConsiderations: [
      'Direct and indirect prompt injection vectors',
      'Data exfiltration via side-channel markdown image render tags',
      'Server-Side Request Forgery (SSRF) via unconstrained tool fetch calls'
    ],
    related: {
      concepts: ['agents', 'llms', 'foundation-models'],
      architectures: ['tool-using-agent'],
      projects: ['guardrails-evaluator']
    },
    sources: [
      { title: 'OWASP Top 10 for Large Language Model Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', type: 'standard' },
      { title: 'Bai et al.: Constitutional AI: Harmlessness from AI Feedback (Anthropic)', url: 'https://arxiv.org/abs/2212.08073', type: 'paper' }
    ],
    lastVerified: '2025-02-15'
  }
];
