import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const inputClassName =
    "py-[18px] pl-12 pr-6 bg-white rounded-[5px] w-[400px] h-[55px] placeholder:text-greyLight border-none focus:ring-2 focus:text-greyMedium";
  const iconClassName = "absolute w-md h-md ml-5 pointer-events-none";
  const buttonClassName =
    "flex items-center justify-center gap-xxs text-[15px] leading-[15px] font-bold bg-primary h-[53px] border border-primary rounded-round w-[400px] mt-[18px]";

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  return (
    <div className="text-white text-center mt-xl flex flex-col items-center justify-center max-w-[400px]">
      <h1 className=" text-P5 leading-[61px] font-amatic font-bold">
        Bienvenue chez nous !
      </h1>
      <hr className="border-primary border bg-primary w-full h-xxs mt-lg " />
      <h2 className="text-P4 font-amatic font-bold mt-10 mb-md leading-[46px]">
        Connectez-vous
      </h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          className={inputClassName}
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom..."}
          required
          Icon={<FaRegUserCircle className={iconClassName} />}
        />
        <PrimaryButton
          label={"Accédez à votre espace"}
          className={buttonClassName}
          Icon={<MdNavigateNext className=" w-md h-md" />}
        />
      </form>
    </div>
  );
}
