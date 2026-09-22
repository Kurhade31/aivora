import { describe, it, expect } from 'vitest';
import {
  getInitialProgress,
  toggleCompleted,
  toggleBookmark,
  calculatePathProgress
} from '../src/lib/progress';

describe('Aivora User Learning Progress Engine', () => {
  it('should initialize empty state cleanly', () => {
    const state = getInitialProgress();
    expect(state.completedSlugs).toEqual([]);
    expect(state.bookmarkedSlugs).toEqual([]);
    expect(state.pathProgress).toEqual({});
  });

  it('should toggle completed concepts idempotently', () => {
    let state = getInitialProgress();
    state = toggleCompleted('rag', state);
    expect(state.completedSlugs).toContain('rag');

    // Toggle off
    state = toggleCompleted('rag', state);
    expect(state.completedSlugs).not.toContain('rag');
  });

  it('should toggle bookmarks without affecting completed', () => {
    let state = getInitialProgress();
    state = toggleBookmark('deepseek-r1', state);
    expect(state.bookmarkedSlugs).toContain('deepseek-r1');
    expect(state.completedSlugs).toEqual([]);

    state = toggleBookmark('deepseek-r1', state);
    expect(state.bookmarkedSlugs).toEqual([]);
  });

  it('should accurately calculate percentage completion for learning paths', () => {
    const pathSlugs = ['artificial-intelligence', 'machine-learning', 'deep-learning', 'foundation-models'];
    expect(calculatePathProgress(pathSlugs, [])).toBe(0);
    expect(calculatePathProgress(pathSlugs, ['artificial-intelligence'])).toBe(25);
    expect(calculatePathProgress(pathSlugs, ['artificial-intelligence', 'machine-learning'])).toBe(50);
    expect(calculatePathProgress(pathSlugs, ['artificial-intelligence', 'machine-learning', 'deep-learning', 'foundation-models'])).toBe(100);
  });
});
