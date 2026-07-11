import { useEffect } from "react";
import { artworkUrl } from "../lib/pokeapi";
import { isSentinel } from "../data/roster";
import { POKEDEX_DATA } from "../data/pokedex.generated";
import { TYPE_COLOR, typeName } from "../data/types";
import { modelFor } from "../data/models";
import type { Lang, Strings } from "../lib/i18n";
import type { RosterEntry } from "../types";

interface DexDetailProps {
  entry: RosterEntry;
  caught: boolean;
  lang: Lang;
  t: Strings;
  onClose: () => void;
}

/**
 * The detail card shown when a Dex cell is tapped. Uncaught entries reveal only
 * the origami model (silhouette + fold badge); caught ones show the artwork,
 * localised type pills, and two fun facts.
 */
export function DexDetail({ entry, caught, lang, t, onClose }: DexDetailProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const data = POKEDEX_DATA[entry.id];
  const model = modelFor(entry);
  const dexNo = `#${String(entry.id).padStart(3, "0")}`;

  const diagram = model && (
    <div className="detail-section">
      <span className="detail-heading">{t.dexHowToFold}</span>
      {model.image && (
        <img
          className="detail-diagram"
          src={model.image}
          alt={t.dexHowToFold}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      )}
      {model.link && (
        <a className="diagram-link" href={model.link} target="_blank" rel="noreferrer">
          {t.dexViewDiagram} ↗
        </a>
      )}
      {model.credit && (
        <span className="diagram-credit">
          {t.dexDiagramBy} {model.credit}
        </span>
      )}
    </div>
  );

  return (
    <div className="detail-backdrop" onClick={onClose}>
      <div
        className="detail-card"
        role="dialog"
        aria-modal="true"
        aria-label={caught ? entry.name : dexNo}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="detail-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        {caught ? (
          <>
            <img
              className="detail-art"
              src={artworkUrl(entry.id)}
              alt={entry.name}
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
            />
            <div className="detail-name">{entry.name}</div>
            <div className="detail-no">{dexNo}</div>

            {data && data.types.length > 0 && (
              <div className="detail-section">
                <span className="detail-heading">{t.dexTypes}</span>
                <div className="type-pills">
                  {data.types.map((key) => (
                    <span
                      key={key}
                      className="type-pill"
                      style={{ backgroundColor: TYPE_COLOR[key] ?? "#777" }}
                    >
                      {typeName(key, lang)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {data && (
              <div className="detail-section">
                <span className="detail-heading">{t.dexFunFacts}</span>
                <ul className="fact-list">
                  {data.facts[lang].map((fact, i) => (
                    <li key={i}>{fact}</li>
                  ))}
                </ul>
              </div>
            )}

            {diagram}
          </>
        ) : (
          <>
            <img
              className="detail-art silhouette"
              src={artworkUrl(entry.id)}
              alt="???"
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
            />
            <div className="detail-no unknown">{dexNo}</div>

            <div className="detail-section">
              <span className="detail-heading">{t.dexOrigamiLabel}</span>
              <span className="origami-badge">{entry.fold}</span>
            </div>

            {diagram}

            {!isSentinel(entry.name) && <p className="detail-hint">{t.dexFoldHint}</p>}
          </>
        )}
      </div>
    </div>
  );
}
