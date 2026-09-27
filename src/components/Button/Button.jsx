import styles from "./Button.module.css";

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
  href,
  target = "_self"
}) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : ""}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;