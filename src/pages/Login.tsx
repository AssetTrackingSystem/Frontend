import { Link } from "@tanstack/react-router";
import { useState } from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

  <main className="max-w-screen-xl mx-auto px-6  grid lg:grid-cols-2 gap-16 items-center">
         <div className="relative z-10 max-w-md">
          <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-4">
            // Terminal · Access
          </div>
          <h2 className="text-3xl font-semibold text-zinc-100 leading-tight mb-4">
            "The best trading tool I've used since Bloomberg."
          </h2>
          <p className="text-sm text-zinc-500">
            — J. Hartley, Portfolio Manager, Meridian Capital
          </p>
        </div>
        <div className="bg-ui-card ring-1 ring-white/5 p-8 rounded-xl max-w-[460px] w-full mx-auto">
       <div className="text-center mb-10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-brand-green mb-3">
              // Session Init
            </div>
            <h1 className="text-2xl font-medium text-zinc-100 mb-2">Access Terminal</h1>
            <p className="text-sm text-zinc-500">Authorized access only</p>
          </div>

          <div className="bg-ui-card ring-1 ring-white/5 p-8 rounded-xl">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green transition-all"
                  placeholder="name@firm.com"
                />
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    Password
                  </label>
                  <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-brand-green hover:brightness-125">
                    Reset
                  </a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green transition-all"
                />
              </div>
              <label className="flex items-center gap-2 text-xs text-zinc-500 cursor-pointer">
                <input type="checkbox" className="accent-brand-green" />
                Keep session active for 30 days
              </label>
              <button
                type="submit"
                className="w-full bg-brand-green text-zinc-950 text-sm font-semibold py-2.5 rounded ring-1 ring-brand-green mt-2 hover:brightness-110 transition-all"
              >
                Initialize Session
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
           <div className="mt-6 text-center text-xs text-zinc-500">
            New to Quantum.Data?{" "}
            <Link to="/signup" className="text-zinc-100 hover:text-brand-green">
              Create an account
            </Link>
          </div>
        </div>
        </div>
      </main>

);
}
