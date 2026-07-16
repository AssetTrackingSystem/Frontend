import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";


export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
      <main className="flex-1 grid place-items-center px-6 py-16">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-8">
            <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-3">
              // Credential Recovery
            </div>
            <h1 className="text-2xl font-medium text-zinc-100 mb-2">
              {sent ? "Recovery packet dispatched" : "Reset your password"}
            </h1>
            <p className="text-sm text-zinc-500 max-w-[36ch] mx-auto">
              {sent
                ? "If an account exists for that address, a secure reset link has been transmitted. Check your inbox."
                : "Enter the email tied to your terminal. We'll send a one-time reset link."}
            </p>
          </div>

          <div className="bg-ui-card ring-1 ring-white/5 p-8 rounded-xl">
            {!sent ? (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
                    Registered Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@firm.com"
                    className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-green text-zinc-950 text-sm font-semibold py-2.5 rounded ring-1 ring-brand-green hover:brightness-110 transition-all"
                >
                  Transmit Reset Link
                </button>

                <div className="pt-2 flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  <span>Encrypted · TLS 1.3</span>
                  <span>Expires · 30 min</span>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="rounded border border-brand-green/30 bg-brand-green/5 p-4 font-mono text-xs text-brand-green">
                  <div className="uppercase tracking-widest text-[10px] mb-1 text-brand-green/70">
                    // status
                  </div>
                  200 OK · Reset link sent to{" "}
                  <span className="text-zinc-100">{email || "your inbox"}</span>
                </div>
                <button
                  onClick={() => navigate({ to: "/reset-password" })}
                  className="w-full bg-zinc-900 text-zinc-200 text-sm font-medium py-2.5 rounded ring-1 ring-white/10 hover:bg-zinc-800 transition-colors"
                >
                  I have the reset link →
                </button>
                <button
                  onClick={() => setSent(false)}
                  className="w-full text-xs text-zinc-500 hover:text-zinc-300"
                >
                  Send to a different email
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 text-center text-xs text-zinc-500">
            Remembered it?{" "}
            <Link to="/login" className="text-zinc-100 hover:text-brand-green">
              Return to sign in
            </Link>
          </div>
        </div>
      </main>
  );
}
