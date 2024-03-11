import React from "react";
import Logo from "../assets/Logo.webp";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    if (location.pathname !== "/") {
      navigate("/");
    }

    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center z-50 text-white py-4 px-4 bg-[rgba(0,0,0,0.2)] backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center text-text">
        <div className="text-lg font-bold">
          <img
            src={Logo}
            alt="Inflooms Influence Marketing Agency Logo"
            className="h-8"
          />
        </div>

        <ul className="hidden md:flex justify-center items-center gap-4 text-lg">
          {["home", "about", "services", "contact", "for-influencers"].map(
            (section) => (
              <li key={section} className="cursor-pointer">
                <button onClick={() => handleNavigate(section)} className="p-2">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Language Buttons and other elements */}
      </div>
    </nav>
  );
};

export default Navbar;
