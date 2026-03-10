import { SCENARIOS, CLOSING_COSTS_TOTAL, PAYOFFS_TOTAL } from '../data';

const dollar = (n) => '$' + Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const wrap = (n) => n < 0 ? `(${dollar(n)})` : dollar(n);

export default function NetProceedsCard({ selectedIndex, payoffEnabled }) {
  const s = SCENARIOS[selectedIndex];
  const gross = s.loanAmount;
  const netBeforePayoffs = gross - CLOSING_COSTS_TOTAL - s.totalPrepaidsEscrow;
  const netFinal = payoffEnabled ? netBeforePayoffs - PAYOFFS_TOTAL : netBeforePayoffs;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold text-[#1F4E79] mb-4">Net Proceeds to Borrower</h2>
      <div className="space-y-3">
        <Row label="Gross Loan" value={dollar(gross)} />
        <Row label="Less Closing Costs" value={`(${dollar(CLOSING_COSTS_TOTAL)})`} negative />
        <Row label="Less Prepaids/Escrow" value={`(${dollar(s.totalPrepaidsEscrow)})`} negative />
        {payoffEnabled && (
          <Row label="Less JPMCB Payoffs" value={`(${dollar(PAYOFFS_TOTAL)})`} negative />
        )}
        <div className="border-t-2 border-[#1F4E79] pt-3">
          <Row label="Net to Borrower" value={dollar(netFinal)} bold highlight />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, bold, negative, highlight }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-bold text-lg' : ''} ${negative ? 'text-red-600' : ''} ${highlight ? 'text-green-700' : 'text-gray-700'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
