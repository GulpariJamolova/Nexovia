import { slugify } from "@/lib/slug";

export async function POST(req: Request) {
  await req.json(); // later: send these answers to the AI
  await new Promise((r) => setTimeout(r, 1200)); // fake AI delay

  const mock = [
    {
      name: "Biomedical Engineer",
      why: "You like science and solving problems, and this job uses both to build devices that help people.",
      subjects: ["Biology", "Physics", "Math"],
    },
    {
      name: "Game Designer",
      why: "You enjoy creating and solving puzzles, and game designers invent worlds and rules people love.",
      subjects: ["Math", "Art", "Computer Science"],
    },
    {
      name: "Environmental Scientist",
      why: "You want to improve the world, and this career studies nature and finds ways to protect it.",
      subjects: ["Biology", "Chemistry", "Geography"],
    },
  ];

  return Response.json({
    matches: mock.map((m) => ({ ...m, slug: slugify(m.name) })),
  });
}