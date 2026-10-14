import { careers, getCareer } from "@/data/careers";

export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug");
  if (!slug) return Response.json({ careers });

  const career = getCareer(slug);
  if (!career) return Response.json({ error: "Career not found" }, { status: 404 });
  return Response.json({ career });
}
