import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between mb-16 md:mb-24">
      <Link to="/" className="flex items-center gap-2">
        <div className="size-6 bg-brand-green rounded-sm" />
        <span className="font-mono font-medium text-zinc-100 tracking-tight text-sm">
          QUANTUM.DATA
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/dashboard" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          Markets
        </Link>
        <Link to="/dashboard" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          Terminal
        </Link>
        <Link to="/login" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          Sign in
        </Link>
        <Link
          to="/signup"
          className="text-sm font-medium bg-zinc-100 text-zinc-950 px-4 py-2 rounded ring-1 ring-zinc-100 hover:bg-brand-green hover:ring-brand-green transition-colors"
        >
          Launch Terminal
        </Link>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        className="md:hidden size-9 grid place-items-center rounded ring-1 ring-white/10 bg-zinc-900 text-zinc-300"
      >
        <span className="font-mono text-sm">{open ? "×" : "≡"}</span>
      </button>

      {open && (
        <div className="absolute top-20 left-4 right-4 z-50 bg-ui-card ring-1 ring-white/10 rounded-lg p-4 md:hidden flex flex-col gap-3">
          <Link to="/dashboard" onClick={() => setOpen(false)} className="text-sm text-zinc-300">
            Terminal
          </Link>
          <Link to="/login" onClick={() => setOpen(false)} className="text-sm text-zinc-300">
            Sign in
          </Link>
          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-brand-green text-zinc-950 px-4 py-2 rounded text-center"
          >
            Launch Terminal
          </Link>
        </div>
      )}
    </nav>
  );
}
