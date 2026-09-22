export interface UserProgressState {
  completedSlugs: string[];
  bookmarkedSlugs: string[];
  pathProgress: Record<string, number>; // pathId -> percentage 0-100
}

const STORAGE_KEY = 'aivora_progress_v1';

export function getInitialProgress(): UserProgressState {
  return {
    completedSlugs: [],
    bookmarkedSlugs: [],
    pathProgress: {}
  };
}

export function loadProgress(): UserProgressState {
  if (typeof window === 'undefined') return getInitialProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialProgress();
    return JSON.parse(raw);
  } catch {
    return getInitialProgress();
  }
}

export function saveProgress(state: UserProgressState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // LocalStorage write failed (e.g. private browsing quota)
  }
}

export function toggleCompleted(slug: string, state: UserProgressState): UserProgressState {
  const completed = new Set(state.completedSlugs);
  if (completed.has(slug)) {
    completed.delete(slug);
  } else {
    completed.add(slug);
  }
  return {
    ...state,
    completedSlugs: Array.from(completed)
  };
}

export function toggleBookmark(slug: string, state: UserProgressState): UserProgressState {
  const bookmarks = new Set(state.bookmarkedSlugs);
  if (bookmarks.has(slug)) {
    bookmarks.delete(slug);
  } else {
    bookmarks.add(slug);
  }
  return {
    ...state,
    bookmarkedSlugs: Array.from(bookmarks)
  };
}

export function calculatePathProgress(pathConceptSlugs: string[], completedSlugs: string[]): number {
  if (!pathConceptSlugs || pathConceptSlugs.length === 0) return 0;
  const completedSet = new Set(completedSlugs);
  const matched = pathConceptSlugs.filter(s => completedSet.has(s)).length;
  return Math.round((matched / pathConceptSlugs.length) * 100);
}
