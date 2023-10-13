import styles from "./PrimaryButton.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onSubmit: () => void;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export function PrimaryButton({
  onSubmit,
  children,
  loading = false,
  disabled,
  ...attributes
}: Props) {
  return (
    <button
      className={styles.button}
      onClick={onSubmit}
      disabled={disabled}
      {...attributes}
    >
      {!loading ? (
        children
      ) : (
        <img
          className={styles.loaderIcon}
          alt="Loader icon"
          src="/assets/i24-loader.svg"
        />
      )}
    </button>
  );
}
