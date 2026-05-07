import Link from "next/link";

export default function Footer() {
  const linkStyle = "text-[11px] font-medium tracking-[0.2em] text-brand-textc dark:hover:text-purple-400 hover:text-purple-800 transition-colors cursor-pointer";

  return (
    <footer className="mt-[800px] w-full bg-brand-indigo/25 dark:bg-brand-indigo/10 backdrop-blur-md border-t border-white/10 px-6 py-10 md:px-8 md:py-6 shadow-[0_-15px_30px_-10px_rgba(58,12,163,0.5),0_-2px_10px_-5px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center md:text-left">
        
        <p className={linkStyle}>
          © {new Date().getFullYear()} ALETHEIA. CONNECT THROUGH PERSONALITY.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link href="/about" className={linkStyle}>About</Link>
          <Link href="/privacy" className={linkStyle}>Privacy</Link>
          <Link href="/terms" className={linkStyle}>Terms</Link>
          <Link href="/contact" className={linkStyle}>Contact</Link>
        </div>
        
      </div>
    </footer>
  );
}
