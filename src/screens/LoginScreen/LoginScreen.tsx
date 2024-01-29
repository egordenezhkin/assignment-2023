import styles from "./LoginScreen.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import login from "src/api";
import store from "src/store";
import Container from "src/components/Container";
import Logo from "src/components/Logo";
import Card from "src/components/Card";
import TitleDescription from "src/components/TitleDescription";
import PrimaryButton from "src/components/PrimaryButton";
import InputField from "src/components/InputField";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginScreen = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    resetField,
  } = useForm<LoginFormValues>();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<LoginFormValues> = async (data) => {
    setLoading(true);
    try {
      const response = await login(data);
      if (response.data) {
        store.login(response.data.name, response.data.avatar);
        console.log("User logged in:", response.data);
        navigate("/profile");
        setLoading(false);
      } else {
        console.error(response.error);
        setError("email", { message: response.error });
        setError("password", { message: " " });
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
                error={errors.password?.message}
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
});

export default LoginScreen;
