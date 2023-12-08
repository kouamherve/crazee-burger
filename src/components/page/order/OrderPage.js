import React from "react";
import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  const { username } = useParams();
  return (
    <div className=" bg-primary h-screen p-5 flex flex-col items-center">
      <div className="w-full h-[90%]">
        <nav className=" bg-green w-full">
          Navbar
          <div>LeftSide</div>
          <div>
            RightSide
            <h1>Bonjour {username}</h1>
            <Link to="/">
              <button>Déconnexion</button>
            </Link>
          </div>
        </nav>
        <div className=" bg-blue h-full">Main</div>
      </div>
    </div>
  );
}
