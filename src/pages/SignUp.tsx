import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ first: "", last: "", email: "", password: "" });

  const strength = useMemo(() => scorePassword(form.password), [form.password]);

  return (
      <main className="max-w-screen-xl mx-auto px-6  grid lg:grid-cols-2 gap-16 items-center">
        <div className="hidden lg:block">
          <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-4">
            // Registration Phase
          </div>
          <h2 className="text-4xl font-semibold text-zinc-100 leading-tight mb-6 max-w-[20ch]">
            Institutional-grade security for individual wealth.
          </h2>
          <p className="text-zinc-400 mb-10 max-w-[42ch]">
            Free forever for personal portfolios up to $250K. No credit card. Full data export
            at any time.
          </p>
          <ul className="space-y-4">
            {[
              "End-to-end encrypted portfolio snapshots",
              "Direct brokerage API integration",
              "Real-time Gold, Stocks, ETF & Crypto quotes",
              "Tax-lot accounting & CSV export",
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

        <div className="bg-ui-card ring-1 ring-white/5 p-8 rounded-xl max-w-[460px] w-full mx-auto">
          <h3 className="text-lg font-medium text-zinc-100 mb-6">New Client Registration</h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/verify-email", search: { email: form.email || "user@firm.com" } });
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Field
                label="First Name"
                value={form.first}
                onChange={(v) => setForm({ ...form, first: v })}
              />
              <Field
                label="Last Name"
                value={form.last}
                onChange={(v) => setForm({ ...form, last: v })}
              />
            </div>
            <Field
              label="Secure Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="name@firm.com"
            />
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green"
              />
              <div className="mt-2 flex gap-1 h-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full ${
                      i < strength.score
                        ? strength.score < 2
                          ? "bg-brand-red"
                          : strength.score < 3
                            ? "bg-yellow-500"
                            : "bg-brand-green"
                        : "bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                {strength.label}
              </div>
            </div>

            <label className="flex items-start gap-2 text-xs text-zinc-500">
              <input type="checkbox" required className="accent-brand-green mt-0.5" />
              <span>
                I agree to the{" "}
                <a href="#" className="text-zinc-300 hover:text-brand-green">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-zinc-300 hover:text-brand-green">
                  Privacy Protocol
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-brand-green text-zinc-950 text-sm font-semibold py-2.5 rounded ring-1 ring-brand-green mt-2 hover:brightness-110 transition-all"
            >
              Confirm Registration
            </button>

            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-zinc-600 my-2">
              <div className="h-px bg-white/5 flex-1" />
              <span>or</span>
              <div className="h-px bg-white/5 flex-1" />
            </div>

            <button
              type="button"
              className="w-full bg-zinc-900 text-zinc-200 text-sm font-medium py-2.5 rounded ring-1 ring-white/10 hover:bg-zinc-800 transition-colors"
            >
              Continue with Google
            </button>
          </form>
            <div className="text-xs text-zinc-500 px-5 text-center mt-6">
            Already registered?{" "}
            <Link to="/login" className="text-zinc-100 hover:text-brand-green">
              Sign in
            </Link>
          </div>
        </div>
      </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green transition-all"
      />
    </div>
  );
}

function scorePassword(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const label =
    pw.length === 0
      ? "Enter a password"
      : score < 2
        ? "Weak"
        : score < 3
          ? "Moderate"
          : score < 4
            ? "Strong"
            : "Excellent";
  return { score, label };
}
