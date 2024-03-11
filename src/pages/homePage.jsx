import React, { useEffect } from "react";
import Home from "../components/home";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
