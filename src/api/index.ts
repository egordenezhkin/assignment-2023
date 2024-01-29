interface LoginResponse {
  data?: {
    avatar: string;
    name: string;
  };
  error?: string;
}

const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
      } else {
        resolve({ error: "Incorrect email or password" });
      }
    }, 1000);
  });
};

export default login;
