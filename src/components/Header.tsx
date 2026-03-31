import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-dark-hover/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-hover transition-colors">
            C
          </div>
          <span className="text-2xl font-black text-dark dark:text-light tracking-tight">
            Construct<span className="text-primary">X</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-semibold text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#projects" className="text-sm font-semibold text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/#about" className="text-sm font-semibold text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/contact" className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-dark dark:text-light">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
