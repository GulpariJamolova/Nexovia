import type { CountryCode, SalaryInfo } from "@/types";

/*
  Approximate UAE salary ranges. Only careers with a source we could actually
  check are listed here. Every other career shows "no verified figures yet".

  HOW TO READ THESE:
  - Amounts are in AED. They are RANGES from published salary guides, not
    promises. Pay depends on employer, experience, skills and emirate.
  - The Michael Page UAE Salary Guide 2026 figures were reported by Arabian
    Business in thousands of dirhams. We treat them as MONTHLY because the
    reports describe them as monthly pay. basis is "unspecified" because the
    reports do not say whether they are gross or net.
  - The job titles in the guide are specific (for example "Senior Front-end
    Developer"), so each band is labelled for that title only.

  To add a career: add one entry below with a real, checkable source.
*/
const MP_2026 = {
  sourceName: "Michael Page UAE Salary Guide 2026 (reported by Arabian Business)",
  sourceUrl:
    "https://www.arabianbusiness.com/jobs/uae-salary-guide-2026-the-fastest-growing-sectors-top-paying-jobs-and-skills-employers-want-most",
  lastChecked: "2026-10",
};

export const salaryOverrides: Record<string, Partial<Record<CountryCode, SalaryInfo>>> = {
  // Law-firm roles: Newly Qualified / Senior Associate / Partner
  lawyer: {
    AE: {
      currency: "AED",
      period: "month",
      basis: "unspecified",
      bands: [
        { level: "early", min: 30000, max: 60000 },
        { level: "experienced", min: 52000, max: 95000 },
        { level: "senior", min: 90000, max: 200000 },
      ],
      ...MP_2026,
    },
  },
  // Senior Front-end Developer
  "web-developer": {
    AE: {
      currency: "AED",
      period: "month",
      basis: "unspecified",
      bands: [{ level: "experienced", min: 22000, max: 38000 }],
      ...MP_2026,
    },
  },
  // Senior DevOps Engineer
  "devops-engineer": {
    AE: {
      currency: "AED",
      period: "month",
      basis: "unspecified",
      bands: [{ level: "experienced", min: 30000, max: 50000 }],
      ...MP_2026,
    },
  },
  // GenAI Engineer / MLOps roles
  "ai-specialist": {
    AE: {
      currency: "AED",
      period: "month",
      basis: "unspecified",
      bands: [{ level: "typical", min: 30000, max: 45000 }],
      ...MP_2026,
    },
  },
  "renewable-energy-engineer": {
    AE: {
      currency: "AED",
      period: "month",
      basis: "unspecified",
      bands: [{ level: "typical", min: 20000, max: 35000 }],
      ...MP_2026,
    },
  },
  // Property & Construction roles
  "facilities-manager": {
    AE: {
      currency: "AED",
      period: "month",
      basis: "unspecified",
      bands: [{ level: "typical", min: 30000, max: 50000 }],
      ...MP_2026,
    },
  },
  accountant: {
    AE: {
      currency: "AED",
      period: "month",
      basis: "unspecified",
      bands: [{ level: "typical", min: 20000, max: 27000 }],
      sourceName: "Michael Page UAE Salary Guide (as reported by What's On)",
      sourceUrl: "https://whatson.ae/?p=373982",
      lastChecked: "2026-10",
    },
  },
};
