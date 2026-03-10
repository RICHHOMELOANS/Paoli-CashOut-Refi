import { ESCROW } from '../data';

const dollar = (n) => '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const dollarRound = (n) => '$' + n.toLocaleString();

export default function EscrowBreakdown() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-bold text-[#1F4E79] mb-4">Escrow Detail</h2>
      <div className="space-y-3 text-sm">
        <Section title="Homeowner's Insurance" carrier={ESCROW.hoiCarrier}>
          <Row label="Annual Premium" value={dollar(ESCROW.hoiAnnual)} />
          <Row label="Monthly Escrow" value={dollar(ESCROW.hoiMonthly)} />
          <Row label="Renewal" value={ESCROW.hoiRenewal} />
        </Section>
        <Section title="Property Taxes" carrier={ESCROW.taxCounty}>
          <Row label="Annual" value={dollar(ESCROW.taxAnnual)} />
          <Row label="Monthly Escrow" value={dollar(ESCROW.taxMonthly)} />
        </Section>
        <div className="border-t pt-3 space-y-2">
          <Row label="Total Monthly Escrow" value={dollar(ESCROW.totalMonthly)} bold />
          <Row label="Initial Escrow Deposit" value={dollarRound(ESCROW.initialDeposit)} />
          <Row label="Aggregate Adj. Credit" value={`(${dollarRound(ESCROW.aggAdjCredit)})`} green />
        </div>
      </div>
    </div>
  );
}

function Section({ title, carrier, children }) {
  return (
    <div className="space-y-1">
      <h3 className="font-semibold text-[#1F4E79]">
        {title} <span className="text-gray-400 font-normal">— {carrier}</span>
      </h3>
      {children}
    </div>
  );
}

function Row({ label, value, bold, green }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-bold' : ''} ${green ? 'text-green-700' : 'text-gray-700'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
