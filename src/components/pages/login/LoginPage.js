import clsx from "clsx";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";

export default function LoginPage() {
  const loginPageClassName = clsx(
    "flex flex-col items-center justify-center",
    "space-y-24 h-screen bg-loginPage",
    "bg-center bg-cover bg-no-repeat bg-blend-overlay bg-black/50"
  );

  return (
    <motion.div
      initial={{}}
      animate={{}}
      transition={{}}
      className={loginPageClassName}
    >
      <Logo size={"scale-250"} />
      <LoginForm />
    </motion.div>
  );
}
