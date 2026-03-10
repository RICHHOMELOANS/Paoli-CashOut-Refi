# CLAUDE.md — Paoli Cash-Out Refi Dashboard

## Project
One-page React app deployed via Vercel.
Loan comparison dashboard for Michael & Amanda Paoli cash-out refi.

## Stack
- React (Vite or Next.js)
- Tailwind CSS
- Vercel deployment

## Property
- 13240 Falmouth St, Leawood KS 66209
- FREE AND CLEAR — no existing mortgage, no lien payoff on CD
- Full loan proceeds flow to borrower minus closing costs + prepaids + escrow deposit only

## Loan Scenarios
| |  |  |  |
|---|---|---|---|
| Rate | 6.125% | 6.125% | 6.125% |
| P&I | ,040.13 | ,344.14 | ,648.16 |
| HOI Escrow | .88 | .88 | .88 |
| Tax Escrow | ,001.08 | ,001.08 | ,001.08 |
| PITI | ,559.09 | ,863.10 | ,167.12 |

## Closing Costs (identical all scenarios)
| Item | Amount |
|---|---|
| Underwriting Fee | ,095.00 |
| YSP Credit | (.00) |
| Life of Loan Tax Service | .00 |
| Flood Life of Loan | .40 |
| Flood Determination | .50 |
| Appraisal | .00 |
| Appraisal Mgmt | .00 |
| Title - Lender Policy | .00 |
| Title ALTA 8.1 | .00 |
| Title ALTA 9 | .00 |
| Tax Certification | .00 |
| Settlement/Closing | .00 |
| Recording Fee | .00 |
| **Total** | **,717.90** |

## Prepaids & Escrow at Closing
| Item |  |  |  |
|---|---|---|---|
| Prepaid Interest (6 days) |  |  |  |
| HOI Prepaid (182 days) | ,098 | ,098 | ,098 |
| Initial Escrow Deposit | ,525 | ,525 | ,525 |
| Aggregate Adj Credit | (,589) | (,589) | (,589) |
| **Total Prepaids/Escrow** | **~,636** | **~,696** | **~,756** |

## NET PROCEEDS TO BORROWER (Free & Clear)
Formula: Loan Amount - Closing Costs - Prepaids - Escrow Deposit + Agg Adj Credit

### Scenario 1 — No Payoffs
| |  |  |  |
|---|---|---|---|
| Gross Loan | ,000 | ,000 | ,000 |
| Less Closing Costs | (,718) | (,718) | (,718) |
| Less Prepaids/Escrow (net) | (,636) | (,696) | (,756) |
| **Net to Borrower** | **~,646** | **~,586** | **~,526** |

### Scenario 2 — JPMCB Cards Paid at Closing
| |  |  |  |
|---|---|---|---|
| Net (before payoffs) | ~,646 | ~,586 | ~,526 |
| JPMCB 0126 Payoff | (,054) | (,054) | (,054) |
| JPMCB 0658 Payoff | (,104) | (,104) | (,104) |
| **Net to Borrower** | **~,488** | **~,428** | **~,368** |

## Escrow
- HOI: Allstate ,214.51/yr | .88/mo | Renewal Oct 23, 2026
- Tax: Johnson County ,012.98/yr | ,001.08/mo | PAID (balance )
- Total monthly escrow: ,518.96
- Initial deposit (aggregate method): ~,525
- Aggregate adjustment credit: ~(,589)

## Income
- Base: ,229.37/mo
- Bonus: .17/mo
- **Total Qualifying: ,838.54/mo**
- RSU: NOT used (,251/mo available if continuance documented)

## Monthly Debts
| Creditor | Payment | Balance |
|---|---|---|
| Wells Fargo Auto |  | ,854 |
| Toyota Financial |  | ,421 |
| JPMCB 0126 |  | ,054 — PAYOFF CANDIDATE |
| Discover |  | ,635 |
| Citicards |  | ,142 |
| Nordstrom/TD |  | ,765 |
| JPMCB 0658 |  | ,104 — PAYOFF CANDIDATE |
| **Total** | **,785** | |

## DTI Summary
| Scenario |  |  |  |
|---|---|---|---|
| 1 — All debts, no payoff | 46.4% | 48.3% | 50.2% ⚠ |
| 2 — JPMCB paid at closing | ~39% | ~41% | ~43% ✓ |
| 3 — With RSU (ref only) | ~34% | ~36% | ~38% ✓ |
Conv max 45% | 50% w/ DU Approve/Eligible + compensating factors

## UI Sections
1. **Hero** — borrower, property, loan type, rate, closing date, FREE & CLEAR badge
2. **Loan Selector** — toggle  /  /  (drives all cards)
3. **Payment Card** — P&I, HOI escrow, Tax escrow, PITI total
4. **Net Proceeds Card** — Gross → minus closing costs → minus prepaids/escrow → Net (free & clear = no payoff line)
5. **DTI Dashboard** — Scenario 1 vs 2 vs 3 bars, 45% threshold line
6. **Payoff Toggle** — JPMCB payoff on/off: updates DTI and net proceeds live
7. **Escrow Breakdown** — HOI + tax, aggregate adjustment credit detail

## Design
- Navy #1F4E79 + white + green accent #C6EFCE
- Mobile responsive
- All data hardcoded — no external API calls
- Loan selector drives all downstream values dynamically
