import { Receipt } from 'lucide-react';
import {
  DEBTS_INSTALLMENT, DEBTS_REVOLVING,
  TOTAL_INSTALLMENT, TOTAL_REVOLVING, TOTAL_DEBTS,
  INCOME, PAYOFF_PAYMENT_RELIEF, REMAINING_AFTER_PAYOFF,
} from '../data';
import { dollarWhole } from '../utils';
import { Card, Divider } from './Card';

export default function DebtTable({ payoffEnabled }) {
  return (
    <Card title="Monthly Debt Obligations" icon={Receipt}>
      <p className="text-xs text-gray-400 mb-3">
        Source: Credit report · Fannie Mae B3-6 · RSU/stock option income NOT used
      </p>

      {/* Installment */}
      <p className="text-xs font-semibold text-[#cc0000] uppercase tracking-wide mb-1">Installment</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {DEBTS_INSTALLMENT.map((d) => (
              <DebtRow key={d.creditor} d={d} strikethrough={false} />
            ))}
            <tr className="font-medium">
              <td className="py-1">Total Installment</td>
              <td className="py-1 text-right tabular-nums">{dollarWhole(TOTAL_INSTALLMENT)}</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-3" />

      {/* Revolving */}
      <p className="text-xs font-semibold text-[#cc0000] uppercase tracking-wide mb-1">Revolving</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {DEBTS_REVOLVING.map((d) => (
              <DebtRow key={d.creditor} d={d} strikethrough={payoffEnabled && d.payoff} />
            ))}
            <tr className="font-medium">
              <td className="py-1">Total Revolving</td>
              <td className="py-1 text-right tabular-nums">
                {dollarWhole(payoffEnabled ? TOTAL_REVOLVING - PAYOFF_PAYMENT_RELIEF : TOTAL_REVOLVING)}
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>

      <Divider />
      <div className="flex justify-between font-bold text-lg">
        <span>Total Monthly Obligations</span>
        <span className="tabular-nums">
          {dollarWhole(payoffEnabled ? REMAINING_AFTER_PAYOFF : TOTAL_DEBTS)}/mo
        </span>
      </div>

      {payoffEnabled && (
        <div className="mt-2 rounded-lg bg-green-50 border border-green-200 p-3 text-sm">
          <div className="flex justify-between text-green-800 font-medium">
            <span>After JPMCB Payoffs</span>
            <span className="tabular-nums">{dollarWhole(REMAINING_AFTER_PAYOFF)}/mo</span>
          </div>
          <p className="text-xs text-green-600 mt-1">
            Saves {dollarWhole(PAYOFF_PAYMENT_RELIEF)}/mo — $577 (0126) + $563 (0658) removed from DTI
          </p>
        </div>
      )}

      <div className="mt-3 text-xs text-gray-400">
        Qualifying income: {dollarWhole(INCOME.total)}/mo (Base + Bonus) · {INCOME.employer}
      </div>
    </Card>
  );
}

function DebtRow({ d, strikethrough }) {
  return (
    <tr className={`${d.payoff ? 'bg-yellow-50/50' : ''} ${strikethrough ? 'opacity-40 line-through' : ''}`}>
      <td className="py-1">
        {d.creditor}
        {d.payoff && (
          <span className="ml-2 text-[10px] bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full no-underline inline-block">
            Payoff
          </span>
        )}
      </td>
      <td className="py-1 text-right tabular-nums">{dollarWhole(d.payment)}</td>
      <td className="py-1 text-right tabular-nums text-gray-400">{dollarWhole(d.balance)}</td>
    </tr>
  );
}
