import { TimelineMilestone } from '@/types';

export const TIMELINE: TimelineMilestone[] = [
  {
    id: 't-1950',
    year: '1950',
    title: 'The Turing Test & "Computing Machinery and Intelligence"',
    category: 'Foundation',
    significance: 'Introduced the foundational operational test for machine intelligence and imitation game concepts.',
    description: 'Alan Turing published his seminal paper asking "Can machines think?", establishing the imitation game as an empirical benchmark for artificial intelligence.',
    sources: 'Mind, Vol. 59, No. 236, pp. 433-460'
  },
  {
    id: 't-1956',
    year: '1956',
    title: 'The Dartmouth Workshop',
    category: 'Foundation',
    significance: 'Coining the term "Artificial Intelligence" and launching AI as an independent scientific field.',
    description: 'Organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon at Dartmouth College, establishing the academic discipline dedicated to simulating human intelligence.',
    sources: 'Dartmouth Summer Research Project on Artificial Intelligence'
  },
  {
    id: 't-1986',
    year: '1986',
    title: 'Backpropagation & Neural Representation Revival',
    category: 'Deep Learning',
    significance: 'Provided the mathematical foundation for efficiently computing gradients across multi-layer neural networks.',
    description: 'David Rumelhart, Geoffrey Hinton, and Ronald Williams published their Nature paper demonstrating how backpropagation computes internal representations in hidden neural layers.',
    sources: 'Nature 323, 533-536 (1986)'
  },
  {
    id: 't-2012',
    year: '2012',
    title: 'AlexNet & The Deep Learning Inflection Point',
    category: 'Deep Learning',
    significance: 'Proved the massive scalability of deep convolutional neural networks accelerated by GPUs.',
    description: 'Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton entered AlexNet in ImageNet LSVRC-2012, slashing image classification error rates from 26% to 15.3%, igniting the modern deep learning boom.',
    sources: 'NeurIPS 2012: ImageNet Classification with Deep Convolutional Neural Networks'
  },
  {
    id: 't-2017',
    year: '2017',
    title: '"Attention Is All You Need" & The Transformer',
    category: 'Transformer',
    significance: 'Eliminated recurrent architectures (RNN/LSTM) in favor of parallelized multi-head self-attention.',
    description: 'Researchers at Google Brain and Google Research introduced the Transformer architecture, which became the universal structural backbone for modern LLMs, vision transformers, and multimodal models.',
    sources: 'NeurIPS 2017 (Vaswani et al., arXiv:1706.03762)'
  },
  {
    id: 't-2020',
    year: '2020',
    title: 'GPT-3 & In-Context Few-Shot Learning',
    category: 'GenAI',
    significance: 'Demonstrated that scaling autoregressive models produces emergent zero-shot and few-shot reasoning abilities.',
    description: 'OpenAI published results on the 175-billion-parameter GPT-3 model, revealing that scaling pre-training enables models to perform downstream tasks via prompting alone without parameter updates.',
    sources: 'NeurIPS 2020 (Brown et al., arXiv:2005.14165)'
  },
  {
    id: 't-2022-diff',
    year: '2022',
    title: 'Latent Diffusion Models & Generative Image Explosion',
    category: 'GenAI',
    significance: 'Made high-resolution image synthesis computationally accessible on consumer GPUs.',
    description: 'Rombach et al. and Stability AI released Latent Diffusion (Stable Diffusion), demonstrating that operating in compressed latent spaces allows consumer GPUs to synthesize photorealistic art.',
    sources: 'CVPR 2022 (Rombach et al., arXiv:2112.10752)'
  },
  {
    id: 't-2022-chat',
    year: 'Late 2022',
    title: 'ChatGPT & Conversational RLHF Alignment',
    category: 'GenAI',
    significance: 'Brought conversational generative AI to over 100 million global users in months.',
    description: 'OpenAI released ChatGPT, demonstrating that fine-tuning foundation models with Reinforcement Learning from Human Feedback (RLHF) produced intuitive conversational alignment.',
    sources: 'OpenAI System Documentation & InstructGPT Paper'
  },
  {
    id: 't-2024',
    year: '2024',
    title: 'Native Multimodality & Million-Token Context Windows',
    category: 'GenAI',
    significance: 'Expanded LLM perception to hours of video and audio with millions of tokens in a single prompt.',
    description: 'Releases of Google Gemini 1.5/2.0, OpenAI GPT-4o, and Anthropic Claude 3.5 introduced native multimodal processing, million-token context retrieval, and computer use capability.',
    sources: 'Technical reports from Google DeepMind, Anthropic, and OpenAI'
  },
  {
    id: 't-2025',
    year: '2025',
    title: 'Test-Time Compute & Pure RL Reasoning (DeepSeek-R1, o1)',
    category: 'Agents',
    significance: 'Shifted performance scaling from purely pre-training parameters to test-time reasoning compute.',
    description: 'The emergence of models like DeepSeek-R1 and OpenAI o-series proved that spending dynamic compute during inference via reinforcement-learned chain-of-thought dramatically outperforms standard next-token predictions on complex math, science, and coding.',
    sources: 'DeepSeek-R1 Technical Report (arXiv:2501.12948)'
  }
];
