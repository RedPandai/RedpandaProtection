import React from "react";

const DonationBtn = ({ toggleOpen }) => {
  return (
    <div>
      <button
        onClick={toggleOpen}
        className="bg-redPanda text-white md:p-3 p-2 mr-10 rounded-full hover:bg-red-900 shadow-slate-500"
      >
        Donation
      </button>
    </div>
  );
};

export default DonationBtn;
