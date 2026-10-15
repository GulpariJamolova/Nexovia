import { careers } from "@/data/careers";

const reasons: Record<string, string> = {
  "biomedical-engineer":
    "You like science and solving problems, and this job uses both to build devices that help people.",
  "game-designer":
    "You enjoy creating and solving puzzles, and game designers invent worlds and rules people love.",
  "environmental-scientist":
    "You want to improve the world, and this career studies nature and finds ways to protect it.",
};

export async function POST(req: Request) {
  await req.json(); // later: send these answers to the AI
  await new Promise((r) => setTimeout(r, 1200)); // fake AI delay

  return Response.json({
    matches: careers.map((c) => ({
      name: c.name,
      slug: c.slug,
      why: reasons[c.slug] ?? c.summary,
      subjects: c.subjects,
    })),
  });
}


