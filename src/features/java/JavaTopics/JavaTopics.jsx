import { motion } from "framer-motion";

import styles from "./JavaTopics.module.css";

import javaTopics from "../../../data/javaTopics";

import Card from "../../../components/Card/Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function JavaTopics() {
  return (
    <section className={styles.java}>
      <div className="container">

        <SectionTitle
          title="Java Roadmap"
          subtitle="Core Java and Advanced Java topics that I have learned."
        />

        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/java/java-banner.png"
            alt="Java Programming"
          />
        </motion.div>

        <div className={styles.grid}>

          {javaTopics.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
            >

              <Card title={category.title}>

                <ul className={styles.topicList}>

                  {category.topics.map((topic) => (

                    <li key={topic}>
                      {topic}
                    </li>

                  ))}

                </ul>

              </Card>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default JavaTopics;