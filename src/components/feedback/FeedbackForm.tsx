"use client";

import { useId, useState } from "react";
import { CheckCircle2, Send, Star } from "lucide-react";
import NexoMascot from "./NexoMascot";

/*
  Where feedback goes: Netlify Forms (free, no database to set up).
  Netlify finds the form in public/__forms.html when the site is built, and
  we send the answers to that file with fetch(). You can read the answers in
  the Netlify dashboard under Forms -> nexovia-feedback.
  Feedback is only saved on the live Netlify site. On your own computer
  (npm run dev) the send will fail, and this form says so honestly.
*/
const FORM_NAME = "nexovia-feedback";
const FORM_URL = "/__forms.html";

const quickChoices = [
  "Easy to use",
  "Interesting careers",
  "Fun activities",
  "Helped me discover careers",
  "Needs improvement",
];

const ratingWords = ["", "Not great", "Could be better", "It's okay", "Pretty good", "Love it!"];

type Status = "idle" | "sending" | "sent" | "error";

export default function FeedbackForm({
  onDone,
  autoFocus = false,
}: {
  onDone?: () => void;
  autoFocus?: boolean;
}) {
  const uid = useId();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [problem, setProblem] = useState("");

  const shown = hover || rating;

  function toggleChoice(c: string) {
    setChoices((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    if (rating === 0) {
      setProblem("Please pick a star rating first.");
      return;
    }
    setProblem("");
    setStatus("sending");
    try {
      const body = new URLSearchParams({
        "form-name": FORM_NAME,
        "bot-field": honey,
        rating: String(rating),
        liked: choices.join(", "),
        message: message.trim(),
        page: window.location.pathname,
      }).toString();
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setRating(0);
    setHover(0);
    setChoices([]);
    setMessage("");
    setStatus("idle");
    setProblem("");
  }

  if (status === "sent") {
    return (
      <div className="text-center" role="status">
        <NexoMascot rating={5} className="mx-auto h-28 w-28" />
        <h3 className="mt-2 flex items-center justify-center gap-2 font-heading text-2xl font-bold text-navy">
          <CheckCircle2 className="text-violet" size={24} aria-hidden="true" />
          Thank you!
        </h3>
        <p className="mt-2 text-ink/80">
          Your feedback was sent. It helps us make Nexovia better for students like you.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {onDone && (
            <button
              type="button"
              onClick={onDone}
              className="rounded-full bg-violet px-5 py-2.5 font-semibold text-white transition hover:bg-violet-dark"
            >
              Close
            </button>
          )}
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-white px-5 py-2.5 font-semibold text-navy ring-1 ring-navy/15 transition hover:bg-lavender"
          >
            Send more feedback
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="flex items-center gap-4">
        <NexoMascot rating={shown} className="h-20 w-20 shrink-0" />
        <p className="text-ink/80">
          Hi, I&apos;m Nexo! Tell us what you think of Nexovia. It takes less than a minute.
        </p>
      </div>

      {/* Star rating: real radio buttons, so the keyboard and screen readers work */}
      <fieldset className="mt-5">
        <legend className="font-semibold text-navy">How would you rate Nexovia?</legend>
        <div className="mt-2 flex items-center gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <label
              key={n}
              onMouseEnter={() => setHover(n)}
              className="relative cursor-pointer rounded-full p-1 transition active:scale-90 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-violet"
            >
              <input
                type="radio"
                name={`${uid}-rating`}
                value={n}
                checked={rating === n}
                onChange={() => {
                  setRating(n);
                  setProblem("");
                }}
                className="sr-only"
                autoFocus={autoFocus && n === 1}
              />
              <Star
                size={36}
                aria-hidden="true"
                className={
                  n <= shown ? "fill-butter stroke-navy" : "fill-white stroke-navy/40"
                }
                strokeWidth={2}
              />
              <span className="sr-only">
                {n} {n === 1 ? "star" : "stars"}
              </span>
            </label>
          ))}
          <span className="ml-2 text-sm font-semibold text-violet-dark" aria-live="polite">
            {ratingWords[shown]}
          </span>
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="font-semibold text-navy">What describes your visit? (optional)</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {quickChoices.map((c) => {
            const on = choices.includes(c);
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() => toggleChoice(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition active:scale-[0.97] ${
                  on
                    ? "bg-violet text-white"
                    : "bg-white text-navy ring-1 ring-navy/15 hover:bg-lavender"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor={`${uid}-msg`} className="font-semibold text-navy">
          What did you like, and what could be better? (optional)
        </label>
        <textarea
          id={`${uid}-msg`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={1000}
          rows={4}
          placeholder="Tell us in your own words…"
          className="mt-2 w-full rounded-2xl border border-navy/15 bg-white p-3 outline-none focus:border-violet"
        />
        <p className="mt-1 text-xs text-ink/60">
          Please don&apos;t write your full name, school or contact details. {message.length}/1000
        </p>
      </div>

      {/* Hidden spam trap: real people never see or fill this in */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
        </label>
      </div>

      {problem && (
        <p role="alert" className="mt-4 rounded-2xl bg-butter/70 p-3 text-sm font-semibold text-navy">
          {problem}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-4 rounded-2xl bg-coral/15 p-3 text-sm text-navy">
          Sorry, we couldn&apos;t send your feedback just now, so it was <strong>not</strong> saved.
          Please check your internet and try again. (If you are running the site on your own
          computer, feedback only works on the live website.)
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-lg font-semibold text-white transition hover:bg-violet-dark active:scale-[0.98] disabled:opacity-60 sm:w-auto"
      >
        <Send size={18} aria-hidden="true" />
        {status === "sending" ? "Sending…" : "Submit feedback"}
      </button>
    </form>
  );
}
