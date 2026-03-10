import { LOAN_AMOUNTS } from '../data';

const fmt = (n) => '$' + n.toLocaleString();

export default function LoanSelector({ selected, onSelect }) {
  return (
    <div className="flex justify-center gap-3 py-8">
      {LOAN_AMOUNTS.map((amt, i) => (
        <button
          key={amt}
          onClick={() => onSelect(i)}
          aria-pressed={selected === i}
          className={`px-8 py-3.5 rounded-lg font-bold text-lg transition-all cursor-pointer ${
            selected === i
              ? 'bg-[#cc0000] text-white shadow-lg scale-105'
              : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-[#cc0000] hover:shadow-md'
          }`}
        >
          {fmt(amt)}
        </button>
      ))}
    </div>
  );
}
