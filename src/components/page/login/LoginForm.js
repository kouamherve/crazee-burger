import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  return (
    <div className="text-white text-center pt-20">
      <h1 className=" text-[48px] leading-[61px] font-amatic font-bold">
        Bienvenue chez nous !
      </h1>
      <hr className=" border-[#F56A2C] border bg-[#F56A2C] w-[400px] h-1 mt-5 " />
      <h2 className=" text-4xl font-amatic font-bold mt-10 mb-[18px] leading-[46px]">
        Connectez-vous
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  );
}
