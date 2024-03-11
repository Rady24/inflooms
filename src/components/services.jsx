import React from "react";
import Background from "../assets/Background-services.webp";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div
      id="services"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="h-screen"
    >
      <div className="container m-auto">
        <div className="text-6xl font-bold inline text-header">
          <p>Our Services</p>
        </div>
        <div className="p-12 pl-0 text-text text-2xl">
          <p>We always provide an unforgettable service</p>
        </div>

        <div className="flex flex-col space-y-4 py-4">
          <button
            type="button"
            className="inflooms-btn service-btn-dim flex flex-row items-center justify-between "
            onClick={() => navigate("/brand-marketing")}
          >
            <div className="flex justify-start items-start flex-col gap-4">
              BRAND & MARKETING
              <span className="inflooms-span">
                Boost sales by creating content
              </span>
            </div>
            <svg
              width="30"
              height="51"
              viewBox="0 0 30 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30 25.5L0 50.5V0.5L30 25.5Z" fill="white" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => navigate("/influence-marketing")}
            className="inflooms-btn service-btn-dim flex flex-row items-center justify-between"
          >
            <div className="flex justify-start items-start flex-col gap-4">
              INFLUENCE MARKETING
              <span className="inflooms-span">
                You set the targets and we bring the results
              </span>
            </div>
            <svg
              width="30"
              height="51"
              viewBox="0 0 30 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30 25.5L0 50.5V0.5L30 25.5Z" fill="white" />
            </svg>
          </button>

          <button
            type="button"
            className="inflooms-btn service-btn-dim flex flex-row items-center justify-between"
          >
            <div className="flex justify-start items-start flex-col gap-4">
              FOR INFLUENCERS
              <span className="inflooms-span">Save time and get brends </span>
            </div>
            <svg
              width="30"
              height="51"
              viewBox="0 0 30 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30 25.5L0 50.5V0.5L30 25.5Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
