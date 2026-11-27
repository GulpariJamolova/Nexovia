"use client";

import { useId, useState } from "react";
import { ExternalLink, Info } from "lucide-react";
import { countries } from "@/data/countries";
import type { Career, CountryCode, SalaryLevel } from "@/types";

const levelLabel: Record<SalaryLevel, string> = {
  early: "Early career",
  experienced: "Experienced",
  senior: "Senior / leadership",
  typical: "Typical range",
};

const basisLabel = {
  gross: "Gross (before deductions).",
  net: "Take-home (after deductions).",
  unspecified: "The source doesn't say whether figures are before or after deductions.",
};
const periodLabel = { month: "Monthly", year: "Yearly" };

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

          <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <div>
              <dt className="inline font-semibold text-navy">Period: </dt>
              <dd className="inline text-ink/85">
                {periodLabel[info.period]} ({info.currency} per {info.period})
              </dd>
            </div>
            {info.dataDate && (
              <div>
                <dt className="inline font-semibold text-navy">Data from: </dt>
                <dd className="inline text-ink/85">{info.dataDate}</dd>
              </div>
            )}
            <div>
              <dt className="inline font-semibold text-navy">Checked: </dt>
              <dd className="inline text-ink/85">{info.lastChecked}</dd>
            </div>
          </dl>

          <div className="mt-4 overflow-hidden rounded-3xl bg-white ring-1 ring-navy/10">
            <table className="w-full text-left">
              <caption className="sr-only">
                Salary ranges for {name} in {countryName}, {info.currency} per {info.period}
              </caption>
              <thead className="bg-lavender/60 text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
                <tr>
                  <th scope="col" className="px-5 py-3">Level</th>
                  <th scope="col" className="px-5 py-3">Job title in the source</th>
                  <th scope="col" className="px-5 py-3 text-right">
                    {info.currency} per {info.period}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {info.bands.map((b, i) => (
                  <tr key={i}>
                    <td className="px-5 py-4 text-sm font-semibold text-ink/80">{levelLabel[b.level]}</td>
                    <td className="px-5 py-4 text-sm text-ink/85">{b.title ?? name}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-right font-heading text-lg font-bold text-navy">
                      {b.averageOnly ? `about ${fmt.format(b.min)}` : `${fmt.format(b.min)} – ${fmt.format(b.max)}`}
                      {b.averageOnly && <span className="block text-xs font-normal text-ink/70">average only</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-ink/80">
            {info.note ? `${info.note} ` : ""}
            {basisLabel[info.basis]}
          </p>
          {info.sourceType && (
            <p className="mt-2 text-sm text-ink/80">
              Type of source: <strong className="text-navy">{info.sourceType}</strong>
            </p>
          )}
          <p className="mt-2 text-sm text-ink/80">
            Source:{" "}
            <a
              href={info.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-violet-dark underline"
            >
              {info.sourceName} <ExternalLink size={14} aria-hidden="true" />
            </a>
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