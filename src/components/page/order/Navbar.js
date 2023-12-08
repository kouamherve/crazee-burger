import React from "react";
import Logo from "../../reusable-ui/Logo";
import { Link } from "react-router-dom";

export default function Navbar({ username }) {
  return (
    <nav className="px-5 bg-green w-full flex items-center justify-between">
      <Logo />
      <div>
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </nav>
  );
}
