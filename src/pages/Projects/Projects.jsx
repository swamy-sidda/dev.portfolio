import ProjectsSection from "../../features/home/Projects/Projects";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <main className={styles.projectsPage}>
      <ProjectsSection />
    </main>
  );
}

export default Projects;