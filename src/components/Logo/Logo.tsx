import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <img
      className={styles.logo}
      alt="Mercury logo"
      src="/assets/Mercury-logotype.svg"
    />
  );
};

export default Logo;
