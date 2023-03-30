import React from "react";
import { Link } from "react-router-dom";

const DonationBtn = () => {
  return (
    <div>
      <button className="bg-redPanda text-white md:p-3 p-2 mr-10 rounded-full hover:bg-yellow-400 shadow-slate-500">
        Donation
      </button>
    </div>
  );
};

export default DonationBtn;
