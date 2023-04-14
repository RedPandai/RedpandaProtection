import React from "react";
import { Link } from "react-router-dom";

const LearnMoreBtn = () => {
  return (
    <>
      <Link className="text-white bg-yellow-600 px-3 py-1 rounded-full hover:bg-yellow-700 md:text-base text-xs text-center mx-3">
        Learn More
      </Link>
    </>
  );
};

export default LearnMoreBtn;
