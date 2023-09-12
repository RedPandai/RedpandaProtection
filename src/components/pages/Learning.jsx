import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ObjPage } from "../Learning/objPage";
import { IntroPage } from "../Learning/IntroPage";
import { GuessGame } from "../Learning/GuessGame";
import { GuessOne } from "../Learning/GuessOne";
import { PhysicalCharacter } from "../Learning/PhysicalCharacter";
import { Habitat } from "../Learning/Habitat";
import { Behaviour } from "../Learning/Behaviour";
import { ThreatPage } from "../Learning/ThreatPage";
import { Conservation } from "../Learning/Conservation";
import { WhatWeCanDo } from "../Learning/WhatWeCanDo";
import { PetThem } from "../Learning/PetThem";
import { CourseFinish } from "../Learning/CourseFinish";

export const Learning = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlenext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleprev = () => {
    setCurrentPage(currentPage - 1);
  };
  const arr = [];
  for (let i = 0; i <= 10; i++) {
    arr.push(i);
  }
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/research/education";
    navigate(path);
  };
  return (
    <div className="w-full space-y-6 px-12 py-6 bg-white text-center justify-center">
      {/* progressbar */}
      <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700 sm:hidden">
        <div
          className={`bg-orange-400 rounded-full text-center`}
          style={{
            width: `${(currentPage / 10) * 100}%`,
          }}
        >
          <div className="w-3 h-3 text-white rounded-full"></div>
        </div>
      </div>
      {/* progressbar 2 */}

      <div className="relative w-full sm:flex justify-between hidden">
        {arr.map((x) => (
          <div
            className="flex font-bold items-center justify-center rounded-full w-8 h-8 z-10 border-2 bg-slate-50"
            style={{ borderColor: `${x > currentPage ? "white" : "orange"}` }}
            key={x}
          >
            {x}
          </div>
        ))}
        <div className="w-full h-3 bg-gray-200 rounded-full absolute top-2.5">
          <div
            className={`bg-orange-400 rounded-full text-center`}
            style={{
              width: `${currentPage <= 10 && (currentPage / 10) * 100}%`,
            }}
          >
            <div className="w-3 h-3 text-white rounded-full"></div>
          </div>
        </div>
      </div>
      {currentPage === 0 && <ObjPage />}
      {currentPage === 1 && <IntroPage />}
      {currentPage === 2 && <GuessGame />}
      {currentPage === 3 && <PhysicalCharacter />}
      {currentPage === 4 && <Habitat />}
      {currentPage === 5 && <Behaviour />}
      {currentPage === 6 && <GuessOne />}
      {currentPage === 7 && <ThreatPage />}
      {currentPage === 8 && <Conservation />}
      {currentPage === 9 && <PetThem />}
      {currentPage === 10 && <WhatWeCanDo />}
      {currentPage === 11 && <CourseFinish />}
      <div className="flex gap-12 p-2 justify-center">
        {currentPage !== 0 && (
          <button
            className="w-40 text-white bg-green-600 px-6 py-1 rounded-full text-lg hover:bg-yellow-700"
            onClick={handleprev}
          >
            Previous
          </button>
        )}
        {currentPage <= 10 && (
          <button
            className="w-40 text-white bg-green-600 px-6 py-1 rounded-full text-lg hover:bg-yellow-700 disabled:bg-gray-300"
            onClick={handlenext}
            disabled={currentPage > 10}
          >
            Next
          </button>
        )}
        {currentPage == 11 && (
          <button
            className="relative w-40 text-white bg-orange-600 px-6 py-1 rounded-full text-lg hover:bg-yellow-700 disabled:bg-gray-300"
            onClick={routeChange}
          >
            Quiz Me!
            <div className="animate-ping rounded-full bg-orange-500 w-5 h-5 absolute top-0"></div>
          </button>
        )}
      </div>
    </div>
  );
};
