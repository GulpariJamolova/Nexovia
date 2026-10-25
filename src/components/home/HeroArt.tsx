import { Code, FlaskConical, GraduationCap, Palette, Ruler, Scale, Sparkles, Stethoscope, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const chips: { Icon: LucideIcon; pos: string; color: string; anim: string; delay: string }[] = [
  { Icon: Stethoscope, pos: "left-0 top-6", color: "text-coral", anim: "animate-float", delay: "0s" },
  { Icon: Ruler, pos: "right-2 top-0", color: "text-violet", anim: "animate-float-slow", delay: "0.6s" },
  { Icon: Code, pos: "-left-2 top-1/2", color: "text-navy", anim: "animate-float-slow", delay: "1.2s" },
  { Icon: Scale, pos: "-right-2 top-[45%]", color: "text-coral", anim: "animate-float", delay: "0.3s" },
  { Icon: Palette, pos: "bottom-4 left-6", color: "text-violet", anim: "animate-float", delay: "0.9s" },
  { Icon: FlaskConical, pos: "bottom-0 right-8", color: "text-navy", anim: "animate-float-slow", delay: "0.2s" },
  { Icon: GraduationCap, pos: "left-1/3 -top-3", color: "text-navy", anim: "animate-float", delay: "1.5s" },
  { Icon: Waves, pos: "right-1/4 -bottom-3", color: "text-violet", anim: "animate-float-slow", delay: "0.7s" },
];

export default function HeroArt() {
  return (
    <div className="relative mx-auto h-[22rem] w-full max-w-md sm:h-[26rem]" aria-hidden="true">
      <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet to-navy" />
      <div className="absolute -right-2 bottom-12 h-24 w-24 rounded-full bg-lime/70" />
      <div className="absolute -left-2 top-16 h-16 w-16 rounded-full bg-sky/70" />

      <div className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 animate-bob rounded-3xl bg-white p-5 shadow-xl">
        <div className="flex items-center gap-2 text-violet">
          <Sparkles size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Career match</span>
        </div>
        <p className="mt-3 font-heading text-xl font-bold text-navy">What will you discover?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-coral/20 px-3 py-1 text-xs font-semibold text-navy">Biology</span>
          <span className="rounded-full bg-sky/30 px-3 py-1 text-xs font-semibold text-navy">Math</span>
          <span className="rounded-full bg-lime/40 px-3 py-1 text-xs font-semibold text-navy">Design</span>
        </div>
      </div>

      {chips.map(({ Icon, pos, color, anim, delay }, i) => (
        <span
          key={i}
          style={{ animationDelay: delay }}
          className={`absolute ${pos} ${anim} flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg ${color}`}
        >
          <Icon size={26} />
        </span>
      ))}
    </div>
  );
}
