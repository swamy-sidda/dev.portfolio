import styles from "./Card.module.css";

function Card({
  children,
  title,
  subtitle,
  image,
  footer,
  onClick,
  className = ""
}) {
  return (
    <div
      className={`${styles.card} ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={title || "Card Image"}
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.body}>
        {title && (
          <h3 className={styles.title}>
            {title}
          </h3>
        )}

        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}

        {children}

        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;