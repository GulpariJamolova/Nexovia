import type { Career } from "@/types";

type AnswerValue = string | string[] | undefined;
export type StoredAnswers = { answers: Record<string, AnswerValue>; note?: string };
export type MatchLevel = "strong" | "good" | "explore";
export type Match = { career: Career; score: number; level: MatchLevel; reasons: string[] };

// Option text (exactly as in profile-questions.ts) -> tags it points to.
const RULES: Record<string, Record<string, string[]>> = {
  activities: {
    "Building or fixing things": ["building", "things"],
    "Helping or caring for people": ["helping", "people"],
    "Creating art, music or stories": ["creating", "art"],
    "Solving puzzles and logic problems": ["puzzles", "ideas"],
    "Experimenting and testing ideas": ["experiments", "science"],
    "Exploring nature and animals": ["nature"],
    "Leading or organising a group": ["leading", "people"],
    "Teaching or explaining things": ["teaching", "people"],
    "Coding or making digital things": ["tech", "puzzles"],
  },
  problem: {
    "Diseases and health": ["health", "science", "helping"],
    "Climate change and pollution": ["nature", "science"],
    "Poverty and inequality": ["justice", "helping"],
    "Making cities and buildings better": ["building", "design"],
    "Making technology smarter and safer": ["tech"],
    "Giving everyone access to education": ["teaching", "helping"],
    "Protecting animals and nature": ["nature"],
    "Clean energy and space travel": ["science", "building"],
  },
  topicDay: {
    "The human body and medicine": ["health", "science"],
    "Space and the universe": ["science", "ideas"],
    "Robots, AI and computers": ["tech"],
    "Animals and ecosystems": ["nature", "science"],
    "Buildings, machines and engineering": ["building", "design"],
    "Art, design and film": ["creating", "design", "art"],
    "History and cultures": ["humanities"],
    "Money, business and start-ups": ["business", "leading"],
    "Law, justice and government": ["justice", "humanities"],
    "Food and cooking science": ["science", "creating"],
  },
  difficult: {
    "Break it into smaller steps": ["puzzles"],
    "Search for information": ["research"],
    "Ask someone for help": ["people"],
    "Try different solutions and see what works": ["experiments"],
    "Draw or sketch it out": ["design", "creating"],
    "Discuss it with a team": ["team", "people"],
  },
  challenge: {
    "Running a scientific experiment": ["experiments", "science"],
    "Designing something completely new": ["design", "creating"],
    "Cracking a logic puzzle or writing code": ["puzzles", "tech"],
    "Helping a person who is in need": ["helping", "people"],
    "Debating and persuading others": ["justice", "people", "languages"],
    "Planning a strategy and leading a team": ["leading", "business"],
    "Performing or creating for an audience": ["creating", "art"],
  },
  schoolTask: {
    "A lab experiment": ["experiments", "science"],
    "A group project": ["team"],
    "Writing an essay or a story": ["languages", "creating"],
    "Building a model or prototype": ["building", "design"],
    "Giving a presentation": ["people", "languages"],
    "Solving maths problems": ["math", "puzzles"],
    "An art or design project": ["art", "design"],
    "A research project": ["research"],
  },
  peopleAsk: {
    "Explaining homework": ["teaching"],
    "Fixing tech problems": ["tech"],
    "Advice about personal problems": ["helping", "people"],
    "Creative ideas and design": ["creating", "design"],
    "Organising events and plans": ["leading"],
    "Listening and cheering them up": ["helping", "people"],
    "Fixing or making things by hand": ["building", "things"],
  },
  subjects: {
    Math: ["math"],
    Physics: ["physics"],
    Chemistry: ["chemistry"],
    Biology: ["biology"],
    "Computer science": ["cs"],
    "English and languages": ["languages"],
    "History and geography": ["humanities"],
    "Art and music": ["art"],
    "Business and economics": ["business"],
    "Physical education and health": ["pe"],
  },
  proud: {
    "Saving or improving people's lives": ["helping", "health"],
    "Inventing something new": ["ideas", "creating"],
    "Protecting the environment": ["nature", "science"],
    "Building something people use every day": ["building", "tech"],
    "Teaching and inspiring others": ["teaching"],
    "Leading a successful team or company": ["leading", "business"],
    "Creating art that many people love": ["creating", "art"],
    "Discovering new knowledge": ["science", "research"],
  },
  environment: {
    "Hospital or laboratory": ["lab", "health", "science"],
    "Studio or creative space": ["studio", "creating"],
    "Outdoors or a building site": ["outdoors", "building"],
    "Office or tech company": ["office", "tech"],
    "School or classroom": ["teaching"],
    "Travelling to different places": ["travel"],
    "Workshop or factory": ["building", "things"],
  },
  workWith: {
    People: ["people"],
    "Data and numbers": ["data"],
    Ideas: ["ideas"],
    "Things and machines": ["things"],
  },
};

