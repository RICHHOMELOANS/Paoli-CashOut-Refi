import { BORROWER } from '../data';

export default function Hero() {
  return (
    <header className="bg-[#1F4E79] text-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{BORROWER.names}</h1>
            <p className="text-blue-200 mt-1">{BORROWER.property}</p>
          </div>
          <span className="inline-block bg-[#C6EFCE] text-green-900 font-bold text-sm px-4 py-2 rounded-full whitespace-nowrap self-start">
            FREE &amp; CLEAR
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-blue-100">
          <span>{BORROWER.loanType}</span>
          <span>{BORROWER.rate}% &middot; APR {BORROWER.apr}%</span>
          <span>{BORROWER.lender}</span>
          <span>Closing {BORROWER.closingDate}</span>
        </div>
      </div>
    </header>
  );
}
