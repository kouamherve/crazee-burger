import React from "react";
import { Link } from "react-router-dom";

export default function Profile({ username }) {
  return (
    <div>
      <h1 className=" text-[16px] leading-[22px]">
        Bonjour <b className=" text-primary">{username}</b>
      </h1>
      <Link to="/">
        <button className=" text-[10px] leading-[14px] font-normal text-greyBlue hover:underline-offset-2">
          Déconnexion
        </button>
      </Link>
    </div>
  );
}
