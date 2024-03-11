import React, { useEffect, useState } from "react";
import Background from "../assets/Background-home.webp";
import { Link } from "react-scroll";

const Home = () => {
  const title = "Influence Marketing Agency".split(" ").map((word, index) => (
    <span key={index} className="block">
      {word}
    </span>
  ));
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setBgLoaded(true);
    img.src = Background;
  }, []);

  return (
    <div id="home">
      <div
        name="brand-introduction"
        style={{
          backgroundImage: bgLoaded ? `url(${Background})` : "none",
          backgroundColor: bgLoaded ? "transparent" : "#00090C",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="h-screen"
      >
        <div className="text-header container h-full flex flex-col justify-center items-start gap-10">
          <h1 className="font-bold text-header text-9xl text-left mb-4 pb-4">
            {title}
          </h1>
          <button className=" inflooms-btn home-btn-dim">
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              Get in touch now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
