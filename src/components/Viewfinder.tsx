import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

export interface ViewfinderHandle {
  /** Grab the current frame (or uploaded photo) as a JPEG data URL. */
  capture: () => string | null;
}

/** Re-encode any uploaded image to a JPEG data URL the backend accepts. */
function toJpegDataUrl(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      // Cap the long edge so uploads stay reasonably sized.
      const max = 1024;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("no canvas context"));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = () => reject(new Error("could not read image"));
    img.src = src;
  });
}

interface ViewfinderProps {
  uploadLabel: string;
}

export const Viewfinder = forwardRef<ViewfinderHandle, ViewfinderProps>(function Viewfinder(
  { uploadLabel },
  ref,
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const uploadedRef = useRef<string | null>(null);
  const [fallback, setFallback] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    let cancelled = false;

    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch {
        setFallback(true); // permission denied / no camera → upload path
      }
    })();

    return () => {
      cancelled = true;
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      capture() {
        const video = videoRef.current;
        if (!fallback && video && video.videoWidth > 0) {
          const canvas = canvasRef.current!;
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext("2d");
          if (!ctx) return null;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          return canvas.toDataURL("image/jpeg", 0.85);
        }
        return uploadedRef.current;
      },
    }),
    [fallback],
  );

  async function onFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const jpeg = await toJpegDataUrl(reader.result as string);
        uploadedRef.current = jpeg;
        setPreview(jpeg);
      } catch {
        /* ignore unreadable file */
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="viewfinder">
      {!fallback ? (
        <video ref={videoRef} autoPlay playsInline muted className="viewfinder-media" />
      ) : (
        <label className="viewfinder-upload">
          {preview ? (
            <img src={preview} alt="Selected origami" className="viewfinder-media" />
          ) : (
            <span>{uploadLabel}</span>
          )}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={onFile}
            hidden
          />
        </label>
      )}
      <canvas ref={canvasRef} hidden />
    </div>
  );
});
