import React from "react";
import { useNavigate } from "react-router-dom";

const ContactButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/#contact");
  };
  return (
    <div>
      <button onClick={handleClick} className=" inflooms-btn home-btn-dim">
        Get in touch now
      </button>
    </div>
  );
};

export default ContactButton;
