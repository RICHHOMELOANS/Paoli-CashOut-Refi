import { useState } from 'react';
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
  const [selectedLoan, setSelectedLoan] = useState(1);
  const [payoffEnabled, setPayoffEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main className="max-w-5xl mx-auto px-4 pb-12">
        <LoanSelector selected={selectedLoan} onSelect={setSelectedLoan} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PaymentCard selectedIndex={selectedLoan} />
          <NetProceedsCard selectedIndex={selectedLoan} payoffEnabled={payoffEnabled} />
          <DtiDashboard selectedIndex={selectedLoan} />
          <PayoffToggle enabled={payoffEnabled} onToggle={() => setPayoffEnabled(!payoffEnabled)} />
          <ClosingCostsCard />
          <EscrowBreakdown />
          <div className="md:col-span-2">
            <DebtTable />
          </div>
        </div>
      </main>
    </div>
  );
}
