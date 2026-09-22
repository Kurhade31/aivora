import { Model } from '@/types';

export const MODELS: Model[] = [
  {
    id: 'm-deepseek-r1',
    name: 'DeepSeek-R1',
    slug: 'deepseek-r1',
    provider: 'DeepSeek',
    category: 'reasoning',
    modalities: ['Text', 'Code'],
    capabilities: [
      'Pure reinforcement learning reasoning tokens',
      'Complex mathematical problem solving & theorem verification',
      'Advanced algorithm synthesis and self-debugging',
      'Open-weights architecture with permissive MIT licensing'
    ],
    deployment: 'hybrid',
    license: 'MIT License',
    contextWindow: '128,000 tokens',
    releaseDate: '2025-01-20',
    architectureType: 'Mixture of Experts (MoE) with Multi-Head Latent Attention (MLA)',
    parameterCount: '671B total (37B active per token)',
    knownLimitations: [
      'Extended time-to-first-token due to lengthy test-time chain-of-thought generation',
      'Language mixing occasionally observed during intermediate thinking traces',
      'Requires multi-GPU nodes (e.g. 8x H100/A100) or high quantization for local full-parameter execution'
    ],
    officialSources: [
      { title: 'DeepSeek-R1 Technical Report (arXiv:2501.12948)', url: 'https://arxiv.org/abs/2501.12948', type: 'paper' },
      { title: 'DeepSeek Official GitHub Repository', url: 'https://github.com/deepseek-ai/DeepSeek-R1', type: 'repo' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'm-claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    slug: 'claude-3-5-sonnet',
    provider: 'Anthropic',
    category: 'frontier',
    modalities: ['Text', 'Code', 'Vision'],
    capabilities: [
      'State-of-the-art coding benchmark performance (SWE-bench)',
      'Computer use & automated desktop GUI navigation',
      'Complex architectural diagram and visual document analysis',
      'Multi-turn autonomous tool orchestration'
    ],
    deployment: 'api',
    license: 'Proprietary Commercial API',
    contextWindow: '200,000 tokens',
    releaseDate: '2024-10-22',
    architectureType: 'Dense Multimodal Transformer',
    parameterCount: 'Not publicly specified',
    knownLimitations: [
      'Cloud API only; no local on-premise weight distribution',
      'Token rate limits and commercial pricing per million input/output tokens',
      'Strict content filtering can occasionally trigger false positive safety refusals'
    ],
    officialSources: [
      { title: 'Anthropic Claude 3.5 Sonnet Model Card & Benchmarks', url: 'https://www.anthropic.com/news/claude-3-5-sonnet', type: 'official_doc' },
      { title: 'Anthropic API Documentation', url: 'https://docs.anthropic.com/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'm-llama-3-3-70b',
    name: 'Llama 3.3 70B Instruct',
    slug: 'llama-3-3-70b',
    provider: 'Meta AI',
    category: 'open-weights',
    modalities: ['Text', 'Code'],
    capabilities: [
      'Frontier-grade instruction following in open weights',
      'Robust multilingual translation across 8+ languages',
      'High performance tool calling and zero-shot reasoning',
      'Efficient execution on dual RTX 4090 or single 80GB GPU at 4-bit quantization'
    ],
    deployment: 'hybrid',
    license: 'Llama 3.3 Community License',
    contextWindow: '128,000 tokens',
    releaseDate: '2024-12-06',
    architectureType: 'Dense Autoregressive Transformer with Grouped-Query Attention (GQA)',
    parameterCount: '70B parameters',
    knownLimitations: [
      'Commercial distribution restricted for platforms exceeding 700M monthly active users without Meta approval',
      'Dense architecture requires higher continuous VRAM than comparable sparse MoE models during high concurrency',
      'No native audio or direct video understanding without external adapters'
    ],
    officialSources: [
      { title: 'Meta Llama 3.3 Announcement & Hugging Face Checkpoint', url: 'https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct', type: 'official_doc' },
      { title: 'The Llama 3 Herd of Models Research Paper', url: 'https://arxiv.org/abs/2407.21783', type: 'paper' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'm-gpt-4o',
    name: 'GPT-4o',
    slug: 'gpt-4o',
    provider: 'OpenAI',
    category: 'frontier',
    modalities: ['Text', 'Code', 'Vision', 'Audio'],
    capabilities: [
      'Native end-to-end multimodal tokenization across speech, vision, and text',
      'Sub-300ms real-time audio conversation latency',
      'High-throughput structured JSON schema output enforcement',
      'Extensive integration with external function calling and assistants ecosystem'
    ],
    deployment: 'api',
    license: 'Proprietary Commercial API',
    contextWindow: '128,000 tokens',
    releaseDate: '2024-05-13',
    architectureType: 'Omni-modal Transformer',
    parameterCount: 'Not publicly specified',
    knownLimitations: [
      'Black-box cloud service with periodic subtle behavioral shifts across model snapshots',
      'Data privacy requires explicit enterprise zero-data-retention agreements',
      'Real-time voice API entails specialized WebSocket protocols with distinct pricing tiers'
    ],
    officialSources: [
      { title: 'OpenAI GPT-4o Launch Announcement & System Card', url: 'https://openai.com/index/hello-gpt-4o/', type: 'official_doc' },
      { title: 'OpenAI API Reference Documentation', url: 'https://platform.openai.com/docs', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'm-gemini-2-0-flash',
    name: 'Gemini 2.0 Flash',
    slug: 'gemini-2-0-flash',
    provider: 'Google DeepMind',
    category: 'frontier',
    modalities: ['Text', 'Code', 'Vision', 'Audio', 'Video'],
    capabilities: [
      'Massive 1,000,000 token context window with high recall accuracy',
      'Low-latency multimodal streaming and tool invocation',
      'Native native video comprehension and temporal grounding',
      'Direct multimodal function calling'
    ],
    deployment: 'api',
    license: 'Proprietary Commercial API',
    contextWindow: '1,048,576 tokens',
    releaseDate: '2024-12-11',
    architectureType: 'Sparse Multimodal Transformer on Google TPU v5e/v5p infrastructure',
    parameterCount: 'Not publicly specified',
    knownLimitations: [
      'Cloud-only execution tied to Google Cloud Platform or Google AI Studio',
      'High context usage increases latency proportionally when processing hours of video',
      'Free tier rate limits are constrained during peak load'
    ],
    officialSources: [
      { title: 'Google DeepMind Gemini 2.0 Technical Overview', url: 'https://deepmind.google/technologies/gemini/', type: 'official_doc' },
      { title: 'Google AI Studio Documentation', url: 'https://ai.google.dev/gemini-api/docs', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'm-qwen-2-5-coder-32b',
    name: 'Qwen 2.5 Coder 32B Instruct',
    slug: 'qwen-2-5-coder-32b',
    provider: 'Alibaba Cloud',
    category: 'open-weights',
    modalities: ['Text', 'Code'],
    capabilities: [
      'Exceptional coding benchmark scores rivaling proprietary 70B+ models',
      '128k context window support with YaRN positional extrapolation',
      'Support for 92+ programming languages and code refactoring workflows',
      'Permissive Apache 2.0 open-source license'
    ],
    deployment: 'hybrid',
    license: 'Apache 2.0',
    contextWindow: '128,000 tokens',
    releaseDate: '2024-11-12',
    architectureType: 'Dense Autoregressive Transformer with RoPE and SwiGLU',
    parameterCount: '32.5B parameters',
    knownLimitations: [
      'Requires ~20GB VRAM at 4-bit quantization or ~64GB at BF16 for inference',
      'Specialized primarily for code and math; general creative writing is less nuanced than general models',
      'Slightly higher prompt latency on legacy GPU architectures without FP8 acceleration'
    ],
    officialSources: [
      { title: 'Qwen 2.5 Coder Technical Report (arXiv:2409.12186)', url: 'https://arxiv.org/abs/2409.12186', type: 'paper' },
      { title: 'Qwen Official GitHub Repository', url: 'https://github.com/QwenLM/Qwen2.5-Coder', type: 'repo' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'm-flux-1-dev',
    name: 'FLUX.1 [dev]',
    slug: 'flux-1-dev',
    provider: 'Black Forest Labs',
    category: 'vision',
    modalities: ['Vision'],
    capabilities: [
      'Photorealistic visual fidelity and complex multi-subject composition',
      'Exceptional text rendering and legible typography within generated images',
      'High structural adherence to complex prompt specifications',
      'Open weights for non-commercial research and development'
    ],
    deployment: 'hybrid',
    license: 'Non-Commercial FLUX.1 [dev] License',
    contextWindow: 'Not applicable (Diffusion/Flow Matching)',
    releaseDate: '2024-08-01',
    architectureType: '12B Parameter Rectified Flow Transformer with T5 and CLIP text conditioning',
    parameterCount: '12B parameters',
    knownLimitations: [
      'High VRAM requirement (minimum 16-24GB without aggressive offloading/quantization)',
      'Commercial production usage requires separate commercial licensing agreement',
      'Longer inference step time compared to single-step GAN or distillations'
    ],
    officialSources: [
      { title: 'Black Forest Labs FLUX.1 Announcement', url: 'https://blackforestlabs.ai/announcing-black-forest-labs/', type: 'official_doc' },
      { title: 'Hugging Face Model Repository for FLUX.1-dev', url: 'https://huggingface.co/black-forest-labs/FLUX.1-dev', type: 'repo' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 'm-whisper-large-v3',
    name: 'Whisper Large v3',
    slug: 'whisper-large-v3',
    provider: 'OpenAI',
    category: 'audio',
    modalities: ['Audio', 'Text'],
    capabilities: [
      'High-accuracy multilingual automatic speech recognition (ASR)',
      'Acoustic timestamp alignment at word and segment level',
      'Direct speech-to-English translation from 99+ spoken languages',
      'Resilience to background acoustic noise and speaker accents'
    ],
    deployment: 'hybrid',
    license: 'MIT License',
    contextWindow: '30-second sliding acoustic window',
    releaseDate: '2023-11-06',
    architectureType: 'Sequence-to-Sequence Encoder-Decoder Transformer operating on 128-channel log-Mel spectrograms',
    parameterCount: '1.55B parameters',
    knownLimitations: [
      'Sliding window mechanism can produce hallucinations during extended periods of background silence',
      'Does not perform native speaker diarization without pipeline combination (e.g. pyannote-audio)',
      'Higher latency than specialized streaming Conformer models without Faster-Whisper optimizations'
    ],
    officialSources: [
      { title: 'Radford et al.: Robust Speech Recognition via Large-Scale Weak Supervision', url: 'https://arxiv.org/abs/2212.04356', type: 'paper' },
      { title: 'OpenAI Whisper GitHub Repository', url: 'https://github.com/openai/whisper', type: 'repo' }
    ],
    lastVerified: '2025-02-15'
  }
];
