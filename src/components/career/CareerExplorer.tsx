"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import CareerCard from "./CareerCard";
import { careers, searchCareers } from "@/lib/careers";
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
  const results = useMemo(() => searchCareers(query, category), [query, category]);
  // With no search and no filter, show careers grouped under category headings.
  const showGroups = query.trim() === "" && category === "all";

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
        {results.length} {results.length === 1 ? "career" : "careers"} found
      </p>

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
        <div className="mt-4">
          <div className="rounded-3xl bg-lavender p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-navy">
              We don&apos;t have {query ? `“${query}”` : "that"} yet
            </h2>
            <p className="mt-2 text-ink/80">
              Nexovia currently covers {careers.length} careers. Try a different word, clear the filter, or explore one of these:
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button onClick={() => { setQuery(""); setCategory("all"); }} className="btn btn-secondary">
                Show all careers
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careers.slice(0, 3).map((c) => (
              <CareerCard key={c.slug} career={c} compact />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}