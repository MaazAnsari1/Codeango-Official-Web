import React from "react";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Values from "../components/Values/Values";
import IntroBanner from "../components/Banner/IntroBanner";
import Popular from "../components/Banner/Popular";
import EmailBanner from "../components/Banner/EmailBanner";
import RecentlyIntroduce from "../components/Banner/RecentlyIntroduce";

const Home = () => {
  return (
    <div>
      <Slider />
      {/* <Hero /> */}
      <IntroBanner />
      <Popular />
      <RecentlyIntroduce />
      <Values />
      <EmailBanner />
    </div>
  );
};

export default Home;
