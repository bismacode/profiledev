import { Code2 } from "lucide-react";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const boxSize =
    size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10";
  const iconSize =
    size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const textSize =
    size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <div className="flex items-center gap-2 group">
      <div className={`relative ${boxSize} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan to-purple rounded-lg rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
        <Code2 className={`relative ${iconSize} text-[#050510]`} />
      </div>
      <span className={`${textSize} font-bold tracking-tight`}>
        <span className="text-glow-cyan text-cyan">Wu Ma</span>
        <span className="text-glow-purple text-purple-400"> Dev</span>
      </span>
    </div>
  );
}
