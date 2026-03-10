import { Home, Calendar, Percent, Building2, BadgeCheck } from 'lucide-react';
import { BORROWER } from '../data';

export default function Hero() {
  return (
    <header className="relative bg-white overflow-hidden border-b">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#cc0000]/5" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#cc0000]/5" />

      <div className="relative max-w-6xl mx-auto px-4 py-10">
        {/* Top bar: brand + badge */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-[#cc0000]" aria-hidden="true" />
            <span className="text-xl font-bold">
              <span className="text-[#cc0000]">RICH</span> Home Loans
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-sm bg-[#cc0000]/5 text-[#cc0000] font-medium">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            FREE &amp; CLEAR
          </span>
        </div>

        {/* Main hero content */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          LOAN COMPARISON WORKSHEET — <span className="text-[#cc0000]">PAOLI CASH-OUT REFI</span>
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl">
          {BORROWER.names} — no existing mortgage, full proceeds available to borrower.
        </p>

        {/* Info details */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          <Detail icon={Building2} text={BORROWER.property} />
          <Detail icon={Percent} text={`${BORROWER.rate}% Fixed · APR ${BORROWER.apr}%`} />
          <Detail icon={Calendar} text={`Closing ${BORROWER.closingDate}`} />
          <Detail icon={Home} text={BORROWER.lender} />
        </div>
      </div>
    </header>
  );
}

function Detail({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon className="h-4 w-4 text-[#cc0000]" aria-hidden="true" />
      {text}
    </span>
  );
}
