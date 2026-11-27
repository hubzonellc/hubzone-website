/* Hub Zone Data Center — job data (copied by hand from PCRecruiter, 2026-11-27).
   Same shape as the future "jobs" table, so the page won't change when the
   real database replaces this file.
   Rule from Pedro (11/27): show every job whose PCR Status = Available/Open.
   Public fields only: client names, fees, guarantees, bill/pay rates, internal
   salary ranges and notes NEVER go here. Industry is OK to show.
   Pay shown only where Pedro's own job description states it. */
window.HZ_JOBS = [
  {
    id: "HZ-1001", status: "open",
    title: "Comptroller",
    category: "Accounting & Finance",
    city: "San Juan", region: "PR",
    workType: "Full-time", workplace: "Hybrid",
    salaryText: "Commensurate with experience",
    experienceYears: "5+ years",
    benefits: ["Health coverage", "401(k)", "Education aid"],
    postedAt: "2026-10-13",
    industry: "Hedge fund",
    summary: "Lead financial operations, reporting and internal controls for a growing hedge fund.",
    description: [
      { h: "The opportunity", p: ["Are you a strategic financial leader looking for an executive role in a hedge fund? As Comptroller, you will oversee financial operations, drive strategic planning and keep internal controls strong."] },
      { h: "Qualifications", list: [
        "Bachelor's degree in accounting, finance or a related field (Master's or CPA preferred)",
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
    id: "HZ-1002", status: "open",
    title: "Finance Clerk",
    category: "Accounting & Finance",
    city: "Guaynabo", region: "PR",
    workType: "Full-time", workplace: "",
    salaryText: "Competitive",
    experienceYears: "1+ years (entry-level welcome)",
    benefits: ["Health coverage", "401(k)", "Education aid", "Paid vacation"],
    postedAt: "2026-11-12",
    industry: "Insurance",
    summary: "Support accounting and treasury: journal entries, reconciliations, cash reporting and accounts payable.",
    description: [
      { h: "The role", p: ["Support the Accounting Operations and Treasury teams with routine accounting work, and help the Finance Department close and report on time. Keep records complete and follow established policies and internal controls, including SOX."] },
      { h: "General accounting", list: [
        "Help with monthly, quarterly and year-end close",
        "Prepare operating expense accruals and journal entries",
        "Prepare monthly bank and general ledger reconciliations",
        "Investigate and help resolve reconciling items",
        "Find ways to automate and improve accounting processes"
      ]},
      { h: "Financial reporting", list: [
        "Prepare and maintain the Daily Cash Report",
        "Help with month-over-month and actual-vs-budget variance analysis",
        "Maintain and present KPI dashboards"
      ]},
      { h: "Accounts payable", list: [
        "Record invoices accurately and on time",
        "Check documentation and approvals before payments",
        "Process approved payments and help resolve discrepancies"
      ]},
      { h: "Controls, audit and regulatory support", list: [
        "Follow internal controls, accounting policies and SOX requirements",
        "Help prepare NAIC quarterly and annual statement exhibits",
        "Provide schedules and support for audits and regulatory reviews"
      ]},
      { h: "What you bring", list: [
        "Bachelor's degree in accounting",
        "Entry-level or at least 1 year of general accounting experience",
        "Accuracy, organization and follow-through",
        "Clear written and verbal communication",
        "Confidentiality and professional judgment"
      ]}
    ]
  },
  {
    id: "HZ-1003", status: "open",
    title: "FP&A Manager",
    category: "Accounting & Finance",
    city: "San Juan", region: "PR",
    workType: "Full-time", workplace: "Remote",
    salaryText: "$110K–$125K base",
    experienceYears: "5+ years",
    benefits: [],
    postedAt: "2026-08-20",
    industry: "Insurance",
    summary: "High-visibility FP&A role at a fast-growing insurance company. Own the dashboards, models and KPIs leadership uses.",
    description: [
      { h: "Why this role stands out", list: [
        "Direct exposure to senior leadership and the board",
        "Real ownership of FP&A: build the dashboards, models and KPIs leaders actually use",
        "Influence strategic decisions, not just report on them",
        "Fast-growing, entrepreneurial brand with strong momentum",
        "Fully remote, with flexibility and trust"
      ]},
      { h: "Responsibilities", list: [
        "Own monthly, quarterly and annual financial reporting packages",
        "Build KPI dashboards across revenue, margin, channel and operations",
        "Develop models for budgeting, forecasting and scenario analysis",
        "Partner with leaders to turn operations into financial insight",
        "Deliver clear variance analysis and leadership-ready narratives",
        "Support ad hoc analysis for executives and board materials"
      ]},
      { h: "Qualifications", list: [
        "5+ years in FP&A, consulting, insurance, banking, PE/VC or high-growth CPG",
        "Bachelor's degree in accounting, finance or related field",
        "Advanced financial modeling skills",
        "Experience presenting to senior stakeholders",
        "Expert Excel or Google Sheets"
      ]}
    ]
  },
  {
    id: "HZ-1004", status: "open",
    title: "Project Engineer (EIT/PE)",
    category: "Engineering",
    city: "San Juan", region: "PR",
    workType: "Full-time", workplace: "On-site",
    salaryText: "From $48K (EIT) / $60K (PE)",
    experienceYears: "Entry-level and up",
    benefits: [],
    postedAt: "2026-10-20",
    industry: "Engineering & environmental",
    summary: "Field inspections, project supervision, quality control and regulatory compliance on projects across Puerto Rico.",
    description: [
      { h: "The role", p: ["Lead field inspections, project supervision, quality control and regulatory compliance, and coordinate with contractors, clients and technical teams."] },
      { h: "Responsibilities", list: [
        "Inspect day-to-day project work against design specs and environmental guidelines",
        "Write detailed inspection reports and keep field documentation organized",
        "Make sure work follows local and federal regulations and safety standards",
        "Run stormwater and erosion-control inspections (SWPPP / NPDES)",
        "Issue Non-Conformance Reports and track fixes to completion",
        "Verify field quantities for billing and milestone sign-offs",
        "Join pre-construction, progress and final punch-list meetings"
      ]},
      { h: "Requirements", list: [
        "Bachelor's in Engineering (Civil, Environmental or related)",
        "Valid EIT or PE license",
        "Field inspection or construction oversight experience preferred",
        "Immediate availability",
        "Fluent in Spanish and English"
      ]},
      { h: "What we offer", list: [
        "Salary from $48K for EIT and $60K for PE",
        "Career growth and mentorship",
        "High-impact projects across Puerto Rico"
      ]}
    ]
  },
  {
    id: "HZ-1005", status: "open",
    title: "Sales Manager (Automotive)",
    category: "Sales",
    city: "Arecibo", region: "PR",
    workType: "Full-time", workplace: "On-site",
    salaryText: "Performance-based",
    experienceYears: "1+ years",
    benefits: [],
    postedAt: "2026-08-20",
    industry: "Automotive dealership",
    summary: "Lead and train a dealership sales team. Strong closing and customer service skills.",
    description: [
      { h: "The role", p: ["An energetic, competitive sales manager to lead an outstanding dealership team as sales volume grows."] },
      { h: "Responsibilities", list: [
        "Manage all areas of sales: wholesale, retail, purchasing and marketing",
        "Use internet and retail tools (e.g. vAuto)",
        "Forecast monthly and annual goals for sales, gross and key expenses",
        "Close deals and work with lenders",
        "Stay current on federal, state and local regulations",
        "Resolve customer issues quickly and professionally",
        "Train and lead the sales staff"
      ]},
      { h: "What you bring", list: ["Leadership and training skills", "Honesty and integrity", "Professional appearance and attitude", "Punctuality", "Strong communication"] },
      { h: "Pay and benefits", p: ["Competitive compensation and benefits. Pay is performance-based: the better you lead and produce, the more you earn."] }
    ]
  },
  {
    id: "HZ-1006", status: "open",
    title: "Senior Accountant",
    category: "Accounting & Finance",
    city: "Carolina", region: "PR",
    workType: "Full-time", workplace: "",
    salaryText: "Competitive",
    experienceYears: "",
    benefits: [],
    postedAt: "2026-08-10",
    industry: "",
    summary: "Senior accounting role in Carolina, PR. Full description coming soon.",
    description: [
      { h: "About this role", p: ["Full description coming soon. Apply below, or call or text (843) 267-5538 to hear more about this role."] }
    ]
  },
  {
    id: "HZ-1007", status: "open",
    title: "Staff Accountant",
    category: "Accounting & Finance",
    city: "Arecibo", region: "PR",
    workType: "Full-time", workplace: "Remote",
    salaryText: "Competitive",
    experienceYears: "1+ years",
    benefits: [],
    postedAt: "2026-07-14",
    industry: "Corporate accounting",
    summary: "Remote role managing core accounting: journal entries, reconciliations, AP/AR and month-end close.",
    description: [
      { h: "The role", p: ["Join a finance team to manage core accounting, keep the books compliant and support the organization's financial health."] },
      { h: "Responsibilities", list: [
        "Prepare journal entries, reconciliations and general ledger work (GAAP)",
        "Run accounts payable and receivable, including invoices and vendor communication",
        "Reconcile balance sheet accounts regularly",
        "Help with month-end and year-end close and audit support",
        "Support SOX internal controls",
        "Help with budgeting, cost analysis and reporting"
      ]},
      { h: "Qualifications", list: [
        "Bachelor's in accounting, finance or related field",
        "Experience in corporate accounting",
        "Strong GAAP knowledge; familiar with SOX",
        "QuickBooks, Xero, Sage, PeopleSoft or similar (Paylocity a plus)",
        "Accurate data entry; 10-key and double-entry bookkeeping"
      ]}
    ]
  }
];
