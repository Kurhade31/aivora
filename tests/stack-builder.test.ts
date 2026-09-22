import { describe, it, expect } from 'vitest';
import { buildStackRecommendation } from '../src/lib/data';

describe('Aivora Stack Builder Recommendation Engine', () => {
  it('should recommend air-gapped local stack when local execution is selected', () => {
    const rec = buildStackRecommendation({
      applicationType: 'Internal Document Search',
      audience: 'Internal Enterprise Team',
      executionMode: 'local',
      retrievalNeed: true,
      agenticNeed: false,
      multimodalNeed: false,
      budgetPreference: 'minimal',
      privacyTier: 'air-gapped',
      technicalLevel: 'developer'
    });

    expect(rec.title).toContain('Local');
    expect(rec.privacyEvaluation).toContain('Air-Gap');
    const modelLayer = rec.layers.find(l => l.layer.includes('Runtime'));
    expect(modelLayer?.recommended).toContain('Ollama (Local GGUF Runtime)');
  });

  it('should include agent state layer when agentic workflow is required', () => {
    const rec = buildStackRecommendation({
      applicationType: 'Autonomous Code Reviewer',
      audience: 'Developer Team',
      executionMode: 'api',
      retrievalNeed: false,
      agenticNeed: true,
      multimodalNeed: false,
      budgetPreference: 'moderate',
      privacyTier: 'confidential',
      technicalLevel: 'developer'
    });

    expect(rec.title).toContain('Agentic');
    const agentLayer = rec.layers.find(l => l.layer.includes('Agent State'));
    expect(agentLayer).toBeDefined();
    expect(agentLayer?.recommended).toContain('LangGraph (State Machine)');
  });

  it('should include retrieval and vector layer when RAG is required', () => {
    const rec = buildStackRecommendation({
      applicationType: 'Customer Support Bot',
      audience: 'Public Consumer',
      executionMode: 'api',
      retrievalNeed: true,
      agenticNeed: false,
      multimodalNeed: false,
      budgetPreference: 'scale',
      privacyTier: 'public',
      technicalLevel: 'developer'
    });

    const ragLayer = rec.layers.find(l => l.layer.includes('Retrieval'));
    expect(ragLayer).toBeDefined();
    expect(ragLayer?.recommended).toContain('PostgreSQL with pgvector');
  });
});
