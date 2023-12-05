import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className=" bg-[url('/src/images/burger-with-fries-background.jpg')] bg-cover bg-no-repeat bg-blend-overlay bg-black/50 h-screen flex flex-col items-center justify-center">
      <Logo />
      <LoginForm />
    </div>
  );
}
