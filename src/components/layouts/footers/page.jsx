import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-8 py-6 mt-[900px] bg-background/20 backdrop-blur-xl border-b-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        {/* Left Side */}
        <p>
          © {new Date().getFullYear()} Aletheia. Connect through personality.
        </p>

        {/* Right Side - Links */}
        <div className="flex items-center gap-6">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}