import { motion } from "framer-motion";

import styles from "./About.module.css";

import profile from "../../../data/profile";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function About() {
  return (
    <section className={styles.about}>
      <div className="container">

        <SectionTitle
          title="About Me"
          subtitle="Get to know me better."
        />

        <div className={styles.aboutContent}>

          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={profile.profileImage}
              alt={profile.fullName}
            />
          </motion.div>

          <motion.div
            className={styles.textSection}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3>
              {profile.title}
            </h3>

            <p>
              {profile.about}
            </p>

            <div className={styles.infoGrid}>

              <div>
                <span>Name</span>
                <strong>{profile.fullName}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{profile.phone}</strong>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;