import React from "react";
import learningObj from "./learningObj";

export const ObjPage = () => {
  return (
    <div className="flex flex-col justify-center items-center inset-0">
      <h1 className="font-bold text-3xl text-center text-orange-900 p-4">
        Learning Objectives
      </h1>
      <div className="text-center font-semibold">
        {learningObj.map((item) => (
          <ul
            key={item}
            className="flex flex-col p-4 text-start list-outside list-disc"
          >
            <li className="font-bold text-lg">{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
