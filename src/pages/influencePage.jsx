import React, { useEffect, useState } from "react";
import ContactButton from "../components/ContactButton";
import Background from "../assets/Background-influence.png";
import Background1 from "../assets/Background-influence-2.png";

const InfluencePage = () => {
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
            INFLUENCE MARKETING
          </h1>
          <p className=" text-header text-2xl text-left mb-4 pb-4 max-w-screen-md">
            Influencer marketing is a marketing strategy that utilizes
            influential individuals (influencers) who have a significant
            audience and influence in a particular field to promote a brand's
            products or services. Influencers can be bloggers, vloggers,
            celebrities, experts in a specific industry, or everyday individuals
            with active social media profiles.
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
            THE INFLUENCER MARKETING STRATEGY INVOLVES THE FOLLOWING KEY STEPS:
          </h2>
          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">
              Identifying your target audience:
            </span>{" "}
            Defining the target audience you want to reach through influencer
            marketing will help you select suitable influencers.
          </p>
          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">
              Searching and selecting influencers:
            </span>{" "}
            Infloom Agency will assist you in identifying and choosing
            influencers who best align with your target audience and brand
            goals.
          </p>
          <p className="text-header text-xl text-left mb-8 p-4">
            <span className="text-primary">
              Collaborating with influencers:
            </span>{" "}
            Establishing collaboration with influencers includes developing a
            collaboration strategy, determining the types of content (such as
            product reviews, sponsored posts, contests, etc.), as well as
            discussing financial and legal aspects.
          </p>
          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">Content creation:</span> Influencers
            create content that aims to attract and engage their audience. This
            can take the form of photos, video reviews, articles, or other
            formats, depending on the influencer's preferences and their
            audience.
          </p>
          <p className="text-header text-xl text-left mb-8 p-4">
            <span className="text-primary">Content distribution:</span> The
            content created by influencers is distributed through their social
            media channels, blogs, or other platforms where they are active.
          </p>
          <p className="text-header text-xl text-left mb-4 p-4">
            <span className="text-primary">
              Tracking and measuring results:
            </span>{" "}
            Monitoring and measuring the results of the collaboration with
            influencers allow for assessing the effectiveness of the influencer
            marketing strategy and its impact on the brand.
          </p>
          <ContactButton />
        </div>
      </div>
    </>
  );
};

export default InfluencePage;
