import styles from "./TitleDescription.module.css";

const TitleDescription = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Welcome, Stranger!</h1>
      <h2 className={styles.subtitle}>
        Please log in to this form if you wish to pass the exam.
      </h2>
    </div>
  );
};

export default TitleDescription;
