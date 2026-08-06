"use client";

import { useEffect, useRef, useState } from "react";

import WorldMap from "@/assets/world.svg";
import type { WpConferenceCity } from "@/lib/wp-api";

interface TalkMapProps {
  cities: WpConferenceCity[];
}

interface MapTransform {
  x: number;
  y: number;
  scale: number;
}

const minScale = 1;
const maxScale = 17;
const defaultScale = 5;
const homePosition = { x: 811.33, y: 255.19 };
const mapSize = { width: 1561, height: 745.67 };

function getHomeCenteredTransform(width: number, height: number): MapTransform {
  return {
    scale: defaultScale,
    x: width / 2 - (homePosition.x / mapSize.width) * width * defaultScale,
    y:
      height / 2 -
      (homePosition.y / mapSize.height) * height * defaultScale +
      40,
  };
}

function constrainTransform(
  transform: MapTransform,
  width: number,
  height: number,
) {
  return {
    ...transform,
    x: Math.min(0, Math.max(width * (1 - transform.scale), transform.x)),
    y: Math.min(0, Math.max(height * (1 - transform.scale), transform.y)),
  };
}

export default function TalkMap({ cities }: TalkMapProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);
  const [transform, setTransform] = useState<MapTransform>({
    scale: defaultScale,
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  function zoomAt(factor: number, pointX: number, pointY: number) {
    const viewport = viewportRef.current;
    if (!viewport) return;

    setTransform((current) => {
      const scale = Math.min(
        maxScale,
        Math.max(minScale, current.scale * factor),
      );
      const ratio = scale / current.scale;

      return constrainTransform(
        {
          scale,
          x: pointX - (pointX - current.x) * ratio,
          y: pointY - (pointY - current.y) * ratio,
        },
        viewport.clientWidth,
        viewport.clientHeight,
      );
    });
  }

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const viewportElement = viewport;

    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      const bounds = viewportElement.getBoundingClientRect();
      const pointX = event.clientX - bounds.left;
      const pointY = event.clientY - bounds.top;
      const factor = Math.exp(-event.deltaY * 0.0015);

      setTransform((current) => {
        const scale = Math.min(
          maxScale,
          Math.max(minScale, current.scale * factor),
        );
        const ratio = scale / current.scale;

        return constrainTransform(
          {
            scale,
            x: pointX - (pointX - current.x) * ratio,
            y: pointY - (pointY - current.y) * ratio,
          },
          viewportElement.clientWidth,
          viewportElement.clientHeight,
        );
      });
    }

    viewportElement.addEventListener("wheel", handleWheel, { passive: false });
    return () => viewportElement.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const resizeObserver = new ResizeObserver(() => {
      setTransform(
        getHomeCenteredTransform(viewport.clientWidth, viewport.clientHeight),
      );
    });

    resizeObserver.observe(viewport);
    return () => resizeObserver.disconnect();
  }, []);

  const calculateRelativeSize = (value: number): number => {
    return value * (5 / transform.scale);
  };

  return (
    <div
      ref={viewportRef}
      className={`relative aspect-1561/746 touch-none overflow-hidden rounded-card border-3 border-ink bg-surface-muted shadow-[9px_9px_0_var(--color-brand-tint-strong)] select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      role="region"
      aria-label="Interactive world map of cities where Nico has spoken"
      onPointerDown={(event) => {
        if (event.button !== 0) return;

        event.currentTarget.setPointerCapture(event.pointerId);
        dragRef.current = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          originX: transform.x,
          originY: transform.y,
        };
        setIsDragging(true);
      }}
      onPointerMove={(event) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) return;
        const viewport = event.currentTarget;
        const x = drag.originX + event.clientX - drag.startX;
        const y = drag.originY + event.clientY - drag.startY;

        setTransform((current) =>
          constrainTransform(
            {
              ...current,
              x,
              y,
            },
            viewport.clientWidth,
            viewport.clientHeight,
          ),
        );
      }}
      onPointerUp={(event) => {
        if (dragRef.current?.pointerId !== event.pointerId) return;

        dragRef.current = null;
        setIsDragging(false);
        event.currentTarget.releasePointerCapture(event.pointerId);
      }}
      onPointerCancel={() => {
        dragRef.current = null;
        setIsDragging(false);
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          transformOrigin: "0 0",
        }}
      >
        <WorldMap className="talk-map absolute inset-0 size-full" aria-hidden />
        <svg
          className="talk-map-points absolute inset-0 size-full"
          viewBox="0 0 1561 745.67"
          aria-hidden
        >
          <g className="talk-map-connections">
            {cities.map((city) => (
              <line
                strokeWidth={calculateRelativeSize(0.4)}
                key={city.name}
                x1={homePosition.x}
                y1={homePosition.y}
                x2={city.position.x}
                y2={city.position.y}
              />
            ))}
          </g>
          <g>
            {cities.map((city) => (
              <g key={city.name}>
                <circle
                  strokeWidth={calculateRelativeSize(0.4)}
                  cx={city.position.x}
                  cy={city.position.y}
                  r={calculateRelativeSize(2)}
                />
              </g>
            ))}
          </g>
          <circle
            className="talk-map-home"
            strokeWidth={calculateRelativeSize(0.5)}
            cx={homePosition.x}
            cy={homePosition.y}
            r={calculateRelativeSize(3)}
          />
        </svg>
      </div>
      <div
        className="absolute top-3 right-3 z-10 flex overflow-hidden rounded-lg border-2 border-ink bg-white font-mono text-sm shadow-[3px_3px_0_var(--color-ink)]"
        onPointerDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="grid size-9 cursor-pointer place-items-center border-r border-ink/20 hover:bg-brand-tint"
          aria-label="Zoom in"
          onClick={() => {
            const viewport = viewportRef.current;
            if (viewport) {
              zoomAt(1.5, viewport.clientWidth / 2, viewport.clientHeight / 2);
            }
          }}
        >
          +
        </button>
        <button
          type="button"
          className="grid size-9 cursor-pointer place-items-center border-r border-ink/20 hover:bg-brand-tint"
          aria-label="Zoom out"
          onClick={() => {
            const viewport = viewportRef.current;
            if (viewport) {
              zoomAt(
                1 / 1.5,
                viewport.clientWidth / 2,
                viewport.clientHeight / 2,
              );
            }
          }}
        >
          -
        </button>
        <button
          type="button"
          className="cursor-pointer px-3 hover:bg-brand-tint"
          onClick={() => {
            const viewport = viewportRef.current;
            if (viewport) {
              setTransform(
                getHomeCenteredTransform(
                  viewport.clientWidth,
                  viewport.clientHeight,
                ),
              );
            }
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
