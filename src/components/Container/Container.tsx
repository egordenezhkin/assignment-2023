import { PropsWithChildren } from "react";
import styles from "./Container.module.css";

type ContainerProps = {};

const Container = (props: PropsWithChildren<ContainerProps>) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>{props.children}</div>
    </div>
  );
};

export default Container;
