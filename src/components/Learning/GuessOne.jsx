import { useState } from "react";
import React from "react";

export const GuessOne = () => {
  const [answer, setAnswer] = useState(0);
  const handleClick = (index) => {
    setAnswer(index);
  };
  return (
    <div className="py-6">
      <h1 className="font-bold text-xl py-4">
        Quiz Time: Click the Conservation Status of Red panda's
      </h1>
      <div className="sm:flex gap-6 p-6 justify-center grid">
        <div
          className="w-36 h-36 text-white bg-red-600 rounded-full flex text-center items-center justify-center font-bold hover:scale-105 hover:shadow-lg cursor-pointer"
          onClick={() => handleClick(1)}
        >
          Critically Endangered
        </div>
        <div
          className="w-36 h-36 text-white bg-orange-600 rounded-full flex items-center justify-center font-bold hover:scale-105 hover:shadow-lg cursor-pointer"
          onClick={() => handleClick(2)}
        >
          Endangered
        </div>
        <div
          className="w-36 h-36 text-white bg-yellow-500 rounded-full flex items-center justify-center font-bold hover:scale-105 hover:shadow-lg cursor-pointer"
          onClick={() => handleClick(3)}
        >
          Vulnerable
        </div>
        <div
          className="w-36 h-36 text-white bg-green-600 rounded-full flex items-center justify-center font-bold hover:scale-105 hover:shadow-lg cursor-pointer"
          onClick={() => handleClick(4)}
        >
          Near Threatened
        </div>
      </div>
      {answer === 2 && (
        <div>
          <div className="font-bold text-2xl text-red-800">Well Done!</div>
          <div className="font-bold  text-red-800">
            Red Panda has most recently been assessed for The IUCN Red List of
            Threatened Species in 2015.
          </div>
          <div className="text-sm">
            Find out more on:&nbsp;
            <a
              href="https://www.iucnredlist.org/species/714/110023718"
              target="_blank"
              className="underline"
            >
              https://www.iucnredlist.org/species/714/110023718
            </a>
          </div>
        </div>
      )}
      {answer !== 0 && answer !== 2 && (
        <div className="font-bold text-2xl text-red-700">
          Oops, that's not it!
        </div>
      )}
    </div>
  );
};
