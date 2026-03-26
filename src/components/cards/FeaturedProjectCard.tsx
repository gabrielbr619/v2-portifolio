"use client";

import { motion } from "framer-motion";
import { GlassCard, slideBlur } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/data/portfolio";

const featured = projects.find((p) => p.featured)!;

const modules = [
  { name: "Agendamento", desc: "Multi-profissional" },
  { name: "Prontuário", desc: "Clínico digital" },
  { name: "Financeiro", desc: "Stripe + TISS" },
  { name: "IA Chat", desc: "OpenAI / Groq" },
  { name: "WhatsApp", desc: "Evolution API" },
  { name: "RH & Payroll", desc: "Gestão completa" },
];

export function FeaturedProjectCard({ className }: { className?: string }) {
  return (
    <GlassCard
      className={className}
      glowColor={featured.accentColor}
      strong
      variants={slideBlur}
    >
      {/* Gradient accent bar LEFT */}
      <div
        className="absolute left-0 inset-y-0 w-[3px] rounded-l-[20px]"
        style={{ background: "linear-gradient(to bottom, #a855f7, #3b82f6, #06b6d4)" }}
      />

      <div className="flex h-full flex-col p-5 md:p-6 pl-6 md:pl-7">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full border border-purple-light/20 bg-purple-light/8 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-light" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-purple-light/80">
                Projeto Principal
              </span>
            </div>
            <h2 className="font-display text-xl font-bold text-white md:text-2xl">
              {featured.name}
            </h2>
          </div>
          <a
            href={featured.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-white/50 transition-all hover:border-white/20 hover:text-white"
            aria-label="Ver no GitHub"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path d="M3 13L13 3M8 3h5v5" />
            </svg>
          </a>
        </div>

        {/* Description — more compact */}
        <p className="mt-2 text-sm text-white/60 leading-relaxed">
          {featured.description}
        </p>

        {/* Modules — 2 rows of 3, legible */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
              className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-200"
            >
              <p className="font-display text-xs font-semibold text-white/80">
                {mod.name}
              </p>
              <p className="font-mono text-[10px] text-white/40 mt-0.5">{mod.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom: stats + tech */}
        <div className="mt-4 flex items-end justify-between gap-4 flex-wrap">
          {/* Stats inline */}
          <div className="flex gap-4">
            {featured.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-display text-lg font-bold gradient-text">{stat.value}</span>
                <p className="font-mono text-[9px] text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {featured.tech.map((t) => (
              <TechBadge key={t} accent>{t}</TechBadge>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
