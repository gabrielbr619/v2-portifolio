"use client";

import { useEffect } from "react";

export function ConsoleEgg() {
  useEffect(() => {
    console.log(
      "%c Oi, dev curioso 👀 ",
      "background: linear-gradient(135deg, #a855f7, #3b82f6); color: #fff; font-size: 16px; padding: 8px 20px; border-radius: 8px; font-family: monospace; font-weight: bold;"
    );
    console.log(
      "%c Achou interessante? Me manda uma mensagem:",
      "color: #a855f7; font-family: monospace; font-size: 12px;"
    );
    console.log(
      "%c gabrielbr619@hotmail.com",
      "color: #06b6d4; font-family: monospace; font-size: 13px; font-weight: bold; text-decoration: underline;"
    );
    console.log(
      "%c → github.com/gabrielbr619",
      "color: #3b82f6; font-family: monospace; font-size: 12px;"
    );
  }, []);

  return null;
}
