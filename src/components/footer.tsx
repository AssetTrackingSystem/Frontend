export function SiteFooter() {
  return (
    <footer className="py-12 border-t border-white/5 mt-16">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          &copy; 2026 Quantum Data Systems // SEC Regulated
        </div>
        <div className="flex gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <a href="#" className="hover:text-zinc-400">Terms</a>
          <a href="#" className="hover:text-zinc-400">Privacy</a>
          <a href="#" className="hover:text-zinc-400">Status</a>
        </div>
      </div>
    </footer>
  );
}
