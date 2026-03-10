import { DollarSign } from 'lucide-react';
import { SCENARIOS, BORROWER } from '../data';
import { dollar } from '../utils';
import { Card, Row, Divider } from './Card';

export default function PaymentCard({ selectedIndex }) {
  const s = SCENARIOS[selectedIndex];
  return (
    <Card title="Monthly Payment" icon={DollarSign}>
      <Row label="Principal & Interest" value={dollar(s.pi)} />
      <Row label="HOI Escrow" value={dollar(s.hoiEscrow)} />
      <Row label="Tax Escrow" value={dollar(s.taxEscrow)} />
      <Divider />
      <Row label="Total PITI" value={dollar(s.piti)} bold />
      <p className="text-xs text-gray-400 mt-2">First payment {BORROWER.firstPayment}</p>
    </Card>
  );
}
