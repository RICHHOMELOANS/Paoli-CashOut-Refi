# Session History

## 2026-03-10 — Initial Build + Rebuild from xlsx

### Summary
Built the complete Paoli Cash-Out Refi Dashboard from scratch, then immediately rebuilt it after discovering the CLAUDE.md had draft/placeholder numbers that didn't match the actual xlsx spreadsheet.

### Key Decisions
- **Data source**: Switched from CLAUDE.md figures to `Paoli_Loan_Comparison_v3.xlsx` as the single source of truth. Loan amounts are $500K/$550K/$600K (not $170K/$200K/$230K as in the draft).
- **Design system**: Adopted richhomeloans.com brand — red `#cc0000` primary, white/light gray card system, Lucide icons — replacing the original navy `#1F4E79` scheme.
- **Login gate**: Simple zip code (`66209`) client-side gate. Not real auth, but provides social friction for a private client dashboard.
- **Live formula for net proceeds**: Removed pre-computed `NET_PROCEEDS` array in favor of computing from atomic inputs in the component. Prevents line items from not footing to the total due to rounding divergence.
- **Shared Card primitives**: Extracted `Card`, `Row`, `Divider` into `Card.jsx` to decouple from `PaymentCard.jsx`.
- **Payoff-aware debt totals**: DebtTable revolving subtotal and grand total update dynamically when payoff toggle is active.
- **robots.txt**: Added `Disallow: /` to prevent search engine crawling of private client data.

### Files Created/Modified
- **Created**: All `src/components/*.jsx`, `src/data.js`, `src/utils.js`, `public/robots.txt`, `docs/session-notes.md`, `.claude/hooks.json`
- **Modified**: `CLAUDE.md` (complete rewrite with accurate data), `index.html` (favicon, title), `vite.config.js` (Tailwind plugin)
- **Deleted**: `src/App.css`, `src/assets/react.svg`, `public/vite.svg` (unused Vite template files)

### Issues Encountered
1. **xlsx data mismatch**: CLAUDE.md had draft numbers from an earlier conversation. The xlsx had significantly different loan amounts, debt balances, and income figures. Resolved by parsing the xlsx with openpyxl and rebuilding `data.js` from scratch.
2. **$0.01 rounding cascade in escrow projection**: Initial deposit rounding caused running balance errors from Sep 2026 onward. Fixed by recalculating each row so open + collect - disburse = close.
3. **Net proceeds line items didn't foot**: Stored pre-computed totals diverged from live formula by $0.01 at $500K. Fixed by deriving net from the formula instead of a hardcoded array.

### Next Steps
- Consider adding print/PDF export for the loan comparison
- Optional: hash the zip code at build time for slightly better obfuscation
- Consider adding Fannie Mae guideline citations as tooltips on DTI thresholds
