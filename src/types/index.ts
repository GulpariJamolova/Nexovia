export type CategoryId =
  | "healthcare" | "architecture" | "engineering" | "technology"
  | "creative" | "law" | "education" | "science"
  | "business" | "transport" | "sport" | "public";

export type SubjectId =
  | "math" | "physics" | "chemistry" | "biology" | "cs"
  | "languages" | "humanities" | "art" | "business" | "pe";

export type QualityId =
  | "organised" | "creative" | "curious" | "patient" | "detail"
  | "problem-solving" | "communicating" | "helping" | "teamwork"
  | "independent" | "decisions";

export type CountryCode = "AE" | "UZ" | "SA" | "GB" | "US";
export type SalaryLevel = "early" | "experienced" | "senior" | "typical";

export type SalaryBand = { level: SalaryLevel; min: number; max: number };

export type SalaryInfo = {
  currency: string; // e.g. "AED"
  period: "month" | "year";
  basis: "gross" | "net" | "unspecified";
  bands: SalaryBand[];
  sourceName: string;
  sourceUrl: string;
  lastChecked: string; // e.g. "2026-10"
};

export type ChallengeStep = {
  question: string;
  options: string[];
  answer: number; // index of the correct option
  explain: string;
};

export type Career = {
  slug: string;
  name: string;
  category: CategoryId;
  summary: string;
  overview: string;
  purpose: string;
  dailyWork: string;
  realLifeExample: string;
  keywords: string[]; // search + free-text matching
  tags: string[]; // used by the matching rules
  subjects: { id: SubjectId; why: string; example: string }[];
  skills: string[];
  pathway: { title: string; text: string }[];
  enjoy: string[];
  consider: string[];
  qualities: { id: QualityId; how: string }[];
  day: { title: string; text: string }[];
  challenge: { title: string; intro: string; steps: ChallengeStep[] };
  related: { slug: string; reason: string }[];
  salary: Partial<Record<CountryCode, SalaryInfo>>;
};
// Types used by the older interest-questions / FindFlow files
export type Question = {
  id: string;
  text: string;
  options: string[];
};

export type CareerMatch = {
  name: string;
  slug: string;
  why: string;
  subjects: string[];
};
