export interface RosterEntry {
  /** National Pokédex number — keys the official artwork. */
  id: number;
  name: string;
  gen: number;
}

export interface IdentifyResult {
  pokemon: string;
  confidence: number;
  reasoning: string;
  /** Two plausible-but-wrong look-alikes, used as quiz distractors. */
  distractors: string[];
}
