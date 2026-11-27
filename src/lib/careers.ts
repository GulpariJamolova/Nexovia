import { careers as baseCareers } from "@/data/careers";
import { buildCareer } from "@/data/careers-build";
import { healthcareSeeds } from "@/data/careers-healthcare";
import { architectureSeeds, engineeringSeeds } from "@/data/careers-engineering";
import { technologySeeds } from "@/data/careers-technology";
import { creativeSeeds } from "@/data/careers-creative";
import { lawSeeds, educationSeeds } from "@/data/careers-law-education";
import { scienceSeeds } from "@/data/careers-science";
import { businessSeeds } from "@/data/careers-business";
import {
  transportSeeds,
  sportSeeds,
  publicSeeds,
} from "@/data/careers-transport-sport-public";
import { salaryOverrides } from "@/data/salaries";
import { categories } from "@/data/categories";
import { subjects } from "@/data/subjects";
import {
  closestWord,
  isAllowedShortWord,
  looksLikeGibberish,
  meaningfulTokens,
} from "@/lib/searchQuery";
import type { CategoryId, Career } from "@/types";

/*
  The original 10 careers stay exactly as they were in data/careers.ts.
  The new careers are written in a shorter "seed" format and expanded here.
  Salary ranges (only where we have a real source) are added at the end.
*/
const newCareers = [
  ...healthcareSeeds,
  ...architectureSeeds,
  ...engineeringSeeds,
  ...technologySeeds,
  ...creativeSeeds,
  ...lawSeeds,
  ...educationSeeds,
  ...scienceSeeds,
  ...businessSeeds,
  ...transportSeeds,
  ...sportSeeds,
  ...publicSeeds,
].map(buildCareer);

export const careers: Career[] = [...baseCareers, ...newCareers].map((c) => {
  const extra = salaryOverrides[c.slug];
  // Make sure each career can be found by its own name (for example when a
  // student types "I want to be an architect" in the questionnaire).
  const ownName = c.name.toLowerCase();
  const keywords = c.keywords.some((k) => k.toLowerCase() === ownName)
    ? c.keywords
    : [...c.keywords, ownName];
  return {
    ...c,
    keywords,
    salary: extra ? { ...c.salary, ...extra } : c.salary,
  };
});

export function getCareer(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}

function haystackOf(c: Career) {
  return [
    c.name,
    c.summary,
    c.keywords.join(" "),
    categories[c.category].label,
    ...c.subjects.map((s) => subjects[s.id].name),
  ]
    .join(" ")
    .toLowerCase();
}
const haystacks = new Map(careers.map((c) => [c.slug, haystackOf(c)]));

// Short words like "ai", "it" or "hr" must match a whole word (so "ai" doesn't
// match "explain"). Other short words match the start of a word, so partial
// typing like "arc" still finds "architect". Longer words can match anywhere.
const wordCache = new Map<string, RegExp>();
function tokenMatches(haystack: string, t: string) {
  if (t.length > 3) return haystack.includes(t);
  let re = wordCache.get(t);
  if (!re) {
    re = isAllowedShortWord(t) ? new RegExp(`\\b${t}\\b`) : new RegExp(`\\b${t}`);
    wordCache.set(t, re);
  }
  return re.test(haystack);
}

function matchTokens(tokens: string[], category: CategoryId | "all"): Career[] {
  return careers.filter((c) => {
    if (category !== "all" && c.category !== category) return false;
    if (tokens.length === 0) return true;
    const haystack = haystacks.get(c.slug) ?? "";
    return tokens.every((t) => tokenMatches(haystack, t));
  });
}

export function searchCareers(query: string, category: CategoryId | "all"): Career[] {
  return matchTokens(meaningfulTokens(query), category);
}

const wordsIn = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((w) => w.length >= 3);

// Every word that appears in our career texts (used to recognise real words).
export const vocabulary = [...new Set([...haystacks.values()].flatMap(wordsIn))];

// Words used for spelling fixes: only career names and keywords, most common
// first, so "enginer" becomes "engineer" rather than a rarer word.
const nameWordCount = new Map<string, number>();
for (const c of careers) {
  for (const w of wordsIn([c.name, ...c.keywords].join(" "))) {
    nameWordCount.set(w, (nameWordCount.get(w) ?? 0) + 1);
  }
}
const correctionWords = [...nameWordCount.entries()]
  .sort((a, b) => b[1] - a[1])
  .map(([w]) => w);

export type SearchOutcome = {
  results: Career[];
  /**
   * all       – nothing typed, showing everything
   * found     – real matches
   * corrected – matches after fixing a spelling mistake (see `correctedQuery`)
   * elsewhere – matches exist, but not in the chosen category
   * unknown   – looks like a real word, but we don't have that career yet
   * short     – too little typed to search yet
   * gibberish – looks like random typing
   */
  status: "all" | "found" | "corrected" | "elsewhere" | "unknown" | "short" | "gibberish";
  correctedQuery?: string;
};

export function findCareers(query: string, category: CategoryId | "all"): SearchOutcome {
  const trimmed = query.trim();
  if (trimmed === "") return { results: matchTokens([], category), status: "all" };

  const tokens = meaningfulTokens(trimmed);
  if (tokens.length === 0) {
    // e.g. "!!!" or "???" (only symbols), or just "I want to be"
    return /[a-z0-9]/i.test(trimmed)
      ? { results: matchTokens([], category), status: "all" }
      : { results: [], status: "gibberish" };
  }

  // A word is "real" if it is in our career vocabulary (or is the start of
  // one, while the student is still typing), is a known short word, is a
  // likely misspelling of a known word, or simply doesn't look random.
  const known = (t: string) =>
    isAllowedShortWord(t) || vocabulary.some((v) => v.includes(t) || v.startsWith(t));
  const real = tokens.filter((t) => known(t) || !looksLikeGibberish(t));
  if (real.length === 0) return { results: [], status: "gibberish" };

  // Ignore random bits when the rest of the search makes sense ("asdf doctor").
  const exact = matchTokens(real, category);
  if (exact.length > 0) return { results: exact, status: "found" };

  // Try fixing spelling mistakes, one word at a time ("archtect" → "architect").
  const fixed = real.map((t) => (known(t) ? t : closestWord(t, correctionWords) ?? t));
  if (fixed.some((t, i) => t !== real[i])) {
    const corrected = matchTokens(fixed, category);
    if (corrected.length > 0) {
      return { results: corrected, status: "corrected", correctedQuery: fixed.join(" ") };
    }
  }

  if (category !== "all" && matchTokens(fixed, "all").length > 0) {
    return { results: [], status: "elsewhere" };
  }
  if (real.every((t) => t.length < 3 && !isAllowedShortWord(t))) {
    return { results: [], status: "short" };
  }
  return { results: [], status: "unknown" };
}
