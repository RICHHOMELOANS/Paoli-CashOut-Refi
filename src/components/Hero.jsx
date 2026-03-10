import { Home, Calendar, Percent, Building2, BadgeCheck } from 'lucide-react';
import { BORROWER } from '../data';

export default function Hero() {
  return (
    <header className="relative bg-white overflow-hidden border-b">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#cc0000]/5" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#cc0000]/5" />

      <div className="relative max-w-6xl mx-auto px-4 py-10">
        {/* Top bar: brand + badge */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-[#cc0000]" />
            <span className="text-xl font-bold">
              <span className="text-[#cc0000]">RICH</span> Home Loans
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm bg-[#cc0000]/5 text-[#cc0000] font-medium">
            <BadgeCheck className="h-4 w-4" />
            FREE &amp; CLEAR
          </span>
        </div>

        {/* Main hero content */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
          Cash-Out <span className="text-[#cc0000]">Refinance</span>
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl">
          Loan comparison dashboard for {BORROWER.names} — no existing mortgage,
          full proceeds available to borrower.
        </p>

        {/* Info pills */}
        <div className="flex flex-wrap gap-3">
          <Pill icon={Building2} text={BORROWER.property} />
          <Pill icon={Percent} text={`${BORROWER.rate}% Fixed · APR ${BORROWER.apr}%`} />
          <Pill icon={Calendar} text={`Closing ${BORROWER.closingDate}`} />
          <Pill icon={Home} text={BORROWER.lender} />
        </div>
      </div>
    </header>
  );
}

function Pill({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm">
      <Icon className="h-4 w-4 text-[#cc0000]" />
      {text}
    </span>
  );
}
