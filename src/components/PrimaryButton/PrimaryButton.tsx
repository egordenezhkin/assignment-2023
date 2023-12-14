import styles from "./PrimaryButton.module.css";

type ButtonProps = {
  onSubmit: () => void;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = ({
  onSubmit,
  children,
  loading = false,
  disabled,
  ...attributes
}: ButtonProps) => {
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
};

export default PrimaryButton;
