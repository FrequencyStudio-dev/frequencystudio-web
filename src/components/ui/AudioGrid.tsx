"use client";

import { useEffect, useRef } from "react";

interface GridPoint {
  x: number;
  y: number;
  baseY: number;
  phase: number;
  amplitude: number;
}

export function AudioGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let points: GridPoint[] = [];

    const COLS = 24;
    const ROWS = 14;
    const VIOLET = "147, 64, 255";

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      buildGrid();
    };

    const buildGrid = () => {
      points = [];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const cellW = w / (COLS - 1);
      const cellH = h / (ROWS - 1);

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * cellW;
          const y = r * cellH;
          // Wave amplitude: stronger near centre-bottom
          const distFromCenter = Math.abs(c - COLS / 2) / (COLS / 2);
          const amplitude = (1 - distFromCenter) * 18 * (1 - r / ROWS);
          points.push({
            x,
            y,
            baseY: y,
            phase: (c / COLS) * Math.PI * 2 + (r / ROWS) * Math.PI,
            amplitude,
          });
        }
      }
    };

    const draw = (t: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const time = t * 0.0006;

      // Update point positions
      points.forEach((p) => {
        p.y = p.baseY + Math.sin(time + p.phase) * p.amplitude;
      });

      // Draw horizontal lines
      for (let r = 0; r < ROWS; r++) {
        const rowPoints = points.slice(r * COLS, (r + 1) * COLS);
        const alpha = 0.08 + (r / ROWS) * 0.12;

        ctx.beginPath();
        ctx.moveTo(rowPoints[0].x, rowPoints[0].y);

        for (let i = 1; i < rowPoints.length - 2; i++) {
          const cp1x = (rowPoints[i].x + rowPoints[i + 1].x) / 2;
          const cp1y = (rowPoints[i].y + rowPoints[i + 1].y) / 2;
          ctx.quadraticCurveTo(rowPoints[i].x, rowPoints[i].y, cp1x, cp1y);
        }
        ctx.lineTo(rowPoints[rowPoints.length - 1].x, rowPoints[rowPoints.length - 1].y);

        ctx.strokeStyle = `rgba(${VIOLET}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw vertical lines (straight)
      for (let c = 0; c < COLS; c++) {
        const colPoints = points.filter((_, i) => i % COLS === c);
        const alpha = 0.04 + (c / COLS) * (1 - c / COLS) * 0.08;

        ctx.beginPath();
        colPoints.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });

        ctx.strokeStyle = `rgba(${VIOLET}, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw accent dots at grid intersections near centre
      points.forEach((p) => {
        const colIdx = points.indexOf(p) % COLS;
        const distFromCenter = Math.abs(colIdx - COLS / 2) / (COLS / 2);
        if (distFromCenter < 0.3) {
          const pulse = (Math.sin(time * 2 + p.phase) + 1) / 2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${VIOLET}, ${0.1 + pulse * 0.3})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
