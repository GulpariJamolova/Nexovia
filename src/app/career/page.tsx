import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { careers } from "@/data/careers";

export const metadata = { title: "Explore a career – Nexovia" };

export default function CareerIndex() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">Explore a career</h1>
      <p className="mb-8 mt-2 text-ink/70">Pick a career to see what it&apos;s really like.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {careers.map((c) => (
          <Link
            key={c.slug}
            href={`/career/${c.slug}`}
            className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/5"
          >
            <h2 className="text-xl font-bold text-navy">{c.name}</h2>
            <p className="mt-2 text-ink/75">{c.summary}</p>
            <span className="mt-4 inline-flex items-center gap-2 font-semibold text-violet">
              Learn more <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
