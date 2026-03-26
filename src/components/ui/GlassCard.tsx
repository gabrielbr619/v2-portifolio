"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.77, 0, 0.175, 1] },
  },
};

export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const slideBlur: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] },
  },
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  strong?: boolean;
  noHover?: boolean;
  variants?: Variants;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  glowColor,
  strong = false,
  noHover = false,
  variants: customVariants,
  onClick,
}: GlassCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={customVariants ?? cardVariants}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={
        noHover
          ? undefined
          : {
              borderColor: "rgba(255,255,255,0.16)",
              boxShadow: glowColor
                ? `0 0 50px -15px ${glowColor}, 0 16px 32px -8px rgba(0,0,0,0.5)`
                : `0 0 30px -15px rgba(255,255,255,0.06), 0 16px 32px -8px rgba(0,0,0,0.5)`,
            }
      }
      transition={{ duration: 0.25, ease: [0.77, 0, 0.175, 1] }}
      onMouseMove={noHover ? undefined : handleMouseMove}
      onClick={onClick}
      className={cn(
        strong ? "glass-strong" : "glass",
        "card-shimmer gradient-border spotlight relative overflow-hidden",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
