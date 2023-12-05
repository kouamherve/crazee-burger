import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

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
    <div className="text-white text-center pt-20 flex flex-col items-center justify-center">
      <h1 className=" text-[48px] leading-[61px] font-amatic font-bold">
        Bienvenue chez nous !
      </h1>
      <hr className=" border-[#F56A2C] border bg-[#F56A2C] w-[400px] h-1 mt-5 " />
      <h2 className=" text-4xl font-amatic font-bold mt-10 mb-[18px] leading-[46px]">
        Connectez-vous
      </h2>
      <form onSubmit={handleSubmit} className=" max-w-md">
        <div className="relative text-gray-400 focus-within:text-gray-600 flex items-center gap-1">
          <FaRegUserCircle className=" absolute w-[15px] h-[15px] ml-5 pointer-events-none" />
          <input
            type="text"
            placeholder="Entrez votre prénom..."
            required
            value={inputValue}
            onChange={handleChange}
            className=" py-[18px] pl-12 pr-6 bg-white rounded-[5px] w-[400px] h-[55px] placeholder:text-gray-300 border-none focus:ring-2 focus:text-gray-500"
          />
        </div>
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  );
}
