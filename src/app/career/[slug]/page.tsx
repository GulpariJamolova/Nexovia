import Link from "next/link";
import { notFound } from "next/navigation";
import { careers, getCareer } from "@/data/careers";

export function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

export default async function CareerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) notFound();

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">{career.name}</h1>
      <p className="mt-3 text-lg text-ink/75">{career.summary}</p>

      <h2 className="mt-8 text-xl font-bold text-navy">A day in the life</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/80">
        {career.dayInLife.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-bold text-navy">School subjects that help</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {career.subjects.map((s) => (
          <span key={s} className="rounded-full bg-lavender px-3 py-1 text-xs font-medium text-navy">
            {s}
          </span>
        ))}
      </div>

      <Link href="/career" className="mt-10 inline-block font-semibold text-violet">
        ← Explore other careers
      </Link>
    </section>
  );
}
