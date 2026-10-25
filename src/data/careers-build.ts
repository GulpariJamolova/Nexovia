import type { CategoryId, Career, QualityId, SubjectId } from "@/types";
import { subjects } from "@/data/subjects";

/*
  A compact way to write careers. `buildCareer` expands each Seed into the full
  Career shape used by the website, so the pages, search and matching all work
  exactly the same as for the original careers.
*/
export type Seed = {
  slug: string;
  name: string;
  category: CategoryId;
  summary: string;
  overview: string;
  purpose: string;
  dailyWork: string;
  example: string; // becomes realLifeExample
  kw: string[]; // keywords: search + free-text matching
  tags: string[]; // matching tags
  subj: [SubjectId, string, string][]; // [subject, why it matters, example]
  skills: string[];
  path: [string, string][]; // steps after "At school": [title, text]
  enjoy: string[];
  consider: string[];
  qual: [QualityId, string][]; // [quality, how it helps]
  day: [string, string][]; // [title, text]
  quiz: {
    title: string;
    intro: string;
    q: [string, string[], number, string][]; // [question, options, answerIndex, explanation]
  };
  related: [string, string][]; // [slug, reason]
};

function joinNames(names: string[]) {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

export function buildCareer(s: Seed): Career {
  const list = joinNames(s.subj.map(([id]) => subjects[id].name));
  return {
    slug: s.slug,
    name: s.name,
    category: s.category,
    summary: s.summary,
    overview: s.overview,
    purpose: s.purpose,
    dailyWork: s.dailyWork,
    realLifeExample: s.example,
    keywords: s.kw,
    tags: s.tags,
    subjects: s.subj.map(([id, why, example]) => ({ id, why, example })),
    skills: s.skills,
    pathway: [
      {
        title: "At school",
        text: `${list} are commonly useful. Requirements vary by country, school and course.`,
      },
      ...s.path.map(([title, text]) => ({ title, text })),
    ],
    enjoy: s.enjoy,
    consider: s.consider,
    qualities: s.qual.map(([id, how]) => ({ id, how })),
    day: s.day.map(([title, text]) => ({ title, text })),
    challenge: {
      title: s.quiz.title,
      intro: s.quiz.intro,
      steps: s.quiz.q.map(([question, options, answer, explain]) => ({
        question,
        options,
        answer,
        explain,
      })),
    },
    related: s.related.map(([slug, reason]) => ({ slug, reason })),
    salary: {},
  };
}
