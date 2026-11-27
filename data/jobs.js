/* Hub Zone Data Center — SAMPLE job data.
   Same shape as the future "jobs" table, so the page won't change when the
   real database replaces this file. Public fields only: client names, fees,
   bill/pay rates and internal notes never go here.
   Jobs 1002-1004 use placeholder text until Pedro OKs them.
   showOnWeb mirrors PCR "Show On Web". The live page will only show showOnWeb: true jobs. */
window.HZ_JOBS = [
  {
    id: "HZ-1001",
    showOnWeb: true, // public in PCR (Show On Web = Show)
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
    showOnWeb: false, // private in PCR: needs Pedro OK before it goes public
    title: "Finance Clerk",
    category: "Accounting & Finance",
    city: "Guaynabo", region: "PR",
    workType: "Full-time", workplace: "On-site",
    salaryText: "Competitive",
    experienceYears: "1–3 years",
    benefits: ["Health coverage"],
    postedAt: "2026-11-12",
    industry: "Insurance",
    summary: "Support daily accounting: payables, receivables and reconciliations.",
    description: [
      { h: "The role", p: ["Full description coming soon. Call or text (843) 267-5538 to hear more about this role."] },
      { h: "What you'll do", list: ["Process invoices and payments", "Reconcile accounts", "Support month-end close"] }
    ]
  },
  {
    id: "HZ-1003",
    showOnWeb: false, // private in PCR: needs Pedro OK before it goes public
    title: "FP&A Manager",
    category: "Accounting & Finance",
    city: "San Juan", region: "PR",
    workType: "Full-time", workplace: "Hybrid",
    salaryText: "Competitive",
    experienceYears: "5+ years",
    benefits: ["Health coverage", "401(k)"],
    postedAt: "2026-08-20",
    industry: "Professional services",
    summary: "Own budgeting, forecasting and business performance analysis.",
    description: [
      { h: "The role", p: ["Full description coming soon. Call or text (843) 267-5538 to hear more about this role."] },
      { h: "What you'll do", list: ["Build budgets and forecasts", "Analyze performance vs plan", "Present insights to leadership"] }
    ]
  },
  {
    id: "HZ-1004",
    showOnWeb: false, // private in PCR: needs Pedro OK before it goes public
    title: "Project Engineer (EIT/PE)",
    category: "Engineering",
    city: "San Juan", region: "PR",
    workType: "Full-time", workplace: "On-site",
    salaryText: "Competitive",
    experienceYears: "2+ years",
    benefits: ["Health coverage"],
    postedAt: "2026-10-20",
    industry: "Engineering & consulting",
    summary: "Support design and delivery of engineering projects from plan to close-out.",
    description: [
      { h: "The role", p: ["Full description coming soon. Call or text (843) 267-5538 to hear more about this role."] },
      { h: "Requirements", list: ["EIT or PE license", "Engineering degree", "Project coordination experience"] }
    ]
  }
];
