import { slugify } from "@/lib/slug";

export type Career = {
  name: string;
  slug: string;
  summary: string;
  dayInLife: string[];
  subjects: string[];
};

const raw = [
  {
    name: "Biomedical Engineer",
    summary: "Designs devices and technology that help doctors diagnose and treat patients.",
    dayInLife: [
      "Testing a new prosthetic hand in the lab",
      "Meeting doctors to understand what patients need",
      "Using math and physics to improve a heart monitor",
    ],
    subjects: ["Biology", "Physics", "Math"],
  },
  {
    name: "Game Designer",
    summary: "Invents the worlds, rules and challenges that make games fun to play.",
    dayInLife: [
      "Sketching a new level and its puzzles",
      "Playtesting with friends and fixing what feels unfair",
      "Working with programmers and artists to bring ideas to life",
    ],
    subjects: ["Math", "Art", "Computer Science"],
  },
  {
    name: "Environmental Scientist",
    summary: "Studies nature and finds ways to protect air, water and wildlife.",
    dayInLife: [
      "Collecting water samples from a river",
      "Analysing data to spot pollution",
      "Advising a city on how to protect a local forest",
    ],
    subjects: ["Biology", "Chemistry", "Geography"],
  },
];

export const careers: Career[] = raw.map((c) => ({ ...c, slug: slugify(c.name) }));

export function getCareer(slug: string) {
  return careers.find((c) => c.slug === slug);
}
