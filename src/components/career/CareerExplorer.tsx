"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, SearchX, Sparkles, X } from "lucide-react";
import CareerCard from "./CareerCard";
import { careers, findCareers } from "@/lib/careers";
import { categories } from "@/data/categories";
import type { CategoryId } from "@/types";

const suggestions = ["Doctor", "Pilot", "Software programmer", "Cybersecurity", "Architect", "Lawyer", "Designer", "AI"];
const categoryIds = Object.keys(categories) as CategoryId[];

// How many careers each category has (shown on the filter buttons).
const countByCategory = careers.reduce<Record<string, number>>((acc, c) => {
  acc[c.category] = (acc[c.category] ?? 0) + 1;
  return acc;
}, {});

export default function CareerExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const outcome = useMemo(() => findCareers(query, category), [query, category]);
  const { results, status } = outcome;
  // With no search and no filter, show careers grouped under category headings.
  const showGroups = status === "all" && category === "all";

  const chip = (on: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition active:scale-[0.97] ${
      on ? "bg-violet text-white" : "bg-white text-navy ring-1 ring-navy/15 hover:bg-lavender"
    }`;

  return (
    <div>
      <label htmlFor="career-search" className="sr-only">
        Search careers
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/50" size={20} />
        <input
          id="career-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search careers… e.g. architect, coding, medicine"
          className="w-full rounded-full border border-navy/10 bg-white py-4 pl-12 pr-12 text-lg outline-none focus:border-violet"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-ink/60 hover:bg-lavender"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-ink/70">Try:</span>
        {suggestions.map((s) => (
          <button key={s} onClick={() => setQuery(s)} className="rounded-full bg-butter px-3 py-1 text-sm font-medium text-navy hover:brightness-95">
            {s}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button aria-pressed={category === "all"} onClick={() => setCategory("all")} className={chip(category === "all")}>
          All ({careers.length})
        </button>
        {categoryIds.map((id) => (
          <button key={id} aria-pressed={category === id} onClick={() => setCategory(id)} className={chip(category === id)}>
            {categories[id].label} <span className="opacity-70">({countByCategory[id] ?? 0})</span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink/70" aria-live="polite">
        {results.length > 0 || status === "all"
          ? `${results.length} ${results.length === 1 ? "career" : "careers"} found`
          : ""}
      </p>

      {status === "corrected" && outcome.correctedQuery && (
        <p className="mt-2 flex items-start gap-2 rounded-2xl bg-lavender p-3 text-sm text-ink/90">
          <Sparkles size={16} className="mt-0.5 shrink-0 text-violet-dark" aria-hidden="true" />
          <span>
            Showing results for <strong className="text-navy">{outcome.correctedQuery}</strong>.
            You typed “{query.trim()}”.
          </span>
        </p>
      )}

      {results.length > 0 ? (
        showGroups ? (
          <div className="mt-4 space-y-10">
            {categoryIds
              .filter((id) => results.some((c) => c.category === id))
              .map((id) => (
                <div key={id}>
                  <h2 className="font-heading text-2xl font-bold text-navy">{categories[id].label}</h2>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {results
                      .filter((c) => c.category === id)
                      .map((c) => (
                        <CareerCard key={c.slug} career={c} compact />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((c) => (
              <CareerCard key={c.slug} career={c} compact />
            ))}
          </div>
        )
      ) : (
        <NoResults
          status={status}
          query={query.trim()}
          categoryLabel={category === "all" ? "" : categories[category].label}
          onReset={() => {
            setQuery("");
            setCategory("all");
          }}
          onAllCategories={() => setCategory("all")}
          onTry={(s) => setQuery(s)}
        />
      )}
    </div>
  );
}

const tryWords = ["Pilot", "Nurse", "Engineer", "Designer"];

function NoResults({
  status,
  query,
  categoryLabel,
  onReset,
  onAllCategories,
  onTry,
}: {
  status: string;
  query: string;
  categoryLabel: string;
  onReset: () => void;
  onAllCategories: () => void;
  onTry: (s: string) => void;
}) {
  let title: string;
  let text: React.ReactNode;
  if (status === "gibberish") {
    title = "Please write a real word";
    text = "That doesn't look like a real word or career. Try a job title, such as “pilot” or “nurse”, or a subject you like, such as “biology”.";
  } else if (status === "short") {
    title = "Keep typing…";
    text = "Type a bit more of the career name and the results will appear.";
  } else if (status === "elsewhere") {
    title = `No matches in ${categoryLabel}`;
    text = "There are careers that match in other categories.";
  } else {
    title = `We don't have “${query}” yet`;
    text = (
      <>
        It sounds like a real career, but Nexovia doesn&apos;t have a page for it yet, and we
        won&apos;t make one up. Try a similar word, browse the categories, or{" "}
        <Link href="/feedback" className="font-semibold text-violet-dark underline">
          tell us to add it
        </Link>
        .
      </>
    );
  }

  return (
    <div className="mt-4 rounded-3xl bg-lavender p-8 text-center" role="status">
      <SearchX className="mx-auto text-violet-dark" size={32} aria-hidden="true" />
      <h2 className="mt-3 font-heading text-xl font-bold text-navy">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-ink/80">{text}</p>
      {status === "gibberish" && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tryWords.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => onTry(w)}
              className="rounded-full bg-butter px-3 py-1 text-sm font-medium text-navy hover:brightness-95"
            >
              {w}
            </button>
          ))}
        </div>
      )}
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {status === "elsewhere" ? (
          <button type="button" onClick={onAllCategories} className="btn btn-primary">
            Search all categories
          </button>
        ) : (
          <button type="button" onClick={onReset} className="btn btn-secondary">
            Show all {careers.length} careers
          </button>
        )}
      </div>
    </div>
  );
}
