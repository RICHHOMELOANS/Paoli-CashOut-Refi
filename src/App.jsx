import { useState } from 'react';
import LoginGate from './components/LoginGate';
import Hero from './components/Hero';
import LoanSelector from './components/LoanSelector';
import PaymentCard from './components/PaymentCard';
import NetProceedsCard from './components/NetProceedsCard';
import DtiDashboard from './components/DtiDashboard';
import PayoffToggle from './components/PayoffToggle';
import EscrowBreakdown from './components/EscrowBreakdown';
import ClosingCostsCard from './components/ClosingCostsCard';
import DebtTable from './components/DebtTable';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(1);
  const [payoffEnabled, setPayoffEnabled] = useState(false);

  if (!authenticated) {
    return <LoginGate onSuccess={() => setAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#faf8f8]">
      <Hero />

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <LoanSelector selected={selectedLoan} onSelect={setSelectedLoan} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PaymentCard selectedIndex={selectedLoan} />
          <NetProceedsCard selectedIndex={selectedLoan} payoffEnabled={payoffEnabled} />
          <DtiDashboard selectedIndex={selectedLoan} />
          <PayoffToggle enabled={payoffEnabled} onToggle={() => setPayoffEnabled(!payoffEnabled)} />
          <ClosingCostsCard />
          <EscrowBreakdown />
          <div className="md:col-span-2">
            <DebtTable payoffEnabled={payoffEnabled} />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-xs text-gray-400 space-y-2">
          <p>
            Prepared by <span className="text-[#cc0000] font-medium">RICH</span> Home Loans · NMLS #2539702
          </p>
          <p>
            This is a loan estimate for informational purposes only. Figures are based on data
            available as of March 2026 and may change. Not a commitment to lend.
          </p>
          <p>Equal Housing Opportunity</p>
        </div>
      </footer>
    </div>
  );
}
