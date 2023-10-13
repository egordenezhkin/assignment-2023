import styles from "./ProfileScreen.module.css";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { Card } from "../../components/Card";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProfileScreen() {
  const [loading, setLoading] = useState(false);

  const logout = () => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(navigate("/"));
        console.log(`You've been successfully logged out`);
        setLoading(false);
      }, 1000);
    });
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <Card>
        <div className={styles.card}>
          <div className={styles.avatarWithTitle}>
            <img
              className={styles.avatar}
              src="/assets/avatar.jpeg"
              alt="avatar"
            />
            <h1 className={styles.title}>That’s it, Elon!</h1>
          </div>
          <PrimaryButton
            onSubmit={() => logout()}
            loading={loading}
            disabled={loading}
          >
            <img
              className="logout-icon"
              alt="Logout icon"
              src="/assets/icons/i24-logout.svg"
            />
            <span className="logout-text">Logout</span>
          </PrimaryButton>
        </div>
      </Card>
    </Container>
  );
}
