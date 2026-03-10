import { Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { ESCROW, ESCROW_PROJECTION } from '../data';
import { dollar, dollarWhole } from '../utils';
import { Card, Row, Divider } from './Card';

export default function EscrowBreakdown() {
  const [showProjection, setShowProjection] = useState(false);

  return (
    <Card title="Escrow Detail" icon={Shield}>
      {/* HOI */}
      <p className="text-xs font-semibold text-[#cc0000] uppercase tracking-wide mb-1">
        Homeowner's Insurance — {ESCROW.hoiCarrier}
      </p>
      <Row label="Annual Premium" value={dollar(ESCROW.hoiAnnual)} />
      <Row label="Monthly Escrow" value={dollar(ESCROW.hoiMonthly)} />
      <Row label={`Policy ${ESCROW.hoiPolicy}`} value={`Renewal ${ESCROW.hoiRenewal}`} />

      <div className="my-3" />

      {/* Tax */}
      <p className="text-xs font-semibold text-[#cc0000] uppercase tracking-wide mb-1">
        Property Taxes — {ESCROW.taxCounty}
      </p>
      <Row label="Annual Tax" value={dollar(ESCROW.taxAnnual)} />
      <Row label="Monthly Escrow" value={dollar(ESCROW.taxMonthly)} />

      <Divider />
      <Row label="Total Monthly Escrow" value={dollar(ESCROW.totalMonthly)} bold />
      <Row label="Initial Escrow Deposit" value={dollar(ESCROW.initialDeposit)} />
      <Row label="Aggregate Adj. Credit" value={`(${dollar(ESCROW.aggAdjCredit)})`} accent />

      {/* 12-month projection toggle */}
      <button
        onClick={() => setShowProjection(!showProjection)}
        className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-[#cc0000] hover:text-[#cc0000]/80 cursor-pointer"
      >
        {showProjection ? 'Hide' : 'Show'} 12-Month Projection
        {showProjection ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {showProjection && (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="text-left pb-1">Month</th>
                <th className="text-right pb-1">Open</th>
                <th className="text-right pb-1">+Collect</th>
                <th className="text-right pb-1">-Disburse</th>
                <th className="text-right pb-1">Close</th>
              </tr>
            </thead>
            <tbody>
              {ESCROW_PROJECTION.map((r) => (
                <tr key={r.month} className="border-b last:border-0">
                  <td className="py-1 font-medium">{r.month}</td>
                  <td className="py-1 text-right tabular-nums">{dollarWhole(r.open)}</td>
                  <td className="py-1 text-right tabular-nums text-green-700">{dollarWhole(r.collect)}</td>
                  <td className="py-1 text-right tabular-nums text-red-600">
                    {r.disburse > 0 ? `(${dollarWhole(r.disburse)})` : '—'}
                  </td>
                  <td className="py-1 text-right tabular-nums font-medium">{dollarWhole(r.close)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
