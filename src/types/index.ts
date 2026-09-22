export type KnowledgeLevel = 'Zero' | 'Beginner' | 'Builder' | 'Engineer' | 'Advanced' | 'Research';

export interface SourceReference {
  title: string;
  url: string;
  type?: 'official_doc' | 'paper' | 'repo' | 'academic' | 'standard';
}

export interface Concept {
  id: string;
  title: string;
  slug: string;
  category: 'Foundation' | 'Mechanism' | 'Model' | 'System' | 'Application';
  difficulty: KnowledgeLevel;
  summary: string;
  mentalModel: string;
  whyItExists: string;
  howItWorks: string;
  architectureDetails: string;
  codeOrFlowExample: string;
  applications: string[];
  whenToUse: string[];
  whenNotToUse: string[];
  limitations: string[];
  commonMistakes: string[];
  securityConsiderations: string[];
  related: {
    concepts: string[];
    models?: string[];
    tools?: string[];
    frameworks?: string[];
    projects?: string[];
    architectures?: string[];
  };
  sources: SourceReference[];
  lastVerified: string;
}

export interface Model {
  id: string;
  name: string;
  slug: string;
  provider: string;
  category: 'frontier' | 'open-weights' | 'specialized' | 'reasoning' | 'vision' | 'audio';
  modalities: string[];
  capabilities: string[];
  deployment: 'api' | 'local' | 'hybrid';
  license: string;
  contextWindow: string;
  releaseDate: string;
  architectureType: string;
  parameterCount?: string;
  knownLimitations: string[];
  officialSources: SourceReference[];
  lastVerified: string;
}

export type ToolJob = 'Think' | 'Research' | 'Write' | 'Code' | 'Design' | 'Create' | 'Analyze' | 'Automate' | 'Learn' | 'Build';

export interface Tool {
  id: string;
  name: string;
  slug: string;
  job: ToolJob;
  problemSolved: string;
  targetAudience: string;
  howItWorks: string;
  requirements: string[];
  tradeoffs: string[];
  pricingModel: 'Open Source' | 'Freemium' | 'Commercial' | 'Free';
  platforms: string[];
  apiAvailable: boolean;
  websiteUrl: string;
  sources: SourceReference[];
  lastVerified: string;
}

export interface Framework {
  id: string;
  name: string;
  slug: string;
  category: 'ML' | 'Deep Learning' | 'LLM' | 'RAG' | 'Agents' | 'Inference' | 'Evaluation' | 'Deployment' | 'Orchestration';
  description: string;
  keyFeatures: string[];
  languages: string[];
  bestFor: string;
  tradeoffs: string[];
  repoUrl: string;
  docUrl: string;
  sources: SourceReference[];
  lastVerified: string;
}

export interface Architecture {
  id: string;
  title: string;
  slug: string;
  summary: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  components: string[];
  dataFlow: { step: number; title: string; description: string }[];
  executionFlow: { step: number; actor: string; action: string }[];
  securityConsiderations: string[];
  related: {
    concepts: string[];
    tools: string[];
    frameworks: string[];
  };
  lastVerified: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Production';
  problem: string;
  goal: string;
  learningGoal: string;
  portfolioValue: string;
  hardwareReq: string;
  apiReq: string;
  technologies: string[];
  prerequisites: string[];
  architecture: string;
  steps: {
    step: number;
    title: string;
    instructions: string;
    codeSnippet?: string;
  }[];
  expectedResult: string;
  extensions: string[];
  commonMistakes: string[];
  lastVerified: string;
}

export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  level: KnowledgeLevel;
  tagline: string;
  description: string;
  estimatedHours: number;
  modules: {
    id: string;
    title: string;
    description: string;
    conceptSlugs: string[];
  }[];
}

export interface SafetyTopic {
  id: string;
  title: string;
  slug: string;
  threatLevel: 'Critical' | 'High' | 'Medium';
  category: 'Robustness' | 'Input Sanitization' | 'Data Privacy' | 'Agency & Control' | 'Ethics & Misuse';
  description: string;
  realWorldScenario: string;
  vulnerabilityMechanism: string;
  practicalMitigations: string[];
  codeExample?: {
    lang: string;
    bad: string;
    good: string;
    explanation: string;
  };
  sources: SourceReference[];
  lastVerified: string;
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  shortDefinition: string;
  technicalExplanation: string;
  example: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  relatedTerms: string[];
  sources: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  category: 'Foundation' | 'Deep Learning' | 'Transformer' | 'GenAI' | 'Agents';
  significance: string;
  description: string;
  sources: string;
}

export interface CareerRole {
  id: string;
  title: string;
  slug: string;
  overview: string;
  coreResponsibilities: string[];
  keySkills: string[];
  conceptsToMaster: string[];
  recommendedTools: string[];
  recommendedProjects: string[];
  learningPathSlug: string;
}

export interface StackBuilderAnswer {
  applicationType: string;
  audience: string;
  executionMode: 'api' | 'local' | 'hybrid';
  retrievalNeed: boolean;
  agenticNeed: boolean;
  multimodalNeed: boolean;
  budgetPreference: 'minimal' | 'moderate' | 'scale';
  privacyTier: 'public' | 'confidential' | 'air-gapped';
  technicalLevel: 'no-code' | 'developer' | 'ml-engineer';
}

export interface StackRecommendation {
  title: string;
  summary: string;
  layers: {
    layer: string;
    recommended: string[];
    rationale: string;
    tradeoffs: string;
  }[];
  costEstimateNote: string;
  privacyEvaluation: string;
  alternativePath: string;
}
