import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";
import HomeServices from "./HomeServices/HomeServices";
import Statistics from "./Statistics/Statistics";

const Home = () => {
  // Home page
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <Statistics></Statistics>
      <Contact></Contact>
    </div>
  );
};

export default Home;
