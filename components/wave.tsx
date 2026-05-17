'use client';

import { useEffect, useRef, useCallback } from 'react';

interface WaveCluster {
  centerY: number;
  lineCount: number;
  spread: number;
  amplitude: number;
  frequency: number;
  secondaryFrequency: number;
  speed: number;
  direction: 1 | -1;
  opacity: number;
  strokeWidth: number;
  linePhaseDelta: number;
  slopeFactor: number;
}

interface CanvasState {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  dpr: number;
}

const WAVE_CLUSTERS: WaveCluster[] = [
  // ── 1. Primary lower ribbon ────────────────────────────────────────────────
  // {
  //   centerY: 0.82, // start lower-left
  //   lineCount: 34,
  //   spread: 170,
  //   amplitude: 95,
  //   frequency: 0.0042,
  //   secondaryFrequency: 0.00175,
  //   speed: 0.00026,
  //   direction: 1,
  //   opacity: 0.52,
  //   strokeWidth: 0.6,
  //   linePhaseDelta: 0.055,
  //   slopeFactor: -520, // climbs ~520 px bottom-left → top-right
  // },
  // ── 2. Counter upper ribbon ────────────────────────────────────────────────
  // {
  //   centerY: 0.68,
  //   lineCount: 28,
  //   spread: 130,
  //   amplitude: 75,
  //   frequency: 0.0048,
  //   secondaryFrequency: 0.002,
  //   speed: 0.00033,
  //   direction: -1,
  //   opacity: 0.43,
  //   strokeWidth: 0.5,
  //   linePhaseDelta: 0.06,
  //   slopeFactor: -480,
  // },
  // ── 3. Sparse accent cluster (ascending tail, top-right) ───────────────────
  {
    centerY: 0.52,
    lineCount: 22,
    spread: 110,
    amplitude: 58,
    frequency: 0.0053,
    secondaryFrequency: 0.0021,
    speed: 0.00038,
    direction: 1,
    opacity: 0.32,
    strokeWidth: 0.45,
    linePhaseDelta: 0.065,
    slopeFactor: -440,
  },
];

// ─── Core wave formula ─────────────────────────────────────────────────────
//
//  y = A · sin(x·f  + φ)
//      · cos(x·f₂ + φ·0.65)
//
//  The 0.65 coefficient offsets the secondary phase from the primary so the
//  envelope beats at a different rate → organic "breathing" motion.

function computeWaveY(
  x: number,
  phase: number,
  amplitude: number,
  frequency: number,
  secondaryFrequency: number,
): number {
  return (
    amplitude *
    Math.sin(x * frequency + phase) *
    Math.cos(x * secondaryFrequency + phase * 0.65)
  );
}

// ─── Render one full frame ─────────────────────────────────────────────────

function renderFrame(state: CanvasState, elapsed: number): void {
  const { ctx, width, height } = state;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  for (const cluster of WAVE_CLUSTERS) {
    const basePhase = elapsed * cluster.speed * cluster.direction;
    const anchorY = cluster.centerY * height;

    for (let i = 0; i < cluster.lineCount; i++) {
      const t = cluster.lineCount > 1 ? i / (cluster.lineCount - 1) : 0.5;
      const offsetY = (t - 0.5) * cluster.spread;

      // Stagger neighbouring lines so the bundle expands and contracts
      const linePhase = basePhase + i * cluster.linePhaseDelta;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(22, 22, 22, ${cluster.opacity})`;
      ctx.lineWidth = cluster.strokeWidth;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      // 2 px horizontal step — smooth at 60 FPS, half the vertices of 1 px
      let first = true;
      for (let px = 0; px <= width; px += 2) {
        // Linear diagonal slant: negative slopeFactor → rises toward right
        const slant = (px / width) * cluster.slopeFactor;
        const py =
          anchorY +
          offsetY +
          slant +
          computeWaveY(
            px,
            linePhase,
            cluster.amplitude,
            cluster.frequency,
            cluster.secondaryFrequency,
          );
        if (first) {
          ctx.moveTo(px, py);
          first = false;
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.stroke();
    }
  }
}

export default function Wave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafIdRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const stateRef = useRef<CanvasState | null>(null);
  const syncCanvasSize = useCallback(
    (canvas: HTMLCanvasElement): CanvasState | null => {
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return null;

      const dpr = Math.max(window.devicePixelRatio ?? 1, 1);
      const logicalW = canvas.offsetWidth;
      const logicalH = canvas.offsetHeight;
      const bufW = Math.round(logicalW * dpr);
      const bufH = Math.round(logicalH * dpr);

      if (canvas.width !== bufW || canvas.height !== bufH) {
        canvas.width = bufW;
        canvas.height = bufH;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      return { ctx, width: logicalW, height: logicalH, dpr };
    },
    [],
  );

  const startLoop = useCallback((initialState: CanvasState) => {
    cancelAnimationFrame(rafIdRef.current);
    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTimeRef.current;
      renderFrame(stateRef.current ?? initialState, elapsed);
      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initial = syncCanvasSize(canvas);
    if (!initial) return;

    stateRef.current = initial;
    startLoop(initial);

    const ro = new ResizeObserver(() => {
      const updated = syncCanvasSize(canvas);
      if (updated) stateRef.current = updated;
    });

    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      ro.disconnect();
    };
  }, [syncCanvasSize, startLoop]);

  return (
    <div className="absolute h-screen w-full overflow-hidden bg-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        aria-hidden="true"
        role="presentation"
      />
    </div>
  );
}
