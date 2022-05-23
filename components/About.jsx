import React from "react";

const About = () => {
  return (
    <div className="about agro">
      <h1 className="abouttitle">About Smart Agro</h1>
      <div className="aboutflex">
        <div className="aboutimg bout">
          <img src="/images/Rectangle 118.png" alt="" />
        </div>
        <div className="infos">
          <div className="aboutinfo">
            A app with various helpful features to help
          </div>
          <div className="aboutinfo">
            farmers in giving them access to raw materials
          </div>
          <div className="aboutinfo">
            for planting and also gives consumer the luxury
          </div>
          <div className="aboutinfo">
            of ordering products from the farm at cheaper
          </div>
          <div className="aboutinfo">
            price and track it, it majorly was created to make
          </div>
          <div className="aboutinfo">
            life easier for both farmers and consumers
          </div>
          <div className="aboutmore">Read more</div>
        </div>
      </div>
    </div>
  );
};

export default About;
