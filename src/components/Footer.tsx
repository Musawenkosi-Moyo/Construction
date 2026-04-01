import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <Link href="/" className={styles.footerLogo}>
              <div className={styles.logoIcon}>
                C
              </div>
              <span className={styles.projectName}>
                Construct<span className="text-primary">X</span>
              </span>
            </Link>
            <p className={styles.footerDescription}>
              We build the future with precision, durability, and unmatched expertise. From residential to commercial projects, we turn your vision into reality.
            </p>
          </div>
          
          <div>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Home</Link></li>
              <li><Link href="/#services" className={styles.footerLink}>Services</Link></li>
              <li><Link href="/#projects" className={styles.footerLink}>Projects</Link></li>
              <li><Link href="/#about" className={styles.footerLink}>About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.footerHeading}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>123 Builders Avenue, Construct City, ST 12345</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>info@constructx.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} ConstructX. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            {/* Social Placeholders */}
            <div className={styles.socialIcon}>
              X
            </div>
            <div className={styles.socialIcon}>
              in
            </div>
            <div className={styles.socialIcon}>
              ig
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
