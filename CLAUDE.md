# CLAUDE.md — Paoli Cash-Out Refi Dashboard

## Project Overview
One-page React loan comparison dashboard for Michael & Amanda Paoli cash-out refinance. Deployed via Vercel with auto-deploy from GitHub `main` branch. All financial data is hardcoded from the source spreadsheet — no external API calls.

- **Live URL**: https://paoli-cashout-refi.vercel.app
- **GitHub**: https://github.com/RICHHOMELOANS/Paoli-CashOut-Refi
- **Login**: Property zip code `66209` (client-side gate, not real auth)

## Architecture
- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- **Icons**: Lucide React
- **Deployment**: Vercel (connected to GitHub, auto-deploys on push)
- **Design System**: Mirrors richhomeloans.com — primary red `#cc0000`, white/`#faf8f8` backgrounds, rounded-xl card pattern with hover shadows

### Directory Structure
```
src/
  data.js              # All hardcoded loan data (source of truth: xlsx)
  utils.js             # Shared formatting helpers (dollar, dollarWhole, pct)
  App.jsx              # Root component — login gate + dashboard layout
  main.jsx             # React entry point
  index.css            # Tailwind import
  Paoli_Loan_Comparison_v3.xlsx  # Source spreadsheet
  components/
    LoginGate.jsx      # Zip code authentication screen
    Hero.jsx           # Header with borrower info, rate, property badge
    LoanSelector.jsx   # $500K / $550K / $600K toggle buttons
    Card.jsx           # Shared Card, Row, Divider primitives
    PaymentCard.jsx    # Monthly P&I + escrow + PITI
    NetProceedsCard.jsx# Gross → closing costs → prepaids → net (live formula)
    DtiDashboard.jsx   # 3-scenario DTI bar chart with 45% threshold
    PayoffToggle.jsx   # JPMCB payoff on/off toggle
    ClosingCostsCard.jsx # Itemized closing costs by CD section
    EscrowBreakdown.jsx  # HOI + tax escrow detail + 12-month projection
    DebtTable.jsx      # Installment + revolving debts, payoff-aware totals
```

## Core Data (from xlsx — NOT from old CLAUDE.md draft numbers)
- **Loan amounts**: $500,000 / $550,000 / $600,000
- **Rate**: 6.125% fixed, 30-year conventional
- **Property**: 13240 Falmouth St, Leawood KS 66209 — FREE AND CLEAR
- **Closing costs**: $2,717.90 (identical all scenarios)
- **JPMCB payoffs**: $22,054 (0126) + $19,104 (0658) = $41,158
- **Total monthly debts**: $2,785 → $1,645 after payoffs
- **Income**: $15,838.54/mo (Base $15,229.37 + Bonus $609.17)
- **Escrow**: HOI $517.88 + Tax $1,001.08 = $1,518.96/mo
- **Aggregate adj credit**: ($4,487.53)

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npx vercel           # Manual deploy to Vercel
```

## Configuration
- `vite.config.js` — React + Tailwind plugins
- `.vercel/` — Vercel project link (auto-generated, gitignored)
- `public/robots.txt` — Disallow all crawlers (private client data)
- No `.env` files needed — all data is hardcoded

## Important Notes
- **Data source**: `src/Paoli_Loan_Comparison_v3.xlsx` is the single source of truth. The old CLAUDE.md had draft numbers ($170K/$200K/$230K) that were wrong. Always verify against the xlsx.
- **Net proceeds are computed live** in `NetProceedsCard.jsx` from atomic inputs. Never store pre-computed totals alongside the inputs — they will drift on rounding.
- **Login is client-side only** — zip code `66209` is visible in the JS bundle. This provides social friction, not real security.
- **Card.jsx exports shared primitives** (`Card`, `Row`, `Divider`) used by all dashboard cards. Do not duplicate these in other component files.
- **DebtTable totals are payoff-aware** — when payoff toggle is ON, revolving and total rows update to reflect removed payments.
- **Escrow projection table** is hidden by default behind a "Show 12-Month Projection" toggle in EscrowBreakdown.
- **Accessibility**: `aria-pressed` on loan selector, `aria-invalid` + `role="alert"` on login, `role="img"` with descriptive label on DTI chart.

## UI Sections
1. **Hero** — borrower, property, loan type, rate, closing date, FREE & CLEAR badge
2. **Loan Selector** — toggle $500K / $550K / $600K (drives all cards)
3. **Payment Card** — P&I, HOI escrow, Tax escrow, PITI total
4. **Net Proceeds Card** — Gross → minus closing costs → minus prepaids/escrow → Net
5. **DTI Dashboard** — Scenario 1 vs 2 vs 3 bar chart, 45% threshold line
6. **Payoff Toggle** — JPMCB payoff on/off: updates DTI and net proceeds live
7. **Escrow Breakdown** — HOI + tax, aggregate adjustment credit, 12-month projection
8. **Closing Costs** — Itemized by CD section (A, B, C, E) with subtotals
9. **Debt Table** — Installment + revolving with payoff badges and payoff-aware totals
