"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, suffix = "", duration = 1000, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(easeOut(progress) * value));
      if (progress < 1) requestAnimationFrame(raf);
      else setCount(value);
    };
    requestAnimationFrame(raf);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
