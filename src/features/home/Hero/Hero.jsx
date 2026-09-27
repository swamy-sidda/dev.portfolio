import { FaDownload, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";

import profile from "../../../data/profile";
import Button from "../../../components/Button/Button";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">

        <div className={styles.heroContent}>

          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className={styles.greeting}>
              Hello, I'm
            </p>

            <h2 className={styles.name}>
              {profile.fullName}
            </h2>

            <h3 className={styles.role}>
              <Typewriter
                words={[
                  "Java Application Developer",
                  "Spring Boot Developer",
                  "Backend Developer",
                  "React Learner"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h3>

            <p className={styles.description}>
              {profile.tagline}
            </p>

            <div className={styles.buttons}>

              <Button href={profile.resume}>
                <FaDownload />
                Resume
              </Button>

              <Button
                href={`mailto:${profile.email}`}
                variant="secondary"
              >
                <FaEnvelope />
                Contact Me
              </Button>

            </div>

            <div className={styles.techStack}>

              <span>Java</span>
              <span>Spring Boot</span>
              <span>Hibernate</span>
              <span>JPA</span>
              <span>SQL</span>
              <span>React</span>

            </div>

          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <img
              src="/images/hero/developer.png"
              alt="Java Application Developer"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;