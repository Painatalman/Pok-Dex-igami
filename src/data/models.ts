import type { RosterEntry } from "../types";

export interface Diagram {
  /** A fold-diagram image served from /public (shown inline in the popup). */
  image?: string;
  /** An external tutorial/diagram URL (shown as a "view diagram" link). */
  link?: string;
  /** Attribution for the model's author, shown as a byline. */
  credit?: string;
}

/**
 * Origami models, keyed by `fold`. Every pokémon sharing a fold shares its
 * diagram — a crane folded from blue vs yellow paper is the same model, so the
 * link belongs to the fold, not the pokémon. Folds without an entry here simply
 * have no diagram yet; sentinel folds (sheet of paper, blob) never get one.
 */
export const MODELS: Record<string, Diagram> = {
  bird: { image: "/origami-diagrams/crane.jpg" },
  fish: { image: "/origami-diagrams/kissing-fish.jpg" },
  snake: { image: "/origami-diagrams/snake.jpg" },
  turtle: { image: "/origami-diagrams/turtle.jpg" },
  penguin: { image: "/origami-diagrams/penguin.jpg" },
  butterfly: { image: "/origami-diagrams/butterfly.jpg" },
  star: { image: "/origami-diagrams/star.jpg" },
  "crescent moon": { image: "/origami-diagrams/moon.jpg" },
  ray: { image: "/origami-diagrams/ray.jpg" },
  rabbit: { image: "/origami-diagrams/rabbit.jpg" },
};

/**
 * The exception: a pokémon with its OWN diagram, overriding its fold's generic
 * model. Keyed by pokémon name. Empty for now — populate when a specific mon
 * gets a bespoke fold that isn't the shared one for its creature type.
 */
export const MODEL_OVERRIDES: Record<string, Diagram> = {
  Rotom: {
    link: "https://www.youtube.com/watch?v=Xj4RHAXzy98",
    credit: "Saku B",
  },
};

/** The diagram for an entry: its own override if any, else its fold's model. */
export function modelFor(entry: RosterEntry): Diagram | undefined {
  return MODEL_OVERRIDES[entry.name] ?? MODELS[entry.fold];
}
