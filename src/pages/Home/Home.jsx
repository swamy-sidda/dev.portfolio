import Hero from "../../features/home/Hero/Hero";
import About from "../../features/home/About/About";
import Skills from "../../features/home/Skills/Skills";
import Education from "../../features/home/Education/Education";
import Projects from "../../features/home/Projects/Projects";
import Contact from "../../features/home/Contact/Contact";

import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.home}>
      <Hero />

      <About />

      <Skills />

      <Education />

      <Projects />

      <Contact />
    </main>
  );
}

export default Home;