import { useState } from 'react';
import { Lock, AlertCircle } from 'lucide-react';
import { BORROWER } from '../data';

async function hashZip(zip) {
  const data = new TextEncoder().encode(zip);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export default function LoginGate({ onSuccess }) {
  const [zip, setZip] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChecking(true);
    const hash = await hashZip(zip.trim());
    setChecking(false);

    if (hash === BORROWER.zipHash) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-10">
          <img src="/rhl-logo.png" alt="RICH Home Loans" className="h-10 mx-auto mb-4" />
          <h1 className="text-3xl font-bold tracking-tight mb-2">Loan Dashboard</h1>
          <p className="text-gray-500">Enter the property zip code to access your loan comparison</p>
        </div>

        {/* Login Card */}
        <div className={`rounded-xl border shadow-sm p-8 ${shake ? 'animate-shake' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-lg bg-[#cc0000]/10 flex items-center justify-center">
              <Lock className="h-5 w-5 text-[#cc0000]" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold">Secure Access</p>
              <p className="text-sm text-gray-500">Property verification required</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
              Property Zip Code
            </label>
            <input
              id="zip"
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={zip}
              onChange={(e) => {
                setZip(e.target.value.replace(/\D/g, ''));
                setError(false);
              }}
              placeholder="Enter 5-digit zip code"
              aria-invalid={error}
              aria-describedby={error ? 'zip-error' : undefined}
              className={`w-full h-12 px-4 rounded-lg border-2 text-lg tracking-widest text-center transition-colors outline-none ${
                error
                  ? 'border-red-400 bg-red-50 focus:border-red-500'
                  : 'border-gray-200 focus:border-[#cc0000]'
              }`}
              autoFocus
            />
            {error && (
              <div id="zip-error" role="alert" className="flex items-center gap-2 mt-3 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Incorrect zip code. Please try again.</span>
              </div>
            )}
            <button
              type="submit"
              disabled={checking}
              className="w-full mt-6 h-12 bg-[#cc0000] text-white font-semibold rounded-lg hover:bg-[#cc0000]/90 transition-colors cursor-pointer disabled:opacity-60"
            >
              {checking ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Confidential loan information for {BORROWER.names}
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  );
}
