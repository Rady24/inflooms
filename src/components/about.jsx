import React from "react";
import Background from "../assets/Background-about.webp";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center", // This will vertically align your content in the center
        justifyContent: "center", // This will horizontally align your content in the center
      }}
      className="h-screen"
    >
      <div className="container m-auto">
        <div className="text-6xl  font-bold inline text-header">
          <p> About Us</p>
        </div>
        <div className="p-12 pl-0 text-text text-2xl">
          <p>
            <span className="text-3xl text-primary pr-2">
              Inflooms Marketing Agency
            </span>
            is a specialized company that provides marketing and advertising
            services to assist brands and organizations in achieving their
            goals. Our agency engage in the planning, development, and
            implementation of marketing strategies that contribute to brand
            recognition, increased sales, and improved interaction with the
            target audience.
          </p>
          <p className="pt-12">
            By working with our marketing agency, companies gain access to the
            experience and expertise of professionals in the field of marketing.
            Our agency possesses a wide range of knowledge, from marketing
            research and strategic planning to the development of creative
            concepts and management of advertising campaigns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
