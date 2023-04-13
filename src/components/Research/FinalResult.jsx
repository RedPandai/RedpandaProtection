import React from "react";

const FinalResult = ({ questions, result, startAgain }) => {
  const handleClick = () => {
    startAgain();
  };
  return (
    <div className="bg-white p-6 rounded-lg md:w-1/2 w-full grid justify-center items-center gap-6">
      <h1 className="font-bold text-2xl text-center">FinalResult</h1>
      <div className="bg-gray-100 grid gap-2 rounded-lg">
        <p className="font-semibold text-center">
          Your Score is:
          <strong className="text-orange-500 text-xl pl-2">
            {(result.score / questions.length) * 100}%
          </strong>
        </p>
        <p className="font-semibold text-center">
          Correct Answers: {result.correctAnswers}
        </p>
        <p className="font-semibold text-center">
          Wrong Answers: {result.wrongAnswers}
        </p>
      </div>

      <div className="text-center">
        {result.score >= 8 ? (
          <>
            <p className="p-2 font-semibold">
              Congratulations, you know a lot about red pandas.
            </p>
            <ion-icon name="happy-outline" size="large"></ion-icon>
          </>
        ) : (
          <>
            <p className="p-2 font-semibold">
              Mistakes and wrong answers are opportunities to learn and grow.
              Keep trying, and don't be afraid to take risks and try new things.
            </p>
            <img src="/images/quiz.jpg" className="w-60 rounded-full mx-auto" />
          </>
        )}
      </div>
      <button
        onClick={handleClick}
        className="bg-yellow-500 text-white font-bold rounded-lg p-2 hover:bg-yellow-600"
      >
        Play Again
      </button>
    </div>
  );
};

export default FinalResult;
