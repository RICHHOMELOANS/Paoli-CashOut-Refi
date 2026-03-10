// ─────────────────────────────────────────────────────────────
// Source of truth: Paoli_Loan_Comparison_v3.xlsx
// All figures pulled directly from xlsx — NOT from CLAUDE.md
// ─────────────────────────────────────────────────────────────

export const BORROWER = {
  names: 'Michael & Amanda Paoli',
  property: '13240 Falmouth St, Leawood KS 66209',
  zip: '66209',
  loanType: 'Conventional 30-Year Fixed Cash-Out Refi',
  rate: 6.125,
  apr: 6.14,
  lender: 'Rocket Pro TPO',
  closingDate: 'April 24, 2026',
  firstPayment: 'June 1, 2026',
};

export const LOAN_AMOUNTS = [500_000, 550_000, 600_000];

export const SCENARIOS = [
  {
    loanAmount: 500_000,
    pi: 3038.05,
    hoiEscrow: 517.88,
    taxEscrow: 1001.08,
    piti: 4557.01,
    prepaidInterest: 503.42,
    dailyInterest: 83.90,
    hoiPrepaid: 3098.74,
    initialEscrowDeposit: 4626.21,
    aggAdjCredit: 4487.53,
    frontDti: 28.77,
    dtiAllDebts: 46.36,
    dtiPayoff: 39.16,
    dtiRsu: 33.24,
  },
  {
    loanAmount: 550_000,
    pi: 3341.86,
    hoiEscrow: 517.88,
    taxEscrow: 1001.08,
    piti: 4860.82,
    prepaidInterest: 553.77,
    dailyInterest: 92.29,
    hoiPrepaid: 3098.74,
    initialEscrowDeposit: 4626.21,
    aggAdjCredit: 4487.53,
    frontDti: 30.69,
    dtiAllDebts: 48.27,
    dtiPayoff: 41.08,
    dtiRsu: 34.61,
  },
  {
    loanAmount: 600_000,
    pi: 3645.66,
    hoiEscrow: 517.88,
    taxEscrow: 1001.08,
    piti: 5164.62,
    prepaidInterest: 604.11,
    dailyInterest: 100.68,
    hoiPrepaid: 3098.74,
    initialEscrowDeposit: 4626.21,
    aggAdjCredit: 4487.53,
    frontDti: 32.61,
    dtiAllDebts: 50.19,
    dtiPayoff: 42.99,
    dtiRsu: 35.99,
  },
];

// ── Closing Costs (identical all scenarios) ──────────────────
export const CLOSING_COSTS_SECTIONS = [
  {
    title: 'A. Origination Charges',
    items: [
      { item: 'Underwriting Fee', amount: 1095, note: 'Rocket Pro' },
      { item: 'YSP Credit (Rate Premium)', amount: -768, note: 'Lender credit' },
    ],
    subtotal: 327,
  },
  {
    title: 'B. Services You Cannot Shop For',
    items: [
      { item: 'Life of Loan Tax Service', amount: 81, note: 'CoreLogic' },
      { item: 'Flood Life of Loan', amount: 3.40 },
      { item: 'Flood Determination', amount: 5.50 },
      { item: 'Appraisal Fee', amount: 390, note: 'Rocket Close LLC' },
      { item: 'Appraisal Mgmt Services', amount: 250, note: 'Rocket Close LLC' },
    ],
    subtotal: 729.90,
  },
  {
    title: 'C. Services You Can Shop For',
    items: [
      { item: "Title - Lender's Policy", amount: 645, note: 'Can shop' },
      { item: 'Title - ALTA 8.1', amount: 50 },
      { item: 'Title - ALTA 9', amount: 150 },
      { item: 'Tax Certification', amount: 30, note: 'Rocket Close LLC' },
      { item: 'Settlement/Closing Fee', amount: 425, note: 'Closing Agent' },
    ],
    subtotal: 1300,
  },
  {
    title: 'E. Government Fees',
    items: [
      { item: 'Recording Fee - Mortgage', amount: 361, note: 'Paid to RTA' },
    ],
    subtotal: 361,
  },
];

