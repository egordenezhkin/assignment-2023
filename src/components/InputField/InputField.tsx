import styles from "./InputField.module.css";
import { forwardRef } from "react";

type FieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: any;
  clearErrors?: () => void;
  disabled?: boolean;
};

const InputField = forwardRef<HTMLInputElement, FieldProps>(
  ({ error, clearErrors, id, disabled, ...rest }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          {...rest}
          ref={ref}
          className={error ? styles.errorControl : styles.input}
          disabled={disabled}
        />
        {error && (
          <button
            className={styles.icon}
            onClick={clearErrors}
            disabled={disabled}
          >
            <img alt="X icon" src="/assets/icons/i24-cross.svg" />
          </button>
        )}
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
    );
  }
);

export default InputField;
