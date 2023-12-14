import { PropsWithChildren } from "react";
import styles from "./Card.module.css";

type CardProps = {};

const Card = (props: PropsWithChildren<CardProps>) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
