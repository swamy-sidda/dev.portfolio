import styles from "./Loader.module.css";

function Loader({
  text = "Loading..."
}) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>

      <p className={styles.text}>
        {text}
      </p>
    </div>
  );
}

export default Loader;