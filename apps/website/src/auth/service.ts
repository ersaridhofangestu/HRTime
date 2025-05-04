import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

interface LoginParams {
  email: string;
  password: string;
}

export const handleLogin = async (
  { email, password }: LoginParams,
  success: (msg: string) => void,
  error: (msg: string) => void,
) => {
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
    success("Login berhasil!");
    setTimeout(() => (window.location.href = "/dashboard"), 3000);
  } catch (_) {
    error("Login gagal. Periksa kembali email dan password.");
  }
};
