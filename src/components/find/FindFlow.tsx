"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import { questions } from "@/data/interest-questions";

export default function FindFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [note, setNote] = useState("");

  const total = questions.length + 1; // last step = optional note
  const isNoteStep = step === questions.length;
  const q = questions[step];
  const progress = ((step + 1) / total) * 100;

  function choose(option: string) {
    setAnswers((a) => ({ ...a, [q.id]: option }));
    setStep((s) => s + 1);
  }

  function finish() {
    sessionStorage.setItem("nexovia-answers", JSON.stringify({ answers, note }));
    router.push("/find/results");
  }

  return (
    <div>
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm text-ink/60">
          <span>
            Step {step + 1} of {total}
          </span>
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1 hover:text-violet"
            >
              <ArrowLeft size={16} /> Back
            </button>
          )}
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-lavender">
          <div
            className="h-full rounded-full bg-violet transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {!isNoteStep ? (
        <div>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{q.text}</h2>
          <div className="mt-6 grid gap-3">
            {q.options.map((option) => (
              <button
                key={option}
                onClick={() => choose(option)}
                aria-pressed={answers[q.id] === option}
                className={`rounded-2xl border p-4 text-left font-medium transition hover:border-violet hover:bg-lavender ${
                  answers[q.id] === option
                    ? "border-violet bg-lavender text-navy"
                    : "border-navy/10 bg-white text-ink"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Anything else you love? <span className="text-ink/50">(optional)</span>
          </h2>
          <p className="mt-2 text-ink/70">
            Hobbies, dream jobs, favourite games, anything that helps us match you better.
          </p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={300}
            rows={4}
            placeholder="e.g. I love animals and drawing…"
            className="mt-5 w-full rounded-2xl border border-navy/10 bg-white p-4 outline-none focus:border-violet"
          />
          <button
            onClick={finish}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 font-semibold text-white transition hover:bg-violet/90"
          >
            <Sparkles size={18} /> See my matches
          </button>
        </div>
      )}
    </div>
  );
}