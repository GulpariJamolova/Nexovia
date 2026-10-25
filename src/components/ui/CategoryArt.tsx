import { categories } from "@/data/categories";
import type { CategoryId } from "@/types";

const art: Record<CategoryId, React.ReactNode> = {
  healthcare: (
    <>
      <circle cx="100" cy="70" r="46" className="fill-white" />
      <path d="M92 44h16v18h18v16h-18v18H92V78H74V62h18z" className="fill-coral" />
      <path d="M14 112h48l10-20 14 34 12-26h88" className="stroke-navy" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="164" cy="34" r="8" className="fill-lime" />
      <circle cx="38" cy="38" r="5" className="fill-violet" />
    </>
  ),
  architecture: (
    <>
      <rect x="30" y="58" width="52" height="64" rx="4" className="fill-violet" />
      <rect x="88" y="26" width="58" height="96" rx="4" className="fill-navy" />
      <rect x="152" y="70" width="28" height="52" rx="4" className="fill-coral" />
      <g className="fill-white">
        <rect x="40" y="70" width="10" height="10" rx="2" />
        <rect x="60" y="70" width="10" height="10" rx="2" />
        <rect x="40" y="92" width="10" height="10" rx="2" />
        <rect x="60" y="92" width="10" height="10" rx="2" />
        <rect x="98" y="38" width="10" height="10" rx="2" />
        <rect x="126" y="38" width="10" height="10" rx="2" />
        <rect x="98" y="62" width="10" height="10" rx="2" />
        <rect x="126" y="62" width="10" height="10" rx="2" />
        <rect x="98" y="86" width="10" height="10" rx="2" />
        <rect x="126" y="86" width="10" height="10" rx="2" />
      </g>
      <path d="M16 124h168" className="stroke-navy" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  engineering: (
    <>
      <path d="M24 100Q100 16 176 100" className="stroke-violet" strokeWidth="8" strokeLinecap="round" />
      <path d="M52 100V78M76 100V58M100 100V50M124 100V58M148 100V78" className="stroke-violet" strokeWidth="4" strokeLinecap="round" />
      <rect x="16" y="98" width="168" height="10" rx="5" className="fill-navy" />
      <rect x="30" y="114" width="140" height="8" rx="4" className="fill-sky" />
      <circle cx="164" cy="34" r="14" className="stroke-coral" strokeWidth="6" strokeDasharray="6 5" />
    </>
  ),
  technology: (
    <>
      <rect x="45" y="30" width="110" height="74" rx="8" className="fill-navy" />
      <path d="M80 52L65 67l15 15M120 52l15 15-15 15" className="stroke-lime" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M106 48L94 86" className="stroke-sky" strokeWidth="5" strokeLinecap="round" />
      <rect x="28" y="106" width="144" height="10" rx="5" className="fill-violet" />
      <circle cx="174" cy="30" r="7" className="fill-coral" />
    </>
  ),
  creative: (
    <>
      <circle cx="96" cy="72" r="46" className="fill-white" />
      <circle cx="78" cy="58" r="9" className="fill-coral" />
      <circle cx="102" cy="46" r="9" className="fill-violet" />
      <circle cx="124" cy="66" r="9" className="fill-sky" />
      <circle cx="112" cy="94" r="11" className="fill-lime" />
      <rect x="140" y="26" width="14" height="80" rx="3" transform="rotate(25 147 66)" className="fill-navy" />
      <path d="M146 112l-6 14 14-4z" className="fill-coral" />
    </>
  ),
  law: (
    <>
      <circle cx="100" cy="26" r="8" className="fill-violet" />
      <rect x="96" y="30" width="8" height="82" rx="4" className="fill-navy" />
      <rect x="62" y="108" width="76" height="10" rx="5" className="fill-violet" />
      <path d="M40 46h120" className="stroke-navy" strokeWidth="6" strokeLinecap="round" />
      <path d="M52 46L30 86M52 46L74 86M148 46L126 86M148 46L170 86" className="stroke-navy" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 86a24 12 0 0 0 48 0z" className="fill-coral" />
      <path d="M124 86a24 12 0 0 0 48 0z" className="fill-lime" />
    </>
  ),
  education: (
    <>
      <path d="M30 104c24-8 48-8 70 4 22-12 46-12 70-4V50c-24-8-48-8-70 4-22-12-46-12-70-4z" className="fill-white stroke-navy" strokeWidth="4" strokeLinejoin="round" />
      <path d="M100 54v54" className="stroke-navy" strokeWidth="4" />
      <path d="M52 66c12-3 24-2 34 3M52 82c12-3 24-2 34 3" className="stroke-violet" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="24" r="13" className="fill-butter stroke-navy" strokeWidth="3" />
      <path d="M95 40h10" className="stroke-navy" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  science: (
    <>
      <path d="M84 22h32M90 22v36L58 108a8 8 0 0 0 7 12h70a8 8 0 0 0 7-12l-32-50V22" className="stroke-navy" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 88h56l12 20a8 8 0 0 1-7 12H67a8 8 0 0 1-7-12z" className="fill-lime" />
      <circle cx="92" cy="74" r="5" className="fill-violet" />
      <circle cx="108" cy="58" r="4" className="fill-coral" />
      <circle cx="150" cy="40" r="8" className="fill-sky" />
      <circle cx="44" cy="52" r="6" className="fill-violet" />
    </>
  ),
  business: (
    <>
      <rect x="34" y="84" width="26" height="36" rx="4" className="fill-sky" />
      <rect x="70" y="62" width="26" height="58" rx="4" className="fill-violet" />
      <rect x="106" y="40" width="26" height="80" rx="4" className="fill-navy" />
      <path d="M30 66L74 44l32-14 40-10" className="stroke-coral" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M138 16l12 4-4 12" className="stroke-coral" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="92" r="22" className="fill-butter stroke-navy" strokeWidth="4" />
      <path d="M160 82v20M153 88h11a4 4 0 0 1 0 8h-11" className="stroke-navy" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 124h168" className="stroke-navy" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  transport: (
    <>
      <path d="M20 112Q70 100 110 70T180 24" className="stroke-navy" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 9" />
      <path d="M92 74l70-32-22 54-18-18z" className="fill-white stroke-navy" strokeWidth="4" strokeLinejoin="round" />
      <path d="M122 78l18 18" className="stroke-navy" strokeWidth="4" strokeLinecap="round" />
      <circle cx="34" cy="108" r="9" className="fill-coral" />
      <circle cx="176" cy="30" r="8" className="fill-lime" />
      <path d="M30 124h70" className="stroke-violet" strokeWidth="6" strokeLinecap="round" />
      <path d="M118 124h50" className="stroke-sky" strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  sport: (
    <>
      <circle cx="82" cy="74" r="44" className="fill-coral" />
      <path d="M38 74h88M82 30v88" className="stroke-white" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 42c14 14 14 46 0 64M114 42c-14 14-14 46 0 64" className="stroke-white" strokeWidth="4" strokeLinecap="round" />
      <path d="M140 34h30v22a15 15 0 0 1-30 0z" className="fill-butter stroke-navy" strokeWidth="4" strokeLinejoin="round" />
      <path d="M140 40h-8a8 8 0 0 0 8 14M170 40h8a8 8 0 0 1-8 14" className="stroke-navy" strokeWidth="4" strokeLinecap="round" />
      <path d="M155 71v14M144 90h22" className="stroke-navy" strokeWidth="4" strokeLinecap="round" />
      <circle cx="30" cy="30" r="6" className="fill-lime" />
    </>
  ),
  public: (
    <>
      <path d="M100 18l54 18v38c0 30-22 48-54 58-32-10-54-28-54-58V36z" className="fill-violet" />
      <path d="M100 30l42 14v30c0 22-16 38-42 46-26-8-42-24-42-46V44z" className="fill-white" />
      <path d="M80 76l14 14 28-30" className="stroke-lime" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="170" cy="30" r="8" className="fill-coral" />
      <circle cx="30" cy="100" r="6" className="fill-sky" />
    </>
  ),
};

export default function CategoryArt({
  category,
  className = "",
}: {
  category: CategoryId;
  className?: string;
}) {
  return (
    <div className={`${categories[category].tint} ${className}`}>
      <svg
        viewBox="0 0 200 140"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
      >
        {art[category]}
      </svg>
    </div>
  );
}