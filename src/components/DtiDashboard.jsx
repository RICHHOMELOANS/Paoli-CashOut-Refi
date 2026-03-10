import { BarChart3 } from 'lucide-react';
import { SCENARIOS } from '../data';
import { Card } from './Card';

const THRESHOLD = 45;

const BARS = [
  { key: 'dtiAllDebts', label: 'All Debts', sublabel: 'No payoffs', color: 'bg-red-400' },
  { key: 'dtiPayoff', label: 'JPMCB Paid', sublabel: 'At closing', color: 'bg-[#cc0000]' },
  { key: 'dtiRsu', label: 'With RSU', sublabel: 'Reference', color: 'bg-green-500' },
];

export default function DtiDashboard({ selectedIndex }) {
  const s = SCENARIOS[selectedIndex];

  return (
    <Card title="Back-End DTI Comparison" icon={BarChart3}>
      <p className="text-xs text-gray-400 mb-4">
        Conv max 45% · 50% w/ DU Approve + compensating factors
      </p>

      <div className="relative" role="img" aria-label={`DTI ratios: All Debts ${s.dtiAllDebts}%, JPMCB Paid ${s.dtiPayoff}%, With RSU ${s.dtiRsu}%. Conventional limit is 45%.`}>
        {/* 45% threshold */}
        <div
          className="absolute border-t-2 border-dashed border-red-300 w-full z-10 pointer-events-none"
          style={{ bottom: `${(THRESHOLD / 55) * 100}%` }}
        >
          <span className="absolute -top-5 right-0 text-xs text-red-400 font-bold">
            {THRESHOLD}% limit
          </span>
        </div>

        <div className="flex items-end gap-6 h-52">
          {BARS.map(({ key, label, sublabel, color }) => {
            const val = s[key];
            const over = val > THRESHOLD;
            return (
              <div key={key} className="flex-1 flex flex-col items-center">
                <span className={`text-sm font-bold mb-1 ${over ? 'text-red-500' : 'text-gray-700'}`}>
                  {val.toFixed(1)}%
                </span>
                <div className="w-full bg-gray-100 rounded-t-lg relative h-full">
                  <div
                    className={`${color} rounded-t-lg absolute bottom-0 w-full transition-all duration-500 ease-out`}
                    style={{ height: `${(val / 55) * 100}%` }}
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs font-medium">{label}</p>
                  <p className="text-[10px] text-gray-400">{sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
