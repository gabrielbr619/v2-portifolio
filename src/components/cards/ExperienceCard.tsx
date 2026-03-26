"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { experiences } from "@/data/portfolio";

const timelineItem = {
  hidden: { opacity: 0, x: 12 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.4,
      ease: [0.77, 0, 0.175, 1],
    },
  }),
};

export function ExperienceCard({ className }: { className?: string }) {
  return (
    <GlassCard className={className} glowColor="rgba(37,99,235,0.2)" noHover>
      <div className="flex h-full flex-col p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-widest text-blue-light/60 mb-6">
          Experiência
        </p>

        {/* Timeline */}
        <div className="relative flex-grow">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-light/40 via-blue-light/20 to-transparent" />

          <div className="space-y-7 pl-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={timelineItem}
                custom={i}
                initial="hidden"
                animate="show"
                className="relative group"
              >
                {/* Dot — animated */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.2 + i * 0.12,
                    duration: 0.35,
                    ease: [0.77, 0, 0.175, 1],
                  }}
                  className={`absolute -left-6 top-1 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                    exp.current
                      ? "border-purple-light bg-purple-light/30"
                      : "border-white/20 bg-white/5"
                  }`}
                />

                {/* Content */}
                <div>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="font-display text-sm font-semibold text-white leading-snug">
                        {exp.role}
                      </h3>
                      {"companyUrl" in exp && exp.companyUrl ? (
                        <a
                          href={exp.companyUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-purple-light/70 hover:text-purple-light transition-colors"
                        >
                          {exp.company} ↗
                        </a>
                      ) : (
                        <p className="font-mono text-xs text-white/45">{exp.company}</p>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-white/40 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-white/50 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <TechBadge key={t}>{t}</TechBadge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
