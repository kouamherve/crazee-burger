import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className=" space-y-24 bg-[url('/src/images/burger-with-fries-background.jpg')] bg-center bg-cover bg-no-repeat bg-blend-overlay bg-black/50 h-screen flex flex-col items-center justify-center">
      <Logo size={"scale-250"} />
      <LoginForm />
    </div>
  );
}
