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

export function searchCareers(query: string, category: CategoryId | "all"): Career[] {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  return careers.filter((c) => {
    if (category !== "all" && c.category !== category) return false;
    if (tokens.length === 0) return true;
    const haystack = [
      c.name,
      c.summary,
      c.keywords.join(" "),
      categories[c.category].label,
      ...c.subjects.map((s) => subjects[s.id].name),
    ]
      .join(" ")
      .toLowerCase();
    return tokens.every((t) => haystack.includes(t));
  });
}
