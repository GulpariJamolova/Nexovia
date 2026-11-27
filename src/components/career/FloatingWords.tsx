import { careerWords } from "@/data/career-words";
import { subjects } from "@/data/subjects";
import type { Career } from "@/types";

/*
  O*NET-style banner: a purple panel full of colourful words of different sizes
  that drift gently (pure CSS, see `animate-drift` in globals.css; people who
  turn on "reduce motion" see them standing still).
  The first three words are the biggest. Words are in normal text flow, so they
  wrap on phones and never overlap.
*/
const sizes = [
  "text-4xl sm:text-6xl", "text-3xl sm:text-5xl", "text-3xl sm:text-4xl",
  "text-xl sm:text-3xl", "text-lg sm:text-2xl", "text-xl sm:text-2xl",
  "text-base sm:text-xl", "text-lg sm:text-xl", "text-base sm:text-lg",
];
const colours = [
  "text-white", "text-[#ff8bd0]", "text-[#ffcf6e]", "text-[#ff7ab0]", "text-[#ffe08a]",
  "text-white", "text-[#ffa8dc]", "text-[#ffc266]", "text-[#ff9ad0]",
];
// Where each word sits in the reading order, so big and small words mix.
const order = [3, 0, 5, 1, 7, 2, 4, 8, 6];
const durations = [9, 7.5, 10, 8, 11, 8.5, 9.5, 7, 10.5];

function wordsFor(career: Career): string[] {
  const own = careerWords[career.slug] ?? [];
  const pool = [
    ...own,
    ...career.keywords.filter((k) => k.toLowerCase() !== career.name.toLowerCase()),
    ...career.subjects.map((s) => subjects[s.id].name),
    ...career.skills,
  ];
  return [...new Set(pool)].slice(0, 9);
}

export function WordCloud({ words, className = "" }: { words: string[]; className?: string }) {
  const list = words.slice(0, 9);
  return (
    <div
      aria-hidden="true"
      className={`flex flex-wrap content-center items-center justify-center gap-x-5 gap-y-1 overflow-hidden rounded bg-plum px-4 py-6 sm:gap-x-8 sm:px-10 ${className}`}
    >
      {order
        .filter((i) => list[i])
        .map((i) => (
          <span
            key={i}
            style={{ animationDelay: `${-i * 1.3}s`, animationDuration: `${durations[i]}s` }}
            className={`animate-drift font-heading font-bold leading-tight ${sizes[i]} ${colours[i]}`}
          >
            {list[i]}
          </span>
        ))}
    </div>
  );
}

export default function FloatingWords({ career, className = "" }: { career: Career; className?: string }) {
  return <WordCloud words={wordsFor(career)} className={`min-h-56 sm:min-h-64 ${className}`} />;
}
