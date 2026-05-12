"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl outline-none transition-all border border-brand-violet/40 dark:border-white/15 bg-brand-violet/5 dark:bg-white/5 text-foreground placeholder:text-muted-foreground/40 focus:border-brand-blue/70 dark:focus:border-brand-violet/60 focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-violet/10";

  const submitClass =
    "w-full py-3.5 rounded-xl cursor-pointer font-semibold text-sm text-white transition-all active:scale-[0.98] bg-gradient-to-r from-brand-rose via-brand-violet to-brand-blue shadow-[0_8px_25px_rgba(114,9,183,0.4)] dark:shadow-[0_8px_30px_rgba(114,9,183,0.5),0_0_60px_rgba(67,97,238,0.2)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(114,9,183,0.55)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center";
  const socialBtn =
    "group relative flex h-12 items-center justify-center rounded-xl border border-brand-violet/20 bg-brand-violet/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-violet/10";

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground flex items-center justify-center overflow-hidden p-4 transition-colors duration-300">

      {/* Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-violet/20 dark:bg-brand-violet/30 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-brand-blue/15 dark:bg-brand-blue/25 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-brand-rose/10 dark:bg-brand-rose/15 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-[420px]">

        {/* Brand */}
        <div className="text-center mb-10">
          <Link href="/">
            <div className="inline-flex flex-col items-center gap-2 cursor-pointer group">
              <span className="font-saira-stencil text-4xl tracking-[0.25em] bg-gradient-to-b from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent group-hover:to-foreground/70 transition-all">
                Persona
              </span>
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-brand-violet to-transparent" />
            </div>
          </Link>

          <p className="text-sm text-muted-foreground/70 mt-4 tracking-[0.08em] font-light">
            Create your account and begin.
          </p>
        </div>

        {/* Card */}
        <div className="p-px rounded-2xl bg-gradient-to-br from-brand-violet/50 via-brand-blue/30 to-brand-cyan/20 dark:from-brand-violet/60 dark:via-brand-blue/40 dark:to-brand-cyan/30 shadow-[0_0_50px_rgba(114,9,183,0.15)] dark:shadow-[0_0_80px_rgba(114,9,183,0.25),0_30px_60px_rgba(0,0,0,0.5)]">
          <div className="backdrop-blur-2xl rounded-2xl p-7 bg-white/80 dark:bg-[rgba(10,8,40,0.75)] relative overflow-hidden transition-all duration-300">

            <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-violet/30 dark:via-white/15 to-transparent" />

            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/20 dark:border-brand-cyan/15 bg-brand-blue/5 dark:bg-brand-cyan/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_6px_#4CC9F0]" />
                <span className="text-[10px] font-semibold tracking-[0.15em] text-brand-blue dark:text-brand-cyan uppercase">
                  Join Persona
                </span>
              </div>
            </div>

            {/* OAuth */}
            <div className="grid grid-cols-3 gap-3 mb-8">

              {/* Google */}
              <button
                type="button"
                className={`${socialBtn}`}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20 bg-[#4285F4] cursor-pointer" />

                <svg className="cursor-pointer relative z-10 w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </button>

              {/* Microsoft */}
              <button
                type="button"
                className={`${socialBtn}`}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20 bg-[#4285F4] cursor-pointer" />

                <svg className="cursor-pointer relative z-10 w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
                </svg>
              </button>

              {/* Apple */}
              <button
                type="button"
                className={`${socialBtn}`}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20 bg-[#4285F4] cursor-pointer" />

                <svg className="cursor-pointer relative z-10 w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05 1.78-3.22 1.76-1.14-.02-1.54-.73-2.86-.73-1.35 0-1.78.71-2.86.75-1.14.04-2.31-.91-3.3-1.9C2.8 18.15 1.5 14.9 1.5 12.06c0-4.66 3.16-7.11 6.2-7.11 1.58 0 2.92.93 3.86.93.9 0 2.37-.93 4.14-.93 2.14 0 4.14 1.14 5.2 2.72-4.13 1.94-3.46 7.42.45 8.94-.85 2.22-2.3 4.67-4.3 6.67zM12.03 5.07c.32-2.34 2.1-4.18 4.1-4.07.25 2.13-1.8 4.22-4.1 4.07z" />
                </svg>
              </button>

            </div>

            {/* Divider */}
            <div className="relative my-6 flex items-center">
              <div className="flex-1 border-t border-brand-violet/15 dark:border-white/8" />
              <span className="px-4 text-[10px] rounded-full uppercase tracking-[0.25em] font-semibold text-muted-foreground/60 bg-white/80 dark:bg-[rgba(10,8,40,0.75)]">
                or create manually
              </span>
              <div className="flex-1 border-t border-brand-violet/15 dark:border-white/8" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Full Name
                </label>
                <input type="text" placeholder="John Doe" className={inputClass} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input type="email" placeholder="name@persona.com" className={inputClass} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={inputClass}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              <button disabled={isLoading} className={submitClass}>
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Create Account →"
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center mt-6 text-sm text-muted-foreground">
              Already with us?{" "}
              <Link
                href="/auth/SignIn"
                className="font-semibold text-foreground underline underline-offset-4 decoration-brand-violet hover:text-brand-violet transition-all"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}