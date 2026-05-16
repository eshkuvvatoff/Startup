import Link from "next/link";
import { cn } from "@/lib/utils";

const primaryClass =
  "inline-flex w-full sm:w-auto min-w-[160px] items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-all active:scale-[0.98] bg-gradient-to-r from-brand-rose via-brand-violet to-brand-blue shadow-[0_8px_25px_rgba(114,9,183,0.4)] dark:shadow-[0_8px_30px_rgba(114,9,183,0.5),0_0_60px_rgba(67,97,238,0.2)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(114,9,183,0.55)]";

const outlineClass =
  "inline-flex w-full sm:w-auto min-w-[160px] items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-foreground transition-all active:scale-[0.98] border border-brand-violet/30 dark:border-white/15 bg-brand-violet/5 dark:bg-white/5 backdrop-blur-sm hover:bg-brand-violet/15 dark:hover:bg-white/10 hover:border-brand-violet/50 dark:hover:border-white/25 hover:-translate-y-0.5 shadow-sm";

export function AuthPrimaryButton({ href, children, className }) {
  return (
    <Link href={href} className={cn(primaryClass, className)}>
      {children}
    </Link>
  );
}

export function AuthOutlineButton({ href, children, className }) {
  return (
    <Link href={href} className={cn(outlineClass, className)}>
      {children}
    </Link>
  );
}

export function AuthEntryButtons({ className }) {
  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-4", className)}>
      <AuthPrimaryButton href="/auth/SignIn">Sign In →</AuthPrimaryButton>
      <AuthOutlineButton href="/auth/SignUp">Sign Up</AuthOutlineButton>
    </div>
  );
}
