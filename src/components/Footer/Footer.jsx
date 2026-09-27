import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

import styles from "./Footer.module.css";

import profile from "../../data/profile";
import socialLinks from "../../data/socialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.left}>
            <h2>{profile.brandName}</h2>

            <p>{profile.title}</p>

            <p>{profile.location}</p>
          </div>

          <div className={styles.center}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href={socialLinks.email}>
              <FaEnvelope />
            </a>
          </div>

          <div className={styles.right}>
            <button onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} {profile.brandName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;