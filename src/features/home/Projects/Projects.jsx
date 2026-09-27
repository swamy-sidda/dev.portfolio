import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import styles from "./Projects.module.css";

import projects from "../../../data/projects";

import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">

        <SectionTitle
          title="Featured Projects"
          subtitle="Some of the projects I have built using Java, Spring Boot, React and SQL."
        />

        <div className={styles.grid}>

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
            >
              <Card
                image={project.image}
                title={project.title}
                subtitle={project.description}
              >

                <div className={styles.techStack}>

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

                <div className={styles.buttons}>

                  {project.github && (
                    <Button
                      href={project.github}
                      target="_blank"
                      variant="outline"
                    >
                      <FaGithub />
                      GitHub
                    </Button>
                  )}

                  {project.live && (
                    <Button
                      href={project.live}
                      target="_blank"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </Button>
                  )}

                </div>

              </Card>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;