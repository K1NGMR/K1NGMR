'use client';

import { useEffect, useRef, useState } from 'react';

const ModelViewer = 'model-viewer' as unknown as React.ElementType;

export function NexaraSignalLoom() {
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
    <div className="nexara-model-wrap" aria-label="Interactive 3D render of the Nexara Signal Loom">
      <div className="model-halo" />
      <img className={`model-fallback ${ready ? 'model-fallback-hidden' : ''}`} src="/assets/nexara-signal-loom.png" alt="Nexara Signal Loom, a vertical architectural AI system with a traveling lime signal" />
      <ModelViewer
        ref={modelRef}
        className="nexara-model"
        src="/assets/nexara-signal-loom.glb"
        mobile-src="/assets/nexara-signal-loom-mobile.glb"
        poster="/assets/nexara-signal-loom.png"
        alt="Interactive 3D Nexara Signal Loom"
        camera-controls
        autoplay
        animation-loop
        environment-image="neutral"
        exposure="1.05"
        shadow-intensity="0.2"
        disable-zoom
        interaction-prompt="none"
        camera-orbit="15deg 78deg 2.25m"
        field-of-view="27deg"
        style={{ opacity: ready ? 1 : 0 }}
      />
      <span className="model-caption">NEXARA SIGNAL LOOM · interactive object</span>
    </div>
  );
}
