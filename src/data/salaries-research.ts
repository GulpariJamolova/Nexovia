import type { CountryCode, SalaryInfo } from "@/types";

/*
  Researched UAE figures, read from the source pages on 2026-11-25.
  Careers not listed here show "No verified figures yet". Averages-only rows are
  marked averageOnly. Hand-checked entries in salaries.ts override this file.
*/
export const researchedSalaries: Record<string, Partial<Record<CountryCode, SalaryInfo>>> = {
  "aerospace-engineer": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 180000,
          "max": 180000,
          "title": "Aerospace Engineer",
          "averageOnly": true
        }
      ],
      "sourceName": "Payscale UAE",
      "sourceUrl": "https://www.payscale.com/research/AE/Job=Aerospace_Engineer/Salary",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average base salary, 62 profiles; 10th-90th percentile AED 17k-485k is very wide",
      "dataDate": "2026-09-29"
    }
  },
  "air-traffic-controller": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 71000,
          "max": 140000,
          "title": "Air Traffic Controller"
        }
      ],
      "sourceName": "Payscale UAE",
      "sourceUrl": "https://www.payscale.com/research/AE/Job=Air_Traffic_Controller/Salary",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Base salary 25th-75th percentile; only 8 profiles",
      "dataDate": "2024-09-28"
    }
  },
  "animator": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 12218,
          "max": 12218,
          "title": "Animator",
          "averageOnly": true
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/animator",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Average of 20 reported wages; page shows no real range",
      "dataDate": "2026-11-18"
    }
  },
  "archivist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 7938,
          "max": 17603,
          "title": "archivist, registry administrator"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/administration/archivist-registry-administrator?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Range covering 80% of employees; fewer than 20 verified respondents"
    }
  },
  "astronomer": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 200000,
          "max": 200000,
          "title": "Astrophysicist",
          "averageOnly": true
        }
      ],
      "sourceName": "Payscale UAE",
      "sourceUrl": "https://www.payscale.com/research/AE/Job=Astrophysicist/Salary",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Closest title to astronomer; average base salary, 14 profiles; individual range very wide",
      "dataDate": "2025-06-05"
    }
  },
  "automotive-engineer": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 125000,
          "max": 125000,
          "title": "Automotive Engineer",
          "averageOnly": true
        }
      ],
      "sourceName": "Payscale UAE",
      "sourceUrl": "https://www.payscale.com/research/AE/Job=Automotive_Engineer/Salary",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average base salary, 6 profiles",
      "dataDate": "2025-02-12"
    }
  },
  "biomedical-engineer": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 71107,
          "max": 71107,
          "title": "Biomedical Engineer",
          "averageOnly": true
        }
      ],
      "sourceName": "Payscale UAE",
      "sourceUrl": "https://www.payscale.com/research/AE/Job=Biomedical_Engineer/Salary",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average base salary, 28 profiles; individual range very wide",
      "dataDate": "2026-09-24"
    }
  },
  "cardiologist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 70075,
          "max": 79263,
          "title": "cardiologist"
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/cardiologist",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Based on 629 salaries per page",
      "dataDate": "2026-11-18"
    }
  },
  "chemical-engineer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 11461,
          "max": 21893,
          "title": "Chemical Engineer (Chemical Industry)"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/chemical-industry/chemical-engineer",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Range covering 80% of employees; fewer than 20 verified respondents"
    }
  },
  "chemist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 10274,
          "max": 21398,
          "title": "Chemist (Chemical Industry)"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/chemical-industry/chemist",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Range covering 80% of employees; fewer than 20 verified respondents"
    }
  },
  "civil-engineer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 12413,
          "max": 14906,
          "title": "civil engineer"
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/civil-engineer",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Based on 60 salaries per page",
      "dataDate": "2026-11-18"
    }
  },
  "compliance-officer": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 116472,
          "max": 116472,
          "title": "Compliance Officer",
          "averageOnly": true
        }
      ],
      "sourceName": "Payscale UAE",
      "sourceUrl": "https://www.payscale.com/research/AE/Job=Compliance_Officer/Salary",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average base salary, 55 profiles; 10th-90th percentile AED 7k-283k is wide",
      "dataDate": "2026-08-17"
    }
  },
  "customs-officer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 10477,
          "max": 22104,
          "title": "Customs Officer (Public Administration)"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/public-administration-self-governance/customs-officer?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Range covering 80% of employees; fewer than 20 verified respondents"
    }
  },
  "dentist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 37672,
          "max": 39524,
          "title": "general dentist"
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/general-dentist",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Based on 34 salaries per page",
      "dataDate": "2026-11-04"
    }
  },
  "dermatologist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 66742,
          "max": 79139,
          "title": "dermatologist"
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/dermatologist",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Based on 529 salaries per page",
      "dataDate": "2026-11-18"
    }
  },
  "doctor": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 14580,
          "max": 38769,
          "title": "Doctor"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/medicine-social-care/doctor",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents"
    }
  },
  "early-years-educator": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 7126,
          "max": 16778,
          "title": "Preschool Teacher"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://paylab.com/ae/salaryinfo/education-science-research/preschool-teacher?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents; closest title to early years educator"
    }
  },
  "economist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 9508,
          "max": 25150,
          "title": "Economist"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/economy-finance-accountancy/economist?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents"
    }
  },
  "electrical-engineer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 12707,
          "max": 27960,
          "title": "Electrical Engineer"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/electrical-power-engineering/electrical-engineer",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents; Jooble page for same role showed AED 16,783-19,083/month (Oct 2026) and Indeed avg AED 5,081/month, so sources vary"
    }
  },
  "environmental-engineer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 7000,
          "max": 7000,
          "title": "Environmental Engineer",
          "averageOnly": true
        }
      ],
      "sourceName": "GulfTalent",
      "sourceUrl": "https://gulftalent.com/mobile/uae/salaries/environmental-engineer",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average only; based on 13 registered users; page's reported lowest AED 500 and highest AED 15,000 not used (range too wide). Payscale shows avg AED 37,200/year (Dec 2025, 16 profiles)",
      "dataDate": "2024-09"
    }
  },
  "environmental-scientist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 9905,
          "max": 21187,
          "title": "Environmentalist"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/water-management-forestry-environment/environmentalist?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents; closest Paylab title to environmental scientist"
    }
  },
  "fashion-designer": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 61042,
          "max": 61042,
          "title": "Fashion Designer",
          "averageOnly": true
        }
      ],
      "sourceName": "Payscale",
      "sourceUrl": "https://www.payscale.com/research/AE/Job=Fashion_Designer/Salary",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average base salary only; 43 profiles; full range on page very wide (AED 3k-203k) so not used",
      "dataDate": "2024-11"
    }
  },
  "filmmaker": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 5000,
          "max": 5000,
          "title": "Videographer",
          "averageOnly": true
        }
      ],
      "sourceName": "GulfTalent",
      "sourceUrl": "https://gulftalent.com/mobile/uae/salaries/videographer",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average only; 23 registered users; page range AED 2,500-10,000 not used (4x). Closest title to filmmaker. Jooble shows much higher avg AED 18,350/month for videographer",
      "dataDate": "2024-09"
    }
  },
  "firefighter": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 4532,
          "max": 4532,
          "title": "Firefighter",
          "averageOnly": true
        }
      ],
      "sourceName": "Indeed UAE",
      "sourceUrl": "https://ae.indeed.com/career/firefighter/salaries",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Average only",
      "dataDate": "2026-06-10"
    }
  },
  "flight-attendant": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 9989,
          "max": 9989,
          "title": "Flight Attendant",
          "averageOnly": true
        }
      ],
      "sourceName": "Indeed UAE",
      "sourceUrl": "https://ae.indeed.com/salaries/flight%2Battendant-Salaries%2C-UAE",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Average only; Payscale shows avg base AED 119,641/year (Jun 2024)",
      "dataDate": "2026-06-08"
    }
  },
  "game-designer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 13185,
          "max": 29323,
          "title": "Game designer"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/information-technology/game-designer?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents"
    }
  },
  "game-developer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 14132,
          "max": 34407,
          "title": "Game developer"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/information-technology/game-developer?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents"
    }
  },
  "geologist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 9914,
          "max": 28809,
          "title": "Geologist"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/construction-real-estate/geologist?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents; ratio close to 3x"
    }
  },
  "illustrator": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 138000,
          "max": 138000,
          "title": "Illustrator",
          "averageOnly": true
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/illustrator",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Average only (AED 11,500/month); based on 6 salaries",
      "dataDate": "2026-11-18"
    }
  },
  "journalist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 8655,
          "max": 20651,
          "title": "Journalist"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/journalism-printing-arts-media/journalist?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Paylab range covers middle 80% of respondents; fewer than 20 verified respondents"
    }
  },
  "land-surveyor": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 8630,
          "max": 22995,
          "title": "Land Surveyor/Geodesist"
        },
        {
          "level": "experienced",
          "min": 16946,
          "max": 16946,
          "title": "Land Surveyor/Geodesist (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/construction-real-estate/land-surveyor-geodesist",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents"
    }
  },
  "landscape-architect": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 7315,
          "max": 21181,
          "title": "Landscape Architect"
        },
        {
          "level": "experienced",
          "min": 17169,
          "max": 17169,
          "title": "Landscape Architect (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/construction-real-estate/landscape-architect?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents"
    }
  },
  "librarian": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 6644,
          "max": 16400,
          "title": "Librarian"
        },
        {
          "level": "experienced",
          "min": 13391,
          "max": 13391,
          "title": "Librarian (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://paylab.com/ae/salaryinfo/education-science-research/librarian?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents"
    }
  },
  "mechanical-engineer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 10340,
          "max": 25051,
          "title": "Mechanical Engineer"
        },
        {
          "level": "experienced",
          "min": 18725,
          "max": 18725,
          "title": "Mechanical Engineer (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/mechanical-engineering/mechanical-engineer",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents"
    }
  },
  "medical-laboratory-scientist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 8525,
          "max": 16968,
          "title": "Medical Laboratory Technician"
        },
        {
          "level": "experienced",
          "min": 12841,
          "max": 12841,
          "title": "Medical Laboratory Technician (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/medicine-social-care/medical-laboratory-technician?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents; title is Technician not Technologist; page FAQ shows conflicting range 2,063-6,731"
    }
  },
  "nurse": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 7556,
          "max": 20471,
          "title": "Nurse"
        },
        {
          "level": "experienced",
          "min": 13803,
          "max": 13803,
          "title": "Nurse (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://paylab.com/ae/salaryinfo/medicine-social-care/nurse?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents"
    }
  },
  "paramedic": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 8981,
          "max": 22825,
          "title": "Ambulance Paramedic"
        },
        {
          "level": "experienced",
          "min": 14965,
          "max": 14965,
          "title": "Ambulance Paramedic (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/medicine-social-care/ambulance-paramedic?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents"
    }
  },
  "personal-trainer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 18098,
          "max": 19732,
          "title": "Personal trainer"
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/personal-trainer",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. 6 reported salaries",
      "dataDate": "2026-10-16"
    }
  },
  "petroleum-engineer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 17149,
          "max": 41191,
          "title": "Petroleum engineer"
        },
        {
          "level": "experienced",
          "min": 32042,
          "max": 32042,
          "title": "Petroleum engineer (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/mining-metallurgy/petroleum-engineer",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents"
    }
  },
  "pharmacist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 26856,
          "max": 26856,
          "title": "Pharmacist",
          "averageOnly": true
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/pharmacist",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. 9 reported salaries; page shows no range",
      "dataDate": "2026-11-18"
    }
  },
  "photographer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 7663,
          "max": 20141,
          "title": "Photographer"
        },
        {
          "level": "experienced",
          "min": 14577,
          "max": 14577,
          "title": "Photographer (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/arts-culture/photographer",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Middle 80% of respondents; page states no data date; fewer than 20 respondents"
    }
  },
  "physiotherapist": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 24715,
          "max": 25748,
          "title": "Physiotherapist"
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/physiotherapist",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Average AED 25,231/month from 16 reported wages",
      "dataDate": "2026-11-11"
    }
  },
  "pilot": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "early",
          "min": 31840,
          "max": 31840,
          "title": "First Officer",
          "averageOnly": true
        },
        {
          "level": "experienced",
          "min": 36995,
          "max": 36995,
          "title": "Accelerated Command (First Officer progressing to captain) (average, about 5 years in)",
          "averageOnly": true
        }
      ],
      "sourceName": "Gulf News (Emirates pay)",
      "sourceUrl": "https://gulfnews.com/business/aviation/work-for-emirates-you-could-earn-up-to-dh48000-per-month-1.500208005",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Emirates First Officer tax-free salary AED 382,080/year; based on avg 85 flying hours/month",
      "dataDate": "2025-07-23"
    }
  },
  "police-officer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 11550,
          "max": 21458,
          "title": "Police Officer"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://paylab.com/ae/salaryinfo/security-protection/police-officer?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Survey range covering the middle 80% of respondents; Paylab states fewer than 20 verified respondents; 5 years experience: AED 18,083"
    }
  },
  "product-designer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 9500,
          "max": 9500,
          "title": "Product Designer",
          "averageOnly": true
        }
      ],
      "sourceName": "GulfTalent",
      "sourceUrl": "https://gulftalent.com/symfony_web/index.php/mobile/uae/salaries/designer",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average of registered GulfTalent users; general Designer range AED 3,500-18,000"
    }
  },
  "robotics-engineer": {
    "AE": {
      "currency": "AED",
      "period": "year",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 173793,
          "max": 173793,
          "title": "Robotics Engineer",
          "averageOnly": true
        }
      ],
      "sourceName": "Payscale UAE",
      "sourceUrl": "https://www.payscale.com/research/AE/Job=Robotics_Engineer/Salary",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Average base; 13 salary profiles; very wide reported spread so average only",
      "dataDate": "2026-05-18"
    }
  },
  "special-education-teacher": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 8870,
          "max": 19325,
          "title": "Special Needs Teacher"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/education-science-research?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Survey range covering the middle 80% of respondents; Paylab states fewer than 20 verified respondents"
    }
  },
  "statistician": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 12459,
          "max": 26578,
          "title": "Statistician"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/economy-finance-accountancy/statistician?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Survey range covering the middle 80% of respondents; Paylab states fewer than 20 verified respondents; 5 years experience: AED 22,210"
    }
  },
  "surgeon": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "unspecified",
      "bands": [
        {
          "level": "typical",
          "min": 69213,
          "max": 79534,
          "title": "General Surgeon"
        }
      ],
      "sourceName": "Jooble UAE",
      "sourceUrl": "https://ae.jooble.org/salary/general-surgeon",
      "sourceType": "job-site estimate",
      "lastChecked": "2026-11",
      "note": "Job-site estimate: can be higher than real pay. Average AED 78,450/month from 512 reported salaries",
      "dataDate": "2026-11-18"
    }
  },
  "teacher": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 8696,
          "max": 18089,
          "title": "Teacher"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/education-science-research?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Survey range covering the middle 80% of respondents; Paylab states fewer than 20 verified respondents"
    }
  },
  "trainer-coach": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 8972,
          "max": 20382,
          "title": "Sports Coach"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/education-science-research/sports-coach?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Survey range covering the middle 80% of respondents; Paylab states fewer than 20 verified respondents; 5 years experience: AED 15,652"
    }
  },
  "university-lecturer": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 11203,
          "max": 25717,
          "title": "University Teacher"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/education-science-research?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Survey range covering the middle 80% of respondents; Paylab states fewer than 20 verified respondents"
    }
  },
  "veterinarian": {
    "AE": {
      "currency": "AED",
      "period": "month",
      "basis": "gross",
      "bands": [
        {
          "level": "typical",
          "min": 8772,
          "max": 22270,
          "title": "Veterinarian"
        }
      ],
      "sourceName": "Paylab UAE",
      "sourceUrl": "https://www.paylab.com/ae/salaryinfo/medicine-social-care/veterinarian?lang=en",
      "sourceType": "survey estimate",
      "lastChecked": "2026-11",
      "note": "Survey estimate based on a small number of reported salaries. Survey range covering the middle 80% of respondents; Paylab states fewer than 20 verified respondents; 5 years experience: AED 15,742"
    }
  }
};
