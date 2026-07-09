import { useMemo, useRef, useState } from "react";
import { Viewfinder, type ViewfinderHandle } from "./components/Viewfinder";
import { identify } from "./lib/api";
import { artworkForName } from "./lib/pokeapi";
import { loadBest, saveBest, pointsForStreak, type Best } from "./lib/score";
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

export default function App() {
  const viewfinder = useRef<ViewfinderHandle>(null);

  const [mode, setMode] = useState<Mode>("scan");
  const [phase, setPhase] = useState<Phase>("idle");
  const [result, setResult] = useState<IdentifyResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Quiz state
  const [options, setOptions] = useState<string[]>([]);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState<Best>(() => loadBest());

  const revealArt = useMemo(
    () => (result ? artworkForName(result.pokemon) : null),
    [result],
  );

  async function doScan() {
    const img = viewfinder.current?.capture();
    if (!img) {
      setError("Point the lens at your origami first.");
      setPhase("error");
      return;
    }
    setPhase("analyzing");
    setError(null);
    try {
      const r = await identify(img);
      setResult(r);
      if (mode === "quiz") {
        setOptions(shuffle([r.pokemon, ...r.distractors]));
        setPicked(null);
      }
      setPhase("result");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setPhase("error");
    }
  }

  function reset() {
    setPhase("idle");
    setResult(null);
    setError(null);
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
    const correct = name === result.pokemon;
    if (correct) {
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

      <div className="mode-toggle" role="tablist" aria-label="Mode">
        <button
          role="tab"
          aria-selected={mode === "scan"}
          className={mode === "scan" ? "active" : ""}
          onClick={() => switchMode("scan")}
        >
          Scan
        </button>
        <button
          role="tab"
          aria-selected={mode === "quiz"}
          className={mode === "quiz" ? "active" : ""}
          onClick={() => switchMode("quiz")}
        >
          Quiz
        </button>
      </div>

      <div className="screen">
        <div className="screen-inner">
          <Viewfinder ref={viewfinder} />

          {phase === "analyzing" && (
            <div className="overlay analyzing">
              <div className="spinner" />
              <p>Analyzing…</p>
            </div>
          )}

          {phase === "error" && (
            <div className="overlay error">
              <p>{error}</p>
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
                    ? `Correct!  +${pointsForStreak(streak)}`
                    : `It was ${result.pokemon}`}
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
          <span>SCORE {score}</span>
          <span>STREAK {streak}</span>
          <span>BEST {best.score}</span>
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
            {mode === "quiz" && phase === "result" ? "Next" : "Scan again"}
          </button>
        ) : (
          <button className="primary shutter" onClick={doScan} disabled={phase === "analyzing"}>
            {mode === "scan" ? "Scan" : "Guess this one"}
          </button>
        )}
      </div>
    </div>
  );
}
