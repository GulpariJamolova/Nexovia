/*
  "Nexo" is Nexovia's little helper character. It is an original drawing.
  The mouth and eyes change with the star rating (0 = no rating yet).
*/
export default function NexoMascot({
  rating = 0,
  className = "",
}: {
  rating?: number;
  className?: string;
}) {
  // Different mouth shapes: neutral, sad, flat, smile, big smile
  const mouth =
    rating === 0
      ? "M48 74q12 8 24 0"
      : rating <= 1
        ? "M48 80q12-9 24 0"
        : rating === 2
          ? "M50 78h20"
          : rating === 3
            ? "M48 74q12 8 24 0"
            : "M44 72q16 16 32 0z";

  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={className}>
      {/* antenna */}
      <path d="M60 22V10" className="stroke-navy" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="8" r="6" className="fill-coral" />
      {/* arms */}
      <path d="M18 70q-8-10-4-20M102 70q8-10 4-20" className="stroke-navy" strokeWidth="4" strokeLinecap="round" />
      {/* body */}
      <rect x="20" y="22" width="80" height="78" rx="34" className="fill-violet" />
      <rect x="30" y="32" width="60" height="54" rx="26" className="fill-lavender" />
      {/* cheeks */}
      <circle cx="40" cy="70" r="6" className="fill-coral" opacity="0.35" />
      <circle cx="80" cy="70" r="6" className="fill-coral" opacity="0.35" />
      {/* eyes */}
      <circle cx="46" cy="56" r="8" className="fill-white" />
      <circle cx="74" cy="56" r="8" className="fill-white" />
      <circle cx="47" cy="57" r="4" className="fill-navy" />
      <circle cx="75" cy="57" r="4" className="fill-navy" />
      {/* mouth */}
      <path
        d={mouth}
        className={rating >= 4 ? "fill-coral stroke-navy" : "stroke-navy"}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* feet */}
      <rect x="38" y="98" width="16" height="8" rx="4" className="fill-navy" />
      <rect x="66" y="98" width="16" height="8" rx="4" className="fill-navy" />
    </svg>
  );
}
