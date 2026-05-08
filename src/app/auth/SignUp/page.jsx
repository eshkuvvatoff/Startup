// src/app/auth/SignUp/page.jsx
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#020627] font-sans flex items-center justify-center overflow-hidden p-4">
      
      {/* Orqa fondagi sharlar (Orbs) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(114,9,183,0.35)_0%,transparent_70%)] animate-float pointer-events-none opacity-70" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(67,97,238,0.3)_0%,transparent_70%)] animate-float-delayed pointer-events-none opacity-60" />
      <div className="absolute top-1/2 right-[20%] w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(247,37,133,0.2)_0%,transparent_70%)] animate-float-slow pointer-events-none opacity-50" />

      <div className="relative z-10 w-full max-w-[400px] animate-fade-up">
        
        {/* Logo qismi */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium tracking-[0.2em] bg-linear-to-br from-white via-violet-400 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
            ALETHEIA
          </h1>
          <p className="text-[13px] text-white/35 mt-1.5 tracking-wider">Begin your journey</p>
        </div>

        {/* Card */}
        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[20px] p-8 shadow-2xl relative overflow-hidden">
          {/* Tepasidagi chiziq effekti */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-600/60 to-blue-500/60" />

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-2.5 p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/80 text-sm transition-all hover:bg-white/[0.08] hover:border-white/15 hover:-translate-y-0.5 shadow-sm">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[11px] text-white/20 tracking-widest">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Inputlar */}
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-white/40 uppercase tracking-wider px-1">Full name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/90 text-sm outline-none transition-all focus:border-blue-500/50 focus:bg-blue-500/10 focus:ring-4 focus:ring-blue-500/10" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-white/40 uppercase tracking-wider px-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/90 text-sm outline-none transition-all focus:border-blue-500/50 focus:bg-blue-500/10 focus:ring-4 focus:ring-blue-500/10" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-white/40 uppercase tracking-wider px-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/90 text-sm outline-none transition-all focus:border-blue-500/50 focus:bg-blue-500/10 focus:ring-4 focus:ring-blue-500/10" />
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-violet-700 text-white text-sm font-semibold tracking-wide transition-all hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(67,97,238,0.4)] active:scale-[0.98]">
              Create Account →
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-5 text-[12px] text-white/30">
            Already have an account? <Link href="/auth/SignIn" className="text-violet-300 font-medium hover:text-violet-200 transition-colors ml-1">Sign in</Link>
          </div>
        </div>

        {/* Terms */}
        <p className="text-[11px] text-white/20 text-center mt-6 leading-relaxed">
          By signing up you agree to our <Link href="/terms" className="underline text-white/30">Terms</Link> and <Link href="/privacy" className="underline text-white/30">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
