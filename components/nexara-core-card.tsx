'use client';

import { useEffect, useRef, useState } from 'react';

const ModelViewer = 'model-viewer' as unknown as React.ElementType;

export function NexaraCoreCard() {
  const [ready, setReady] = useState(false);
  const modelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let model: HTMLElement | null = null;
    const handleLoad = () => setReady(true);
    void import('@google/model-viewer').then(() => {
      model = modelRef.current;
      model?.addEventListener('load', handleLoad);
      setReady(true);
    });
    return () => model?.removeEventListener('load', handleLoad);
  }, []);

  return (
      <div className="nexara-core-card" aria-label="Interactive Nexara Core model">
        <img className={`core-card-fallback ${ready ? 'model-fallback-hidden' : ''}`} src="/assets/nexara-hero.png" alt="" />
        <ModelViewer
          ref={modelRef}
          className="core-card-model"
          src="/assets/nexara-core.glb"
          poster="/assets/nexara-hero.png"
          alt="Nexara Core 3D model"
          camera-controls
          auto-rotate
          rotation-per-second="10deg"
          environment-image="neutral"
          exposure="1.05"
          shadow-intensity="0.2"
          disable-zoom
          interaction-prompt="none"
          camera-orbit="25deg 68deg 2.35m"
          field-of-view="28deg"
          style={{ opacity: ready ? 1 : 0 }}
        />
      </div>
  );
}
