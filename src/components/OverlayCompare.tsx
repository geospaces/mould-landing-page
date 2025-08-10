'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * OverlayCompare
 * Drop in a PNG/JPG exported from Figma (1440 width), and compare it against the live DOM.
 * Controls: toggle overlay, opacity slider, nudge with arrow keys.
 */
export default function OverlayCompare() {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [opacity, setOpacity] = useState(0.5);
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLImageElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!overlayRef.current) return;
      const step = e.shiftKey ? 10 : 1;
      if (e.key === 'ArrowLeft') setOffset(o => ({...o, x: o.x - step}));
      if (e.key === 'ArrowRight') setOffset(o => ({...o, x: o.x + step}));
      if (e.key === 'ArrowUp') setOffset(o => ({...o, y: o.y - step}));
      if (e.key === 'ArrowDown') setOffset(o => ({...o, y: o.y + step}));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[9999] p-3 rounded-2xl shadow-2 bg-white/90 border border-black/5 flex flex-col gap-2 w-[320px]">
      <div className="flex items-center justify-between">
        <strong>Overlay Compare</strong>
        <button
          onClick={() => setVisible(v => !v)}
          className="text-sm underline"
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>

      <input
        type="file"
        accept="image/png,image/jpeg"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const url = URL.createObjectURL(file);
          setImgUrl(url);
        }}
      />

      <label className="text-sm">Opacity: {Math.round(opacity*100)}%</label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={opacity}
        onChange={e => setOpacity(parseFloat(e.target.value))}
      />

      {imgUrl && visible && (
        <img
          ref={overlayRef}
          src={imgUrl}
          alt="overlay"
          style={{
            position: 'fixed',
            inset: 0,
            margin: '0 auto',
            width: 1440,
            maxWidth: 1440,
            pointerEvents: 'none',
            opacity,
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            zIndex: 9998
          }}
        />
      )}
    </div>
  );
}
