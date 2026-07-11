export type Lang = "en" | "pt" | "es" | "fr" | "de";

export interface Strings {
  scan: string;
  quiz: string;
  analyzing: string;
  scanAgain: string;
  next: string;
  scanBtn: string;
  guessBtn: string;
  correctPrefix: string; // followed by points
  itWasPrefix: string; // followed by pokémon name
  score: string;
  streak: string;
  best: string;
  tapToPhoto: string;
  langLabel: string;
  dexTitle: string;
  caughtLabel: string;
  dexOrigamiLabel: string; // badge label for the origami fold on uncaught entries
  dexFoldHint: string; // "fold one to catch it" nudge on uncaught entries
  dexTypes: string; // "Types" heading in the detail popup
  dexFunFacts: string; // "Fun facts" heading in the detail popup
  dexHowToFold: string; // heading above the origami diagram in the popup
  dexViewDiagram: string; // link label when a model has an external diagram URL
  dexDiagramBy: string; // attribution byline, followed by the author name
  reset: string;
  resetConfirm: string;
  updateAvailable: string; // "new version" toast message
  updateReload: string; // reload button on the update toast
  errors: {
    no_image: string;
    bad_image: string;
    no_credits: string;
    failed: string;
  };
}

/** Selectable languages (native names shown in the dropdown). */
export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
];

/** Language name handed to Claude so it writes its reasoning in that language. */
export const LANG_NAME: Record<Lang, string> = {
  en: "English",
  pt: "Portuguese",
  es: "Spanish",
  fr: "French",
  de: "German",
};

