import { GlossaryTerm } from '@/types';

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Token & Tokenization',
    slug: 'tokenization',
    shortDefinition: 'The atomic units of text (subwords, characters, or bytes) processed by language models.',
    technicalExplanation: 'Text is mapped to integer indices via algorithms like Byte-Pair Encoding (BPE) or WordPiece. In English, 1 token is roughly 0.75 words or ~4 characters.',
    example: '"Artificial intelligence" is tokenized into ["Art", "ificial", " intelligence"] (3 tokens).',
    difficulty: 'Beginner',
    category: 'Foundations',
    relatedTerms: ['Context Window', 'Vocabulary', 'Byte-Pair Encoding'],
    sources: 'Sennrich et al., Neural Machine Translation of Rare Words with Subword Units (ACL 2016)'
  },
  {
    term: 'Self-Attention',
    slug: 'self-attention',
    shortDefinition: 'The mathematical mechanism enabling models to weigh the contextual importance of all words in a sequence relative to each other.',
    technicalExplanation: 'Computes Query (Q), Key (K), and Value (V) projections. Attention weights are computed via Softmax((Q · K^T) / sqrt(d_k)) multiplied by V, capturing long-range dependencies in parallel.',
    example: 'In "The bank of the river overflowed", self-attention weights "river" heavily when interpreting "bank", distinguishing it from a financial institution.',
    difficulty: 'Intermediate',
    category: 'Architecture',
    relatedTerms: ['Transformer', 'KV Cache', 'FlashAttention'],
    sources: 'Vaswani et al., Attention Is All You Need (NeurIPS 2017)'
  },
  {
    term: 'KV Cache',
    slug: 'kv-cache',
    shortDefinition: 'A GPU memory buffer storing computed Key and Value tensors from previous tokens during autoregressive generation.',
    technicalExplanation: 'Prevents recomputing attention states for all past tokens at every generation step, reducing computational complexity per generated token from quadratic O(N^2) to linear O(N) at the cost of high VRAM memory consumption.',
    example: 'Generating 2,000 tokens sequentially stores past K and V matrices in VRAM; PagedAttention partitions this memory into non-contiguous blocks to avoid memory fragmentation.',
    difficulty: 'Advanced',
    category: 'Inference',
    relatedTerms: ['Inference Optimization', 'PagedAttention', 'Self-Attention'],
    sources: 'Kwon et al., PagedAttention (SOSP 2023)'
  },
  {
    term: 'Temperature',
    slug: 'temperature',
    shortDefinition: 'A sampling hyperparameter that scales logits before softmax, controlling randomness in generated text.',
    technicalExplanation: 'Logits are divided by temperature T: P(i) = exp(z_i / T) / ∑ exp(z_j / T). As T approaches 0, distribution approaches argmax (greedy deterministic). Higher T flattens the distribution, increasing diversity and entropy.',
    example: 'T=0.0 for strict JSON extraction and SQL queries; T=0.7 for creative brainstorming and conversational fluidity.',
    difficulty: 'Beginner',
    category: 'Inference',
    relatedTerms: ['Top-p Sampling', 'Logits', 'Softmax'],
    sources: 'Goodfellow et al., Deep Learning Textbook'
  },
  {
    term: 'Top-p (Nucleus) Sampling',
    slug: 'top-p-sampling',
    shortDefinition: 'A dynamic sampling method choosing only from the smallest set of top tokens whose cumulative probability exceeds threshold p.',
    technicalExplanation: 'Dynamically truncates the tail of improbable tokens based on context certainty, preventing bizarre low-probability tokens without using a rigid fixed cutoff like top-k.',
    example: 'With p=0.9, the model only considers the most probable tokens accounting for 90% of the distribution.',
    difficulty: 'Intermediate',
    category: 'Inference',
    relatedTerms: ['Temperature', 'Tokenization'],
    sources: 'Holtzman et al., The Curious Case of Neural Text Degeneration (ICLR 2020)'
  },
  {
    term: 'LoRA (Low-Rank Adaptation)',
    slug: 'lora',
    shortDefinition: 'A parameter-efficient fine-tuning technique that freezes base model weights and injects trainable low-rank matrices.',
    technicalExplanation: 'Decomposes weight updates ΔW into low-rank matrices B · A where rank r << dimension d. Reduces trainable parameters and optimizer memory by 90-99% while achieving performance competitive with full fine-tuning.',
    example: 'Fine-tuning a 70B parameter model with LoRA rank 16 trains ~100M parameters instead of all 70 billion, fitting within modest GPU VRAM budgets.',
    difficulty: 'Intermediate',
    category: 'Training',
    relatedTerms: ['Fine-Tuning', 'PEFT', 'Weights'],
    sources: 'Hu et al., LoRA: Low-Rank Adaptation of Large Language Models (ICLR 2022)'
  },
  {
    term: 'Mixture of Experts (MoE)',
    slug: 'moe',
    shortDefinition: 'An architectural design where multiple specialized expert networks replace dense feed-forward layers, with a router activating only a subset per token.',
    technicalExplanation: 'Decouples model parameter capacity from compute cost. A model might have 671 billion parameters total, but route each token to only 2 or 8 experts (e.g. 37B active parameters), providing massive capability at low FLOPs per token.',
    example: 'DeepSeek-R1 and Mixtral 8x7B route each token through a gating router that activates only top-k expert subnetworks.',
    difficulty: 'Advanced',
    category: 'Architecture',
    relatedTerms: ['Transformer', 'Inference', 'DeepSeek-R1'],
    sources: 'Shazeer et al., Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer'
  },
  {
    term: 'Vector Embeddings',
    slug: 'vector-embeddings',
    shortDefinition: 'Dense arrays of floating-point numbers that capture the conceptual meaning and relationships of text, audio, or images.',
    technicalExplanation: 'Trained to preserve semantic similarity: distance metrics (cosine similarity, dot product) between vectors correspond directly to conceptual relevance in high-dimensional latent space.',
    example: 'Vectors for "physician" and "doctor" will have cosine similarity > 0.92, while "physician" and "tractor" will have low similarity.',
    difficulty: 'Beginner',
    category: 'Foundations',
    relatedTerms: ['Vector Database', 'Cosine Similarity', 'RAG'],
    sources: 'Mikolov et al., Efficient Estimation of Word Representations in Vector Space'
  },
  {
    term: 'Context Window',
    slug: 'context-window',
    shortDefinition: 'The maximum token sequence length (prompt + generated response) that a language model can process in a single invocation.',
    technicalExplanation: 'Bounded by attention memory complexity and positional encoding schemes (such as RoPE with YaRN extrapolation). Modern models range from 8k up to 1M+ tokens.',
    example: 'Gemini 2.0 Flash features a 1-million-token context window, allowing an entire codebase or hour-long video to be passed into one query.',
    difficulty: 'Beginner',
    category: 'Architecture',
    relatedTerms: ['Tokens', 'KV Cache', 'Attention Mechanism'],
    sources: 'Google DeepMind Gemini Technical Reports'
  },
  {
    term: 'FlashAttention',
    slug: 'flash-attention',
    shortDefinition: 'An exact, IO-aware algorithm that speeds up attention and reduces memory usage by optimizing GPU SRAM read/write access.',
    technicalExplanation: 'Tiles attention computation to operate directly within fast GPU on-chip SRAM cache without materializing the massive N×N intermediate attention matrix in slower HBM memory, achieving 2-4x speedups with zero loss of mathematical precision.',
    example: 'Modern training and inference runtimes (PyTorch 2.0, vLLM) utilize FlashAttention-2 / FlashAttention-3 kernels by default.',
    difficulty: 'Advanced',
    category: 'Inference',
    relatedTerms: ['Inference Optimization', 'Self-Attention', 'vLLM'],
    sources: 'Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (NeurIPS 2022)'
  }
];
