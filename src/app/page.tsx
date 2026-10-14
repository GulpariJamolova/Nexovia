import Link from "next/link";
import { ArrowRight, Compass, Search, MessageSquare, BookOpen, Sparkles } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Tell us about you", text: "Answer a few quick questions about what you enjoy." },
  { icon: Sparkles, title: "Get matched", text: "See careers that fit you, and why they fit." },
  { icon: BookOpen, title: "Learn the real job", text: "Explore subjects, examples, practice questions and videos." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-lavender to-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet shadow-sm">
            Explore · Learn · Discover
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
            Your future starts with curiosity
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/75">
            Find a career that fits you, or dive into one you already love and see what it&apos;s
            really like.
          </p>
        </div>
      </section>

      {/* Two purposes */}
      <section className="mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/find"
            className="group rounded-3xl bg-white p-8 shadow-md ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender text-violet">
              <Compass size={26} />
            </span>
            <h2 className="text-2xl font-bold text-navy">Find my career</h2>
            <p className="mt-2 text-ink/70">
              Not sure what to be? Answer a few questions and we&apos;ll suggest careers that match
              you, with reasons.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-violet">
              Start matching <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/career"
            className="group rounded-3xl bg-navy p-8 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Search size={26} />
            </span>
            <h2 className="text-2xl font-bold">Learn about a career</h2>
            <p className="mt-2 text-white/75">
              Already have a dream job? Type it in and get examples, practice questions, school
              subjects and videos.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-white">
              Explore a career <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy">How it works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender text-violet">
                  <s.icon size={22} />
                </span>
                <span className="text-sm font-semibold text-violet">Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-1 text-ink/70">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}