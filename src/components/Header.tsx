import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            C
          </div>
          <span>
            Construct<span className="text-primary">X</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/#services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/#projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="/#about" className={styles.navLink}>
            About Us
          </Link>
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <button className={styles.mobileMenuBtn}>
          <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
