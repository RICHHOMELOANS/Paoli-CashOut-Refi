import { CLOSING_COSTS, CLOSING_COSTS_TOTAL } from '../data';

const dollar = (n) => {
  const abs = Math.abs(n);
  const str = '$' + abs.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return n < 0 ? `(${str})` : str;
};

export default function ClosingCostsCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold text-[#1F4E79] mb-4">Closing Costs</h2>
      <div className="space-y-1 text-sm">
        {CLOSING_COSTS.map((c) => (
          <div key={c.item} className={`flex justify-between ${c.amount < 0 ? 'text-green-700' : 'text-gray-700'}`}>
            <span>{c.item}</span>
            <span>{dollar(c.amount)}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold border-t pt-2 text-[#1F4E79]">
          <span>Total</span>
          <span>${CLOSING_COSTS_TOTAL.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
      </div>
    </div>
  );
}
