"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";

interface Stat { value: string; label: string }

interface ProjectCardProps {
  index?: number;
  name: string;
  tagline: string;
  highlight?: string;
  highlightColor?: string;
  description: string;
  stats?: readonly Stat[];
  tech: readonly string[];
  github?: string;
  accentColor?: string;
  className?: string;
}

export function ProjectCard({
  index = 0,
  name,
  tagline,
  highlight,
  highlightColor,
  description,
  stats,
  tech,
  github,
  accentColor,
  className,
}: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <GlassCard className={`group ${className}`} glowColor={accentColor}>
      {/* Top accent line */}
      {accentColor && (
        <div
          className="absolute top-0 left-5 right-5 h-[2px] rounded-b-sm opacity-50 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: accentColor.replace(/[\d.]+\)$/, "0.9)") }}
        />
      )}

      {/* Decorative background number */}
      <div
        className="pointer-events-none absolute right-4 top-2 font-display font-extrabold leading-none select-none text-[5rem] opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300"
        aria-hidden="true"
      >
        {num}
      </div>

      <div className="relative flex h-full flex-col p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-1">
              {tagline}
            </p>
            <h3 className="font-display text-xl font-bold text-white leading-tight">
              {name}
            </h3>
          </div>
        </div>

        {/* Highlight badge */}
        {highlight && (
          <div className={`mt-2 self-start inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs font-medium select-none cursor-default ${highlightColor ?? "border-white/10 bg-white/5 text-white/50"}`}>
            {highlight}
          </div>
        )}

        {/* Description */}
        <p className="mt-3 text-sm text-white/60 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Mini stats */}
        {stats && stats.length > 0 && (
          <div className="flex gap-4 mt-3 pt-3 border-t border-white/6">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-display text-base font-bold gradient-text">{s.value}</span>
                <p className="font-mono text-[11px] text-white/50 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Footer: tech + GitHub link */}
        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 font-mono text-xs text-white/40 hover:text-white/70 transition-colors whitespace-nowrap"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
