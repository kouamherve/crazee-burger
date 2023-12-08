import React from "react";
import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  const { username } = useParams();
  return (
    <div className=" bg-primary h-screen flex flex-col items-center p-6">
      <div className="w-full ">
        <nav className=" bg-green w-full flex items-center justify-between">
          <div>LeftSide</div>
          <div>
            <h1>Bonjour {username}</h1>
            <Link to="/">
              <button>Déconnexion</button>
            </Link>
          </div>
        </nav>
        <div className=" bg-blue h-[90vh]">Main</div>
      </div>
    </div>
  );
}
