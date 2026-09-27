import { motion } from "framer-motion";

import styles from "./Education.module.css";

import education from "../../../data/education";

import Card from "../../../components/Card/Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function Education() {
  return (
    <section className={styles.education}>
      <div className="container">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and educational qualifications."
        />

        <div className={styles.grid}>
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card
                title={item.degree}
                subtitle={item.college}
              >
                <div className={styles.details}>
                  <p>
                    <strong>Duration :</strong> {item.duration}
                  </p>

                  {item.percentage && (
                    <p>
                      <strong>Percentage :</strong> {item.percentage}
                    </p>
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

export default Education;