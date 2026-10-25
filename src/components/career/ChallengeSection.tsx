"use client";

import { useState, useSyncExternalStore } from "react";
import { ArrowRight, Check, RotateCcw, Trophy, X } from "lucide-react";
import type { Career } from "@/types";

const KEY = "nexovia-challenges";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}
const getSnapshot = () => localStorage.getItem(KEY) ?? "";
const getServerSnapshot = () => "";

export default function ChallengeSection({
  slug,
  challenge,
}: {
  slug: string;
  challenge: Career["challenge"];
}) {
  const saved = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const doneBefore = saved.includes(`"${slug}"`);

  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [wrongTries, setWrongTries] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = challenge.steps.length;
  const q = challenge.steps[step];
  const solved = picked === q.answer;

  function choose(i: number) {
    if (solved) return;
    setPicked(i);
    if (i === q.answer) {
      if (wrongTries === 0) setScore((s) => s + 1);
    } else {
      setWrongTries((w) => w + 1);
    }
  }

  function next() {
    if (step === total - 1) {
      try {
        const list: string[] = JSON.parse(localStorage.getItem(KEY) ?? "[]");
        if (!list.includes(slug)) localStorage.setItem(KEY, JSON.stringify([...list, slug]));
      } catch {
        /* progress just isn't saved */
      }
      setFinished(true);
    } else {
      setStep(step + 1);
      setPicked(null);
      setWrongTries(0);
    }
  }

  function restart() {
    setStep(0);
    setPicked(null);
    setWrongTries(0);
    setScore(0);
    setFinished(false);
  }

  return (
    <section id="challenge" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-dark">Try it yourself</p>
      <h2 className="mt-1 font-heading text-3xl font-bold text-navy">
        Career challenge: {challenge.title}
      </h2>
      <p className="mt-2 max-w-2xl text-ink/85">{challenge.intro}</p>
      {doneBefore && !finished && (
        <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-lime/40 px-3 py-1 text-sm font-semibold text-navy">
          <Check size={16} aria-hidden="true" /> You completed this challenge before
        </p>
      )}

      <div className="card mt-6 max-w-3xl">
        {finished ? (
          <div className="text-center" aria-live="polite">
            <Trophy className="mx-auto text-violet" size={40} aria-hidden="true" />
            <h3 className="mt-3 font-heading text-2xl font-bold text-navy">Challenge complete!</h3>
            <p className="mt-2 text-ink/85">
              You got {score} of {total} right on the first try. Either way, you just thought like a professional.
            </p>
            <button onClick={restart} className="btn btn-secondary mt-5">
              <RotateCcw size={16} /> Try again
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm font-semibold text-ink/70">Question {step + 1} of {total}</p>
            <h3 className="mt-1 font-heading text-xl font-bold text-navy">{q.question}</h3>
            <div className="mt-4 grid gap-3">
              {q.options.map((option, i) => {
                const isPicked = picked === i;
                const correct = isPicked && i === q.answer;
                const wrong = isPicked && i !== q.answer;
                return (
                  <button
                    key={option}
                    onClick={() => choose(i)}
                    disabled={solved && !correct}
                    className={`flex items-center justify-between gap-3 rounded-2xl border p-4 text-left font-medium transition active:scale-[0.99] ${
                      correct
                        ? "border-success bg-lime/30 text-navy"
                        : wrong
                          ? "border-coral bg-coral/15 text-navy"
                          : "border-navy/10 bg-white text-ink hover:border-violet hover:bg-lavender disabled:opacity-60"
                    }`}
                  >
                    {option}
                    {correct && <Check size={20} className="text-success" aria-hidden="true" />}
                    {wrong && <X size={20} className="text-coral" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>

            <div aria-live="polite" className="mt-4 min-h-6">
              {picked !== null && (
                <p className="rounded-2xl bg-lavender p-4 text-ink/90">
                  <strong className="text-navy">{solved ? "Correct! " : "Not quite. Try another answer. "}</strong>
                  {solved && q.explain}
                </p>
              )}
            </div>

            {solved && (
              <button onClick={next} className="btn btn-primary mt-4">
                {step === total - 1 ? "Finish challenge" : "Next question"}
                <ArrowRight size={18} />
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
