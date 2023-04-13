import React, { useEffect, useState } from "react";
import { questions } from "../Research/questionsLinks";
import FinalResult from "../Research/FinalResult";

const Education = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalResult, setFinalResult] = useState(false);
  const [hint, setHint] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectCorrect, setSelectCorrect] = useState("");
  const [selectIndex, setSelectIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const handleClick = (option, index) => {
    setSelectIndex(index);
    setSelectedOption(option);
    if (option.isCorrect) {
      setSelectCorrect(true);
      setHint(false);
    } else {
      setSelectCorrect(false);
      setHint(true);
    }
  };

  const handlenext = () => {
    setHint(false);
    setSelectedOption(null);
    setSelectIndex(null);
    setResult((prev) =>
      selectCorrect
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const startAgain = () => {
    setCurrentQuestion(0);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    setFinalResult(false);
  };
  return (
    <div className="flex flex-col justify-center items-center inset-0 w-full space-y-6 p-6">
      <div>
        <h1 className="font-bold text-3xl text-center text-orange-900">
          Red Pandas Quiz
        </h1>
        <p className="text-center font-semibold">
          Give it a try to see how well you know red pandas
        </p>
      </div>

      {finalResult ? (
        <FinalResult
          result={result}
          questions={questions}
          startAgain={startAgain}
        />
      ) : (
        <div className="bg-white p-6 rounded-lg md:w-1/2 w-full flex-col flex">
          <div className="flex mx-auto p-4">
            <ion-icon name="trophy-outline" size="large"></ion-icon>
            <div className="font-bold text-xl ml-4 text-red-500">
              Current Score: {result.score} / 10
            </div>
          </div>
          <p className="font-bold">
            Question {currentQuestion + 1} out of {questions.length}
          </p>
          {/* progressbar */}
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className={`bg-green-300 rounded-full text-center`}
              style={{
                width: `${(currentQuestion / questions.length) * 100}%`,
              }}
            >
              {(currentQuestion / questions.length) * 100}%
            </div>
          </div>
          {/* question card */}
          <div className="p-6">
            <h1 className="font-bold text-lg">
              {questions[currentQuestion].text}
            </h1>
            <ul className="text-lg grid gap-2 mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  key={option.id}
                  className={`font-semibold hover:shadow-lg hover:cursor-pointer checked:bg-red-700 rounded-lg border-2 border-black-100 p-4 ${
                    selectedOption && option.isCorrect
                      ? "bg-green-300"
                      : "bg-gray-100"
                  } ${
                    index === selectIndex &&
                    !option.isCorrect &&
                    "border-red-300 text-red-500"
                  } opacity-${
                    selectedOption && option !== selectedOption ? 50 : 100
                  } pointer-events-${selectedOption ? "none" : "auto"} `}
                  onClick={() => handleClick(option, index)}
                >
                  {option.text}
                </li>
              ))}
            </ul>
            {hint && (
              <p className="text-red-500 font-bold pt-3">
                {questions[currentQuestion].hint}
              </p>
            )}
          </div>

          <button
            className="bg-orange-500 p-2 px-6 text-white font-bold rounded-lg justify-self-end self-end hover:bg-orange-600 disabled:bg-gray-300"
            onClick={handlenext}
            disabled={selectIndex === null}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Education;
