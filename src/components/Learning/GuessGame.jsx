import React, { useState } from "react";
import { CorrectPage } from "./CorrectPage";

export const GuessGame = () => {
  const [answer, setAnswer] = useState(0);
  const handleClick = (index) => {
    setAnswer(index);
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <h1 className="font-bold text-2xl p-6">
        Before we move on, take a guess: which one is the Red Panda? Click it!
      </h1>
      <div className="md:flex gap-6 text-center justify-center grid">
        <img
          src="images/Guess/1.jpg"
          className="w-50 h-60 object-cover rounded-lg hover:scale-105 cursor-pointer"
          onClick={() => handleClick(1)}
        ></img>
        <img
          src="images/Guess/2.jpg"
          className="w-50 h-60 object-cover rounded-lg hover:scale-105 cursor-pointer"
          onClick={() => handleClick(2)}
        ></img>
        <img
          src="images/Guess/3.jpg"
          className="w-50 h-60 object-cover rounded-lg hover:scale-105 cursor-pointer"
          onClick={() => handleClick(3)}
        ></img>
      </div>
      {answer === 1 && <CorrectPage />}
      {answer === 2 && (
        <div className="font-bold text-2xl p-6 text-red-700">
          Opps, this is a Racoon!
        </div>
      )}
      {answer === 3 && (
        <div className="font-bold text-2xl p-6 text-red-700">
          Opps, this is a Common Racoon Dog! But it is not a Racoon!
        </div>
      )}
    </div>
  );
};
