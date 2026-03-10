import { SCENARIOS } from '../data';

const dollar = (n) => '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function PaymentCard({ selectedIndex }) {
  const s = SCENARIOS[selectedIndex];
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold text-[#1F4E79] mb-4">Monthly Payment</h2>
      <div className="space-y-3">
        <Row label="Principal & Interest" value={dollar(s.pi)} />
        <Row label="HOI Escrow" value={dollar(s.hoiEscrow)} />
        <Row label="Tax Escrow" value={dollar(s.taxEscrow)} />
        <div className="border-t-2 border-[#1F4E79] pt-3">
          <Row label="Total PITI" value={dollar(s.piti)} bold />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-bold text-lg' : 'text-gray-700'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
