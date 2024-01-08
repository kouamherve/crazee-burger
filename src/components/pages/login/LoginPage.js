import clsx from "clsx";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  const loginPageClassName = clsx(
    "flex flex-col items-center justify-center",
    "space-y-24 h-screen",
    "bg-[url('/src/background-image/burger-with-fries-background.jpg')]",
    "bg-center bg-cover bg-no-repeat bg-blend-overlay bg-black/50"
  );

  return (
    <div className={loginPageClassName}>
      <Logo size={"scale-250"} />
      <LoginForm />
    </div>
  );
}
