import { useRegisterSW } from "virtual:pwa-register/react";
import type { Strings } from "../lib/i18n";

/**
 * The "a new version is deployed" banner. `registerType: 'prompt'` means the new
 * service worker waits instead of auto-activating; this surfaces it so the user
 * chooses when to reload into the fresh build.
 */
export function UpdatePrompt({ t }: { t: Strings }) {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div className="update-toast" role="alert">
      <span className="update-msg">{t.updateAvailable}</span>
      <div className="update-actions">
        <button className="update-reload" onClick={() => updateServiceWorker(true)}>
          {t.updateReload}
        </button>
        <button
          className="update-dismiss"
          aria-label="Dismiss"
          onClick={() => setNeedRefresh(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
