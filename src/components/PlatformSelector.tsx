import { Platform, Route } from '../types';
import { platforms, googleMapsLinks } from '../data';

interface Props {
  route: Route;
  onBack: () => void;
}

export default function PlatformSelector({ route, onBack }: Props) {
  const handleSelect = (platform: Platform) => {
    let url = '';
    if (platform === 'Google') {
      url = googleMapsLinks[route];
    } else {
      url = platforms.find(p => p.id === platform)?.url || '';
    }
    
    if (url) {
      window.open(url, '_blank');
    }
  };

  const getPlatformStyles = (id: Platform) => {
    const base = "p-4 font-bold border-4 border-black text-white shadow-[8px_8px_0px_0px_var(--color-brand-ink)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-brand-ink)] transition-all";
    switch(id) {
      case 'GetYourGuide': return `${base} bg-[#ff6e6e]`;
      case 'Viator': return `${base} bg-[#a7d68b]`;
      case 'FreeTour': return `${base} bg-[#fec34c]`;
      case 'Google': return `${base} bg-[#3ba0dd]`;
      default: return `${base} bg-white text-black`;
    }
  }

  return (
    <div className="flex flex-col gap-6 p-8">
      <button onClick={onBack} className="text-sm font-mono underline text-[#69696e] hover:text-brand-blue">← Back</button>
      <h2 className="text-2xl font-bold tracking-tight text-center">Where did you book?</h2>
      <div className="grid grid-cols-1 gap-4">
        {platforms.map(p => (
          <button
            key={p.id}
            onClick={() => handleSelect(p.id)}
            className={getPlatformStyles(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
