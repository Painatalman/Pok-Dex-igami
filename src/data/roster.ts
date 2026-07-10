import type { RosterEntry } from "../types";

/**
 * The app's roster: hand-picked pokémon, at most one per evolution family.
 * Chosen so that no two share both a silhouette and a colour — an origami fold
 * is abstract, so look-alikes are the failure mode. Every generation is
 * represented. Each entry carries the shape/colour read fed to the vision prompt.
 */
export const ROSTER: RosterEntry[] = [
  { id: 2, name: "Ivysaur", gen: 1, fold: "rose", color: "pink" },
  { id: 6, name: "Charizard", gen: 1, fold: "dragon", color: "orange" },
  { id: 7, name: "Squirtle", gen: 1, fold: "turtle", color: "blue" },
  { id: 25, name: "Pikachu", gen: 1, fold: "mouse", color: "yellow" },
  { id: 39, name: "Jigglypuff", gen: 1, fold: "ball", color: "pink" },
  { id: 41, name: "Zubat", gen: 1, fold: "bat", color: "purple" },
  { id: 56, name: "Mankey", gen: 1, fold: "monkey", color: "white" },
  { id: 77, name: "Ponyta", gen: 1, fold: "horse", color: "red" },
  { id: 90, name: "Shellder", gen: 1, fold: "clam shell", color: "purple" },
  { id: 94, name: "Gengar", gen: 1, fold: "ghost", color: "purple" },
  { id: 95, name: "Onix", gen: 1, fold: "snake", color: "gray" },
  { id: 100, name: "Voltorb", gen: 1, fold: "ball", color: "red-and-white" },
  { id: 120, name: "Staryu", gen: 1, fold: "star", color: "orange" },
  { id: 129, name: "Magikarp", gen: 1, fold: "fish", color: "orange" },
  { id: 131, name: "Lapras", gen: 1, fold: "sea dinosaur", color: "blue" },
  { id: 132, name: "Ditto", gen: 1, fold: "blob", color: "purple" },
  { id: 133, name: "Eevee", gen: 1, fold: "dog", color: "brown" },
  { id: 138, name: "Omanyte", gen: 1, fold: "spiral shell", color: "blue" },
  { id: 143, name: "Snorlax", gen: 1, fold: "cat", color: "black" },
  { id: 144, name: "Articuno", gen: 1, fold: "bird", color: "blue" },
  { id: 145, name: "Zapdos", gen: 1, fold: "bird", color: "yellow" },
  { id: 151, name: "Mew", gen: 1, fold: "cat", color: "pink" },
  { id: 167, name: "Spinarak", gen: 2, fold: "spider", color: "green" },
  { id: 175, name: "Togepi", gen: 2, fold: "egg", color: "white" },
  { id: 185, name: "Sudowoodo", gen: 2, fold: "tree", color: "brown" },
  { id: 192, name: "Sunflora", gen: 2, fold: "sunflower", color: "yellow" },
  { id: 198, name: "Murkrow", gen: 2, fold: "bird", color: "black" },
  { id: 214, name: "Heracross", gen: 2, fold: "beetle", color: "blue" },
  { id: 249, name: "Lugia", gen: 2, fold: "bird", color: "white" },
  { id: 255, name: "Torchic", gen: 3, fold: "chick", color: "orange" },
  { id: 321, name: "Wailord", gen: 3, fold: "whale", color: "blue" },
  { id: 352, name: "Kecleon", gen: 3, fold: "chameleon", color: "green" },
  { id: 370, name: "Luvdisc", gen: 3, fold: "heart", color: "pink" },
  { id: 393, name: "Piplup", gen: 4, fold: "penguin", color: "blue" },
  { id: 427, name: "Buneary", gen: 4, fold: "rabbit", color: "brown" },
  { id: 498, name: "Tepig", gen: 5, fold: "pig", color: "orange" },
  { id: 583, name: "Vanillish", gen: 5, fold: "ice cream", color: "white" },
  { id: 658, name: "Greninja", gen: 6, fold: "frog", color: "blue" },
  { id: 666, name: "Vivillon", gen: 6, fold: "butterfly", color: "any" },
  { id: 775, name: "Komala", gen: 7, fold: "koala", color: "gray" },
  { id: 798, name: "Kartana", gen: 7, fold: "sheet of paper", color: "white" },
  { id: 815, name: "Cinderace", gen: 8, fold: "rabbit", color: "red" },
  { id: 963, name: "Finizen", gen: 9, fold: "dolphin", color: "blue" },
];

/** Case-insensitive lookup by name, tolerant of minor punctuation differences. */
const byNormalizedName = new Map<string, RosterEntry>();
for (const entry of ROSTER) {
  byNormalizedName.set(normalizeName(entry.name), entry);
}

export function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9♀♂]/g, "");
}

export function findByName(name: string): RosterEntry | undefined {
  return byNormalizedName.get(normalizeName(name));
}

/** The plain list of allowed names, for constraining the model prompt. */
export const ROSTER_NAMES: string[] = ROSTER.map((e) => e.name);

/**
 * Sentinels are answers that mean "the photo isn't a fold", not "the fold looks
 * like this". They skip the quiz question, never appear as distractors, and get
 * a bespoke prompt line — describing Ditto as "a purple blob" would invite the
 * model to match it against any shapeless fold.
 */
export const SENTINELS: Record<string, string> = {
  Kartana:
    "ONLY for flat, unfolded paper — a pamphlet, a flyer, a receipt, a printed page, a blank sheet. Paper that could become origami but hasn't been folded yet",
  Ditto:
    "ONLY for a photo that is no kind of paper at all — a face, a pet, an object, a screen, a drawing",
};

export function isSentinel(name: string): boolean {
  const entry = findByName(name);
  return entry ? entry.name in SENTINELS : false;
}

/** The folds a real pokémon can be, for suggesting what to make out of a blank sheet. */
export const FOLD_SUGGESTIONS: string[] = ROSTER.filter((e) => !(e.name in SENTINELS)).map(
  (e) => e.fold,
);

/** One line per entry: the name plus its colour-and-fold read. */
export const ROSTER_PROMPT_LINES: string[] = ROSTER.map((e) => {
  const sentinel = SENTINELS[e.name];
  if (sentinel) return `${e.name} — ${sentinel}`;
  // Vivillon's wings come in 20 patterns, so colour tells the model nothing.
  if (e.color === "any") return `${e.name} — ${e.fold}, any colour`;
  return `${e.name} — ${e.color} ${e.fold}`;
});

// The roster is only useful if every entry is distinguishable. Two pokémon
// sharing a fold AND a colour would be an unwinnable guess for the model.
const combos = new Set<string>();
for (const entry of ROSTER) {
  const combo = `${entry.color}|${entry.fold}`;
  if (combos.has(combo)) {
    throw new Error(`Roster: duplicate fold/colour "${entry.color} ${entry.fold}" (${entry.name})`);
  }
  combos.add(combo);
}
