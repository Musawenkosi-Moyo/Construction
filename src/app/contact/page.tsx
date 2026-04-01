import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <div className="container">
        <div className={styles.contactCard}>
          
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div>
              <h2 className={styles.contactInfoTitle}>Get In Touch</h2>
              <p className={styles.contactInfoDesc}>
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItemPre}>
                  <div className={styles.iconCircle}>📍</div>
                  <div>
                    <h4 className={styles.infoLabel}>Address</h4>
                    <p className={styles.infoText}>123 Builders Avenue,<br />Construct City, ST 12345</p>
                  </div>
                </div>
                <div className={styles.infoItemPre}>
                  <div className={styles.iconCircle}>📞</div>
                  <div>
                    <h4 className={styles.infoLabel}>Phone</h4>
                    <p className={styles.infoText}>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className={styles.infoItemPre}>
                  <div className={styles.iconCircle}>✉️</div>
                  <div>
                    <h4 className={styles.infoLabel}>Email</h4>
                    <p className={styles.infoText}>info@constructx.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.operatingHours}>
              <p className={styles.operatingLabel}>Operating Hours</p>
              <p className={styles.operatingValue}>Mon - Fri: 8am - 6pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactFormSection}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form className={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' } as any}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.label}>First Name</label>
                  <input type="text" id="firstName" className={styles.input} placeholder="John" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.label}>Last Name</label>
                  <input type="text" id="lastName" className={styles.input} placeholder="Doe" />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" rows={4} className={styles.textarea} style={{ resize: 'none' }} placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
