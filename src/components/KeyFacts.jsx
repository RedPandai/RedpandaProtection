import React from "react";
import { cardLinks } from "./CardNames";
import LearnMoreBtn from "./LearnMoreBtn";

const KeyFacts = () => {
  return (
    <div className="bg-white m-6 rounded-lg">
      <div className="flex items-center gap-6">
        <h1 className="font-bold p-5 text-xl">Key Facts About Red Panda</h1>
        <LearnMoreBtn/>
      </div>

      <div className="flex lg:flex-nowrap flex-wrap gap-6 p-5">
        {cardLinks.map((item) => (
          <div key={item.id} className="flex md:flex-nowrap flex-wrap gap-4">
            <img
              src={item.name}
              alt="facts"
              className="h-40 w-44 rounded-3xl object-cover"
            />
            <div>
              <h1 className="font-bold text-lg mb-5 text-red-700">
                {item.title}
              </h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFacts;
