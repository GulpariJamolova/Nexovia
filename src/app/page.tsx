import Link from "next/link";
import { ArrowRight, Compass, MessageSquare, Puzzle, Search, Sparkles } from "lucide-react";
import HeroArt from "@/components/home/HeroArt";
import CareerCard from "@/components/career/CareerCard";
import { getCareer } from "@/lib/careers";

const connections = [
  { subject: "Math", career: "Architect", slug: "architect", text: "Scale, angles and area shape every plan." },
  { subject: "Chemistry", career: "Dermatologist", slug: "dermatologist", text: "Ingredients and skin interact in surprising ways." },
  { subject: "Physics", career: "Civil Engineer", slug: "civil-engineer", text: "Forces decide whether a bridge stays up." },
  { subject: "Computer science", career: "Software Developer", slug: "software-developer", text: "Logic turns ideas into working apps." },
];

const steps = [
  { icon: MessageSquare, color: "bg-coral/25", title: "Tell us about you", text: "Answer questions about what you enjoy." },
  { icon: Sparkles, color: "bg-sky/30", title: "Get matched", text: "See careers that fit, and why they fit." },
  { icon: Puzzle, color: "bg-lime/40", title: "Learn and try", text: "Explore subjects, real examples and challenges." },
];

export default function Home() {
  const sample = getCareer("dermatologist");

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-b from-lavender to-offwhite">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-dark shadow-sm">
              Explore · Learn · Discover
            </p>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl md:text-6xl">
              Your future starts with curiosity.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/85">
              Discover careers that suit you, or explore one you already find interesting. See which school
              subjects it uses, what a normal day looks like, and try a real challenge.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/find" className="btn btn-primary group">
                <Compass size={20} /> Find my career
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="/career" className="btn btn-secondary">
                <Search size={20} /> Explore a career
              </Link>
            </div>
            <p className="mt-4 text-sm text-ink/70">No sign-up needed.</p>
          </div>
          <HeroArt />
        </div>
      </section>

      {/* What you can discover */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-navy">What you can discover</h2>
        <p className="mt-2 max-w-2xl text-ink/80">
          Every career comes with the subjects behind it, honest pros and cons, and something to try.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">{sample && <CareerCard career={sample} />}</div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="card">
              <h3 className="font-heading text-xl font-bold text-navy">Subjects meet careers</h3>
              <ul className="mt-4 space-y-3">
                {connections.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/career/${c.slug}`}
                      className="group block rounded-2xl p-3 transition hover:bg-lavender"
                    >
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-sky/30 px-3 py-1 text-sm font-semibold text-navy">{c.subject}</span>
                        <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden="true" />
                        <span className="font-semibold text-navy">{c.career}</span>
                      </span>
                      <span className="mt-1 block text-sm text-ink/80">{c.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-navy p-6 text-white">
              <h3 className="font-heading text-xl font-bold">Learn by doing</h3>
              <p className="mt-2 text-white/80">
                Every career page has a short challenge. Think like a skin doctor for two minutes.
              </p>
              <Link href="/career/dermatologist#challenge" className="btn btn-primary mt-4">
                Try this challenge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-navy">How it works</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card text-center">
              <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-navy ${s.color}`}>
                <s.icon size={26} aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm font-bold text-violet-dark">Step {i + 1}</p>
              <h3 className="font-heading text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-1 text-ink/80">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Closing call to action */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-[2rem] bg-gradient-to-br from-violet to-navy p-8 text-center text-white sm:p-12">
          <h2 className="font-heading text-3xl font-bold">Ready to see where your subjects can take you?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/find" className="btn bg-white text-navy hover:bg-lavender">Find my career</Link>
            <Link href="/career" className="btn bg-white/15 text-white hover:bg-white/25">Explore a career</Link>
          </div>
        </div>
      </section>
    </>
  );
}