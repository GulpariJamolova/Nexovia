import { Code, FlaskConical, Palette, Ruler, Scale, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const floaters: { Icon: LucideIcon; pos: string; color: string; delay: string }[] = [
  { Icon: Stethoscope, pos: "left-0 top-6", color: "text-coral", delay: "0s" },
  { Icon: Ruler, pos: "right-0 top-2", color: "text-violet", delay: "0.5s" },
  { Icon: Code, pos: "-left-2 bottom-16", color: "text-navy", delay: "1s" },
  { Icon: Scale, pos: "-right-2 bottom-20", color: "text-coral", delay: "0.3s" },
  { Icon: Palette, pos: "left-10 -bottom-1", color: "text-violet", delay: "0.8s" },
  { Icon: FlaskConical, pos: "right-8 -bottom-2", color: "text-navy", delay: "1.3s" },
];

export default function ExplorerAnimation() {
  return (
    <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72" aria-hidden="true">
      <div className="absolute inset-4 rounded-full bg-lavender" />

      {floaters.map(({ Icon, pos, color, delay }, i) => (
        <span
          key={i}
          style={{ animationDelay: delay }}
          className={`absolute ${pos} animate-float flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ${color}`}
        >
          <Icon size={22} />
        </span>
      ))}

      <svg viewBox="0 0 200 200" className="absolute inset-0 animate-bob" fill="none">
        {/* backpack */}
        <rect x="56" y="98" width="32" height="50" rx="10" className="fill-coral" />
        {/* legs and shoes */}
        <rect x="82" y="146" width="14" height="24" rx="6" className="fill-navy" />
        <rect x="104" y="146" width="14" height="24" rx="6" className="fill-navy" />
        <ellipse cx="86" cy="172" rx="13" ry="6" className="fill-lime" />
        <ellipse cx="114" cy="172" rx="13" ry="6" className="fill-lime" />
        {/* body */}
        <rect x="72" y="92" width="56" height="60" rx="22" className="fill-violet" />
        {/* arm + magnifier */}
        <path d="M124 108l24-16" className="stroke-violet" strokeWidth="10" strokeLinecap="round" />
        <circle cx="158" cy="78" r="15" className="fill-sky/50 stroke-navy" strokeWidth="5" />
        <path d="M148 90l-8 8" className="stroke-navy" strokeWidth="5" strokeLinecap="round" />
        {/* head */}
        <circle cx="100" cy="68" r="26" fill="#FFD7B5" />
        <path d="M74 66C74 42 126 42 126 66 118 54 82 54 74 66z" className="fill-navy" />
        <circle cx="91" cy="72" r="3" className="fill-navy" />
        <circle cx="109" cy="72" r="3" className="fill-navy" />
        <path d="M92 82q8 8 16 0" className="stroke-navy" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