const TAG_LABEL: Record<string, string> = {
  helping: "helping people", people: "working with people", health: "health",
  science: "science", building: "building things", design: "design",
  creating: "creating", art: "art", puzzles: "solving puzzles", tech: "technology",
  ideas: "ideas", experiments: "experiments", nature: "nature",
  leading: "leading others", teaching: "teaching", business: "business",
  justice: "fairness and justice", humanities: "history and society",
  research: "research", team: "teamwork", data: "data", things: "hands-on work",
  lab: "lab work", studio: "creative spaces", office: "office work",
  outdoors: "outdoor work", travel: "travel", math: "maths", physics: "physics",
  chemistry: "chemistry", biology: "biology", cs: "computer science",
  languages: "languages and writing", pe: "PE and health",
};

function joinList(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

export function parseStored(raw: string): StoredAnswers | null {
  try {
    const data = JSON.parse(raw);
    if (data && typeof data === "object" && data.answers && typeof data.answers === "object") {
      return data as StoredAnswers;
    }
  } catch {
    /* ignore invalid data */
  }
  return null;
}

export function matchCareers(stored: StoredAnswers, careers: Career[], limit = 6): Match[] {
  const picks: { question: string; option: string; tags: string[] }[] = [];
  for (const [question, options] of Object.entries(RULES)) {
    const value = stored.answers[question];
    const chosen = Array.isArray(value) ? value : value ? [value] : [];
    for (const option of chosen) {
      const tags = options[option];
      if (tags) picks.push({ question, option, tags });
    }
  }

  // Words the student typed themselves (free text and "Other" boxes).
  const own: string[] = [stored.note ?? ""];
  for (const key of ["dream", "about"]) {
    const v = stored.answers[key];
    if (typeof v === "string") own.push(v);
  }
  for (const v of Object.values(stored.answers).flat()) {
    if (typeof v === "string" && v.startsWith("Other: ")) own.push(v.slice(7));
  }
  const freeText = own.join(" ").toLowerCase();

  const scored = careers.map((career) => {
    const careerTags = new Set<string>([...career.tags, ...career.subjects.map((s) => s.id)]);
    const tagCount = new Map<string, number>();
    const optionHits = new Map<string, number>();
    const questions = new Set<string>();

    for (const pick of picks) {
      const hits = pick.tags.filter((t) => careerTags.has(t));
      if (hits.length === 0) continue;
      questions.add(pick.question);
      optionHits.set(pick.option, hits.length);
      for (const t of hits) tagCount.set(t, (tagCount.get(t) ?? 0) + 1);
    }

        const mention = career.keywords
      .filter((k) => k.length >= 4 && freeText.includes(k.toLowerCase()))
      .sort((a, b) => b.length - a.length)[0];
    // Several different questions count more than one repeated interest.
    const score = tagCount.size + questions.size * 1.5 + (mention ? 4 + Math.min(mention.length, 30) / 10 : 0);

    const topOptions = [...optionHits.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([o]) => `“${o}”`);
    const topTags = [...tagCount.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 3)
      .map(([t]) => TAG_LABEL[t] ?? t);

    const reasons: string[] = [];
    if (mention) reasons.push(`You mentioned “${mention}” in your own words.`);
    if (topOptions.length) {
      reasons.push(`You chose ${joinList(topOptions)}. This career involves ${joinList(topTags)}.`);
    }

    return { career, score, questionCount: questions.size, reasons };
  });

  const ranked = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.career.name.localeCompare(b.career.name))
    .slice(0, limit);

  const top = ranked[0]?.score ?? 1;
  return ranked.map(({ career, score, questionCount, reasons }) => {
    const ratio = score / top;
    const level: MatchLevel =
      ratio >= 0.85 && questionCount >= 3 ? "strong" : ratio >= 0.6 ? "good" : "explore";
    return { career, score, level, reasons };
  });
}
