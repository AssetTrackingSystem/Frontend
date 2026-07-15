import { Link } from "@tanstack/react-router";

export default function Landing() {
  return (
    <>
        <section className="pb-24">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 font-mono text-[10px] uppercase tracking-widest text-brand-green">
                <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
                Live · Markets Open
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-100 leading-[1.05] text-balance mb-6 max-w-[20ch]">
                Professional grade portfolio tracking for private capital.
              </h1>
              <p className="text-lg text-zinc-400 mb-10 max-w-[48ch] text-pretty">
                Consolidate gold bullion, equity positions, ETFs and digital assets into a
                single low-latency environment. Built for precision, not noise.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/signup"
                  className="bg-brand-green text-zinc-950 text-sm font-semibold px-6 py-3 rounded ring-1 ring-brand-green hover:brightness-110 transition-all"
                >
                  Open Free Account
                </Link>
                <Link
                  to="/dashboard"
                  className="bg-zinc-900 text-zinc-100 text-sm font-medium px-6 py-3 rounded ring-1 ring-white/10 hover:bg-zinc-800 transition-colors"
                >
                  View Live Terminal
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  ["$4.2B", "Assets tracked"],
                  ["120ms", "Quote latency"],
                  ["48+", "Data feeds"],
                  ["99.98%", "Uptime"],
                ].map(([k, v]) => (
                  <div key={v} className="border-l border-white/10 pl-4">
                    <div className="font-mono text-xl text-zinc-100">{k}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <TickerPanel />
          </div>
        </section>

        <section className="py-24 border-t border-white/5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-4">
            // Asset Coverage
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 mb-12 max-w-[24ch]">
            Every asset class. One terminal.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Gold & Metals", d: "Physical bullion, XAU/USD, futures, mining equities.", dot: "bg-yellow-500" },
              { t: "Stocks", d: "Real-time equities across NYSE, NASDAQ and 30+ exchanges.", dot: "bg-brand-green" },
              { t: "ETFs & Funds", d: "Index, sector and thematic funds with holdings breakdown.", dot: "bg-sky-400" },
              { t: "Crypto", d: "Spot, staking positions and on-chain balance sync.", dot: "bg-violet-400" },
            ].map((c) => (
              <div key={c.t} className="bg-ui-card ring-1 ring-white/5 rounded-xl p-6 hover:ring-white/15 transition-all">
                <div className={`size-2 rounded-full ${c.dot} mb-6`} />
                <div className="text-sm font-medium text-zinc-100 mb-2">{c.t}</div>
                <p className="text-xs text-zinc-500 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-4">
                // Precision Engineered
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 mb-6 leading-tight">
                Institutional tooling.<br />Retail simplicity.
              </h2>
              <p className="text-zinc-400 mb-8 max-w-[48ch]">
                Every number is auditable. Every signal explainable. No hidden fees, no
                gamified nudges — just the data your capital deserves.
              </p>
              <ul className="space-y-4">
                {[
                  "End-to-end encrypted portfolio snapshots",
                  "Direct brokerage & custody API integration",
                  "Tax-lot accounting with FIFO / LIFO exports",
                  "Cross-asset correlation & risk decomposition",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 size-4 grid place-items-center rounded-full bg-brand-green/15 text-brand-green">
                      <svg viewBox="0 0 16 16" fill="none" className="size-3">
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ui-card ring-1 ring-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Portfolio · YTD
                </span>
                <span className="font-mono text-xs text-brand-green">+18.42%</span>
              </div>
              <MiniChart />
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Sharpe</div>
                  <div className="font-mono text-lg text-zinc-100 mt-1">1.84</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Beta</div>
                  <div className="font-mono text-lg text-zinc-100 mt-1">0.72</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Max DD</div>
                  <div className="font-mono text-lg text-zinc-100 mt-1">-4.1%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-white/5">
          <div className="bg-ui-card ring-1 ring-white/5 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 max-w-[24ch] mx-auto leading-tight mb-6">
              Ready to operate on real data?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-[48ch] mx-auto">
              Free forever for personal portfolios up to $250K under management.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-brand-green text-zinc-950 text-sm font-semibold px-6 py-3 rounded ring-1 ring-brand-green"
            >
              Open Free Account
            </Link>
          </div>
        </section>
    </>
  );
}

function TickerPanel() {
  const rows = [
    { s: "XAU/USD", n: "Gold Spot", p: "2,341.12", c: "+1.24%", up: true },
    { s: "SPY", n: "S&P 500 ETF", p: "512.44", c: "-0.32%", up: false },
    { s: "AAPL", n: "Apple Inc", p: "189.21", c: "+0.88%", up: true },
    { s: "QQQ", n: "Nasdaq 100 ETF", p: "441.05", c: "+1.02%", up: true },
    { s: "GLD", n: "SPDR Gold Trust", p: "201.12", c: "+1.18%", up: true },
    { s: "BTC/USD", n: "Bitcoin", p: "64,120", c: "+4.51%", up: true },
    { s: "TLT", n: "20Y Treasury ETF", p: "92.14", c: "-0.44%", up: false },
  ];
  return (
    <div className="bg-ui-card ring-1 ring-white/5 rounded-lg p-1">
      <div className="bg-zinc-950 rounded border border-white/5 p-4 font-mono text-[11px] leading-relaxed">
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 text-zinc-500 mb-2 border-b border-white/5 pb-2">
          <span>INSTRUMENT</span>
          <span className="text-right">PRICE</span>
          <span className="text-right w-16">CHG %</span>
        </div>
        {rows.map((r) => (
          <div key={r.s} className="grid grid-cols-[1fr_auto_auto] gap-4 py-1 items-center">
            <span className="text-zinc-300 truncate">
              <span className="text-zinc-100">{r.s}</span>{" "}
              <span className="text-zinc-500">· {r.n}</span>
            </span>
            <span className="text-zinc-300 text-right">{r.p}</span>
            <span className={`text-right w-16 ${r.up ? "text-brand-green" : "text-brand-red"}`}>
              {r.c}
            </span>
          </div>
        ))}
        <div className="grid grid-cols-2 py-2 border-t border-white/5 mt-2 pt-2 text-zinc-500">
          <span>PENDING ORDERS</span>
          <span className="text-right">4 ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  const pts = [50, 46, 52, 48, 55, 51, 60, 58, 66, 64, 72, 70, 78, 82, 88];
  const max = 100;
  const w = 600, h = 160;
  const step = w / (pts.length - 1);
  const d = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${d} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-green)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--brand-green)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g1)" />
      <path d={d} fill="none" stroke="var(--brand-green)" strokeWidth="2" />
    </svg>
  );
}
