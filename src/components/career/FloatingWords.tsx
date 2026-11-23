import { careerWords } from "@/data/career-words";
import { subjects } from "@/data/subjects";
import type { Career } from "@/types";

/*
  Career-specific words that drift and fade slowly in the career page header.
  Pure CSS animation (see `animate-drift` in globals.css), so it costs no
  JavaScript. People who turn on "reduce motion" see the words standing still.

  Each word sits on its own row, so long words never overlap.
*/
const slots: { style: React.CSSProperties; primary: boolean; delay: string; duration: string }[] = [
  { style: { left: "38%", top: "5%" }, primary: false, delay: "-1.2s", duration: "8s" },
  { style: { left: "7%", top: "15%" }, primary: true, delay: "0s", duration: "9s" },
  { style: { right: "7%", top: "32%" }, primary: false, delay: "-3.5s", duration: "7.5s" },
  { style: { right: "9%", top: "43%" }, primary: true, delay: "-2s", duration: "10s" },
  { style: { left: "9%", top: "58%" }, primary: false, delay: "-5s", duration: "8.5s" },
  { style: { left: "17%", top: "69%" }, primary: true, delay: "-4s", duration: "9.5s" },
  { style: { right: "13%", top: "85%" }, primary: false, delay: "-6s", duration: "7s" },
];

// Primary words go in slots 1, 3, 5; secondary words fill the rest.
const order = [3, 0, 4, 1, 5, 2, 6];

function wordsFor(career: Career): string[] {
  const own = careerWords[career.slug];
  if (own && own.length >= 7) return own.slice(0, 7);
  // Fallback for careers added later without a word list.
  const pool = [
    ...(own ?? []),
    ...career.keywords.filter((k) => k.toLowerCase() !== career.name.toLowerCase()),
    ...career.subjects.map((s) => subjects[s.id].name),
    ...career.skills,
  ];
  return [...new Set(pool)].slice(0, 7);
}

export default function FloatingWords({ career }: { career: Career }) {
  const words = wordsFor(career);

  return (
    <div
      aria-hidden="true"
      className="relative h-72 w-full overflow-hidden rounded-[2rem] bg-white ring-1 ring-navy/10 sm:h-80"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgb(41 34 79 / 0.07) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lavender/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-sky/20 blur-3xl" />

      {slots.map((slot, i) => {
        const word = words[order[i]];
        if (!word) return null;
        return (
          <span
            key={i}
            style={{ ...slot.style, animationDelay: slot.delay, animationDuration: slot.duration }}
            className={`absolute animate-drift whitespace-nowrap ${
              slot.primary
                ? "font-heading text-xl font-bold uppercase tracking-[0.08em] text-navy sm:text-3xl sm:tracking-[0.12em]"
                : "text-sm font-medium tracking-wide text-violet-dark/80 sm:text-base"
            }`}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
