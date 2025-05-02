import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

interface LoginParams {
  email: string;
  password: string;
}

export const handleLogin = async ({ email, password }: LoginParams) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    localStorage.setItem(
      "user_email",
      JSON.stringify(userCredential.user.email),
    );
  } catch (error) {
    console.error("Login error:", error);
  }
};
