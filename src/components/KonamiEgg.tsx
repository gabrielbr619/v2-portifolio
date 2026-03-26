"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function KonamiEgg() {
  const [seq, setSeq] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setSeq((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(",") === KONAMI.join(",")) {
          setVisible(true);
          setTimeout(() => setVisible(false), 5000);
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="glass-strong rounded-2xl border border-purple-light/30 px-8 py-5 text-center shadow-2xl shadow-purple-light/20">
            <p className="font-mono text-xs text-purple-light/70 mb-1 uppercase tracking-widest">easter egg encontrado 🎮</p>
            <p className="font-display text-xl font-extrabold text-white">
              Você encontrou o código secreto.
            </p>
            <p className="font-display text-lg font-semibold gradient-text mt-1">
              Agora me contrata. 🚀
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
