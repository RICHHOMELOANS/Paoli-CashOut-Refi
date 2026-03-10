import { Banknote } from 'lucide-react';
import { SCENARIOS, CLOSING_COSTS_TOTAL, PAYOFFS_TOTAL } from '../data';
import { dollar, dollarWhole } from '../utils';
import { Card, Row, Divider } from './Card';

export default function NetProceedsCard({ selectedIndex, payoffEnabled }) {
  const s = SCENARIOS[selectedIndex];
  const prepaids = s.prepaidInterest + s.hoiPrepaid + s.initialEscrowDeposit - s.aggAdjCredit;
  const grossNet = s.loanAmount - CLOSING_COSTS_TOTAL - prepaids;
  const net = payoffEnabled ? grossNet - PAYOFFS_TOTAL : grossNet;

  return (
    <Card title="Net Proceeds to Borrower" icon={Banknote}>
      <Row label="Gross Loan Amount" value={dollarWhole(s.loanAmount)} />
      <Row label="Less Closing Costs" value={`(${dollar(CLOSING_COSTS_TOTAL)})`} negative />
      <Row label="Less Prepaids & Escrow (net)" value={`(${dollar(prepaids)})`} negative />
      {payoffEnabled && (
        <Row label="Less JPMCB Payoffs" value={`(${dollarWhole(PAYOFFS_TOTAL)})`} negative />
      )}
      <Divider />
      <Row label="Net to Borrower" value={dollarWhole(net)} bold accent />
      <p className="text-xs text-gray-400 mt-2">
        {payoffEnabled ? 'After JPMCB payoffs deducted from proceeds' : 'Free & clear — no lien payoffs'}
      </p>
    </Card>
  );
}
