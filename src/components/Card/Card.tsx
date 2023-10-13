import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
};

export function Card(props: CardProps) {
  return <div className={styles.card}>{props.children}</div>;
}
