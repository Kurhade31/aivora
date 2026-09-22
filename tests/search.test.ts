import { describe, it, expect } from 'vitest';
import { searchKnowledgeGraph } from '../src/lib/data';

describe('Aivora Knowledge Graph Search Engine', () => {
  it('should return empty results for empty or blank queries', () => {
    expect(searchKnowledgeGraph('')).toEqual([]);
    expect(searchKnowledgeGraph('   ')).toEqual([]);
  });

  it('should find relevant concepts, models, and tools when searching "RAG"', () => {
    const results = searchKnowledgeGraph('RAG');
    expect(results.length).toBeGreaterThan(0);
    const types = results.map(r => r.type);
    expect(types).toContain('concept');
    expect(types).toContain('architecture');
  });

  it('should find models by provider name', () => {
    const results = searchKnowledgeGraph('DeepSeek');
    expect(results.length).toBeGreaterThan(0);
    const modelResult = results.find(r => r.id === 'm-deepseek-r1');
    expect(modelResult).toBeDefined();
    expect(modelResult?.type).toBe('model');
  });

  it('should find tools by target job or name', () => {
    const results = searchKnowledgeGraph('Cursor');
    expect(results.length).toBeGreaterThan(0);
    const cursor = results.find(r => r.id === 't-cursor');
    expect(cursor).toBeDefined();
    expect(cursor?.type).toBe('tool');
  });

  it('should find glossary terms and roadmaps', () => {
    const results = searchKnowledgeGraph('Tokenization');
    expect(results.length).toBeGreaterThan(0);
    const term = results.find(r => r.type === 'glossary');
    expect(term).toBeDefined();
  });
});
