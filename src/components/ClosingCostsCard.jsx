import { FileText } from 'lucide-react';
import { CLOSING_COSTS_SECTIONS, CLOSING_COSTS_TOTAL } from '../data';
import { dollar } from '../utils';
import { Card, Divider } from './Card';

export default function ClosingCostsCard() {
  return (
    <Card title="Closing Costs Breakdown" icon={FileText}>
      {CLOSING_COSTS_SECTIONS.map((section) => (
        <div key={section.title} className="mb-4 last:mb-0">
          <p className="text-xs font-semibold text-[#cc0000] uppercase tracking-wide mb-1">
            {section.title}
          </p>
          {section.items.map((c) => (
            <div
              key={c.item}
              className={`flex justify-between py-0.5 text-sm ${c.amount < 0 ? 'text-green-700' : 'text-gray-600'}`}
            >
              <span>
                {c.item}
                {c.note && <span className="text-gray-400 text-xs ml-1">({c.note})</span>}
              </span>
              <span className="tabular-nums">{dollar(c.amount)}</span>
            </div>
          ))}
          <div className="flex justify-between text-sm font-medium pt-1 text-gray-800">
            <span>Subtotal</span>
            <span className="tabular-nums">{dollar(section.subtotal)}</span>
          </div>
        </div>
      ))}
      <Divider />
      <div className="flex justify-between font-bold text-lg">
        <span>Total Closing Costs</span>
        <span className="tabular-nums">{dollar(CLOSING_COSTS_TOTAL)}</span>
      </div>
    </Card>
  );
}
