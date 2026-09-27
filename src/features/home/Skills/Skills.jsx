import { motion } from "framer-motion";

import styles from "./Skills.module.css";

import skills from "../../../data/skills";

import Card from "../../../components/Card/Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function Skills() {

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: skills.programmingLanguages,
    },
    {
      title: "Backend",
      skills: skills.backend,
    },
    {
      title: "Frontend",
      skills: skills.frontend,
    },
    {
      title: "Databases",
      skills: skills.databases,
    },
    {
      title: "Tools",
      skills: skills.tools,
    },
    {
      title: "Concepts",
      skills: skills.concepts,
    },
  ];

  return (
    <section className={styles.skills}>
      <div className="container">

        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I use to build scalable applications."
        />

        <div className={styles.grid}>

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card title={category.title}>

                <div className={styles.skillList}>

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={styles.skill}
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </Card>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;