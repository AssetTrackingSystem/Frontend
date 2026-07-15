import { useState } from "react";

export function Dashboard() {
  const [range, setRange] = useState("1W");
  const holdings = [
    { s: "XAU", n: "Gold Bullion", cls: "Metals", alloc: 40, price: "2,341.12", value: "$165,124.00", chg: "+1.24%", up: true, dot: "bg-yellow-500" },
    { s: "SPY", n: "S&P 500 ETF", cls: "ETF", alloc: 35, price: "512.44", value: "$144,354.00", chg: "-0.32%", up: false, dot: "bg-brand-green" },
    { s: "AAPL", n: "Apple Inc", cls: "Stock", alloc: 12, price: "189.21", value: "$49,215.00", chg: "+0.88%", up: true, dot: "bg-sky-400" },
    { s: "QQQ", n: "Nasdaq 100 ETF", cls: "ETF", alloc: 8, price: "441.05", value: "$33,120.00", chg: "+1.02%", up: true, dot: "bg-brand-green" },
    { s: "BTC", n: "Bitcoin", cls: "Crypto", alloc: 5, price: "64,120.00", value: "$21,079.42", chg: "+4.51%", up: true, dot: "bg-violet-400" },
  ];

  return (
      <main className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-1">
              Total Net Worth
            </h2>
            <div className="text-3xl md:text-4xl font-medium text-zinc-100 font-mono truncate">
              $412,892.42{" "}
              <span className="text-brand-green text-base md:text-lg">+2.4%</span>
            </div>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {["1D", "1W", "1M", "1Y", "ALL"].map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`text-xs px-3 py-1.5 rounded font-mono transition-colors ${
                  range === r
                    ? "bg-zinc-800 text-zinc-100 ring-1 ring-white/10"
                    : "bg-zinc-900 text-zinc-400 ring-1 ring-white/5 hover:text-zinc-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-ui-card ring-1 ring-white/5 rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-medium text-zinc-100">Portfolio Performance</span>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">
                    Range: {range}
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">24H VOL · $12.4K</span>
              </div>
              <PerfChart />
            </div>

            <div className="bg-ui-card ring-1 ring-white/5 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
                <span className="text-sm font-medium text-zinc-100">Holdings</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  {holdings.length} positions
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[640px]">
                  <thead className="bg-zinc-900/50 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-3 font-medium">Asset</th>
                      <th className="px-6 py-3 font-medium">Alloc</th>
                      <th className="px-6 py-3 font-medium text-right">Price</th>
                      <th className="px-6 py-3 font-medium text-right">24h</th>
                      <th className="px-6 py-3 font-medium text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {holdings.map((h) => (
                      <tr key={h.s} className="hover:bg-zinc-900/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className={`size-2 rounded-full ${h.dot}`} />
                            <div className="min-w-0">
                              <div className="text-zinc-100 font-medium">{h.s}</div>
                              <div className="text-[11px] text-zinc-500 truncate">
                                {h.n} · {h.cls}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-zinc-400"
                                style={{ width: `${h.alloc}%` }}
                              />
                            </div>
                            <span className="font-mono text-[11px] text-zinc-500 w-8">
                              {h.alloc}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-mono text-zinc-300">${h.price}</td>
                        <td
                          className={`px-6 py-4 text-right font-mono ${
                            h.up ? "text-brand-green" : "text-brand-red"
                          }`}
                        >
                          {h.chg}
                        </td>
                        <td className="px-6 py-4 text-right font-mono text-zinc-100">{h.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-ui-card ring-1 ring-white/5 rounded-xl p-6">
              <h3 className="text-sm font-medium text-zinc-100 mb-6">Allocation</h3>
              <div className="space-y-4">
                {[
                  ["ETFs", 45.2, "bg-brand-green"],
                  ["Precious Metals", 30.1, "bg-yellow-500"],
                  ["Stocks", 12.0, "bg-sky-400"],
                  ["Crypto", 6.4, "bg-violet-400"],
                  ["Cash", 6.3, "bg-zinc-500"],
                ].map(([label, pct, color]) => (
                  <div key={label as string}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-zinc-400">{label as string}</span>
                      <span className="font-mono text-zinc-300">{pct as number}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className={`h-full ${color as string}`}
                        style={{ width: `${pct as number}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-green/5 ring-1 ring-brand-green/20 rounded-xl p-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-2">
                Market Insight
              </div>
              <h3 className="text-sm font-medium text-zinc-100 mb-2">FOMC in 48h</h3>
              <p className="text-xs text-zinc-400 leading-relaxed text-pretty">
                Historical volatility for Gold positions increases ~12% during Fed decision
                windows. Consider hedging XAU exposure via GLD puts.
              </p>
            </div>

            <div className="bg-ui-card ring-1 ring-white/5 rounded-xl p-6">
              <h3 className="text-sm font-medium text-zinc-100 mb-4">Watchlist</h3>
              <div className="space-y-3 font-mono text-[11px]">
                {[
                  { s: "TSLA", p: "248.44", c: "+2.11%", up: true },
                  { s: "NVDA", p: "912.30", c: "+3.44%", up: true },
                  { s: "MSFT", p: "428.11", c: "-0.18%", up: false },
                  { s: "SLV", p: "27.44", c: "+0.92%", up: true },
                ].map((r) => (
                  <div key={r.s} className="flex justify-between items-center">
                    <span className="text-zinc-100">{r.s}</span>
                    <span className="text-zinc-400">${r.p}</span>
                    <span className={r.up ? "text-brand-green" : "text-brand-red"}>{r.c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

function PerfChart() {
  const pts = [40, 44, 42, 48, 46, 52, 50, 56, 54, 60, 58, 64, 62, 70, 68, 74, 72, 80, 78, 86];
  const w = 800, h = 200, max = 100;
  const step = w / (pts.length - 1);
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`).join(" ");
  const area = `${d} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-48">
      <defs>
        <linearGradient id="pg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-green)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand-green)" stopOpacity="0" />
        </linearGradient>
        <pattern id="grid" width="80" height="40" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={w} height={h} fill="url(#grid)" />
      <path d={area} fill="url(#pg)" />
      <path d={d} fill="none" stroke="var(--brand-green)" strokeWidth="2" />
    </svg>
  );
}
