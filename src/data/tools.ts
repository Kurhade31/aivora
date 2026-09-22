import { Tool } from '@/types';

export const TOOLS: Tool[] = [
  {
    id: 't-cursor',
    name: 'Cursor',
    slug: 'cursor',
    job: 'Code',
    problemSolved: 'Accelerates software development by integrating deep codebase-wide indexing, multi-file edits, terminal error fixes, and contextual AI into a native VS Code fork.',
    targetAudience: 'Professional software engineers, full-stack developers, and engineering teams.',
    howItWorks: 'Maintains local embeddings and AST indexes of the entire repository. Uses agentic loops with frontier models (Claude 3.5 Sonnet, GPT-4o) to predict diffs across multiple files and automatically execute terminal tests.',
    requirements: ['Mac, Windows, or Linux desktop environment', 'Active subscription for frontier model queries'],
    tradeoffs: [
      'Proprietary closed-source editor fork requiring migration from standard VS Code',
      'Requires cloud transmission of codebase context chunks unless strictly using local custom API keys',
      'Can generate subtle regression bugs if developer accepts multi-file diffs without careful review'
    ],
    pricingModel: 'Freemium',
    platforms: ['macOS', 'Windows', 'Linux'],
    apiAvailable: false,
    websiteUrl: 'https://cursor.com',
    sources: [
      { title: 'Cursor Official Documentation & Architecture', url: 'https://docs.cursor.com/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 't-perplexity',
    name: 'Perplexity AI',
    slug: 'perplexity',
    job: 'Research',
    problemSolved: 'Replaces traditional link-list search engines with direct, synthesized factual answers backed by verifiable live web citations and academic filtering.',
    targetAudience: 'Researchers, analysts, journalists, students, and engineers seeking quick factual synthesis.',
    howItWorks: 'Converts natural language user queries into multiple targeted search queries, retrieves live web and academic sources via automated scrapers, reranks findings, and synthesizes answers with inline numeric footnote citations.',
    requirements: ['Web browser or mobile app (iOS/Android)', 'Internet connectivity'],
    tradeoffs: [
      'Dependent on third-party live web indexing quality; outdated or SEO-polluted websites can bias synthesis',
      'Occasionally misattributes nuance when source web pages have conflicting factual assertions',
      'Pro queries consume monthly quota limits'
    ],
    pricingModel: 'Freemium',
    platforms: ['Web', 'iOS', 'Android', 'macOS'],
    apiAvailable: true,
    websiteUrl: 'https://perplexity.ai',
    sources: [
      { title: 'Perplexity API & Pro Search Documentation', url: 'https://docs.perplexity.ai/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 't-notebooklm',
    name: 'NotebookLM',
    slug: 'notebooklm',
    job: 'Learn',
    problemSolved: 'Enables deep comprehension of dense uploaded source documents (PDFs, YouTube transcripts, Google Docs) with zero hallucination beyond the provided texts, plus audio podcast generation.',
    targetAudience: 'Students, researchers, academics, legal teams, and knowledge workers processing large document corpuses.',
    howItWorks: 'Uses Google Gemini with strict source-grounding. Embeds uploaded documents into a dedicated notebook workspace and restricts model generation to only what is explicitly contained in the user notes, citing page numbers directly.',
    requirements: ['Google account', 'Uploaded text documents, PDFs, or YouTube links'],
    tradeoffs: [
      'Strict grounding means it cannot supplement answers with external web knowledge outside uploaded notes',
      'Audio Overview generation takes several minutes and cannot be fine-grained edited dynamically',
      'Maximum notebook source limits apply'
    ],
    pricingModel: 'Free',
    platforms: ['Web'],
    apiAvailable: false,
    websiteUrl: 'https://notebooklm.google.com',
    sources: [
      { title: 'Google NotebookLM Product Overview & Help Center', url: 'https://support.google.com/notebooklm', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 't-v0',
    name: 'v0 by Vercel',
    slug: 'v0',
    job: 'Build',
    problemSolved: 'Turns conversational natural language and screenshots into production-grade React, Tailwind CSS, and Shadcn/UI frontend components with live sandbox preview.',
    targetAudience: 'Frontend developers, product designers, and founders rapidly prototyping web applications.',
    howItWorks: 'Fine-tuned code generation models conditioned on Next.js, Tailwind CSS, and React component libraries. Generates complete single-file and multi-file interactive components rendered inside an isolated WebContainer iframe.',
    requirements: ['Modern web browser', 'Vercel account'],
    tradeoffs: [
      'Generates frontend client components; complex backend state management and database logic still require manual engineering',
      'Monthly credit consumption on regeneration and iteration cycles',
      'May produce overly dense inline JSX that requires refactoring for large production design systems'
    ],
    pricingModel: 'Freemium',
    platforms: ['Web'],
    apiAvailable: true,
    websiteUrl: 'https://v0.dev',
    sources: [
      { title: 'Vercel v0 Documentation and FAQ', url: 'https://v0.dev/faq', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 't-claude-code',
    name: 'Claude Code',
    slug: 'claude-code',
    job: 'Code',
    problemSolved: 'An agentic command-line tool that operates directly inside terminal repositories to understand architectures, edit code, run terminal commands, fix git diffs, and manage workflows.',
    targetAudience: 'Terminal-first engineers, DevOps specialists, and backend developers.',
    howItWorks: 'Runs locally as a Node CLI connected to the Anthropic API. Uses tool calling to list directories, grep patterns, read files, run bash commands, inspect test outputs, and iteratively execute edits directly on the local filesystem.',
    requirements: ['Node.js 18+', 'Anthropic API key or Claude Pro subscription', 'Git installed'],
    tradeoffs: [
      'Requires active API token usage which can accumulate costs during large multi-turn codebase traversals',
      'Terminal-based UI without graphical side-by-side diff viewers unless using external git tools',
      'Must be granted explicit bash execution permissions'
    ],
    pricingModel: 'Commercial',
    platforms: ['macOS', 'Linux', 'Windows (WSL)'],
    apiAvailable: false,
    websiteUrl: 'https://claude.ai/code',
    sources: [
      { title: 'Anthropic Claude Code CLI Documentation', url: 'https://docs.anthropic.com/en/docs/agents-and-tools/claude-code', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 't-langsmith',
    name: 'LangSmith',
    slug: 'langsmith',
    job: 'Analyze',
    problemSolved: 'Provides complete observability, tracing, latency profiling, dataset curation, and automated evaluation for production LLM and agent applications.',
    targetAudience: 'AI engineers, MLOps teams, and developers deploying LLMs to production.',
    howItWorks: 'Instruments LLM framework calls (LangChain, LangGraph, OpenAI, Anthropic) via lightweight client SDKs. Captures exact prompt inputs, token counts, execution latency, tool parameters, and outputs in hierarchical trace trees.',
    requirements: ['LangSmith account & API key', 'Python or TypeScript SDK integration in codebase'],
    tradeoffs: [
      'Cloud SaaS dependency for trace logging unless deploying enterprise on-premise Kubernetes cluster',
      'Trace volume costs scale with application query traffic',
      'Network overhead of asynchronous trace telemetry dispatch'
    ],
    pricingModel: 'Freemium',
    platforms: ['Web', 'Python SDK', 'TypeScript SDK'],
    apiAvailable: true,
    websiteUrl: 'https://smith.langchain.com',
    sources: [
      { title: 'LangSmith Documentation and Observability Guide', url: 'https://docs.smith.langchain.com/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 't-n8n',
    name: 'n8n',
    slug: 'n8n',
    job: 'Automate',
    problemSolved: 'Fair-code workflow automation tool allowing developers to visually connect 400+ SaaS APIs with AI agent nodes, custom code, and local LLMs with self-hosting support.',
    targetAudience: 'Developers, automation engineers, IT operations, and businesses needing self-hosted workflow automation.',
    howItWorks: 'Visual node-based workflow editor executing on Node.js. Integrates LangChain/AI agent nodes, tool nodes, memory nodes, and database webhooks to execute conditional automated business workflows.',
    requirements: ['Docker/Node.js environment for self-hosting, or n8n Cloud account'],
    tradeoffs: [
      'Fair-code Sustainable Use License restricts commercial multi-tenant resale of the software',
      'Self-hosting requires maintaining Postgres database backups and worker queue scaling',
      'Visual debugging can become cluttered for extremely intricate non-linear agent state machines'
    ],
    pricingModel: 'Open Source',
    platforms: ['Self-Hosted (Docker)', 'Cloud'],
    apiAvailable: true,
    websiteUrl: 'https://n8n.io',
    sources: [
      { title: 'n8n Official Documentation & AI Starter Kit', url: 'https://docs.n8n.io/', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  },
  {
    id: 't-elevenlabs',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    job: 'Create',
    problemSolved: 'Synthesizes expressive, human-quality multilingual speech, voice cloning, and real-time conversational voice agents with sub-200ms latency.',
    targetAudience: 'Game developers, audio creators, video producers, and conversational AI engineers.',
    howItWorks: 'Proprietary deep learning acoustic models that capture human prosody, emotional inflection, and pacing. Provides REST and streaming WebSocket APIs for real-time bidirectional voice streaming.',
    requirements: ['Web browser or API integration', 'Audio output hardware'],
    tradeoffs: [
      'Proprietary commercial cloud API with per-character billing',
      'Potential ethical abuse requiring voice authentication safeguards and automated watermarking',
      'Local offline inference not available for high-tier models'
    ],
    pricingModel: 'Freemium',
    platforms: ['Web', 'REST API', 'WebSocket'],
    apiAvailable: true,
    websiteUrl: 'https://elevenlabs.io',
    sources: [
      { title: 'ElevenLabs API Documentation and Voice Lab', url: 'https://elevenlabs.io/docs', type: 'official_doc' }
    ],
    lastVerified: '2025-02-15'
  }
];
