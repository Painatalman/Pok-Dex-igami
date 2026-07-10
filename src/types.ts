export interface RosterEntry {
  /** National Pokédex number — keys the official artwork. */
  id: number;
  name: string;
  gen: number;
  /** The shape an origami folder would make — "bird", "star", "clam shell". */
  fold: string;
  /** Its dominant colour. No two entries share the same (fold, colour) pair. */
  color: string;
}

export interface IdentifyResult {
  pokemon: string;
  confidence: number;
  reasoning: string;
  /** Two plausible-but-wrong look-alikes, used as quiz distractors. */
  distractors: string[];
}
