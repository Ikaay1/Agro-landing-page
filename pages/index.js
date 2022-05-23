import React from "react";
import About from "../components/About";
import Advert from "../components/Advert";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Advert />
      <About />
      <Testimonials />
      <Features />
      <Faq />
      <Newsletter />
    </div>
  );
};

export default Home;
