import { motion } from "framer-motion";

import styles from "./SQLTopics.module.css";

import sqlTopics from "../../../data/sqlTopics";

import Card from "../../../components/Card/Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function SQLTopics() {
  return (
    <section className={styles.sql}>
      <div className="container">

        <SectionTitle
          title="SQL Roadmap"
          subtitle="Database concepts and SQL topics that I have learned."
        />

        <div className={styles.grid}>

          {sqlTopics.map((category, index) => (

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

export default SQLTopics;