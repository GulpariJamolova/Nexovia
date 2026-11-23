import type { CountryCode, SalaryBand, SalaryInfo } from "@/types";

/*
  Approximate UAE salary ranges. Only careers with a source we could actually
  read and check are listed here. Every other career shows "no verified
  figures yet" instead of a guess.

  RULES FOR ADDING A SALARY
  - Copy the numbers exactly as the source prints them. Never estimate,
    average two sources, or adjust for inflation.
  - Keep the source's own job title in `title`, so students can see exactly
    which role the range describes.
  - Every range must have a source name, a link and the date it was checked.

  SOURCES USED
  1. Hays GCC Salary Guide 2025 (free PDF from hays.ae). Figures are the
     "total fixed monthly salary package" in AED, as of Q4 2024. Ranges are
     "the upper and lower salary rates from job listings, job offers, and
     candidate registrations". Where Hays splits private and public sector,
     the private-sector column is used.
  2. Michael Page UAE Salary Guide 2026, as reported by Arabian Business and
     What's On. Figures are monthly AED. Michael Page's own site says its
     guide includes basic pay, housing, transport and other allowances, and
     excludes bonuses and commissions.
*/

const HAYS_2025 = {
  currency: "AED",
  period: "month",
  basis: "unspecified",
  sourceName: "Hays GCC Salary Guide 2025",
  sourceUrl: "https://www.hays.ae/documents/d/hays-salary-guide-ae/hays-gcc-salary-guide-2025-1",
  lastChecked: "2026-11",
  dataDate: "Q4 2024",
  note: "Total fixed monthly salary package, as defined by Hays.",
} as const;

const MP_2026 = {
  currency: "AED",
  period: "month",
  basis: "unspecified",
  sourceName: "Michael Page UAE Salary Guide 2026 (reported by Arabian Business)",
  sourceUrl:
    "https://www.arabianbusiness.com/jobs/uae-salary-guide-2026-the-fastest-growing-sectors-top-paying-jobs-and-skills-employers-want-most",
  lastChecked: "2026-10",
  dataDate: "2025",
  note: "Monthly pay. Michael Page says its guide figures include allowances and exclude bonuses and commissions.",
} as const;

const hays = (bands: SalaryBand[]): Partial<Record<CountryCode, SalaryInfo>> => ({
  AE: { ...HAYS_2025, bands },
});
const mp = (bands: SalaryBand[]): Partial<Record<CountryCode, SalaryInfo>> => ({
  AE: { ...MP_2026, bands },
});

