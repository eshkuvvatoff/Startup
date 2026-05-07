import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-indigo/25 dark:bg-brand-indigo/10 backdrop-blur-md border-t border-white/10 px-8 py-6 shadow-[0_-15px_30px_-10px_rgba(58,12,163,0.5),0_-2px_10px_-5px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-">
        {/* Left Side */}
        <p className="text-[11px] font-medium tracking-[0.2em] text-brand-textc dark:hover:text-purple-400 hover:text-purple-800 cursor-pointer">
          © {new Date().getFullYear()} Aletheia. Connect through personality.
        </p>

        {/* Right Side - Links */}
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-[11px] font-medium tracking-[0.2em] text-brand-textc dark:hover:text-purple-400 hover:text-purple-800 cursor-pointer">
            About
          </Link>
          <Link href="/privacy" className="text-[11px] font-medium tracking-[0.2em] text-brand-textc dark:hover:text-purple-400 hover:text-purple-800 cursor-pointer">
            Privacy
          </Link>
          <Link href="/terms" className="text-[11px] font-medium tracking-[0.2em] text-brand-textc dark:hover:text-purple-400 hover:text-purple-800 cursor-pointer">
            Terms
          </Link>
          <Link href="/contact" className="text-[11px] font-medium tracking-[0.2em] text-brand-textc dark:hover:text-purple-400 hover:text-purple-800 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}