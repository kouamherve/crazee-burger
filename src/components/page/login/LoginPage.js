import Logo from "../../logo/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className=" border bg-red-500 h-screen flex flex-col items-center justify-center">
      <Logo />
      <LoginForm />
    </div>
  );
}
