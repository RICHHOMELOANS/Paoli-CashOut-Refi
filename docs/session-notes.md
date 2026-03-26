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

---

## 2026-03-10 — Security Hardening + Clerk Auth + Deploy

### Summary
Upgraded authentication from zip code gate to Clerk free tier, performed a full security audit, added security headers, and deployed to Vercel production.

### Key Decisions
- **Clerk authentication**: Replaced zip code gate as the primary auth method. Dual-mode pattern preserved — Clerk activates when `VITE_CLERK_PUBLISHABLE_KEY` is set, falls back to SHA-256 zip gate when not.
- **SHA-256 zip hash**: Zip code (`66209`) stored as SHA-256 hash in `data.js` — not plaintext. Uses `crypto.subtle.digest` for client-side hashing.
- **Security audit findings**: NPI (income, debts, account fragments, employer) is hardcoded in `data.js` and ships in the JS bundle. Auth prevents *rendering* but not *inspection* via DevTools. Accepted risk given: Clerk auth, robots.txt disallow, private single-client tool, not indexed.
- **Security headers**: Added `vercel.json` with X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy no-referrer, Permissions-Policy (no camera/mic/geo).
- **Meta tags**: Added `noindex/nofollow` and `no-referrer` to `index.html` as belt-and-suspenders with robots.txt.
- **Clerk config**: Email-based OTP sign-in (password disabled in Clerk dashboard). Allowlist recommended to restrict access to approved emails only.

### Files Created/Modified
- **Created**: `vercel.json` (security headers)
- **Modified**: `index.html` (noindex meta, referrer policy), `src/components/AuthGate.jsx` (centered login layout with flex-col)

### Issues Encountered
1. **Clerk showed password field**: Default Clerk config enables password auth. Fixed by toggling to email verification code in Clerk Dashboard → Configure → Email, Phone, Username.
2. **Login page not centered**: Clerk's `<SignIn>` component is block-level and didn't respond to `text-align: center`. Fixed by switching wrapper to `flex flex-col items-center justify-center`.

### Security Audit Checklist
| Check | Status |
|---|---|
| NPI in JS bundle | RISK (accepted — SPA limitation) |
| Auth gate blocks all routes | PASS |
| No sensitive URL params | PASS |
| Env vars for secrets | PASS |
| HTTPS only | PASS |
| No console.log leaks | PASS |
| No third-party analytics | PASS |

### Next Steps
- Consider moving data behind a Vercel serverless function for true NPI protection
- Enable Clerk Allowlist to restrict sign-ups to approved emails
- Consider adding print/PDF export for the loan comparison
- Consider adding Fannie Mae guideline citations as tooltips on DTI thresholds

---

## 2026-03-26 — Auth Bypass for Local Development

### Summary
Added a `VITE_SKIP_AUTH` environment variable to bypass both Clerk and zip code authentication during local development.

### Key Decisions
- **Skip-auth flag**: When `VITE_SKIP_AUTH=true` is set, `AuthGate` renders children directly — no Clerk sign-in, no zip code prompt. Production is unaffected since the env var is not set in Vercel.
- **`.env.local`**: Created with `VITE_SKIP_AUTH=true` for persistent local dev bypass. Gitignored by Vite convention.

### Files Created/Modified
- **Created**: `.env.local` (local-only, gitignored)
- **Modified**: `src/components/AuthGate.jsx` (added `VITE_SKIP_AUTH` check before Clerk/zip gates)
