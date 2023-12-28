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

  const classes = {
    inputClassName: clsx(
      "py-[18px] pl-12 pr-6 rounded-md w-[400px] h-[55px]",
      "text-greyDark border-none",
      "bg-white placeholder:text-greyLight focus:ring focus:ring-primary focus:outline-none"
    ),
    iconClassName: "absolute w-5 h-5 ml-5 pointer-events-none",
    btnClassName: clsx(
      "flex items-center justify-center",
      "text-base leading-4 font-bold",
      "gap-1 h-[53px] w-[400px] mt-[18px]",
      "bg-primary  border border-primary rounded-md "
    ),
    loginFormClassName: clsx(
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
    <div className={classes.loginFormClassName}>
      <h1 className={classes.h1}>Bienvenue chez nous !</h1>
      <hr className={classes.hr} />
      <h2 className={classes.h2}>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          className={classes.inputClassName}
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom..."}
          required
          Icon={<BsPersonCircle className={classes.iconClassName} />}
        />
        <PrimaryButton
          label={"Accédez à votre espace"}
          className={classes.btnClassName}
          Icon={<MdNavigateNext className="w-md h-md" />}
        />
      </form>
    </div>
  );
}
