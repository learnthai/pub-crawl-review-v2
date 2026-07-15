import { Route } from '../types';

interface Props {
  onSelect: (route: Route) => void;
}

export default function RouteSelector({ onSelect }: Props) {
  return (
    <div className="flex flex-col gap-6 p-8">
      <h2 className="text-xl font-bold text-center">Which route did you join?</h2>
      <button
        onClick={() => onSelect('Classic')}
        className="p-6 text-xl font-bold bg-[#48aee7] text-white border-4 border-black shadow-[8px_8px_0px_0px_var(--color-brand-ink)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-brand-ink)] transition-all"
      >
        Classic (Fri, Sat)
      </button>
      <button
        onClick={() => onSelect('Xinyi')}
        className="p-6 text-xl font-bold bg-[#f36868] text-white border-4 border-black shadow-[8px_8px_0px_0px_var(--color-brand-ink)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-brand-ink)] transition-all"
      >
        Xinyi (Wed, Thu, Sun)
      </button>
    </div>
  );
}
