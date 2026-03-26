"use client";

import { GlassCard, fadeOnly } from "@/components/ui/GlassCard";
import { personal } from "@/data/portfolio";

const journey = [
  {
    year: "2018",
    label: "Designer",
    sub: "Branding & UI",
    color: "border-teal-light/30 bg-teal-light/8 text-teal-light",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    year: "2021",
    label: "Full Stack",
    sub: "Node.js + React",
    color: "border-blue-light/30 bg-blue-light/8 text-blue-light",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    year: "2024",
    label: "Sênior Dev",
    sub: "SaaS & IA",
    color: "border-purple-light/30 bg-purple-light/8 text-purple-light",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function AboutCard({ className }: { className?: string }) {
  return (
    <GlassCard className={className} glowColor="rgba(13,148,136,0.2)" variants={fadeOnly}>
      <div className="p-6 h-full flex flex-col gap-4">
        {/* Label */}
        <p className="font-display text-2xl font-extrabold text-teal-light/70">
          Sobre
        </p>

        <p className="text-sm text-white/60 leading-relaxed">
          {personal.bio}
        </p>

        {/* Journey — enlarged, fills remaining space */}
        <div className="mt-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-white/45 font-medium mb-3">
            Trajetória
          </p>
          <div className="flex gap-2">
            {journey.map((step, i) => (
              <div key={step.year} className="flex-1 flex flex-col gap-1.5">
                <div className={`flex items-center gap-2 rounded-xl border px-3 py-3 ${step.color}`}>
                  {step.icon}
                  <div>
                    <p className="font-display text-sm font-bold leading-none">{step.label}</p>
                    <p className="font-mono text-[11px] opacity-70 mt-0.5">{step.sub}</p>
                  </div>
                </div>
                <p className="font-mono text-xs text-white/45 text-center font-medium">{step.year}</p>
                {i < journey.length - 1 && (
                  <div className="absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
