"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET = "hire";

const lines = [
  { delay: 0,    text: "> gabriel --status", color: "text-white/60" },
  { delay: 600,  text: "✓ Disponível para trabalhar", color: "text-emerald-400" },
  { delay: 1000, text: "> gabriel --stack", color: "text-white/60" },
  { delay: 1600, text: "✓ Node.js · Next.js · TypeScript · PostgreSQL", color: "text-blue-light" },
  { delay: 2200, text: "> gabriel --contact", color: "text-white/60" },
  { delay: 2800, text: "✓ gabrielbr619@hotmail.com", color: "text-purple-light" },
  { delay: 3400, text: "> _", color: "text-white/40" },
];

export function HireEgg() {
  const [seq, setSeq] = useState("");
  const [visible, setVisible] = useState(false);
  const [shownLines, setShownLines] = useState<number>(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT") return;
      if (document.activeElement?.tagName === "TEXTAREA") return;
      setSeq((prev) => {
        const next = (prev + e.key).slice(-TARGET.length);
        if (next === TARGET) {
          setVisible(true);
          setShownLines(0);
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!visible) return;
    lines.forEach((_, i) => {
      setTimeout(() => setShownLines(i + 1), lines[i].delay + 200);
    });
    const close = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(close);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
          className="fixed top-8 right-8 z-50 w-[360px] pointer-events-none"
        >
          <div className="glass-strong rounded-2xl border border-white/12 p-5 shadow-2xl shadow-black/40">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-3">
              terminal · easter egg
            </p>
            <div className="space-y-1.5">
              {lines.slice(0, shownLines).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`font-mono text-xs ${line.color}`}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
