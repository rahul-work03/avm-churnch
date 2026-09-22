"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export interface CoverflowSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  meta?: { label: string; value: string }[];
}

export interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  /** Degrees the first neighbour tilts. */
  rotate?: number;
  /** How far the first neighbour recedes, as a fraction of card width. */
  depth?: number;
  /** Viewer distance as a multiple of card width — smaller is a wider lens. */
  perspective?: number;
  /** Exponent on distance. Below 1 the rake eases off as cards travel out. */
  falloff?: number;
  /** Opacity lost per step from the centre. */
  fade?: number;
  /** Any CSS length. Everything else is derived from it, so the rake scales. */
  cardWidth?: string;
  /** Optional custom card height CSS length. Defaults to cardWidth or 4/3 ratio. */
  cardHeight?: string;
  /** Space between cards, as a fraction of card width. */
  gap?: number;
  loop?: boolean;
  showCaption?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  /** Automatically advance slides one by one. */
  autoPlay?: boolean;
  /** Time between auto-scroll transitions in milliseconds. */
  autoPlayInterval?: number;
  /** Pause auto-scroll when user hovers over the carousel. */
  pauseOnHover?: boolean;
  /** Names the carousel for assistive tech. */
  label?: string;
  className?: string;
  cardClassName?: string;
}

export function CoverflowCarousel({
  slides,
  rotate = 36,
  depth = 0.5,
  perspective = 3,
  falloff = 0.56,
  fade = 0.15,
  cardWidth = "clamp(200px, 24vw, 300px)",
  cardHeight = "clamp(270px, 32vw, 410px)",
  gap = 0.1,
  loop = true,
  showCaption = false,
  showPagination = true,
  showNavigation = true,
  autoPlay = true,
  autoPlayInterval = 3000,
  pauseOnHover = true,
  label = "Cover carousel",
  className,
  cardClassName,
}: CoverflowCarouselProps) {
  const count = slides.length;

  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  /** Fractional card index at the centre. The single source of truth. */
  const posRef = React.useRef(0);
  /** Where the current settle is headed. */
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const dragRef = React.useRef<{
    id: number;
    x: number;
    pos: number;
    v: number;
    t: number;
  } | null>(null);

  const [selected, setSelected] = React.useState(0);

  /** Nearest whole card, folded back into 0..count-1. */
  const indexAt = React.useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  );

  // Paint straight to the DOM with GPU acceleration
  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      // Fold the distance into the shorter way round the ring
      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 80) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance + 0.1)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance * 10));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = targetRef.current - posRef.current;
        if (Math.abs(remaining) < 0.001) {
          posRef.current = targetRef.current;
          // Normalize modulo count on settle so numbers stay bounded cleanly
          if (loop) {
            const norm = ((targetRef.current % count) + count) % count;
            posRef.current = norm;
            targetRef.current = norm;
          }
          paint();
          rafRef.current = null;
          return;
        }
        posRef.current += remaining * 0.14;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [count, indexAt, loop, paint],
  );

  const clamp = React.useCallback(
    (pos: number) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop],
  );

  const goTo = React.useCallback(
    (index: number) => {
      const currentNorm = ((Math.round(posRef.current) % count) + count) % count;
      let diff = index - currentNorm;
      if (loop) {
        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
      }
      settle(clamp(posRef.current + diff));
    },
    [clamp, count, loop, settle],
  );

  const nudge = React.useCallback(
    (by: number) => settle(clamp(Math.round(targetRef.current) + by)),
    [clamp, settle],
  );

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    const carried = Math.max(-1.5, Math.min(1.5, drag.v * 0.15));
    settle(clamp(Math.round(posRef.current + carried)));
  };

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  const isHoveredRef = React.useRef(false);

  // Smooth step-by-step infinite auto-advance
  React.useEffect(() => {
    if (!autoPlay || count <= 1) return;

    const interval = setInterval(() => {
      if (
        (!pauseOnHover || !isHoveredRef.current) &&
        dragRef.current === null
      ) {
        nudge(1);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, count, nudge, pauseOnHover]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const active = slides[selected];

  return (
    <div
      className={cn("relative w-full max-w-[1180px] mx-auto px-2 sm:px-8", className)}
      style={{
        ["--cf-card" as string]: cardWidth,
        ["--cf-card-height" as string]: cardHeight || cardWidth,
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-4 sm:py-6 outline-none active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "var(--cf-card-height, var(--cf-card))",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                className={cn(
                  "absolute left-1/2 top-0 overflow-hidden rounded-[20px] bg-slate-900 shadow-2xl border border-slate-200/70 will-change-transform",
                  !cardHeight && "aspect-square",
                  cardClassName,
                )}
                style={{
                  width: "var(--cf-card)",
                  height: "var(--cf-card-height, var(--cf-card))",
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                  isolation: "isolate",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className="h-full w-full select-none object-cover object-top"
                />
                {(slide.title || slide.subtitle) && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white pointer-events-none">
                      {slide.title && (
                        <p className="font-poppins font-semibold text-xs sm:text-sm text-[#efbf04] leading-tight">
                          {slide.title}
                        </p>
                      )}
                      {slide.subtitle && (
                        <p className="font-poppins text-[11px] sm:text-xs text-slate-200 mt-0.5">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Snug Navigation Buttons */}
        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => nudge(-1)}
              className="absolute left-1 sm:left-3 lg:left-5 top-1/2 z-[200] -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#003471] shadow-lg border border-slate-200/80 flex items-center justify-center transition-all duration-200 hover:bg-[#efbf04] hover:text-[#0b0c1c] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => nudge(1)}
              className="absolute right-1 sm:right-3 lg:right-5 top-1/2 z-[200] -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#003471] shadow-lg border border-slate-200/80 flex items-center justify-center transition-all duration-200 hover:bg-[#efbf04] hover:text-[#0b0c1c] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>

      {showCaption && active?.title && (
        <div
          key={selected}
          className="mt-2.5 flex flex-col items-center px-4 text-center duration-300 animate-in fade-in"
        >
          <p className="text-sm sm:text-base md:text-[17px] font-semibold tracking-tight text-[#003471]">
            {active.title}
          </p>
          {active.subtitle && (
            <p className="mt-0.5 text-xs sm:text-sm text-slate-600 font-normal">
              {active.subtitle}
            </p>
          )}
        </div>
      )}

      {showPagination && (
        <div className="mt-3 sm:mt-5 flex items-center justify-center gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selected}
              onClick={() => goTo(index)}
              className={cn(
                "h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer",
                index === selected
                  ? "w-7 sm:w-9 bg-[#efbf04]"
                  : "w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
