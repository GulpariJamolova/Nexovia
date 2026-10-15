"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { profileQuestions, months, birthYears } from "@/data/profile-questions";

type Answers = Record<string, string | string[]>;

const inputClass =
  "w-full rounded-2xl border border-navy/10 bg-white p-4 outline-none focus:border-violet";

const optionClass = (on: boolean) =>
  `flex items-center justify-between gap-3 rounded-2xl border p-4 text-left font-medium transition hover:border-violet hover:bg-lavender ${
    on ? "border-violet bg-lavender text-navy" : "border-navy/10 bg-white text-ink"
  }`;

export default function ProfileFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const total = profileQuestions.length;
  const q = profileQuestions[step];
  const isLast = step === total - 1;
  const progress = ((step + 1) / total) * 100;

  const text = (id: string) =>
    typeof answers[id] === "string" ? (answers[id] as string) : "";
  const list = (id: string) =>
    Array.isArray(answers[id]) ? (answers[id] as string[]) : [];
  const set = (id: string, value: string | string[]) =>
    setAnswers((a) => ({ ...a, [id]: value }));
  const toggle = (id: string, option: string) => {
    const current = list(id);
    set(
      id,
      current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option]
    );
  };

  const otherChosen =
    q.allowOther &&
    (q.type === "multi" ? list(q.id).includes("Other") : text(q.id) === "Other");

  function isValid() {
    if (q.optional) return true;
    if (q.type === "text" || q.type === "textarea") return text(q.id).trim() !== "";
    if (q.type === "birth") return text("birthMonth") !== "" && text("birthYear") !== "";
    if (q.type === "careerGoal")
      return text(q.id).trim() !== "" || text("undecided") === "yes";
    const picked = q.type === "multi" ? list(q.id).length > 0 : text(q.id) !== "";
    if (!picked) return false;
    if (otherChosen && text(`${q.id}_other`).trim() === "") return false;
    return true;
  }

  function finish() {
    const profile: Answers = { ...answers };

    for (const question of profileQuestions) {
      if (!question.allowOther) continue;
      const other = text(`${question.id}_other`).trim();
      const value = profile[question.id];
      if (Array.isArray(value)) {
        profile[question.id] = value.map((o) => (o === "Other" ? `Other: ${other}` : o));
      } else if (value === "Other") {
        profile[question.id] = `Other: ${other}`;
      }
      delete profile[`${question.id}_other`];
    }

    if (text("undecided") === "yes") profile.career = "Not decided yet";
    delete profile.undecided;

    localStorage.setItem("nexovia-profile", JSON.stringify(profile));
    sessionStorage.setItem(
      "nexovia-answers",
      JSON.stringify({ answers: profile, note: String(profile.about ?? "") })
    );
    router.push("/find/results");
  }

  function next() {
    if (!isValid()) return;
    if (isLast) finish();
    else setStep(step + 1);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
    >
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm text-ink/60">
          <span>
            Question {step + 1} of {total}
          </span>
          {step > 0 && (
            <button
              type="button"
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

      <h2 className="text-2xl font-bold text-navy sm:text-3xl">{q.text}</h2>
      {(q.hint || q.type === "multi") && (
        <p className="mt-2 text-ink/70">
          {q.type === "multi" ? "Choose all that apply. " : ""}
          {q.hint}
        </p>
      )}

      {/* Text */}
      {q.type === "text" && (
        <input
          value={text(q.id)}
          onChange={(e) => set(q.id, e.target.value)}
          placeholder={q.placeholder}
          maxLength={50}
          autoFocus
          className={`${inputClass} mt-6`}
        />
      )}

      {/* Long text */}
      {q.type === "textarea" && (
        <textarea
          value={text(q.id)}
          onChange={(e) => set(q.id, e.target.value)}
          placeholder={q.placeholder}
          maxLength={300}
          rows={4}
          className={`${inputClass} mt-6`}
        />
      )}

      {/* Birth month + year */}
      {q.type === "birth" && (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <select
            value={text("birthMonth")}
            onChange={(e) => set("birthMonth", e.target.value)}
            aria-label="Birth month"
            className={inputClass}
          >
            <option value="">Month</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            value={text("birthYear")}
            onChange={(e) => set("birthYear", e.target.value)}
            aria-label="Birth year"
            className={inputClass}
          >
            <option value="">Year</option>
            {birthYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Career goal + "not decided" */}
      {q.type === "careerGoal" && (
        <div className="mt-6">
          <input
            value={text(q.id)}
            onChange={(e) => set(q.id, e.target.value)}
            placeholder={q.placeholder}
            maxLength={60}
            disabled={text("undecided") === "yes"}
            className={`${inputClass} disabled:opacity-50`}
          />
          <label className="mt-4 flex cursor-pointer items-center gap-3 text-ink">
            <input
              type="checkbox"
              checked={text("undecided") === "yes"}
              onChange={(e) => {
                set("undecided", e.target.checked ? "yes" : "");
                if (e.target.checked) set(q.id, "");
              }}
              className="h-5 w-5 accent-violet"
            />
            I haven&apos;t decided yet
          </label>
        </div>
      )}

      {/* Single / multiple choice */}
      {(q.type === "single" || q.type === "multi") && q.options && (
        <>
          <div
            className={`mt-6 grid gap-3 ${q.options.length > 6 ? "sm:grid-cols-2" : ""}`}
          >
            {[...q.options, ...(q.allowOther ? ["Other"] : [])].map((option) => {
              const on =
                q.type === "multi" ? list(q.id).includes(option) : text(q.id) === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={on}
                  onClick={() =>
                    q.type === "multi" ? toggle(q.id, option) : set(q.id, option)
                  }
                  className={optionClass(on)}
                >
                  {option}
                  {on && <Check size={18} className="shrink-0 text-violet" />}
                </button>
              );
            })}
          </div>

          {otherChosen && (
            <input
              value={text(`${q.id}_other`)}
              onChange={(e) => set(`${q.id}_other`, e.target.value)}
              placeholder="Please tell us…"
              maxLength={80}
              autoFocus
              className={`${inputClass} mt-3`}
            />
          )}
        </>
      )}

      {/* Optional follow-up (e.g. "Why?") */}
      {q.followUp && (
        <div className="mt-6">
          <label htmlFor={q.followUp.id} className="mb-2 block font-medium text-navy">
            {q.followUp.label}
          </label>
          <textarea
            id={q.followUp.id}
            value={text(q.followUp.id)}
            onChange={(e) => set(q.followUp!.id, e.target.value)}
            placeholder={q.followUp.placeholder}
            maxLength={300}
            rows={3}
            className={inputClass}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={!isValid()}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 font-semibold text-white transition hover:bg-violet/90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isLast ? (
          <>
            <Sparkles size={18} /> See my matches
          </>
        ) : (
          <>
            Next <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}

