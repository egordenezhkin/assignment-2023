import styles from "./LoginScreen.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "src/api";
import Container from "src/components/Container";
import Logo from "src/components/Logo";
import Card from "src/components/Card";
import TitleDescription from "src/components/TitleDescription";
import PrimaryButton from "src/components/PrimaryButton";
import InputField from "src/components/InputField";

interface LoginForm {
  email: string;
  password: string;
}

export function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    resetField,
  } = useForm<LoginForm>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const [loginErrorForPasswordField, setLoginErrorForPasswordField] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<LoginForm> = async (data) => {
    setLoading(true);
    try {
      const response = await login(data);
      if (response.data) {
        console.log("User logged in:", response.data);
        navigate("/profile");
        setLoading(false);
      } else {
        console.error(response.error);
        setLoginErrorForPasswordField(true);
        setError("email", { message: response.error });
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };

  const clearError = (name: "email" | "password") => {
    clearErrors(name);
    resetField(name);
    setLoginErrorForPasswordField(false);
  };

  return (
    <Container>
      <Logo />
      <Card>
        <div className={styles.card}>
          <TitleDescription />
          <form onSubmit={handleSubmit(submit)} className={styles.loginForm}>
            <div className={styles.textFields}>
              <InputField
                type="text"
                clearErrors={() => clearError("email")}
                placeholder="Email"
                disabled={loading}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+$/,
                    message: "Incorrect email",
                  },
                })}
                error={errors.email?.message}
              />
              <InputField
                type="password"
                clearErrors={() => clearError("password")}
                placeholder="Password"
                disabled={loading}
                {...register("password", {
                  required: "Password is required",
                })}
                error={errors.password?.message || loginErrorForPasswordField}
              />
            </div>
            <PrimaryButton
              onSubmit={() => submit}
              loading={loading}
              disabled={loading}
            >
              <span>Login</span>
              <img
                className="login-icon"
                alt="Arrow right icon"
                src="/assets/icons/i24-next.svg"
              />
            </PrimaryButton>
          </form>
        </div>
      </Card>
    </Container>
  );
}
