import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Site Hero"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={`container ${styles.heroContent}`}>
          <div>
            <h1 className={styles.heroTitle}>
              Building Your <br />
              <span className="text-primary">Vision</span> With Precision
            </h1>
            <p className={styles.heroDescription}>
              We are a premium construction company dedicated to creating
              enduring structures with uncompromising quality, innovative design, and expert craftsmanship.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <Link href="#projects" className="btn btn-outline">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>What We Do</span>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionDescription}>Comprehensive construction solutions tailored to meet the highest standards of safety, durability, and aesthetics.</p>
          </div>
          
          <div className={styles.servicesGrid}>
            {[
              { title: "Commercial Construction", icon: "🏢", desc: "State-of-the-art office spaces, retail centers, and industrial facilities built for maximum efficiency." },
              { title: "Residential Development", icon: "🏡", desc: "Custom luxury homes and modern residential complexes designed for comfort and elegance." },
              { title: "Renovation & Remodeling", icon: "🔨", desc: "Transforming existing spaces with modern upgrades, structural improvements, and premium finishes." }
            ].map((service, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h4 className="font-bold" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h4>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className={styles.projectsHeader}>
            <div>
              <span className={styles.sectionSubtitle}>Our Work</span>
              <h2 className={styles.sectionTitle} style={{ color: 'var(--white)' }}>Featured Projects</h2>
            </div>
            <Link href="/projects" style={{ color: 'var(--primary)', fontWeight: '600', borderBottom: '1px solid var(--primary)', paddingBottom: '2px' }}>
              View All Projects &rarr;
            </Link>
          </div>

          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2262&auto=format&fit=crop" alt="The Apex Tower" fill className={styles.projectImage} />
              <div className={styles.projectOverlay} />
              <div className={styles.projectContent}>
                <span className={styles.projectCategory}>Commercial</span>
                <h4 className={styles.projectTitle}>The Apex Tower</h4>
                <p className={styles.projectDesc}>A 45-story modern office space.</p>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Luxury Villa Estate" fill className={styles.projectImage} />
              <div className={styles.projectOverlay} />
              <div className={styles.projectContent}>
                <span className={styles.projectCategory}>Residential</span>
                <h4 className={styles.projectTitle}>Luxury Villa Estate</h4>
                <p className={styles.projectDesc}>Exclusive 12-home gated community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.aboutImage}>
                <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop" alt="Construction Team" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionSubtitle}>About Us</span>
              <h2 className={styles.sectionTitle}>Building Excellence Since 1995.</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--gray-600)' }}>
                For over two decades, ConstructX has been at the forefront of the construction industry. We blend traditional craftsmanship with cutting-edge technology and sustainable practices.
              </p>
              <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: '1.7', color: 'var(--gray-600)' }}>
                Our team of dedicated professionals ensures every project is executed with flawless precision, on time and within budget, forging a reputation built on trust and reliability.
              </p>
              
              <div className={styles.aboutStats}>
                <div>
                  <h4 className={styles.statNumber}>150+</h4>
                  <p className={styles.statLabel}>Projects Completed</p>
                </div>
                <div>
                  <h4 className={styles.statNumber}>25</h4>
                  <p className={styles.statLabel}>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Begin Your Dream Project <span className="text-white">With Us!</span>
              </h2>
              <div className={styles.ctaForm}>
                <input 
                  type="text" 
                  placeholder="Enter your quick message here..." 
                  className={styles.ctaInput} 
                />
                <button type="button" className={styles.ctaButton}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
