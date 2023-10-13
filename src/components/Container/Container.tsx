import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container(props: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>{props.children}</div>
    </div>
  );
}
