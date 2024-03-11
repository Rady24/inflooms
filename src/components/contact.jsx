import React from "react";
import Background from "../assets/Background-contact.webp";

const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
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
      <div className="container mx-auto ">
        <div className="text-6xl font-bold inline text-header">
          <p>Contact Us</p>
        </div>
        <div className="p-12 pl-0 text-text text-2xl">
          <p>Tell us about yourself and the project</p>
        </div>

        <form
          // method="POST"
          // action="https://getform.io/f/f505b87d-a0f0-4acd-b06a-7c823ea58414"
          className="flex flex-col max-w-[600px] w-full"
        >
          <input
            className="bg-[#ccd6f6] mb-4 p-2 rounded"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
          <input
            className="mb-4 p-2 bg-[#ccd6f6] rounded"
            type="text"
            placeholder="E-mail"
            name="email"
            required
          />
          <input
            className="mb-4 p-2 bg-[#ccd6f6] rounded"
            type="text"
            placeholder="Company"
            name="company"
            required
          />
          <p className=" pb-4 text-text text-2xl">Tell Us About Yourself</p>
          <select
            className="bg-[#ccd6f6] mb-4 p-2 rounded"
            name="position"
            required
          >
            <option className="bg-[#ccd6f6] p-2" value="brand">
              Brand
            </option>
            <option className="bg-[#ccd6f6] p-2" value="influencer">
              Influencer
            </option>
            <option className="bg-[#ccd6f6] p-2" value="creator">
              Creator
            </option>
            <option className="bg-[#ccd6f6] p-2" value="platform">
              Content Platform
            </option>
            <option className="bg-[#ccd6f6] p-2" value="owner">
              Business Owner
            </option>
            <option className="bg-[#ccd6f6] p-2" value="manager">
              Manager
            </option>
          </select>
          <textarea
            className="bg-[#ccd6f6] p-2 rounded"
            name="message"
            rows="6"
            placeholder="How we can help you?"
          ></textarea>
          <button className="inflooms-btn contact-btn-dim my-8">
            Lets Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
