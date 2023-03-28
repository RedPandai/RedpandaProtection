import React from "react";
import builder from "../../moduleImage/building.png";
import { Link } from "react-router-dom";
const GetInvolvedPage = () => {
  return (
    <div className="bg-slate-200 flex flex-col justify-center items-center select-none w-full p-10">
      <p className="font-bold lg:text-3xl text-xl text-center">
        Whoops! This page is still in building process.
        Please head to the{" "}
        <Link className="text-green-700 hover:underline" to="/donation">donation page</Link> to find out more about this
        project.
      </p>
      <img className='object-cover w-80' src={builder} alt="constuctor" />
    </div>
  );
};

export default GetInvolvedPage;
