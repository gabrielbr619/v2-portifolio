"use client";

import { motion } from "framer-motion";
import { HeroCard } from "@/components/cards/HeroCard";
import { FeaturedProjectCard } from "@/components/cards/FeaturedProjectCard";
import { AboutCard } from "@/components/cards/AboutCard";
import { StackCard } from "@/components/cards/StackCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { ContactCard } from "@/components/cards/ContactCard";
import { projects } from "@/data/portfolio";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const otherProjects = projects.filter((p) => !p.featured);

export function BentoGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-4 md:grid-cols-12"
    >
      {/* Row 1: Hero (7 cols) + About (5 cols) */}
      <HeroCard className="md:col-span-7 min-h-[280px]" />
      <AboutCard className="md:col-span-5 min-h-[280px]" />

      {/* Row 2: Featured (8 cols) + Stack (4 cols) */}
      <FeaturedProjectCard className="md:col-span-8 min-h-[320px]" />
      <StackCard className="md:col-span-4 min-h-[320px]" />

      {/* Row 3: 2 projects + Experience spanning 2 rows */}
      {otherProjects.slice(0, 2).map((p, i) => (
        <ProjectCard
          key={p.id}
          index={i}
          name={p.name}
          tagline={p.tagline}
          highlight={"highlight" in p ? (p as {highlight?: string}).highlight : undefined}
          highlightColor={"highlightColor" in p ? (p as {highlightColor?: string}).highlightColor : undefined}
          description={p.description}
          stats={"stats" in p ? (p as {stats?: readonly {value: string; label: string}[]}).stats : undefined}
          tech={p.tech}
          github={p.github}
          accentColor={p.accentColor}
          className="md:col-span-4 min-h-[220px]"
        />
      ))}
      <ExperienceCard className="md:col-span-4 md:row-span-2 min-h-[440px]" />

      {/* Row 4: remaining projects + GitHub */}
      {otherProjects.slice(2).map((p, i) => (
        <ProjectCard
          key={p.id}
          index={i + 2}
          name={p.name}
          tagline={p.tagline}
          highlight={"highlight" in p ? (p as {highlight?: string}).highlight : undefined}
          highlightColor={"highlightColor" in p ? (p as {highlightColor?: string}).highlightColor : undefined}
          description={p.description}
          stats={"stats" in p ? (p as {stats?: readonly {value: string; label: string}[]}).stats : undefined}
          tech={p.tech}
          github={p.github}
          accentColor={p.accentColor}
          className="md:col-span-4 min-h-[220px]"
        />
      ))}
      <GitHubFiller className="md:col-span-4 min-h-[220px]" />

      {/* Row 5: Contact full width */}
      <ContactCard className="md:col-span-12" />
    </motion.div>
  );
}

function GitHubFiller({ className }: { className?: string }) {
  return (
    <motion.a
      href="https://github.com/gabrielbr619"
      target="_blank"
      rel="noopener noreferrer"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.77, 0, 0.175, 1] } },
      }}
      whileHover={{ borderColor: "rgba(255,255,255,0.16)" }}
      className={`glass card-shimmer gradient-border group relative flex flex-col items-center justify-center gap-3 overflow-hidden ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white/20 transition-all duration-300 group-hover:text-white/40 group-hover:scale-110">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      <div className="text-center">
        <p className="font-display text-sm font-semibold text-white/40 transition-colors group-hover:text-white/70">
          @gabrielbr619
        </p>
        <p className="font-mono text-[10px] text-white/20 mt-0.5">Ver perfil no GitHub ↗</p>
      </div>
    </motion.a>
  );
}
