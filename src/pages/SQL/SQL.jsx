import SQLTopics from "../../features/sql/SQLTopics/SQLTopics";

import styles from "./SQL.module.css";

function SQL() {
  return (
    <main className={styles.sqlPage}>
      <SQLTopics />
    </main>
  );
}

export default SQL;