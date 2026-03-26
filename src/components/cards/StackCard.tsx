"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const categories = [
  {
    label: "Backend",
    color: "text-emerald-400",
    items: [
      { name: "Node.js", color: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300" },
      { name: "TypeScript", color: "border-blue-light/25 bg-blue-light/10 text-blue-300" },
      { name: "Python", color: "border-yellow-500/25 bg-yellow-500/10 text-yellow-300" },
      { name: "Prisma", color: "border-teal-light/25 bg-teal-light/10 text-teal-300" },
      { name: "REST API", color: "border-white/15 bg-white/6 text-white/65" },
    ],
  },
  {
    label: "Frontend",
    color: "text-blue-light",
    items: [
      { name: "Next.js", color: "border-white/15 bg-white/6 text-white/65" },
      { name: "React", color: "border-teal-light/25 bg-teal-light/10 text-teal-300" },
      { name: "React Native", color: "border-teal-light/25 bg-teal-light/10 text-teal-300" },
      { name: "Tailwind CSS", color: "border-teal-light/25 bg-teal-light/10 text-teal-300" },
      { name: "Vue.js", color: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300" },
    ],
  },
  {
    label: "Infra & Dados",
    color: "text-orange-400",
    items: [
      { name: "PostgreSQL", color: "border-blue-light/25 bg-blue-light/10 text-blue-300" },
      { name: "Redis", color: "border-red-500/25 bg-red-500/10 text-red-300" },
      { name: "Docker", color: "border-blue-light/25 bg-blue-light/10 text-blue-300" },
      { name: "Supabase", color: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300" },
      { name: "GitHub Actions", color: "border-white/15 bg-white/6 text-white/65" },
    ],
  },
  {
    label: "Serviços",
    color: "text-purple-light",
    items: [
      { name: "Stripe", color: "border-purple-light/25 bg-purple-light/10 text-purple-300" },
      { name: "Socket.io", color: "border-white/15 bg-white/6 text-white/65" },
      { name: "OpenAI", color: "border-white/15 bg-white/6 text-white/65" },
      { name: "WhatsApp API", color: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300" },
      { name: "Vercel", color: "border-white/15 bg-white/6 text-white/65" },
    ],
  },
];

const badgeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025, delayChildren: 0.15 } },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.82 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.22, ease: [0.77, 0, 0.175, 1] } },
};

export function StackCard({ className }: { className?: string }) {
  return (
    <GlassCard className={className} glowColor="rgba(37,99,235,0.2)">
      <div className="p-5 h-full flex flex-col gap-4">
        <p className="font-display text-2xl font-extrabold text-blue-light/70">
          Stack
        </p>

        {categories.map((cat) => (
          <div key={cat.label} className="flex-1">
            <p className={`font-mono text-[11px] uppercase tracking-wider mb-2 font-semibold ${cat.color}`}>
              {cat.label}
            </p>
            <motion.div
              variants={badgeContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-1.5"
            >
              {cat.items.map((item) => (
                <motion.span
                  key={item.name}
                  variants={badgeItem}
                  className={`stack-badge inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-medium select-none cursor-default ${item.color}`}
                >
                  {item.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
