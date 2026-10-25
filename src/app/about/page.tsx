import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryArt from "@/components/ui/CategoryArt";

export const metadata = { title: "About – Nexovia" };

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-dark">About</p>
      <h1 className="mt-2 max-w-3xl font-heading text-4xl font-bold text-navy sm:text-5xl">
        School subjects make more sense when you see where they lead.
      </h1>

      <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <CategoryArt category="education" className="h-64 w-full rounded-[2rem]" />
        <div>
          <h2 className="font-heading text-2xl font-bold text-navy">What Nexovia is</h2>
          <p className="mt-2 text-ink/85">
            Nexovia is a career-discovery website for students in Grades 6 to 12. It helps you find careers
            that match your interests, then shows what each job involves and which subjects it uses.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="card">
          <h2 className="font-heading text-xl font-bold text-navy">Why explore careers early?</h2>
          <p className="mt-2 text-ink/85">
            Knowing what jobs really involve helps you make better choices about subjects and study later on.
          </p>
        </div>
        <div className="card">
          <h2 className="font-heading text-xl font-bold text-navy">Subjects meet careers</h2>
          <p className="mt-2 text-ink/85">
            Each career page explains how maths, science, languages and art are used in practice, with a real example.
          </p>
        </div>
        <div className="card">
          <h2 className="font-heading text-xl font-bold text-navy">No pressure to decide</h2>
          <p className="mt-2 text-ink/85">
            You don&apos;t need to choose one permanent career. Explore as many as you like and notice what excites you.
          </p>
        </div>
      </div>

      <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="font-heading text-2xl font-bold text-navy">How matching works</h2>
          <p className="mt-2 text-ink/85">
            Your answers are compared with tags on each career. This is a simple rule-based system, not an AI model,
            so results are suggestions to explore, not predictions.
          </p>
          <p className="mt-4 rounded-2xl bg-lavender p-4 text-sm text-ink/90">
            Career information is written to be a helpful starting point. Entry requirements and salaries vary by
            country, so check official sources before making decisions.
          </p>
          <Link href="/find" className="btn btn-primary group mt-6">
            Find my career <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        <CategoryArt category="science" className="order-1 h-64 w-full rounded-[2rem] md:order-2" />
      </div>
    </div>
  );
}



