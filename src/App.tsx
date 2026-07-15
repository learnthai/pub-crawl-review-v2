/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import RouteSelector from './components/RouteSelector';
import PlatformSelector from './components/PlatformSelector';
import { Route } from './types';

export default function App() {
  const [route, setRoute] = useState<Route | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#f36868]">Thanks for touring with us <span className="text-brand-blue">❤️</span></h1>
        <p className="text-sm mt-2 text-black font-bold">We hope you had an amazing night! 🍺</p>
        <p className="text-sm mt-[6px] -ml-[13px] text-black">A quick review means the world to us.</p>
      </div>
      <div className="w-full max-w-md border-4 border-black bg-white shadow-[12px_12px_0px_0px_var(--color-brand-ink)]">
        {!route ? (
          <RouteSelector onSelect={setRoute} />
        ) : (
          <PlatformSelector route={route} onBack={() => setRoute(null)} />
        )}
      </div>
      <footer className="mt-[41px] text-center text-sm text-[#817878] font-bold">
        TourMeAway
      </footer>
    </main>
  );
}
