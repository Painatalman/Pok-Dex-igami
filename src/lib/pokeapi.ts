import { findByName } from "../data/roster";

/** Official artwork, served from the PokéAPI sprites CDN, keyed by dex number. */
export function artworkUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

/** Artwork URL for a roster name, or null if the name is unknown. */
export function artworkForName(name: string): string | null {
  const entry = findByName(name);
  return entry ? artworkUrl(entry.id) : null;
}
