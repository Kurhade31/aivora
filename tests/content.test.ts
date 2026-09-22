import { describe, it, expect } from 'vitest';
import { CONCEPTS } from '../src/data/concepts';
import { MODELS } from '../src/data/models';
import { TOOLS } from '../src/data/tools';
import { FRAMEWORKS } from '../src/data/frameworks';
import { ARCHITECTURES } from '../src/data/architectures';
import { PROJECTS } from '../src/data/projects';
import { ROADMAPS } from '../src/data/roadmaps';
import { SAFETY_TOPICS } from '../src/data/safety';
import { GLOSSARY } from '../src/data/glossary';

describe('Aivora Content Integrity & Relationship Validation', () => {
  it('should have unique IDs across all entities', () => {
    const allIds = [
      ...CONCEPTS.map(c => c.id),
      ...MODELS.map(m => m.id),
      ...TOOLS.map(t => t.id),
      ...FRAMEWORKS.map(f => f.id),
      ...ARCHITECTURES.map(a => a.id),
      ...PROJECTS.map(p => p.id),
      ...ROADMAPS.map(r => r.id),
      ...SAFETY_TOPICS.map(s => s.id),
    ];
    const uniqueIds = new Set(allIds);
    expect(uniqueIds.size).toBe(allIds.length);
  });

  it('should have unique slugs within each collection', () => {
    const checkUniqueSlugs = (items: { slug: string }[]) => {
      const slugs = items.map(i => i.slug);
      const unique = new Set(slugs);
      expect(unique.size).toBe(slugs.length);
    };

    checkUniqueSlugs(CONCEPTS);
    checkUniqueSlugs(MODELS);
    checkUniqueSlugs(TOOLS);
    checkUniqueSlugs(FRAMEWORKS);
    checkUniqueSlugs(ARCHITECTURES);
    checkUniqueSlugs(PROJECTS);
    checkUniqueSlugs(ROADMAPS);
    checkUniqueSlugs(SAFETY_TOPICS);
  });

  it('should have all 12 required sections for every concept', () => {
    CONCEPTS.forEach(concept => {
      expect(concept.id).toBeTruthy();
      expect(concept.title).toBeTruthy();
      expect(concept.slug).toBeTruthy();
      expect(concept.summary).toBeTruthy();
      expect(concept.mentalModel).toBeTruthy();
      expect(concept.whyItExists).toBeTruthy();
      expect(concept.howItWorks).toBeTruthy();
      expect(concept.architectureDetails).toBeTruthy();
      expect(concept.codeOrFlowExample).toBeTruthy();
      expect(concept.applications.length).toBeGreaterThan(0);
      expect(concept.whenToUse.length).toBeGreaterThan(0);
      expect(concept.whenNotToUse.length).toBeGreaterThan(0);
      expect(concept.limitations.length).toBeGreaterThan(0);
      expect(concept.commonMistakes.length).toBeGreaterThan(0);
      expect(concept.securityConsiderations.length).toBeGreaterThan(0);
      expect(concept.sources.length).toBeGreaterThan(0);
      expect(concept.lastVerified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it('should have valid cross-referencing relationships in concepts', () => {
    const conceptSlugs = new Set(CONCEPTS.map(c => c.slug));
    const modelSlugs = new Set(MODELS.map(m => m.slug));
    const frameworkSlugs = new Set(FRAMEWORKS.map(f => f.slug));

    CONCEPTS.forEach(concept => {
      concept.related.concepts?.forEach(relSlug => {
        expect(conceptSlugs.has(relSlug), `Missing related concept slug: ${relSlug} in concept ${concept.title}`).toBe(true);
      });
      concept.related.models?.forEach(relModel => {
        expect(modelSlugs.has(relModel), `Missing related model slug: ${relModel} in concept ${concept.title}`).toBe(true);
      });
      concept.related.frameworks?.forEach(relFw => {
        expect(frameworkSlugs.has(relFw), `Missing related framework slug: ${relFw} in concept ${concept.title}`).toBe(true);
      });
    });
  });

  it('should have valid official sources for models and tools', () => {
    MODELS.forEach(m => {
      expect(m.officialSources.length).toBeGreaterThan(0);
      m.officialSources.forEach(s => {
        expect(s.url.startsWith('http://') || s.url.startsWith('https://')).toBe(true);
      });
    });

    TOOLS.forEach(t => {
      expect(t.websiteUrl.startsWith('https://')).toBe(true);
      expect(t.problemSolved.length).toBeGreaterThan(20);
      expect(t.tradeoffs.length).toBeGreaterThan(0);
    });
  });

  it('should have complete execution flows in architectures', () => {
    ARCHITECTURES.forEach(arch => {
      expect(arch.components.length).toBeGreaterThan(2);
      expect(arch.dataFlow.length).toBeGreaterThan(2);
      expect(arch.executionFlow.length).toBeGreaterThan(2);
      expect(arch.securityConsiderations.length).toBeGreaterThan(0);
    });
  });

  it('should have actionable steps in projects', () => {
    PROJECTS.forEach(p => {
      expect(p.steps.length).toBeGreaterThan(1);
      p.steps.forEach(s => {
        expect(s.title).toBeTruthy();
        expect(s.instructions).toBeTruthy();
      });
    });
  });
});
