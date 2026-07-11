import type { Lang } from "../lib/i18n";

/**
 * The 18 pokémon types: canonical badge colour + localised display name.
 * Hand-authored (not fetched): PokéAPI lacks pt type names, and 18 words per
 * language is trivial to keep here. `POKEDEX_DATA` stores bare type keys; this is
 * where they become coloured, translated pills.
 */
export const TYPE_COLOR: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const NAMES: Record<Lang, Record<string, string>> = {
  en: {
    normal: "Normal", fire: "Fire", water: "Water", electric: "Electric",
    grass: "Grass", ice: "Ice", fighting: "Fighting", poison: "Poison",
    ground: "Ground", flying: "Flying", psychic: "Psychic", bug: "Bug",
    rock: "Rock", ghost: "Ghost", dragon: "Dragon", dark: "Dark",
    steel: "Steel", fairy: "Fairy",
  },
  pt: {
    normal: "Normal", fire: "Fogo", water: "Água", electric: "Elétrico",
    grass: "Planta", ice: "Gelo", fighting: "Lutador", poison: "Veneno",
    ground: "Terra", flying: "Voador", psychic: "Psíquico", bug: "Inseto",
    rock: "Pedra", ghost: "Fantasma", dragon: "Dragão", dark: "Sombrio",
    steel: "Aço", fairy: "Fada",
  },
  es: {
    normal: "Normal", fire: "Fuego", water: "Agua", electric: "Eléctrico",
    grass: "Planta", ice: "Hielo", fighting: "Lucha", poison: "Veneno",
    ground: "Tierra", flying: "Volador", psychic: "Psíquico", bug: "Bicho",
    rock: "Roca", ghost: "Fantasma", dragon: "Dragón", dark: "Siniestro",
    steel: "Acero", fairy: "Hada",
  },
  fr: {
    normal: "Normal", fire: "Feu", water: "Eau", electric: "Électrik",
    grass: "Plante", ice: "Glace", fighting: "Combat", poison: "Poison",
    ground: "Sol", flying: "Vol", psychic: "Psy", bug: "Insecte",
    rock: "Roche", ghost: "Spectre", dragon: "Dragon", dark: "Ténèbres",
    steel: "Acier", fairy: "Fée",
  },
  de: {
    normal: "Normal", fire: "Feuer", water: "Wasser", electric: "Elektro",
    grass: "Pflanze", ice: "Eis", fighting: "Kampf", poison: "Gift",
    ground: "Boden", flying: "Flug", psychic: "Psycho", bug: "Käfer",
    rock: "Gestein", ghost: "Geist", dragon: "Drache", dark: "Unlicht",
    steel: "Stahl", fairy: "Fee",
  },
};

/** Localised display name for a type key, falling back to the raw key. */
export function typeName(key: string, lang: Lang): string {
  return NAMES[lang][key] ?? key;
}
