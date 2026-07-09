const KEY = "origami-pokedex-caught";

/** Set of caught pokémon names, persisted in localStorage. */
export function loadCaught(): Set<string> {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {
    // ignore malformed storage
  }
  return new Set();
}

export function saveCaught(caught: Set<string>): void {
  try {
    localStorage.setItem(KEY, JSON.stringify([...caught]));
  } catch {
    // ignore quota / private-mode errors
  }
}
