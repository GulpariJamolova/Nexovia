/*
  Simple stamp-style picture for the "results ready" screen: a plum square with
  a hand-drawn check mark, a few small career words and a soft shadow offset,
  like a printed card. No mascot, no floating icons.
*/
const words = ["Subjects", "Skills", "Interests", "Pathways"];

export default function ExplorerAnimation() {
  return (
    <div className="mx-auto w-64 sm:w-72" aria-hidden="true">
      <div className="relative">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded bg-navy/25" />
        <div className="relative flex h-44 flex-col items-center justify-center rounded bg-plum sm:h-52">
          <svg viewBox="0 0 80 64" className="h-20 w-24 sm:h-24 sm:w-28" fill="none">
            <path
              d="M8 34 C16 40 22 48 28 56 C40 36 56 18 74 6"
              stroke="#ffcf6e"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
              className="animate-check"
            />
          </svg>
        </div>
      </div>
      <p className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-1 font-heading text-sm font-bold uppercase tracking-widest text-navy/70">
        {words.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </p>
    </div>
  );
}
