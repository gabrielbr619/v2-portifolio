import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Gabriel Lara — Full Stack Developer",
  description:
    "Desenvolvedor Full Stack Sênior especializado em Node.js, Next.js e PostgreSQL. Construo sistemas web escaláveis de ponta a ponta — do banco de dados à interface.",
  keywords: ["Gabriel Lara", "Full Stack", "Node.js", "Next.js", "React", "TypeScript", "Santos SP"],
  openGraph: {
    title: "Gabriel Lara — Full Stack Developer",
    description: "Construo sistemas web escaláveis de ponta a ponta.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
