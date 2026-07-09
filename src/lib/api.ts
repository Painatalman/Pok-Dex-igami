import type { IdentifyResult } from "../types";
import type { Lang } from "./i18n";

export class IdentifyError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

export async function identify(imageDataUrl: string, lang: Lang): Promise<IdentifyResult> {
  const res = await fetch("/api/identify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: imageDataUrl, lang }),
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { code?: string; error?: string };
    throw new IdentifyError(body.code || "failed", body.error || `Request failed (${res.status})`);
  }
  return (await res.json()) as IdentifyResult;
}
