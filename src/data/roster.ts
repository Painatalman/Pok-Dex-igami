import type { RosterEntry } from "../types";

/**
 * The app's roster: hand-picked pokémon. Chosen so that no two share both a
 * silhouette and a colour — an origami fold is abstract, so look-alikes are the
 * failure mode. Two stages of one evolution line may both appear only when they
 * fold to plainly different shapes/colours (Magikarp vs Gyarados). Every
 * generation is represented. Each entry carries the shape/colour read fed to the
 * vision prompt.
 */
export const ROSTER: RosterEntry[] = [
  { id: 2, name: "Ivysaur", gen: 1, fold: "rose", color: "pink" },
  { id: 6, name: "Charizard", gen: 1, fold: "dragon", color: "orange" },
  { id: 7, name: "Squirtle", gen: 1, fold: "turtle", color: "blue" },
  { id: 11, name: "Metapod", gen: 1, fold: "cocoon", color: "green" },
  { id: 25, name: "Pikachu", gen: 1, fold: "mouse", color: "yellow" },
  { id: 39, name: "Jigglypuff", gen: 1, fold: "ball", color: "pink" },
  { id: 41, name: "Zubat", gen: 1, fold: "bat", color: "purple" },
  { id: 56, name: "Mankey", gen: 1, fold: "monkey", color: "white" },
  { id: 77, name: "Ponyta", gen: 1, fold: "horse", color: "red" },
  { id: 94, name: "Gengar", gen: 1, fold: "ghost", color: "purple" },
  { id: 95, name: "Onix", gen: 1, fold: "snake", color: "gray" },
  { id: 100, name: "Voltorb", gen: 1, fold: "ball", color: "red-and-white" },
  { id: 104, name: "Cubone", gen: 1, fold: "dog", color: "brown-and-white" },
  { id: 109, name: "Koffing", gen: 1, fold: "ball", color: "purple" },
  { id: 120, name: "Staryu", gen: 1, fold: "star", color: "orange" },
  { id: 129, name: "Magikarp", gen: 1, fold: "fish", color: "orange" },
  { id: 130, name: "Gyarados", gen: 1, fold: "snake", color: "blue" },
  { id: 132, name: "Ditto", gen: 1, fold: "blob", color: "purple" },
  { id: 133, name: "Eevee", gen: 1, fold: "fox", color: "brown" },
  { id: 138, name: "Omanyte", gen: 1, fold: "spiral shell", color: "blue" },
  { id: 144, name: "Articuno", gen: 1, fold: "bird", color: "blue" },
  { id: 145, name: "Zapdos", gen: 1, fold: "bird", color: "yellow" },
  { id: 147, name: "Dratini", gen: 1, fold: "snake", color: "purple" },
  { id: 151, name: "Mew", gen: 1, fold: "cat", color: "pink" },
  { id: 167, name: "Spinarak", gen: 2, fold: "spider", color: "green" },
  { id: 185, name: "Sudowoodo", gen: 2, fold: "tree", color: "brown" },
  { id: 192, name: "Sunflora", gen: 2, fold: "sunflower", color: "yellow" },
  { id: 248, name: "Tyranitar", gen: 2, fold: "dinosaur", color: "green" },
  { id: 249, name: "Lugia", gen: 2, fold: "bird", color: "white" },
  { id: 255, name: "Torchic", gen: 3, fold: "chick", color: "orange" },
  { id: 321, name: "Wailord", gen: 3, fold: "whale", color: "blue" },
  { id: 337, name: "Lunatone", gen: 3, fold: "crescent moon", color: "yellow" },
  { id: 352, name: "Kecleon", gen: 3, fold: "chameleon", color: "green" },
  { id: 366, name: "Clamperl", gen: 3, fold: "clam shell", color: "blue" },
  { id: 370, name: "Luvdisc", gen: 3, fold: "heart", color: "pink" },
  { id: 393, name: "Piplup", gen: 4, fold: "penguin", color: "blue" },
  { id: 427, name: "Buneary", gen: 4, fold: "rabbit", color: "brown" },
  { id: 458, name: "Mantyke", gen: 4, fold: "ray", color: "blue" },
  { id: 479, name: "Rotom", gen: 4, fold: "lightning bolt", color: "orange" },
  { id: 583, name: "Vanillish", gen: 5, fold: "ice cream", color: "white" },
  { id: 658, name: "Greninja", gen: 6, fold: "frog", color: "blue" },
  { id: 666, name: "Vivillon", gen: 6, fold: "butterfly", color: "any" },
  { id: 722, name: "Rowlet", gen: 7, fold: "bird", color: "brown" },
  { id: 775, name: "Komala", gen: 7, fold: "koala", color: "gray" },
  { id: 798, name: "Kartana", gen: 7, fold: "sheet of paper", color: "white" },
  { id: 823, name: "Corviknight", gen: 8, fold: "bird", color: "black" },
  { id: 915, name: "Lechonk", gen: 9, fold: "pig", color: "brown" },
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
