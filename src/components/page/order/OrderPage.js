import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { refreshPage } from "../../../utils";

export default function OrderPage() {
  const { username } = useParams();
  return (
    <div className=" bg-primary font-openSans h-screen flex flex-col items-center p-6">
      <div className="w-full ">
        <Navbar username={username} onClick={refreshPage} />
        <Main />
      </div>
    </div>
  );
}
