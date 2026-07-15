import { Link } from "@tanstack/react-router";

export function EmptyNav() {
  return (
    <nav className="flex items-center justify-between mb-16 md:mb-24">
      <Link to="/" className="flex items-center gap-2">
        <div className="size-6 bg-brand-green rounded-sm" />
        <span className="font-mono font-medium text-zinc-100 tracking-tight text-sm">
          QUANTUM.DATA
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
      </div>
      
    </nav>
  );
}
