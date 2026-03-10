export const BORROWER = {
  names: 'Michael & Amanda Paoli',
  property: '13240 Falmouth St, Leawood KS 66209',
  loanType: 'Conventional 30-Year Fixed Cash-Out Refi',
  rate: 6.125,
  apr: 6.14,
  lender: 'Rocket Pro TPO',
  closingDate: 'April 24, 2026',
};

export const LOAN_AMOUNTS = [170000, 200000, 230000];

export const SCENARIOS = [
  {
    loanAmount: 170000,
    pi: 1040.13,
    hoiEscrow: 517.88,
    taxEscrow: 1001.08,
    piti: 2559.09,
    prepaidInterest: 602,
    hoiPrepaid: 3098,
    initialEscrowDeposit: 4525,
    aggAdjCredit: -3589,
    totalPrepaidsEscrow: 4636,
  },
  {
    loanAmount: 200000,
    pi: 1344.14,
    hoiEscrow: 517.88,
    taxEscrow: 1001.08,
    piti: 2863.10,
    prepaidInterest: 662,
    hoiPrepaid: 3098,
    initialEscrowDeposit: 4525,
    aggAdjCredit: -3589,
    totalPrepaidsEscrow: 4696,
  },
  {
    loanAmount: 230000,
    pi: 1648.16,
    hoiEscrow: 517.88,
    taxEscrow: 1001.08,
    piti: 3167.12,
    prepaidInterest: 722,
    hoiPrepaid: 3098,
    initialEscrowDeposit: 4525,
    aggAdjCredit: -3589,
    totalPrepaidsEscrow: 4756,
  },
];

export const CLOSING_COSTS = [
  { item: 'Underwriting Fee', amount: 1095.00 },
  { item: 'YSP Credit', amount: -250.00 },
  { item: 'Life of Loan Tax Service', amount: 85.00 },
  { item: 'Flood Life of Loan', amount: 10.40 },
  { item: 'Flood Determination', amount: 6.50 },
  { item: 'Appraisal', amount: 600.00 },
  { item: 'Appraisal Mgmt', amount: 200.00 },
  { item: 'Title - Lender Policy', amount: 450.00 },
  { item: 'Title ALTA 8.1', amount: 75.00 },
  { item: 'Title ALTA 9', amount: 75.00 },
  { item: 'Tax Certification', amount: 16.00 },
  { item: 'Settlement/Closing', amount: 200.00 },
  { item: 'Recording Fee', amount: 55.00 },
];

export const CLOSING_COSTS_TOTAL = 2717.90;

export const PAYOFFS = [
  { creditor: 'JPMCB 0126', balance: 17054 },
  { creditor: 'JPMCB 0658', balance: 14104 },
];

export const PAYOFFS_TOTAL = 31158;

export const DEBTS = [
  { creditor: 'Wells Fargo Auto', payment: 539, balance: 25854 },
  { creditor: 'Toyota Financial', payment: 487, balance: 14421 },
  { creditor: 'JPMCB 0126', payment: 285, balance: 17054, payoffCandidate: true },
  { creditor: 'Discover', payment: 116, balance: 5635 },
  { creditor: 'Citicards', payment: 65, balance: 3142 },
  { creditor: 'Nordstrom/TD', payment: 33, balance: 1765 },
  { creditor: 'JPMCB 0658', payment: 260, balance: 14104, payoffCandidate: true },
];

export const TOTAL_DEBTS_PAYMENT = 1785;
export const PAYOFF_DEBTS_PAYMENT = 285 + 260; // 545

export const INCOME = {
  base: 8229.37,
  bonus: 609.17,
  total: 8838.54,
  rsu: 2251,
};

export const ESCROW = {
  hoiAnnual: 6214.51,
  hoiMonthly: 517.88,
  hoiCarrier: 'Allstate',
  hoiRenewal: 'Oct 23, 2026',
  taxAnnual: 12012.98,
  taxMonthly: 1001.08,
  taxCounty: 'Johnson County',
  totalMonthly: 1518.96,
  initialDeposit: 4525,
  aggAdjCredit: 3589,
};

export const DTI = {
  scenario1: [46.4, 48.3, 50.2],
  scenario2: [39, 41, 43],
  scenario3: [34, 36, 38],
};
