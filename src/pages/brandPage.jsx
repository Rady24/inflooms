import React, { useEffect, useState } from "react";
import Background from "../assets/Background-brand.png";
import Background1 from "../assets/Background-brand0ffer.png";
import ContactButton from "../components/ContactButton";

const BrandPage = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setBgLoaded(true);
    img.src = Background;
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
        <div>
          <h1 className="font-bold text-header text-9xl text-left mb-8 pb-4 max-w-screen-xl">
            BRAND <span className="text-primary">&</span> MARKETING
          </h1>

          <p className=" text-header text-2xl text-left mb-4 pb-4 max-w-screen-md">
            If you are looking for quality advertising for your product, you are
            in the right place. Inflooms Agency offers a range of services and
            strategies for brand promotion.
          </p>
        </div>
      </div>
      <div
        name="brand-services"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="h-screen"
      >
        <div className="max-w-screen-xl">
          <h2 className="text-header text-4xl text-left mb-8 p-4">
            WE ARE PLEASED TO OFFER YOU THE FOLOWING SERVICES:
          </h2>

          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">Market Research:</span> Inflooms
            Agency will help conduct market research to identify the target
            audience, competitors, and current trends.
          </p>
          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">Brand Strategy Development:</span> We
            will help define the unique characteristics of your brand and
            develop a strategy that highlights its values and attracts
            consumers.
          </p>
          <p className="text-header text-xl text-left mb-8 p-4">
            <span className="text-primary">Advertising and Promotion:</span>{" "}
            Inflooms Agency will develop advertising campaigns and promotion
            strategies that will increase brand awareness and attract new
            customers.
          </p>
          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">Digital Marketing:</span> We can
            offer a wide range of digital marketing services, such as search
            engine optimization (SEO), contextual advertising, social media
            campaigns, email marketing, and other channels.
          </p>
          <p className="text-header text-xl text-left mb-8 p-4">
            <span className="text-primary">Content Creation:</span> We can
            assist in creating high-quality content for your brand, including
            articles, blogs, videos, infographics, and other formats.
          </p>
          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">Social Media:</span> Inflooms Agency
            can develop social media strategies, manage brand accounts on social
            networks, create content, and engage with the audience.
          </p>
          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">Analytics and Reporting:</span> We
            will provide reports on brand promotion, analytical data, evaluate
            the effectiveness of marketing campaigns, and offer recommendations
            to improve the strategy.
          </p>
          <p className="text-header text-xl text-left mb-8 p-4">
            <span className="text-primary">Brand Consulting:</span> Inflooms
            Agency can provide consultations on brand development, reputation,
            positioning, and overall brand management strategy.
          </p>
          <ContactButton />
        </div>
      </div>
    </>
  );
};

export default BrandPage;
