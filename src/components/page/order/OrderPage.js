import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function OrderPage() {
  const { username } = useParams();
  return (
    <div className=" bg-primary h-screen flex flex-col items-center p-6">
      <div className="w-full ">
        <Navbar username={username} />
        <div className=" bg-blue h-[90vh]">Main</div>
      </div>
    </div>
  );
}
