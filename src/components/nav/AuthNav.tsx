import { Link } from "@tanstack/react-router";

export function AuthNav() {
  return (
      <nav className="border-b border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-6 bg-brand-green rounded-sm" />
            <span className="font-mono font-medium text-zinc-100 tracking-tight text-sm">
              QUANTUM.DATA
            </span>
          </Link>
          <div className="hidden md:flex gap-6 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            <span className="text-zinc-100">Terminal</span>
            <span className="hover:text-zinc-300 cursor-pointer">Positions</span>
            <span className="hover:text-zinc-300 cursor-pointer">Orders</span>
            <span className="hover:text-zinc-300 cursor-pointer">Research</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-brand-green">
              <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
              Live
            </span>
            <div className="size-8 rounded-full bg-zinc-800 ring-1 ring-white/10 grid place-items-center text-xs font-mono text-zinc-300">
              QD
            </div>
          </div>
        </div>
      </nav>
  );
}
