import { useMemo, useRef, useState } from "react";
import { Viewfinder, type ViewfinderHandle } from "./components/Viewfinder";
import { identify, IdentifyError } from "./lib/api";
import { artworkForName, artworkUrl } from "./lib/pokeapi";
import { loadBest, saveBest, pointsForStreak, type Best } from "./lib/score";
import { loadCaught, saveCaught } from "./lib/dex";
import { ROSTER } from "./data/roster";
import {
  LANGS,
  STRINGS,
  loadLang,
  saveLang,
  type Lang,
  type Strings,
} from "./lib/i18n";
import type { IdentifyResult } from "./types";

type Mode = "scan" | "quiz";
type Phase = "idle" | "analyzing" | "result" | "error";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type ErrorKey = keyof Strings["errors"];

export default function App() {
  const viewfinder = useRef<ViewfinderHandle>(null);

  const [lang, setLang] = useState<Lang>(() => loadLang());
  const t = STRINGS[lang];

  const [mode, setMode] = useState<Mode>("scan");
  const [phase, setPhase] = useState<Phase>("idle");
  const [result, setResult] = useState<IdentifyResult | null>(null);
  const [errorKey, setErrorKey] = useState<ErrorKey>("failed");

  // Quiz state
  const [options, setOptions] = useState<string[]>([]);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState<Best>(() => loadBest());

  // Catch history
  const [caught, setCaught] = useState<Set<string>>(() => loadCaught());
  const [showDex, setShowDex] = useState(false);

  const revealArt = useMemo(
    () => (result ? artworkForName(result.pokemon) : null),
    [result],
  );

  function chooseLang(next: Lang) {
    setLang(next);
    saveLang(next);
  }

  function markCaught(name: string) {
    setCaught((prev) => {
      if (prev.has(name)) return prev;
      const next = new Set(prev);
      next.add(name);
      saveCaught(next);
      return next;
    });
  }

  async function doScan() {
    const img = viewfinder.current?.capture();
    if (!img) {
      setErrorKey("no_image");
      setPhase("error");
      return;
    }
    setPhase("analyzing");
    try {
      const r = await identify(img, lang);
      setResult(r);
      markCaught(r.pokemon);
      if (mode === "quiz") {
        setOptions(shuffle([r.pokemon, ...r.distractors]));
        setPicked(null);
      }
      setPhase("result");
    } catch (e) {
      const code = e instanceof IdentifyError ? e.code : "failed";
      setErrorKey(code in t.errors ? (code as ErrorKey) : "failed");
      setPhase("error");
    }
  }

  function reset() {
    setPhase("idle");
    setResult(null);
    setPicked(null);
    setOptions([]);
  }

  function switchMode(next: Mode) {
    setMode(next);
    reset();
  }

  function pick(name: string) {
    if (picked || !result) return;
    setPicked(name);
    if (name === result.pokemon) {
      const nextStreak = streak + 1;
      const nextScore = score + pointsForStreak(nextStreak);
      setStreak(nextStreak);
      setScore(nextScore);
      const nextBest: Best = {
        score: Math.max(best.score, nextScore),
        streak: Math.max(best.streak, nextStreak),
      };
      setBest(nextBest);
      saveBest(nextBest);
    } else {
      setStreak(0);
    }
  }

  function resetDex() {
    if (window.confirm(t.resetConfirm)) {
      const empty = new Set<string>();
      setCaught(empty);
      saveCaught(empty);
    }
  }

  const showQuizOptions = mode === "quiz" && phase === "result" && !picked;
  const showReveal =
    phase === "result" && (mode === "scan" || (mode === "quiz" && picked !== null));

  return (
    <div className="device">
      <div className="device-top">
        <div className="lens">
          <div className="lens-glint" />
        </div>
        <div className="lights">
          <span className="light red" />
          <span className="light yellow" />
          <span className="light green" />
        </div>
        <h1 className="title">Origami&nbsp;Dex</h1>
      </div>

      <div className="options-row">
        <div className="mode-toggle" role="tablist" aria-label="Mode">
          <button
            role="tab"
            aria-selected={mode === "scan"}
            className={mode === "scan" ? "active" : ""}
            onClick={() => switchMode("scan")}
          >
            {t.scan}
          </button>
          <button
            role="tab"
            aria-selected={mode === "quiz"}
            className={mode === "quiz" ? "active" : ""}
            onClick={() => switchMode("quiz")}
          >
            {t.quiz}
          </button>
        </div>
        <button
          className="dex-btn"
          aria-label={t.dexTitle}
          title={t.dexTitle}
          onClick={() => setShowDex(true)}
        >
          📚
        </button>
        <label className="lang-select" aria-label={t.langLabel}>
          🌐
          <select value={lang} onChange={(e) => chooseLang(e.target.value as Lang)}>
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="screen">
        <div className="screen-inner">
          <Viewfinder ref={viewfinder} uploadLabel={t.tapToPhoto} />

          {phase === "analyzing" && (
            <div className="overlay scanner">
              <div className="scan-frame">
                <span className="corner tl" />
                <span className="corner tr" />
                <span className="corner bl" />
                <span className="corner br" />
                <div className="scan-line" />
                <div className="reticle" />
              </div>
              <p className="scan-label">{t.analyzing}</p>
            </div>
          )}

          {phase === "error" && (
            <div className="overlay error">
              <p>{t.errors[errorKey]}</p>
            </div>
          )}

          {showReveal && result && (
            <div className="overlay reveal">
              {revealArt && (
                <img
                  className="reveal-art"
                  src={revealArt}
                  alt={result.pokemon}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
              <div className="reveal-name">{result.pokemon}</div>
              {mode === "quiz" && (
                <div className={picked === result.pokemon ? "verdict good" : "verdict bad"}>
                  {picked === result.pokemon
                    ? `${t.correctPrefix}${pointsForStreak(streak)}`
                    : `${t.itWasPrefix}${result.pokemon}`}
                </div>
              )}
              {mode === "scan" && (
                <div className="confidence">
                  <span
                    className="confidence-bar"
                    style={{ width: `${Math.round(result.confidence * 100)}%` }}
                  />
                </div>
              )}
              <p className="reveal-reasoning">{result.reasoning}</p>
            </div>
          )}
        </div>
      </div>

      {mode === "quiz" && (
        <div className="scoreboard">
          <span>
            {t.score} {score}
          </span>
          <span>
            {t.streak} {streak}
          </span>
          <span>
            {t.best} {best.score}
          </span>
        </div>
      )}

      <div className="controls">
        {showQuizOptions ? (
          <div className="options">
            {options.map((name) => (
              <button key={name} className="option" onClick={() => pick(name)}>
                {name}
              </button>
            ))}
          </div>
        ) : phase === "result" || phase === "error" ? (
          <button className="primary" onClick={reset}>
            {mode === "quiz" && phase === "result" ? t.next : t.scanAgain}
          </button>
        ) : (
          <button className="primary shutter" onClick={doScan} disabled={phase === "analyzing"}>
            {mode === "scan" ? t.scanBtn : t.guessBtn}
          </button>
        )}
      </div>

      {showDex && (
        <div className="dex">
          <div className="dex-header">
            <span className="dex-title">{t.dexTitle}</span>
            <span className="dex-count">
              {caught.size} / {ROSTER.length} {t.caughtLabel}
            </span>
            <button className="dex-close" aria-label="Close" onClick={() => setShowDex(false)}>
              ✕
            </button>
          </div>
          <div className="dex-grid">
            {ROSTER.map((e) => {
              const got = caught.has(e.name);
              return (
                <div className={`dex-cell ${got ? "caught" : "unknown"}`} key={e.id}>
                  <img
                    className="dex-art"
                    src={artworkUrl(e.id)}
                    alt={got ? e.name : "???"}
                    loading="lazy"
                  />
                  <span className="dex-label">
                    {got ? e.name : `#${String(e.id).padStart(3, "0")}`}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="dex-footer">
            <button className="dex-reset" onClick={resetDex}>
              {t.reset}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
