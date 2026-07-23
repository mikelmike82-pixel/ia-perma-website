"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type AnimationPhase = "scatter" | "line" | "settled";

interface Target {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

function FlipCard({
  src,
  target,
  width,
  height,
}: {
  src: string;
  target: Target;
  width: number;
  height: number;
}) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
transition={{ type: "spring", stiffness: 90, damping: 16 }}
      style={{
        position: "absolute",
        width,
        height,
        transformStyle: "preserve-3d",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-muted shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
        </div>
        <div
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-ink shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="mb-1 text-[8px] font-bold uppercase tracking-widest text-primary">
            IA Perma
          </p>
          <p className="text-xs font-medium text-white">Built to scale</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

interface ScrollMorphHeroProps {
  images: string[];
  introTitle: ReactNode;
  introSubtitle?: string;
  revealTitle: string;
  brandLabel?: ReactNode;
  children: ReactNode;
}

export function ScrollMorphHero({
  images,
  introTitle,
  introSubtitle = "Scroll to explore",
  revealTitle,
  brandLabel,
  children,
}: ScrollMorphHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const totalImages = images.length;

  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!stickyRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(stickyRef.current);
    setContainerSize({
      width: stickyRef.current.offsetWidth,
      height: stickyRef.current.offsetHeight,
    });
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const morphProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
const smoothMorph = useSpring(morphProgress, { stiffness: 100, damping: 22 });

  const shuffleProgress = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const smoothShuffle = useSpring(shuffleProgress, { stiffness: 100, damping: 22 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 60);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("line"), 150);
    const t2 = setTimeout(() => setIntroPhase("settled"), 550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Responsive card size — shrinks on narrow screens so cards don't overlap
  // once the circle radius also shrinks.
  const width = containerSize.width;
  const cardWidth = width > 0 && width < 400 ? 38 : width < 768 ? 48 : 60;
  const cardHeight = width > 0 && width < 400 ? 54 : width < 768 ? 68 : 85;

  const scatterPositions = useMemo(
    () =>
      images.map(() => ({
        x: (Math.random() - 0.5) * 900,
        y: (Math.random() - 0.5) * 600,
        rotation: (Math.random() - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    [images]
  );

  const [morphValue, setMorphValue] = useState(0);
  const [shuffleValue, setShuffleValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const u1 = smoothMorph.on("change", setMorphValue);
    const u2 = smoothShuffle.on("change", setShuffleValue);
    const u3 = smoothMouseX.on("change", setParallaxValue);
    return () => {
      u1();
      u2();
      u3();
    };
  }, [smoothMorph, smoothShuffle, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.75, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.75, 1], [16, 0]);
  const introOpacity = useTransform(smoothMorph, [0, 0.4], [1, 0]);

  return (
    <section id="top" ref={sectionRef} className="relative h-[220vh]">
      <div
        ref={stickyRef}
        style={{ height: "100vh", ...({ height: "100dvh" } as React.CSSProperties) }}
        className="sticky top-0 w-full overflow-hidden bg-gradient-to-b from-muted via-background to-background"
      >
        {brandLabel ? (
          <div className="pointer-events-none absolute left-6 top-16 z-0 hidden md:left-10 md:top-20 md:block lg:left-16 lg:top-24">
            {brandLabel}
          </div>
        ) : null}

        <div className="pointer-events-none absolute z-0 top-1/2 left-1/2 flex w-full max-w-[210px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-2 text-center sm:max-w-[320px] md:max-w-sm">
          <motion.h1
            style={{ opacity: introOpacity }}
            className="text-xs font-semibold leading-snug tracking-tight text-ink sm:text-lg md:text-xl lg:text-2xl"
          >
            {introTitle}
          </motion.h1>
          <motion.p
            style={{ opacity: introOpacity }}
            className="mt-2 text-[9px] font-bold uppercase tracking-[0.15em] text-primary-dark sm:mt-3 sm:text-xs sm:tracking-[0.2em]"
          >
            {introSubtitle}
          </motion.p>
        </div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="pointer-events-none absolute inset-x-0 top-20 bottom-4 z-10 flex justify-center px-4 sm:top-24"
        >
          <div
            className="pointer-events-auto flex w-full max-w-4xl flex-col overflow-y-auto"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-ink sm:mb-6 sm:text-4xl">
              {revealTitle}
            </h2>
            {children}
          </div>
        </motion.div>

        <div className="relative flex h-full w-full items-center justify-center">
          {images.map((src, i) => {
            let target: Target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const spacing = cardWidth + 8;
              const totalWidth = totalImages * spacing;
              target = { x: i * spacing - totalWidth / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height) || 800;

              // Larger multiplier on mobile so cards spread out enough to
              // avoid overlapping once card size shrinks.
              const circleRadius = isMobile
                ? Math.min(minDimension * 0.46, 260)
                : Math.min(minDimension * 0.32, 300);

              const circleAngle = (i / totalImages) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(containerSize.width, (containerSize.height || 800) * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.3 : 1.05);
              const arcApexY = (containerSize.height || 800) * (isMobile ? 0.4 : 0.3);
              const arcCenterY = arcApexY + arcRadius;

              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / Math.max(totalImages - 1, 1);
              const maxRotation = spreadAngle * 0.7;
              const boundedRotation = -shuffleValue * maxRotation;

              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;
              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.3 : 1.7,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard key={i} src={src} target={target} width={cardWidth} height={cardHeight} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
