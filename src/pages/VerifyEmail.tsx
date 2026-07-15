import { Route } from "@/routes/_emptyLayout/verify-email";
import { Link, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";


export function VerifyEmail() {
  const { email } = Route.useSearch();
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const filled = code.every((c) => c.length === 1);

  const handleChange = (i: number, v: string) => {
    const val = v.slice(-1).replace(/[^0-9]/g, "");
    const next = [...code];
    next[i] = val;
    setCode(next);
    if (val && i < 5) refs.current[i + 1]?.focus();
  };

  const handleKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[i] && i > 0) refs.current[i - 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const t = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 6);
    if (!t) return;
    e.preventDefault();
    const next = [...code];
    for (let i = 0; i < 6; i++) next[i] = t[i] ?? "";
    setCode(next);
    refs.current[Math.min(t.length, 5)]?.focus();
  };

  return (
  

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-[460px] w-full text-center">
          <div className="size-16 bg-brand-green/10 ring-1 ring-brand-green/20 text-brand-green rounded-full mx-auto grid place-items-center mb-8">
            <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-3">
            // Step 2 of 2
          </div>
          <h1 className="text-2xl md:text-3xl font-medium text-zinc-100 mb-3">
            Verify your identity
          </h1>
          <p className="text-sm text-zinc-500 mb-10 text-pretty">
            We've sent a 6-digit confirmation code to{" "}
            <strong className="text-zinc-300 font-mono">{email ?? "user@firm.com"}</strong>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (filled) navigate({ to: "/dashboard" });
            }}
          >
            <div
              onPaste={handlePaste}
              className="flex justify-center gap-2 sm:gap-3 mb-8"
            >
              {code.map((v, i) => (
                <div key={i} className="contents">
                  <input
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={v}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKey(i, e)}
                    className="size-11 sm:size-12 bg-zinc-950 border border-white/10 rounded text-center text-lg font-mono text-zinc-100 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none transition-all"
                  />
                  {i === 2 && (
                    <span className="flex items-center text-zinc-700">-</span>
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={!filled}
              className="w-full bg-brand-green text-zinc-950 text-sm font-semibold py-2.5 rounded ring-1 ring-brand-green disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition-all"
            >
              Validate Code
            </button>
          </form>

          <p className="mt-6 text-xs text-zinc-500">
            Didn't receive the code?{" "}
            <button className="text-zinc-300 hover:text-brand-green underline underline-offset-4">
              Resend
            </button>
          </p>
          <p className="mt-2 text-[11px] text-zinc-600">
            Wrong address?{" "}
            <Link to="/signup" className="text-zinc-400 hover:text-zinc-200">
              Go back
            </Link>
          </p>
        </div>
      </main>
  );
}
