"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { RotateCcw, Search, Sparkles } from "lucide-react";
import ExplorerAnimation from "./ExplorerAnimation";
import CareerCard from "@/components/career/CareerCard";
import { careers } from "@/lib/careers";
import { matchCareers, parseStored } from "@/lib/matching";

const ANSWERS_KEY = "nexovia-answers";
const REVEALED_KEY = "nexovia-revealed";
const messages = [
  "Looking at your interests…",
  "Comparing your answers with careers…",
  "Finding careers worth exploring…",
];

function subscribe() {
  return () => {};
}
function getSnapshot() {
  return sessionStorage.getItem(ANSWERS_KEY);
}
function getServerSnapshot(): string | null | undefined {
  return undefined;
}

export default function ResultsView() {
  const raw = useSyncExternalStore<string | null | undefined>(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const [stage, setStage] = useState<"matching" | "ready" | "revealed">("matching");
  const [msg, setMsg] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const matches = useMemo(() => {
    if (!raw) return null;
    const stored = parseStored(raw);
    return stored ? matchCareers(stored, careers) : null;
  }, [raw]);

  const hasMatches = !!matches && matches.length > 0;

  useEffect(() => {
    if (!hasMatches || !raw) return;
    // Already revealed for these answers (e.g. coming back from a career page)
    if (sessionStorage.getItem(REVEALED_KEY) === raw) {
      setStage("revealed");
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const done = setTimeout(() => setStage("ready"), reduce ? 0 : 2400);
    const tick = setInterval(
      () => setMsg((m) => Math.min(m + 1, messages.length - 1)),
      800
    );
    return () => {
      clearTimeout(done);
      clearInterval(tick);
    };
  }, [hasMatches, raw]);

  function reveal() {
    if (raw) sessionStorage.setItem(REVEALED_KEY, raw);
    setStage("revealed");
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  if (raw === undefined) {
    return <p className="py-20 text-center text-ink/70">Loading…</p>;
  }

  if (!matches) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-lavender p-8 text-center">
        <h1 className="font-heading text-2xl font-bold text-navy">We don&apos;t have your answers yet</h1>
        <p className="mt-2 text-ink/80">Answer a few questions and we&apos;ll suggest careers to explore.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/find" className="btn btn-primary">Start the questions</Link>
          <Link href="/career" className="btn btn-secondary">Browse careers instead</Link>
        </div>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-lavender p-8 text-center">
        <h1 className="font-heading text-2xl font-bold text-navy">No clear matches yet</h1>
        <p className="mt-2 text-ink/80">
          Your answers didn&apos;t point to a career in our list. Try choosing a few more options, or browse careers yourself.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/find" className="btn btn-primary">Retake the questions</Link>
          <Link href="/career" className="btn btn-secondary">Browse careers</Link>
        </div>
      </div>
    );
  }

  if (stage !== "revealed") {
    return (
      <div className="mx-auto max-w-lg py-8 text-center">
        <ExplorerAnimation />
        {stage === "matching" ? (
          <>
            <p aria-live="polite" className="mt-6 font-heading text-2xl font-bold text-navy">
              {messages[msg]}
            </p>
            <div className="mx-auto mt-5 h-2.5 w-64 overflow-hidden rounded-full bg-lavender" aria-hidden="true">
              <div className="h-full animate-fill rounded-full bg-violet" />
            </div>
          </>
        ) : (
          <>
            <p aria-live="polite" className="mt-6 font-heading text-3xl font-bold text-navy">
              Your results are ready!
            </p>
            <button onClick={reveal} className="btn btn-primary mt-6">
              <Sparkles size={18} /> Reveal my careers
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1
        ref={headingRef}
        tabIndex={-1}
        className="font-heading text-3xl font-bold text-navy outline-none sm:text-4xl"
      >
        Careers worth exploring
      </h1>
      <p className="mt-2 max-w-2xl text-ink/80">
        Strongest matches first. These are suggestions to explore, not predictions about your future.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {matches.map((m, i) => (
          <div key={m.career.slug} style={{ animationDelay: `${i * 90}ms` }} className="animate-rise flex">
            <div className="flex w-full flex-col [&>article]:flex-1">
              <CareerCard career={m.career} match={m} />
            </div>
          </div>
        ))}
      </div>

      <details className="card mt-10">
        <summary className="cursor-pointer font-semibold text-navy">How did we choose these?</summary>
        <p className="mt-3 text-ink/80">
          Nexovia compares your answers with tags on each career, such as “helping people” or “science”.
          Careers that match answers from several different questions rank higher. This is a simple
          rule-based system, not an AI model, so treat it as a starting point for exploring.
        </p>
      </details>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/find" className="btn btn-secondary">
          <RotateCcw size={16} /> Retake the questions
        </Link>
        <Link href="/career" className="btn btn-secondary">
          <Search size={16} /> Explore another career
        </Link>
      </div>
    </div>
  );
}
