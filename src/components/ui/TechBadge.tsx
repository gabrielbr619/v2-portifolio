import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: string;
  size?: "sm" | "md";
  accent?: boolean;
}

export function TechBadge({ children, size = "sm", accent = false }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-mono font-medium whitespace-nowrap select-none cursor-default",
        size === "sm"
          ? "px-2.5 py-0.5 text-[11px]"
          : "px-3 py-1 text-xs",
        accent
          ? "border-purple-light/25 bg-purple-light/10 text-purple-light"
          : "border-white/10 bg-white/5 text-white/50"
      )}
    >
      {children}
    </span>
  );
}
