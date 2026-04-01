"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { personal } from "@/data/portfolio";

const upworkIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.5v7.217c0 1.211-.99 2.197-2.202 2.197-1.211 0-2.201-.986-2.201-2.197V3.492H1.601v7.217c0 2.715 2.208 4.923 4.923 4.923 2.715 0 4.924-2.208 4.924-4.923V9.49c.516 1.048 1.156 2.107 1.97 3.038l-1.677 7.868h2.406l1.212-5.697c1.073.67 2.286 1.019 3.587 1.019 3.629 0 6.177-2.549 6.177-5.868 0-3.325-2.548-5.832-6.162-5.832z"/>
  </svg>
);

export function ContactCard({ className }: { className?: string }) {
  return (
    <GlassCard className={className} noHover>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-light/40 to-transparent" />

      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: message */}
          <div>
            <h2 className="font-display text-xl font-bold text-white md:text-2xl">
              Bora conversar?
            </h2>
            <p className="mt-1 font-mono text-sm text-white/45">
              Aberto a oportunidades · remoto · Brasil
            </p>
          </div>

          {/* Right: links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="group glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-sm text-white/60 transition-all hover:border-white/20 hover:text-white"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
                <rect x="1" y="3" width="14" height="10" rx="2" />
                <path d="M1 6l7 4 7-4" />
              </svg>
              {personal.email}
            </a>
            <a
              href={personal.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-sm text-white/60 transition-all hover:border-white/20 hover:text-white"
            >
              {upworkIcon}
              Upwork
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-sm text-white/60 transition-all hover:border-white/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-sm text-white/60 transition-all hover:border-white/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
          <p className="font-mono text-[10px] text-white/30">
            © 2026 Gabriel Lara
          </p>
          <p className="font-mono text-[10px] text-white/30">
            Santos · SP · Brasil
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
