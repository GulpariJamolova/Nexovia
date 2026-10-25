"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Answer = "yes" | "maybe" | "no";
const labels: Record<Answer, string> = { yes: "Yes!", maybe: "Maybe", no: "Not really" };

export default function ReflectionSection({
  tasks,
  related,
}: {
  tasks: { title: string; text: string }[];
  related: { slug: string; name: string }[];
}) {
  const items = tasks.slice(0, 4);
  const [answers, setAnswers] = useState<(Answer | null)[]>(items.map(() => null));
  const [shown, setShown] = useState(false);

  const answered = answers.filter(Boolean).length;
  const liked = items.filter((_, i) => answers[i] === "yes").map((t) => t.title.toLowerCase());
  const unsure = items.filter((_, i) => answers[i] === "maybe").length;

  function pick(i: number, value: Answer) {
    setAnswers((a) => a.map((x, idx) => (idx === i ? value : x)));
    setShown(false);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-dark">Reflection (optional)</p>
      <h2 className="mt-1 font-heading text-3xl font-bold text-navy">Could this career suit you?</h2>
      <p className="mt-2 text-ink/85">Would you enjoy doing these tasks? There are no wrong answers.</p>

      <div className="mt-6 grid max-w-3xl gap-4">
        {items.map((t, i) => (
          <fieldset key={t.title} className="card">
            <legend className="sr-only">{t.title}</legend>
            <p className="font-semibold text-navy">{t.title}</p>
            <p className="text-sm text-ink/80">{t.text}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(Object.keys(labels) as Answer[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  aria-pressed={answers[i] === v}
                  onClick={() => pick(i, v)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition active:scale-[0.97] ${
                    answers[i] === v ? "bg-violet text-white" : "bg-white text-navy ring-1 ring-navy/15 hover:bg-lavender"
                  }`}
                >
                  {labels[v]}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <button onClick={() => setShown(true)} disabled={answered === 0} className="btn btn-primary mt-6">
        See my reflection
      </button>

      {shown && (
        <div className="mt-6 max-w-3xl rounded-3xl bg-lavender p-6" aria-live="polite">
          {liked.length > 0 ? (
            <p className="text-ink/90">
              You liked the idea of: <strong className="text-navy">{liked.join(", ")}</strong>.
              {unsure > 0 && " You were unsure about some tasks, and that's normal. Trying a challenge can help you decide."}
            </p>
          ) : (
            <p className="text-ink/90">
              These tasks didn&apos;t stand out this time, and that&apos;s useful to know. Interests also grow
              with experience, and a related career might feel closer to you.
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/career/${r.slug}`} className="btn btn-secondary">
                Explore {r.name} <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
