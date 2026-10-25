import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import CategoryArt from "@/components/ui/CategoryArt";
import { SubjectIcon } from "@/components/ui/Icons";
import { subjects } from "@/data/subjects";
import { categories } from "@/data/categories";
import type { Career } from "@/types";
import type { Match, MatchLevel } from "@/lib/matching";

const levelStyle: Record<MatchLevel, { label: string; cls: string }> = {
  strong: { label: "Strong match", cls: "bg-lime text-navy" },
  good: { label: "Good match", cls: "bg-sky text-navy" },
  explore: { label: "Worth exploring", cls: "bg-butter text-navy" },
};

export default function CareerCard({
  career,
  match,
  compact = false,
}: {
  career: Career;
  match?: Match;
  compact?: boolean;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy/5 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CategoryArt category={career.category} className="h-36 w-full" />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">
              {categories[career.category].label}
            </span>
            {match && (
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${levelStyle[match.level].cls}`}>
                {levelStyle[match.level].label}
              </span>
            )}
          </div>
          <h3 className="mt-2 font-heading text-2xl font-bold text-navy">{career.name}</h3>
          <p className="mt-1 text-ink/80">{career.summary}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-navy">Subjects you may need</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {career.subjects.map((s) => (
              <li
                key={s.id}
                className="inline-flex items-center gap-1.5 rounded-full bg-lavender px-3 py-1 text-sm font-medium text-navy"
              >
                <SubjectIcon id={s.id} size={14} />
                {subjects[s.id].name}
              </li>
            ))}
          </ul>
        </div>

        {!compact && (
          <>
            <div>
              <h4 className="text-sm font-semibold text-navy">Skills that help</h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {career.skills.map((s) => (
                  <li key={s} className="rounded-full bg-white px-3 py-1 text-sm text-ink ring-1 ring-navy/15">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-butter/70 p-4">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Lightbulb size={16} aria-hidden="true" /> Real-life example
              </h4>
              <p className="mt-1 text-sm text-ink/90">{career.realLifeExample}</p>
            </div>
          </>
        )}

        {match && match.reasons.length > 0 && (
          <div className="rounded-2xl bg-lavender p-4">
            <h4 className="text-sm font-semibold text-navy">Why this may match you</h4>
            <ul className="mt-1 space-y-1 text-sm text-ink/90">
              {match.reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={`/career/${career.slug}`}
          aria-label={`Learn more about ${career.name}`}
          className="btn btn-primary group mt-auto self-start"
        >
          Learn more
          <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
