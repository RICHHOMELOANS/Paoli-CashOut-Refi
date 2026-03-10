import { LOAN_AMOUNTS } from '../data';

const fmt = (n) => '$' + n.toLocaleString();

export default function LoanSelector({ selected, onSelect }) {
  return (
    <div className="flex justify-center gap-3 py-6">
      {LOAN_AMOUNTS.map((amt, i) => (
        <button
          key={amt}
          onClick={() => onSelect(i)}
          className={`px-6 py-3 rounded-lg font-bold text-lg transition-all cursor-pointer ${
            selected === i
              ? 'bg-[#1F4E79] text-white shadow-lg scale-105'
              : 'bg-white text-[#1F4E79] border-2 border-[#1F4E79] hover:bg-blue-50'
          }`}
        >
          {fmt(amt)}
        </button>
      ))}
    </div>
  );
}
