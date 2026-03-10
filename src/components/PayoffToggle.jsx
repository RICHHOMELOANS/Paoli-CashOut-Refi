import { PAYOFFS, PAYOFFS_TOTAL, PAYOFF_DEBTS_PAYMENT } from '../data';

const dollar = (n) => '$' + n.toLocaleString();

export default function PayoffToggle({ enabled, onToggle }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold text-[#1F4E79] mb-4">JPMCB Payoff at Closing</h2>
      <button
        onClick={onToggle}
        className={`w-full py-3 rounded-lg font-bold text-lg transition-all cursor-pointer ${
          enabled
            ? 'bg-[#C6EFCE] text-green-900 border-2 border-green-600'
            : 'bg-gray-100 text-gray-600 border-2 border-gray-300 hover:border-gray-400'
        }`}
      >
        {enabled ? '✓ Payoffs ON' : 'Payoffs OFF'}
      </button>
      <div className="mt-4 space-y-2 text-sm">
        {PAYOFFS.map((p) => (
          <div key={p.creditor} className="flex justify-between text-gray-700">
            <span>{p.creditor}</span>
            <span>{dollar(p.balance)}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total Payoff</span>
          <span>{dollar(PAYOFFS_TOTAL)}</span>
        </div>
        <div className="flex justify-between text-green-700 text-xs">
          <span>Monthly debt reduction</span>
          <span>-{dollar(PAYOFF_DEBTS_PAYMENT)}/mo</span>
        </div>
      </div>
    </div>
  );
}
