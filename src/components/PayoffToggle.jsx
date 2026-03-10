import { CreditCard, ArrowDownCircle } from 'lucide-react';
import { PAYOFFS, PAYOFFS_TOTAL, PAYOFF_PAYMENT_RELIEF } from '../data';
import { dollarWhole } from '../utils';
import { Card, Row, Divider } from './Card';

export default function PayoffToggle({ enabled, onToggle }) {
  return (
    <Card title="JPMCB Payoff at Closing" icon={CreditCard}>
      <button
        onClick={onToggle}
        className={`w-full py-3 rounded-lg font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
          enabled
            ? 'bg-green-50 text-green-800 border-2 border-green-400'
            : 'bg-gray-50 text-gray-500 border-2 border-gray-200 hover:border-gray-400'
        }`}
      >
        <ArrowDownCircle className={`h-5 w-5 ${enabled ? 'text-green-600' : 'text-gray-400'}`} />
        {enabled ? 'Payoffs ON — deducted from proceeds' : 'Payoffs OFF — click to enable'}
      </button>

      <div className="mt-4 space-y-1">
        {PAYOFFS.map((p) => (
          <Row key={p.creditor} label={p.creditor} value={dollarWhole(p.balance)} />
        ))}
        <Divider />
        <Row label="Total Payoff" value={dollarWhole(PAYOFFS_TOTAL)} bold />
        <div className="flex justify-between text-sm text-green-700 mt-1">
          <span>Monthly debt relief</span>
          <span className="tabular-nums">-{dollarWhole(PAYOFF_PAYMENT_RELIEF)}/mo</span>
        </div>
      </div>
    </Card>
  );
}
