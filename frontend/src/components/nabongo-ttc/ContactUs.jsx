import styles from "../../assets/styles/nabongo-ttc/ContactUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.grid}>
        <header className={styles.contactHeader}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.sectionDescription}>
            Reach out to Nabongo Teachers’ Training College in Bungoma.
          </p>
        </header>

        <address className={styles.contactItem}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.contactIcon} />
          <h3 className={styles.contactLabel}>Our Address</h3>
          <p className={styles.contactInfo}>
            P.O. BOX 1173-50200, Bungoma, Kenya
          </p>
        </address>

        <address className={styles.contactItem}>
          <FontAwesomeIcon icon={faPhoneAlt} className={styles.contactIcon} />
          <h3 className={styles.contactLabel}>Phone</h3>
          <p className={styles.contactInfo}>
            +254 711 574 423<br />
            +254 704 366 140
          </p>
          <p className={styles.contactInfo}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.inlineIcon} />{" "}
            info@nabongocollegesandschools.ac.ke
          </p>
          <p className={styles.contactInfo}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.inlineIcon} />{" "}
            nabongottc@yahoo.com
          </p>
        </address>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.637578320119!2d34.5506767!3d0.5453713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781d5c3731f2741%3A0x3430891839e4b255!2sNabongo%20Teachers%20Training%20College!5e0!3m2!1sen!2ske!4v1751794117056!5m2!1sen!2ske"
          title="Nabongo TTC Location"
          style={{ width: "100%", height: "100%", border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form className={styles.contactForm}>
        <header className={styles.formHeader}>
          <h2 className={styles.sectionTitle}>Send Us a Message</h2>
          <p className={styles.sectionDescription}>
            We’d love to hear from you. Fill out the form below and we’ll respond shortly.
          </p>
        </header>
        <fieldset className={styles.formGroup}>
          <legend className="sr-only">Your Information</legend>
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" name="full-name" required />

          <label htmlFor="phone-number">Phone Number</label>
          <input type="tel" id="phone-number" name="phone-number" required />

          <label htmlFor="email-address">Email Address</label>
          <input type="email" id="email-address" name="email-address" required />
        </fieldset>

        <fieldset className={styles.formGroup}>
          <legend className="sr-only">Your Message</legend>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default ContactUs;
