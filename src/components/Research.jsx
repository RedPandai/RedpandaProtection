import React from "react";
import { researchContent } from "./CardNames";
import researchImage from "../moduleImage/researchMain.jpg";
import LearnMoreBtn from "./LearnMoreBtn";

const Research = () => {
  return (
    <div className="bg-white m-6 rounded-lg">
      <div className="flex items-center gap-6">
        <h1 className="font-bold text-xl p-5">Research and Reports</h1>
        <LearnMoreBtn />
      </div>

      <div className="grid md:grid-cols-2 grid-row">
        <div className="m-6 flex flex-col gap-4">
          {researchContent.map((item) => (
            <div key={item.id} className="border-gray-300 border p-5">
              <h1 className="font-semibold">{item.title}</h1>
              <p>{item.reference}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="border border-gray-300 m-6 flex flex-col">
          <h1 className="font-bold text-lg p-3">Recent Report</h1>
          <img
            src={researchImage}
            alt="research"
            className="rounded-xl object-cover mx-6"
          />
          <h1 className="mx-6 my-3 font-semibold text-md">
            Goal: To conserve red panda populations and their forest habitat by
            restoring degraded watersheds and promoting red panda stewardship
            among communities in Nowhere Kingdom.t
          </h1>
          <p className="mx-6 font-semibold">
            Cost: 2022-2024 (three-year) budget (ICFC portion): ￡148,050
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;