export const STRINGS: Record<Lang, Strings> = {
  en: {
    scan: "Scan",
    quiz: "Quiz",
    analyzing: "Analyzing…",
    scanAgain: "Scan again",
    next: "Next",
    scanBtn: "Scan",
    guessBtn: "Guess this one",
    correctPrefix: "Correct!  +",
    itWasPrefix: "It was ",
    score: "SCORE",
    streak: "STREAK",
    best: "BEST",
    tapToPhoto: "📷 Tap to take or choose a photo",
    langLabel: "Language",
    dexTitle: "Dex",
    caughtLabel: "CAUGHT",
    dexOrigamiLabel: "Origami",
    dexFoldHint: "Fold one to catch it!",
    dexTypes: "Types",
    dexFunFacts: "Fun facts",
    dexHowToFold: "How to fold",
    dexViewDiagram: "View diagram",
    dexDiagramBy: "Diagram by",
    reset: "Reset Dex",
    resetConfirm: "Reset your caught Pokédex? This can't be undone.",
    updateAvailable: "New version available",
    updateReload: "Reload",
    errors: {
      no_image: "Point the lens at your origami first.",
      bad_image: "That image didn't come through. Try again.",
      no_credits: "⚡ We're out of fuel — recharge the Pokédex to keep scanning!",
      failed: "The Pokédex glitched. Try again.",
    },
  },
  pt: {
    scan: "Analisar",
    quiz: "Quiz",
    analyzing: "A analisar…",
    scanAgain: "Analisar de novo",
    next: "Seguinte",
    scanBtn: "Analisar",
    guessBtn: "Adivinha!",
    correctPrefix: "Certo!  +",
    itWasPrefix: "Era o ",
    score: "PONTOS",
    streak: "SEQUÊNCIA",
    best: "RECORDE",
    tapToPhoto: "📷 Toca para tirar ou escolher uma foto",
    langLabel: "Idioma",
    dexTitle: "Catálogo",
    caughtLabel: "CAPTURADOS",
    dexOrigamiLabel: "Origami",
    dexFoldHint: "Dobra um para o capturar!",
    dexTypes: "Tipos",
    dexFunFacts: "Curiosidades",
    dexHowToFold: "Como dobrar",
    dexViewDiagram: "Ver diagrama",
    dexDiagramBy: "Diagrama de",
    reset: "Repor Dex",
    resetConfirm: "Repor a tua Pokédex capturada? Isto não pode ser anulado.",
    updateAvailable: "Nova versão disponível",
    updateReload: "Recarregar",
    errors: {
      no_image: "Aponta a lente ao teu origami primeiro.",
      bad_image: "Essa imagem não chegou bem. Tenta outra vez.",
      no_credits: "⚡ Ficámos sem combustível — recarrega a Pokédex para continuar!",
      failed: "A Pokédex encravou. Tenta outra vez.",
    },
  },
  es: {
    scan: "Escanear",
    quiz: "Quiz",
    analyzing: "Analizando…",
    scanAgain: "Escanear otra vez",
    next: "Siguiente",
    scanBtn: "Escanear",
    guessBtn: "¡Adivina!",
    correctPrefix: "¡Correcto!  +",
    itWasPrefix: "Era ",
    score: "PUNTOS",
    streak: "RACHA",
    best: "RÉCORD",
    tapToPhoto: "📷 Toca para hacer o elegir una foto",
    langLabel: "Idioma",
    dexTitle: "Catálogo",
    caughtLabel: "CAPTURADOS",
    dexOrigamiLabel: "Origami",
    dexFoldHint: "¡Dobla uno para capturarlo!",
    dexTypes: "Tipos",
    dexFunFacts: "Curiosidades",
    dexHowToFold: "Cómo doblar",
    dexViewDiagram: "Ver diagrama",
    dexDiagramBy: "Diagrama de",
    reset: "Reiniciar Dex",
    resetConfirm: "¿Reiniciar tu Pokédex? No se puede deshacer.",
    updateAvailable: "Nueva versión disponible",
    updateReload: "Recargar",
    errors: {
      no_image: "Apunta la lente a tu origami primero.",
      bad_image: "Esa imagen no llegó bien. Inténtalo de nuevo.",
      no_credits: "⚡ ¡Nos quedamos sin energía — recarga la Pokédex para seguir!",
      failed: "La Pokédex falló. Inténtalo de nuevo.",
    },
  },
  fr: {
    scan: "Scanner",
    quiz: "Quiz",
    analyzing: "Analyse…",
    scanAgain: "Scanner à nouveau",
    next: "Suivant",
    scanBtn: "Scanner",
    guessBtn: "Devine !",
    correctPrefix: "Correct !  +",
    itWasPrefix: "C'était ",
    score: "SCORE",
    streak: "SÉRIE",
    best: "RECORD",
    tapToPhoto: "📷 Touchez pour prendre ou choisir une photo",
    langLabel: "Langue",
    dexTitle: "Catalogue",
    caughtLabel: "CAPTURÉS",
    dexOrigamiLabel: "Origami",
    dexFoldHint: "Plie-en un pour le capturer !",
    dexTypes: "Types",
    dexFunFacts: "Le saviez-vous ?",
    dexHowToFold: "Comment plier",
    dexViewDiagram: "Voir le diagramme",
    dexDiagramBy: "Diagramme de",
    reset: "Réinitialiser",
    resetConfirm: "Réinitialiser ta Pokédex ? C'est irréversible.",
    updateAvailable: "Nouvelle version disponible",
    updateReload: "Recharger",
    errors: {
      no_image: "Vise d'abord ton origami avec l'objectif.",
      bad_image: "Cette image n'est pas passée. Réessaie.",
      no_credits: "⚡ Plus de carburant — rechargez le Pokédex pour continuer !",
      failed: "Le Pokédex a bugué. Réessaie.",
    },
  },
  de: {
    scan: "Scannen",
    quiz: "Quiz",
    analyzing: "Analysiere…",
    scanAgain: "Erneut scannen",
    next: "Weiter",
    scanBtn: "Scannen",
    guessBtn: "Rate mal!",
    correctPrefix: "Richtig!  +",
    itWasPrefix: "Es war ",
    score: "PUNKTE",
    streak: "SERIE",
    best: "REKORD",
    tapToPhoto: "📷 Tippen zum Fotografieren oder Auswählen",
    langLabel: "Sprache",
    dexTitle: "Katalog",
    caughtLabel: "GEFANGEN",
    dexOrigamiLabel: "Origami",
    dexFoldHint: "Falte eins, um es zu fangen!",
    dexTypes: "Typen",
    dexFunFacts: "Wissenswertes",
    dexHowToFold: "So faltest du es",
    dexViewDiagram: "Diagramm ansehen",
    dexDiagramBy: "Diagramm von",
    reset: "Zurücksetzen",
    resetConfirm: "Deinen Pokédex zurücksetzen? Das kann nicht rückgängig gemacht werden.",
    updateAvailable: "Neue Version verfügbar",
    updateReload: "Neu laden",
    errors: {
      no_image: "Richte die Linse zuerst auf dein Origami.",
      bad_image: "Das Bild kam nicht an. Versuch es nochmal.",
      no_credits: "⚡ Kein Treibstoff mehr — lade den Pokédex auf, um weiterzumachen!",
      failed: "Der Pokédex hat gesponnen. Versuch es nochmal.",
    },
  },
};

const KEY = "origami-pokedex-lang";

export function loadLang(): Lang {
  try {
    const v = localStorage.getItem(KEY);
    if (v && v in STRINGS) return v as Lang;
  } catch {
    // ignore
  }
  return "en";
}

export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    // ignore
  }
}
