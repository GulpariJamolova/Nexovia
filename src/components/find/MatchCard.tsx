import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CareerMatch } from "@/types";

export default function MatchCard({ match }: { match: CareerMatch }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
      <h3 className="text-xl font-bold text-navy">{match.name}</h3>
      <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-violet">
        Why it fits you
      </p>
      <p className="mt-1 text-ink/75">{match.why}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {match.subjects.map((s) => (
          <span key={s} className="rounded-full bg-lavender px-3 py-1 text-xs font-medium text-navy">
            {s}
          </span>
        ))}
      </div>
      <Link
        href={`/career/${match.slug}`}
        className="group mt-5 inline-flex items-center gap-2 font-semibold text-violet"
      >
        Learn about this career
        <ArrowRight size={18} className="transition group-hover:translate-x-1" />
      </Link>
    </div>
  );
}



