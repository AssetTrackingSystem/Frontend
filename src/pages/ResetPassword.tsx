import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  const strength = useMemo(() => scorePassword(pw), [pw]);
  const match = pw.length > 0 && pw === confirm;

  return (
      <main className="flex-1 grid place-items-center px-6 py-16">
        <div className="w-full max-w-[440px]">
          <div className="text-center mb-8">
            <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-3">
              // Credential Rotation
            </div>
            <h1 className="text-2xl font-medium text-zinc-100 mb-2">
              {done ? "Credentials rotated" : "Set new password"}
            </h1>
            <p className="text-sm text-zinc-500 max-w-[38ch] mx-auto">
              {done
                ? "Your new key is active. All existing sessions have been terminated."
                : "Choose a strong password. Minimum 8 characters, mixed case, one number."}
            </p>
          </div>

          <div className="bg-ui-card ring-1 ring-white/5 p-8 rounded-xl">
            {!done ? (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!match || strength.score < 2) return;
                  setDone(true);
                }}
              >
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
                    New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
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

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className={`w-full bg-zinc-950 border rounded px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 transition-all ${
                      confirm.length === 0
                        ? "border-white/10 focus:ring-brand-green focus:border-brand-green"
                        : match
                          ? "border-brand-green/40 focus:ring-brand-green"
                          : "border-brand-red/40 focus:ring-brand-red"
                    }`}
                  />
                  {confirm.length > 0 && !match && (
                    <div className="mt-1.5 text-[10px] font-mono uppercase tracking-widest text-brand-red">
                      // mismatch · passwords do not align
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!match || strength.score < 2}
                  className="w-full bg-brand-green text-zinc-950 text-sm font-semibold py-2.5 rounded ring-1 ring-brand-green mt-2 hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Rotate Credentials
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="rounded border border-brand-green/30 bg-brand-green/5 p-4 font-mono text-xs text-brand-green">
                  <div className="uppercase tracking-widest text-[10px] mb-1 text-brand-green/70">
                    // status
                  </div>
                  200 OK · Password updated · All sessions revoked
                </div>
                <button
                  onClick={() => navigate({ to: "/login" })}
                  className="w-full bg-brand-green text-zinc-950 text-sm font-semibold py-2.5 rounded ring-1 ring-brand-green hover:brightness-110 transition-all"
                >
                  Sign in with new password
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
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
