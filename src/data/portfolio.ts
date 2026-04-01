export const personal = {
  name: "Gabriel Lara",
  title: "Desenvolvedor Full Stack Sênior",
  location: "Santos · SP",
  tagline: "Construo sistemas de ponta a ponta — do banco de dados à interface.",
  bio: "Mais de 6 anos construindo sistemas web escaláveis. Comecei em design gráfico e migrei para desenvolvimento — o que me dá uma perspectiva única sobre produto. Hoje lidero o desenvolvimento do High Tide Systems, um SaaS enterprise multi-tenant em produção para gestão de clínicas, com IA, Stripe e conformidade com o padrão TISS da ANS.",
  available: true,
  github: "https://github.com/gabrielbr619",
  linkedin: "https://www.linkedin.com/in/gabriel-lara-360408247/",
  email: "gabrielbr619@hotmail.com",
  upwork: "https://www.upwork.com/freelancers/gabriellara",
};

export const stack = [
  { name: "Node.js", color: "green" },
  { name: "Next.js", color: "white" },
  { name: "TypeScript", color: "blue" },
  { name: "React", color: "cyan" },
  { name: "Python", color: "yellow" },
  { name: "PostgreSQL", color: "blue" },
  { name: "Redis", color: "red" },
  { name: "Docker", color: "blue" },
  { name: "Stripe", color: "purple" },
  { name: "Socket.io", color: "white" },
  { name: "Prisma", color: "teal" },
  { name: "GitHub Actions", color: "orange" },
  { name: "Tailwind CSS", color: "cyan" },
  { name: "Vue.js", color: "green" },
  { name: "React Native", color: "cyan" },
  { name: "Supabase", color: "green" },
] as const;

export const projects = [
  {
    id: "high-tide",
    name: "High Tide Systems",
    tagline: "SaaS enterprise para gestão de clínicas",
    description:
      "SaaS multi-tenant construído do zero, atualmente em produção. Cobre 8+ módulos de negócio: agendamento multi-profissional, prontuário clínico (TISS/ANS), RH, payroll, financeiro, estoque, booking público e billing por assinatura. IA conversacional com OpenAI/Groq, integração WhatsApp via Evolution API e pagamentos com Stripe.",
    stats: [
      { label: "módulos de negócio", value: "8+" },
      { label: "controllers REST", value: "110+" },
      { label: "schemas Prisma", value: "20" },
    ],
    tech: ["Node.js", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Stripe", "Socket.io"],
    github: "https://github.com/gabrielbr619/high-tide-systems",
    featured: true,
    accentColor: "rgba(124,58,237,0.3)",
  },
  {
    id: "okina",
    name: "OKINA Psicologia",
    tagline: "Site + agendamento",
    highlight: "Entregue em 1 dia",
    highlightColor: "text-teal-light border-teal-light/20 bg-teal-light/8",
    description:
      "Plataforma completa para clínicas de psicologia: agendamento online, portal do profissional, painel admin e notificações automáticas por e-mail. Desenvolvido do zero em menos de 24 horas.",
    stats: [{ value: "1 dia", label: "do zero ao deploy" }, { value: "3", label: "painéis de controle" }],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/gabrielbr619/okina-psicologia",
    featured: false,
    accentColor: "rgba(13,148,136,0.3)",
  },
  {
    id: "searchap",
    name: "SearchAp",
    tagline: "Agregador imobiliário",
    highlight: "15+ portais em 1 busca",
    highlightColor: "text-blue-light border-blue-light/20 bg-blue-light/8",
    description:
      "Consolida anúncios de 15+ portais imobiliários brasileiros em uma única busca. Scraper Python com deduplicação automática por hash, normalização de dados heterogêneos e API REST para consumo no frontend.",
    stats: [{ value: "15+", label: "portais integrados" }, { value: "1", label: "busca unificada" }],
    tech: ["Python", "Node.js", "Next.js", "PostgreSQL", "Docker"],
    github: "https://github.com/gabrielbr619/searchap",
    featured: false,
    accentColor: "rgba(37,99,235,0.3)",
  },
  {
    id: "petmatch",
    name: "Pet Match",
    tagline: "App mobile de adoção",
    highlight: "React Native · Expo",
    highlightColor: "text-purple-light border-purple-light/20 bg-purple-light/8",
    description:
      "Aplicativo de adoção de animais com busca por geolocalização, chat entre doador e adotante, e upload de fotos via Cloudinary. Disponível para iOS e Android.",
    stats: [{ value: "GPS", label: "busca por local" }, { value: "Chat", label: "em tempo real" }],
    tech: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    github: "https://github.com/gabrielbr619/pet_match",
    featured: false,
    accentColor: "rgba(168,85,247,0.25)",
  },
] as const;

export const experiences = [
  {
    company: "High Tide Systems",
    companyUrl: "https://github.com/gabrielbr619/high-tide-systems",
    role: "Desenvolvedor Full Stack Sênior",
    period: "Dez 2024 — Presente",
    description:
      "Arquitetura e desenvolvimento dos principais módulos da plataforma SaaS. Implementou sistema de chat/notificações em tempo real, IA conversacional e gerencia toda a infraestrutura Docker + CI/CD.",
    tech: ["Node.js", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    current: true,
  },
  {
    company: "Contele Soluções Tecnológicas",
    role: "Desenvolvedor Full Stack",
    period: "Mai 2021 — Ago 2022",
    description:
      "Desenvolvimento de features e correção de bugs em produção. Treinamento de desenvolvedores júnior.",
    tech: ["AngularJS", "ReactJS", "Node.js", "TypeScript", "GCP"],
    current: false,
  },
  {
    company: "Refratech",
    role: "Designer Gráfico",
    period: "Mai 2018 — Presente",
    description:
      "Identidade visual completa da empresa: branding, print, digital e website.",
    tech: ["Figma", "Adobe CC"],
    current: true,
  },
] as const;
