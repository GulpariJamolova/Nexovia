import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Info, Lightbulb } from "lucide-react";
import CategoryArt from "@/components/ui/CategoryArt";
import { QualityIcon, SubjectIcon } from "@/components/ui/Icons";
import { categories } from "@/data/categories";
import { qualities } from "@/data/qualities";
import { subjects } from "@/data/subjects";
import { getCareer } from "@/lib/careers";
import type { Career } from "@/types";

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-32 px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-dark">{eyebrow}</p>
      <h2 className="mt-1 font-heading text-3xl font-bold text-navy">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function CareerIntro({ career }: { career: Career }) {
  return (
    <section id="overview" className="mx-auto max-w-6xl scroll-mt-32 px-4 pt-8 sm:px-6">
      <Link href="/career" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-dark hover:underline">
        <ArrowLeft size={16} /> All careers
      </Link>

      <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-lavender px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
            {categories[career.category].label}
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold text-navy sm:text-5xl">{career.name}</h1>
          <p className="mt-3 text-lg text-ink/85">{career.overview}</p>
          <p className="mt-4 rounded-2xl bg-lavender p-4 text-ink/90">
            <strong className="text-navy">Main purpose: </strong>
            {career.purpose}
          </p>
        </div>
        <CategoryArt category={career.category} className="h-64 w-full rounded-[2rem] sm:h-80" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="font-heading text-lg font-bold text-navy">What you do in a normal working day</h2>
          <p className="mt-2 text-ink/85">{career.dailyWork}</p>
        </div>
        <div className="rounded-3xl bg-butter/70 p-6">
          <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-navy">
            <Lightbulb size={20} aria-hidden="true" /> Real-life example
          </h2>
          <p className="mt-2 text-ink/90">{career.realLifeExample}</p>
        </div>
      </div>
    </section>
  );
}

const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#subjects", label: "Subjects" },
  { href: "#pros-cons", label: "Pros & cons" },
  { href: "#salary", label: "Salary" },
  { href: "#you", label: "Is it for you?" },
  { href: "#day", label: "A normal day" },
  { href: "#challenge", label: "Challenge" },
  { href: "#related", label: "Related" },
];

export function AnchorNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 mt-8 border-y border-navy/10 bg-offwhite/90 backdrop-blur"
    >
      <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2 sm:px-6">
        {nav.map((n) => (
          <li key={n.href} className="shrink-0">
            <a href={n.href} className="block rounded-full px-4 py-2 text-sm font-semibold text-navy hover:bg-lavender">
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SubjectsSection({ career }: { career: Career }) {
  return (
    <Section id="subjects" eyebrow="School subjects" title="Subjects that connect to this career">
      <div className="grid gap-4 md:grid-cols-3">
        {career.subjects.map((s) => (
          <div key={s.id} className="card transition hover:-translate-y-1 hover:shadow-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender text-violet-dark">
              <SubjectIcon id={s.id} size={24} />
            </span>
            <h3 className="mt-4 font-heading text-xl font-bold text-navy">{subjects[s.id].name}</h3>
            <p className="mt-2 text-ink/85">{s.why}</p>
            <p className="mt-3 rounded-xl bg-offwhite p-3 text-sm text-ink/90">
              <strong className="text-navy">Example: </strong>
              {s.example}
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-10 font-heading text-2xl font-bold text-navy">Learning path after school</h3>
      <ol className="mt-4 grid gap-4 md:grid-cols-3">
        {career.pathway.map((p, i) => (
          <li key={p.title} className="card">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet font-bold text-white">
              {i + 1}
            </span>
            <h4 className="mt-3 font-semibold text-navy">{p.title}</h4>
            <p className="mt-1 text-ink/85">{p.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 flex items-start gap-2 rounded-2xl bg-lavender p-4 text-sm text-ink/90">
        <Info size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
        These subjects are commonly useful, not formal entry requirements. Requirements differ by
        country, university and course, so always check the official information.
      </p>
    </Section>
  );
}

export function ProsConsSection({ career }: { career: Career }) {
  return (
    <Section id="pros-cons" eyebrow="A balanced view" title="What you might enjoy, and what to consider">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-lime/30 p-6">
          <h3 className="font-heading text-xl font-bold text-navy">What you might enjoy</h3>
          <ul className="mt-4 space-y-3">
            {career.enjoy.map((e) => (
              <li key={e} className="flex gap-3 text-ink/90">
                <Check size={20} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-coral/20 p-6">
          <h3 className="font-heading text-xl font-bold text-navy">Things to consider</h3>
          <ul className="mt-4 space-y-3">
            {career.consider.map((c) => (
              <li key={c} className="flex gap-3 text-ink/90">
                <Info size={20} className="mt-0.5 shrink-0 text-navy" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-sm text-ink/70">
        People experience careers differently, so use this as a guide, not a promise.
      </p>
    </Section>
  );
}

export function QualitiesSection({ career }: { career: Career }) {
  return (
    <Section id="you" eyebrow="Is it for you?" title="What kind of person might enjoy this career?">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {career.qualities.map((q) => (
          <div key={q.id} className="card transition hover:-translate-y-1 hover:shadow-md">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-butter text-navy">
              <QualityIcon id={q.id} />
            </span>
            <h3 className="mt-3 font-heading text-lg font-bold text-navy">{qualities[q.id].label}</h3>
            <p className="mt-1 text-sm text-ink/85">{q.how}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-2xl bg-lavender p-4 text-ink/90">
        You don&apos;t need all of these qualities already. Most of them can be developed through learning and experience.
      </p>
    </Section>
  );
}

export function DaySection({ career }: { career: Career }) {
  return (
    <Section id="day" eyebrow="A normal day" title={`A day as a ${career.name.toLowerCase()}`}>
      <ol className="relative space-y-4 border-l-2 border-violet/30 pl-8">
        {career.day.map((d, i) => (
          <li key={d.title} className="relative">
            <span className="absolute -left-[3.2rem] flex h-9 w-9 items-center justify-center rounded-full bg-violet font-bold text-white ring-4 ring-offwhite">
              {i + 1}
            </span>
            <div className="card">
              <h3 className="font-heading text-lg font-bold text-navy">{d.title}</h3>
              <p className="mt-1 text-ink/85">{d.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function RelatedSection({ career }: { career: Career }) {
  const items = career.related
    .map((r) => ({ reason: r.reason, career: getCareer(r.slug) }))
    .filter((r): r is { reason: string; career: Career } => !!r.career);

  return (
    <Section id="related" eyebrow="Keep exploring" title="Related careers">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(({ career: c, reason }) => (
          <Link
            key={c.slug}
            href={`/career/${c.slug}`}
            className="group flex items-center gap-4 overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <CategoryArt category={c.category} className="h-24 w-32 shrink-0 rounded-2xl" />
            <div>
              <h3 className="font-heading text-lg font-bold text-navy">{c.name}</h3>
              <p className="text-sm text-ink/85">{reason}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-violet-dark">
                Learn more about {c.name}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function NextActions() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
      <div className="rounded-3xl bg-navy p-8 text-white">
        <h2 className="font-heading text-2xl font-bold">What next?</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#challenge" className="btn btn-primary">Try a career challenge</a>
          <a href="#related" className="btn bg-white/10 text-white hover:bg-white/20">Explore related careers</a>
          <Link href="/find/results" className="btn bg-white/10 text-white hover:bg-white/20">Back to my matches</Link>
          <Link href="/career" className="btn bg-white/10 text-white hover:bg-white/20">Explore another career</Link>
        </div>
      </div>
    </section>
  );
}
