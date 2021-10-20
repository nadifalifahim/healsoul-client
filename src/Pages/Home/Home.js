import React from "react";
import About from "../About/About";
import Banner from "./Banner/Banner";
import HomeServices from "./HomeServices/HomeServices";
import Statistics from "./Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
