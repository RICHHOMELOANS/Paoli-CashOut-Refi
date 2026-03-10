import { DTI } from '../data';

const THRESHOLD = 45;

export default function DtiDashboard({ selectedIndex }) {
  const scenarios = [
    { label: 'No Payoffs', values: DTI.scenario1, color: 'bg-red-400' },
    { label: 'JPMCB Paid', values: DTI.scenario2, color: 'bg-[#1F4E79]' },
    { label: 'With RSU', values: DTI.scenario3, color: 'bg-green-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold text-[#1F4E79] mb-4">DTI Comparison</h2>
      <div className="text-xs text-gray-500 mb-1">Conv max 45% &middot; 50% w/ DU Approve + comp factors</div>
      <div className="relative">
        {/* Threshold line */}
        <div
          className="absolute border-t-2 border-dashed border-red-400 w-full z-10"
          style={{ bottom: `${THRESHOLD}%` }}
        >
          <span className="absolute -top-4 right-0 text-xs text-red-500 font-bold">{THRESHOLD}%</span>
        </div>

        <div className="flex items-end gap-4 h-48 pt-6">
          {scenarios.map((sc) => {
            const val = sc.values[selectedIndex];
            const overLimit = val > THRESHOLD;
            return (
              <div key={sc.label} className="flex-1 flex flex-col items-center">
                <span className={`text-sm font-bold mb-1 ${overLimit ? 'text-red-500' : 'text-gray-700'}`}>
                  {val}%{overLimit ? ' ⚠' : ' ✓'}
                </span>
                <div className="w-full bg-gray-100 rounded-t-md relative" style={{ height: '100%' }}>
                  <div
                    className={`${sc.color} rounded-t-md absolute bottom-0 w-full transition-all duration-500`}
                    style={{ height: `${val}%` }}
                  />
                </div>
                <span className="text-xs mt-2 text-gray-600 text-center">{sc.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
