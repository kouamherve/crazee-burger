import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import clsx from "clsx";
import Button from "../../reusable-ui/Button";
import { TextInput } from "../../reusable-ui/TextInput";
import { authenticateUser } from "../../../api/user";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const classNames = {
    icon: "absolute w-5 h-5 ml-9 pointer-events-none",
    loginForm: clsx(
      "text-white text-center",
      "flex flex-col items-center justify-center",
      "mt-[52px] max-w-[400px]"
    ),
    h1: "text-5xl leading-[61px] font-amatic font-bold mb-6",
    hr: "border-primary border bg-primary w-full h-1",
    h2: "text-4xl font-amatic font-bold mt-10 leading-11",
  };

  const handleChange = async (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await authenticateUser(username);

    setUsername("");
    navigate(`order/${username}`);
  };

  return (
    <div className={classNames.loginForm}>
      <h1 className={classNames.h1}>Bienvenue chez nous !</h1>
      <hr className={classNames.hr} />
      <h2 className={classNames.h2}>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom..."}
          required
          Icon={<BsPersonCircle className={classNames.icon} />}
          version="normal"
        />
        <Button
          label={"Accédez à votre espace"}
          Icon={<MdNavigateNext className="w-1.5 h-1.5" />}
          version="normal"
        />
      </form>
    </div>
  );
}
