import { DEBTS, TOTAL_DEBTS_PAYMENT } from '../data';

const dollar = (n) => '$' + n.toLocaleString();

export default function DebtTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold text-[#1F4E79] mb-4">Monthly Debts</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-2">Creditor</th>
              <th className="pb-2 text-right">Payment</th>
              <th className="pb-2 text-right">Balance</th>
            </tr>
          </thead>
          <tbody>
            {DEBTS.map((d) => (
              <tr key={d.creditor} className={`border-b last:border-0 ${d.payoffCandidate ? 'bg-yellow-50' : ''}`}>
                <td className="py-2">
                  {d.creditor}
                  {d.payoffCandidate && (
                    <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">
                      Payoff
                    </span>
                  )}
                </td>
                <td className="py-2 text-right">{dollar(d.payment)}</td>
                <td className="py-2 text-right">{dollar(d.balance)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-bold text-[#1F4E79]">
              <td className="pt-2">Total</td>
              <td className="pt-2 text-right">{dollar(TOTAL_DEBTS_PAYMENT)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
