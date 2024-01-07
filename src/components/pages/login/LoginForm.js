import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import clsx from "clsx";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const classNames = {
    input: clsx(
      "py-[18px] pl-20 pr-6 rounded-md w-[400px] h-[55px]",
      "text-greyDark border-none",
      "bg-white placeholder:text-greyMedium focus:outline-none"
    ),
    div: clsx(
      "relative text-greySemiDark focus-within:text-gray-600",
      "flex items-center gap-1"
    ),
    icon: "absolute w-5 h-5 ml-9 pointer-events-none",
    btn: clsx(
      "flex items-center justify-center",
      "text-base leading-4 font-bold",
      "gap-1 h-[53px] w-[400px] mt-[18px]",
      "bg-primary  border border-primary rounded-md "
    ),
    loginForm: clsx(
      "text-white text-center",
      "flex flex-col items-center justify-center",
      "mt-[52px] max-w-[400px]"
    ),
    h1: "text-5xl leading-[61px] font-amatic font-bold mb-8",
    hr: "border-primary border bg-primary w-full h-1",
    h2: "text-4xl font-amatic font-bold mt-10 leading-11",
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  return (
    <div className={classNames.loginForm}>
      <h1 className={classNames.h1}>Bienvenue chez nous !</h1>
      <hr className={classNames.hr} />
      <h2 className={classNames.h2}>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          divClassName={classNames.div}
          className={classNames.input}
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom..."}
          required
          Icon={<BsPersonCircle className={classNames.icon} />}
        />
        <PrimaryButton
          label={"Accédez à votre espace"}
          className={classNames.btn}
          Icon={<MdNavigateNext className="w-md h-md" />}
        />
      </form>
    </div>
  );
}
