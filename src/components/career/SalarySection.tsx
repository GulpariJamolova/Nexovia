"use client";

import { useId, useState } from "react";
import { ExternalLink, Info } from "lucide-react";
import { countries } from "@/data/countries";
import type { Career, CountryCode, SalaryLevel } from "@/types";

const levelLabel: Record<SalaryLevel, string> = {
  early: "Early career",
  experienced: "Experienced professional",
  senior: "Senior or specialised role",
  typical: "Typical range",
};

const basisLabel = {
  gross: "These figures are gross (before tax).",
  net: "These figures are take-home (after tax).",
  unspecified: "The source does not say whether these figures are before or after tax.",
};

const fmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export default function SalarySection({
  name,
  salary,
}: {
  name: string;
  salary: Career["salary"];
}) {
  const [country, setCountry] = useState<CountryCode>("AE");
  const id = useId();
  const info = salary[country];
  const countryName = countries.find((c) => c.code === country)?.name ?? country;

  return (
    <section id="salary" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-dark">Salary</p>
      <h2 className="mt-1 font-heading text-3xl font-bold text-navy">How much could you earn?</h2>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <label htmlFor={id} className="font-semibold text-navy">Country</label>
        <select
          id={id}
          value={country}
          onChange={(e) => setCountry(e.target.value as CountryCode)}
          className="rounded-full border border-navy/15 bg-white px-4 py-2 outline-none focus:border-violet"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
      </div>

      {info ? (
        <div className="mt-6">
          <h3 className="font-heading text-xl font-bold text-navy">
            Approximate salary in {countryName}
          </h3>
          <p className="text-sm text-ink/80">
            In {info.currency}, per {info.period}. {basisLabel[info.basis]}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {info.bands.map((b) => (
              <div key={b.level} className="card">
                <p className="text-sm font-semibold text-ink/70">{levelLabel[b.level]}</p>
                <p className="mt-2 font-heading text-2xl font-bold text-navy">
                  {fmt.format(b.min)} – {fmt.format(b.max)}
                </p>
                <p className="text-sm text-ink/70">{info.currency} per {info.period}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink/80">
            Source:{" "}
            <a
              href={info.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-violet-dark underline"
            >
              {info.sourceName} <ExternalLink size={14} aria-hidden="true" />
            </a>{" "}
            (checked {info.lastChecked})
          </p>
        </div>
      ) : (
        <div className="mt-6 rounded-3xl bg-butter/70 p-6">
          <h3 className="font-heading text-lg font-bold text-navy">
            No verified figures yet for {name} in {countryName}
          </h3>
          <p className="mt-2 text-ink/90">
            We would rather show nothing than guess. To research this, look at recent official
            statistics, recruitment salary guides or large job-board reports for your country.
          </p>
        </div>
      )}

      <p className="mt-4 flex items-start gap-2 rounded-2xl bg-lavender p-4 text-sm text-ink/90">
        <Info size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
        Salaries are estimates, not guaranteed earnings. They vary with experience, location,
        employer, qualifications and industry. A range may describe only the specific job
        titles named in its source, so other roles in this career can pay differently.
      </p>
    </section>
  );
}