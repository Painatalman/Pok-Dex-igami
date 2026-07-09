const KEY = "origami-pokedex-best";

export interface Best {
  score: number;
  streak: number;
}

export function loadBest(): Best {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Best;
  } catch {
    // ignore malformed storage
  }
  return { score: 0, streak: 0 };
}

export function saveBest(best: Best): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(best));
  } catch {
    // ignore quota / private-mode errors
  }
}

/** Points for a correct answer at the given (post-increment) streak length. */
export function pointsForStreak(streak: number): number {
  const multiplier = Math.min(streak, 5);
  return 10 * multiplier;
}