export const CLOSING_COSTS_TOTAL = 2717.90;

// ── Payoff Candidates ────────────────────────────────────────
export const PAYOFFS = [
  { creditor: 'JPMCB Card Svcs (0126)', balance: 22054, payment: 577 },
  { creditor: 'JPMCB Card Svcs (0658)', balance: 19104, payment: 563 },
];

export const PAYOFFS_TOTAL = 41158;
export const PAYOFF_PAYMENT_RELIEF = 1140;

// ── Monthly Debts ────────────────────────────────────────────
export const DEBTS_INSTALLMENT = [
  { creditor: 'Wells Fargo Auto (51588055XXXX)', payment: 466, balance: 11854 },
  { creditor: 'Toyota Financial (7040056580652XXXX)', payment: 828, balance: 34421 },
];

export const DEBTS_REVOLVING = [
  { creditor: 'JPMCB Card Svcs (0126)', payment: 577, balance: 22054, payoff: true },
  { creditor: 'Discover Card (7058)', payment: 153, balance: 7635 },
  { creditor: 'Citicards CBNA (2152)', payment: 51, balance: 5142 },
  { creditor: 'Nordstrom/TD Bank (4525)', payment: 147, balance: 4765 },
  { creditor: 'JPMCB Card Svcs (0658)', payment: 563, balance: 19104, payoff: true },
];

export const TOTAL_INSTALLMENT = 1294;
export const TOTAL_REVOLVING = 1491;
export const TOTAL_DEBTS = 2785;
export const REMAINING_AFTER_PAYOFF = 1645;

// ── Income ───────────────────────────────────────────────────
export const INCOME = {
  base: 15229.37,
  bonus: 609.17,
  total: 15838.54,
  rsu: 6251.42,
  totalWithRsu: 22089.96,
  employer: 'Garmin USA Inc',
};

// ── Escrow ───────────────────────────────────────────────────
export const ESCROW = {
  hoiAnnual: 6214.51,
  hoiMonthly: 517.88,
  hoiCarrier: 'Allstate',
  hoiPolicy: '942-352-172',
  hoiRenewal: 'Oct 23, 2026',
  taxAnnual: 12012.98,
  taxMonthly: 1001.08,
  taxCounty: 'Johnson County',
  totalMonthly: 1518.96,
  initialDeposit: 4626.21,
  naiveDeposit: 9113.75,
  aggAdjCredit: 4487.53,
  cushionMonths: 2,
  cushionAmount: 3037.92,
};

// ── Aggregate Escrow 12-Month Projection ─────────────────────
export const ESCROW_PROJECTION = [
  { month: 'Jun 2026', open: 4626.21, collect: 1518.96, disburse: 0, close: 6145.17 },
  { month: 'Jul 2026', open: 6145.17, collect: 1518.96, disburse: 0, close: 7664.13 },
  { month: 'Aug 2026', open: 7664.13, collect: 1518.96, disburse: 0, close: 9183.09 },
  { month: 'Sep 2026', open: 9183.09, collect: 1518.96, disburse: 0, close: 10702.05 },
  { month: 'Oct 2026', open: 10702.05, collect: 1518.96, disburse: 6214.51, close: 6006.50 },
  { month: 'Nov 2026', open: 6006.50, collect: 1518.96, disburse: 0, close: 7525.46 },
  { month: 'Dec 2026', open: 7525.46, collect: 1518.96, disburse: 6006.49, close: 3037.93 },
  { month: 'Jan 2027', open: 3037.93, collect: 1518.96, disburse: 0, close: 4556.89 },
  { month: 'Feb 2027', open: 4556.89, collect: 1518.96, disburse: 0, close: 6075.85 },
  { month: 'Mar 2027', open: 6075.85, collect: 1518.96, disburse: 0, close: 7594.81 },
  { month: 'Apr 2027', open: 7594.81, collect: 1518.96, disburse: 0, close: 9113.77 },
  { month: 'May 2027', open: 9113.77, collect: 1518.96, disburse: 6006.49, close: 4626.24 },
];

