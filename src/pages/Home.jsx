import React from "react";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/Featured";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </div>
  );
};

export default Home;