export const salaryOverrides: Record<string, Partial<Record<CountryCode, SalaryInfo>>> = {
  /* ---------- Michael Page UAE Salary Guide 2026 ---------- */
  lawyer: mp([
    { level: "early", min: 30000, max: 60000, title: "Newly Qualified (law firm)" },
    { level: "experienced", min: 52000, max: 95000, title: "Senior Associate (law firm)" },
    { level: "senior", min: 90000, max: 200000, title: "Partner (law firm)" },
  ]),
  "web-developer": mp([
    { level: "experienced", min: 22000, max: 38000, title: "Senior Front-end Developer" },
  ]),
  "devops-engineer": mp([
    { level: "experienced", min: 30000, max: 50000, title: "Senior DevOps Engineer" },
  ]),
  "ai-specialist": mp([
    { level: "typical", min: 30000, max: 45000, title: "GenAI Engineer / MLOps roles" },
  ]),
  "renewable-energy-engineer": mp([{ level: "typical", min: 20000, max: 35000 }]),
  "facilities-manager": mp([{ level: "typical", min: 30000, max: 50000 }]),
  accountant: {
    AE: {
      ...MP_2026,
      bands: [{ level: "typical", min: 20000, max: 27000 }],
      sourceName: "Michael Page UAE Salary Guide 2026 (reported by What's On)",
      sourceUrl: "https://whatson.ae/?p=373982",
    },
  },

  /* ---------- Hays GCC Salary Guide 2025 ---------- */
  // Technology
  "software-developer": hays([
    { level: "experienced", min: 20000, max: 35000, title: "Back End Developer/Engineer" },
    { level: "experienced", min: 25000, max: 40000, title: "Full Stack Developer" },
    { level: "senior", min: 35000, max: 45000, title: "Software Architect" },
  ]),
  "it-programmer": hays([
    { level: "typical", min: 15000, max: 25000, title: "Systems Engineer/Administrator" },
    { level: "typical", min: 20000, max: 35000, title: "Back End Developer/Engineer" },
  ]),
  "mobile-app-developer": hays([
    { level: "typical", min: 25000, max: 40000, title: "Mobile Application Developer" },
  ]),
  "data-scientist": hays([
    { level: "typical", min: 35000, max: 70000, title: "Data Scientist" },
    { level: "senior", min: 60000, max: 80000, title: "Head of Data Science" },
  ]),
  "data-analyst": hays([
    { level: "typical", min: 13000, max: 30000, title: "Data Analyst" },
    { level: "senior", min: 30000, max: 50000, title: "Business Intelligence Manager" },
  ]),
  "cybersecurity-specialist": hays([
    { level: "typical", min: 15000, max: 40000, title: "Information Security Analyst" },
    { level: "typical", min: 22000, max: 45000, title: "Information Security Engineer" },
    { level: "senior", min: 32000, max: 60000, title: "Information Security Manager" },
  ]),
  "penetration-tester": hays([
    { level: "typical", min: 18000, max: 40000, title: "Penetration Tester" },
  ]),
  "cloud-engineer": hays([
    { level: "typical", min: 30000, max: 40000, title: "Cloud Engineer" },
    { level: "senior", min: 40000, max: 60000, title: "Cloud Architect" },
  ]),
  "ux-ui-designer": hays([
    { level: "typical", min: 20000, max: 40000, title: "UX/UI Designer" },
    { level: "senior", min: 30000, max: 40000, title: "Senior Product Designer" },
  ]),

  // Creative and marketing
  "graphic-designer": hays([
    { level: "early", min: 10000, max: 13000, title: "Junior Graphic Designer/Digital Designer" },
    { level: "experienced", min: 15000, max: 30000, title: "Graphic Designer/Digital Designer" },
    { level: "senior", min: 32000, max: 36000, title: "Digital Art Director" },
  ]),
  "marketing-manager": hays([
    { level: "early", min: 17000, max: 21000, title: "Marketing Executive/Specialist" },
    { level: "experienced", min: 35000, max: 45000, title: "Marketing Manager" },
    { level: "senior", min: 55000, max: 70000, title: "Head of Marketing" },
  ]),

  // Architecture and construction
  architect: hays([
    { level: "experienced", min: 20000, max: 35000, title: "Project Architect" },
    { level: "senior", min: 25000, max: 40000, title: "Senior Architect" },
  ]),
  "interior-designer": hays([
    { level: "typical", min: 11000, max: 25000, title: "Interior Designer" },
    { level: "senior", min: 20000, max: 35000, title: "Senior Interior Designer" },
  ]),
  "construction-manager": hays([
    { level: "typical", min: 25000, max: 50000, title: "Construction Manager" },
  ]),
  "urban-planner": hays([
    { level: "senior", min: 75000, max: 95000, title: "Urban Planning Director" },
  ]),

  // Business, finance, law and HR
  "financial-analyst": hays([
    { level: "typical", min: 15000, max: 20000, title: "Financial Analyst" },
    { level: "experienced", min: 18000, max: 22000, title: "Senior Financial Analyst" },
  ]),
  "project-manager": hays([
    { level: "typical", min: 30000, max: 45000, title: "Project Manager (technology)" },
    { level: "typical", min: 40000, max: 60000, title: "Project Manager (construction & property)" },
  ]),
  "logistics-manager": hays([
    { level: "typical", min: 20000, max: 30000, title: "Logistics Manager" },
    { level: "senior", min: 35000, max: 45000, title: "Head of Logistics" },
  ]),
  "business-administrator": hays([
    { level: "early", min: 8000, max: 18000, title: "Administrator" },
    { level: "experienced", min: 18000, max: 25000, title: "Office Manager (1–5 years' experience)" },
    { level: "senior", min: 25000, max: 40000, title: "Office Manager (5+ years' experience)" },
  ]),
  "business-manager": hays([
    { level: "experienced", min: 27000, max: 38000, title: "Operations Manager (professional services)" },
    { level: "senior", min: 40000, max: 50000, title: "Country Manager (professional services)" },
  ]),
  "human-resources-manager": hays([
    { level: "typical", min: 25000, max: 32000, title: "HR Generalist (private sector)" },
    { level: "experienced", min: 40000, max: 55000, title: "HR Manager (private sector)" },
  ]),
  paralegal: hays([
    { level: "typical", min: 23000, max: 32000, title: "Paralegal (private sector)" },
  ]),
};
