import { useState } from 'react';
import {
  useAuth,
  SignIn,
  ClerkLoading,
  ClerkLoaded,
  UserButton,
} from '@clerk/react';
import LoginGate from './LoginGate';

const HAS_CLERK = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ClerkGate({ children }) {
  const { isSignedIn } = useAuth();

  return (
    <>
      <ClerkLoading>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-gray-400 animate-pulse">Loading...</div>
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        {isSignedIn ? (
          children
        ) : (
          <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="w-full max-w-md text-center">
              <img src="/rhl-logo.png" alt="RICH Home Loans" className="h-10 mx-auto mb-6" />
              <h1 className="text-3xl font-bold tracking-tight mb-2">Loan Dashboard</h1>
              <p className="text-gray-500 mb-8">Sign in to access your loan comparison</p>
              <SignIn routing="hash" />
            </div>
          </div>
        )}
      </ClerkLoaded>
    </>
  );
}

function ZipGate({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <LoginGate onSuccess={() => setAuthenticated(true)} />;
  }

  return children;
}

export default function AuthGate({ children }) {
  if (HAS_CLERK) {
    return <ClerkGate>{children}</ClerkGate>;
  }
  return <ZipGate>{children}</ZipGate>;
}

export { UserButton, HAS_CLERK };
