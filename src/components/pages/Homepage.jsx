import React from "react";
import Impact from "../Impact";
import KeyFacts from "../KeyFacts";
import RecentNews from "../RecentNews";
import Research from "../Research";

const Homepage = () => {
  return (
    <div>
      <KeyFacts />
      <RecentNews />
      <Impact/>
      <Research/>
    </div>
  );
};

export default Homepage;
