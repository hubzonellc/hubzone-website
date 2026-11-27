/* Hub Zone Data Center — SAMPLE job data.
   Same shape as the future "jobs" table, so the page won't change when the
   real database replaces this file. Public fields only: client names, fees,
   bill/pay rates and internal notes never go here.
   Descriptions marked [sample] are placeholders until real ones come in. */
window.HZ_JOBS = [
  {
    id: "HZ-1001",
    title: "Comptroller",
    category: "Accounting & Finance",
    city: "San Juan", region: "PR",
    workType: "Full-time", workplace: "Hybrid",
    salaryText: "Commensurate with experience",
    experienceYears: "10+ years",
    benefits: ["Health coverage", "401(k)", "Education aid"],
    postedAt: "2026-10-13",
    industry: "Hedge fund",
    summary: "Lead financial operations, reporting and internal controls for a growing hedge fund.",
    description: [
      { h: "The opportunity", p: ["Are you a strategic financial leader looking for an executive role in a hedge fund? As Comptroller, you will oversee financial operations, drive strategic planning and keep internal controls strong."] },
      { h: "Qualifications", list: [
        "Bachelor's degree in accounting, finance or related field (Master's or CPA preferred)",
        "Advanced knowledge of accounting principles, fund accounting and financial reporting",
        "Strong leadership and analytical skills; manages complex operations and risk",
        "Sharp attention to detail in governance, budgeting and reporting",
        "Works independently, manages teams and meets critical deadlines"
      ]},
      { h: "Responsibilities", list: [
        "Direct daily, monthly and quarterly financial operations and statements",
        "Lead financial reporting and portfolio valuation oversight",
        "Manage relationships with auditors, tax advisors and regulators",
        "Manage cash flow, treasury and liquidity forecasting",
        "Build and maintain internal controls and compliance frameworks",
        "Partner with leadership on strategy, budgeting and forecasting"
      ]},
      { h: "About the company", p: ["A hedge fund with 17+ years managing assets for institutional clients, high-net-worth individuals and family offices, with a collaborative, client-first culture."] }
    ]
  },
  {
    id: "HZ-1002",
    title: "Finance Clerk",
    category: "Accounting & Finance",
    city: "Guaynabo", region: "PR",
    workType: "Full-time", workplace: "On-site",
    salaryText: "Competitive",
    experienceYears: "1–3 years",
    benefits: ["Health coverage"],
    postedAt: "2026-11-12",
    industry: "Insurance",
    summary: "[sample] Support daily accounting: payables, receivables and reconciliations.",
    description: [
      { h: "The role", p: ["[sample] Placeholder text. The real description will come straight from the Hub Zone Data Center."] },
      { h: "What you'll do", list: ["[sample] Process invoices and payments", "[sample] Reconcile accounts", "[sample] Support month-end close"] }
    ]
  },
  {
    id: "HZ-1003",
    title: "FP&A Manager",
    category: "Accounting & Finance",
    city: "San Juan", region: "PR",
    workType: "Full-time", workplace: "Hybrid",
    salaryText: "Competitive",
    experienceYears: "5+ years",
    benefits: ["Health coverage", "401(k)"],
    postedAt: "2026-08-20",
    industry: "Professional services",
    summary: "[sample] Own budgeting, forecasting and business performance analysis.",
    description: [
      { h: "The role", p: ["[sample] Placeholder text. The real description will come straight from the Hub Zone Data Center."] },
      { h: "What you'll do", list: ["[sample] Build budgets and forecasts", "[sample] Analyze performance vs plan", "[sample] Present insights to leadership"] }
    ]
  },
  {
    id: "HZ-1004",
    title: "Project Engineer (EIT/PE)",
    category: "Engineering",
    city: "San Juan", region: "PR",
    workType: "Full-time", workplace: "On-site",
    salaryText: "Competitive",
    experienceYears: "2+ years",
    benefits: ["Health coverage"],
    postedAt: "2026-10-20",
    industry: "Engineering & consulting",
    summary: "[sample] Support design and delivery of engineering projects from plan to close-out.",
    description: [
      { h: "The role", p: ["[sample] Placeholder text. The real description will come straight from the Hub Zone Data Center."] },
      { h: "Requirements", list: ["[sample] EIT or PE license", "[sample] Engineering degree", "[sample] Project coordination experience"] }
    ]
  }
];
