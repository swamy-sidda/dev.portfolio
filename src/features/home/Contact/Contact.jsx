import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./Contact.module.css";

import profile from "../../../data/profile";
import socialLinks from "../../../data/socialLinks";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/Button/Button";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className="container">

        <SectionTitle
          title="Contact Me"
          subtitle="Have a project, opportunity or question? Feel free to contact me."
        />

        <div className={styles.contactContainer}>

          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className={styles.infoCard}>
              <FaEnvelope className={styles.icon} />

              <div>
                <h3>Email</h3>
                <p>{profile.email}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaPhone className={styles.icon} />

              <div>
                <h3>Phone</h3>
                <p>{profile.phone}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaMapMarkerAlt className={styles.icon} />

              <div>
                <h3>Location</h3>
                <p>{profile.location}</p>
              </div>
            </div>

          </motion.div>

          <motion.form
            className={styles.contactForm}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <Button
              href={socialLinks.email}
            >
              Send Message
            </Button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;