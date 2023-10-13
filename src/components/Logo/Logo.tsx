import styles from "./Logo.module.css";

export function Logo() {
  return (
    <img
      className={styles.logo}
      alt="Mercury logo"
      src="/assets/Mercury-logotype.svg"
    />
  );
}
