import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          EconScholar AI
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium">

          <Link
            href="/general"
            className="hover:text-blue-300 transition"
          >
            General
          </Link>

          <Link
            href="/field"
            className="hover:text-blue-300 transition"
          >
            Fields
          </Link>

          <Link
            href="/compare"
            className="hover:text-blue-300 transition"
          >
            Compare
          </Link>

          <Link
            href="/deep-analysis"
            className="hover:text-blue-300 transition"
          >
            Deep Analysis
          </Link>

          <Link
            href="/history"
            className="hover:text-blue-300 transition"
          >
            History
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-300 transition"
          >
            About
          </Link>

        </div>

        {/* Future Login Button */}
        <button
          className="rounded-lg border border-white px-4 py-2 text-sm hover:bg-white hover:text-slate-900 transition"
        >
          Sign In
        </button>

      </div>
    </nav>
  );
}
