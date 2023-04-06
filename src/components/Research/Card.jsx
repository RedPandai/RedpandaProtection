import React from "react";

export const Card = ({ image, author, reference, title }) => {
  return (
    <div className="bg-white w-70 sm:w-92 rounded-lg overflow-hidden flex-col flex justify-between">
      <div>
        <img
          src={image}
          className="w-full sm:w-92 h-48 object-cover hover:scale-110 hover:cursor-pointer transition-all"
        />
        <h1 className="font-bold pb-4 text-lg p-4">{title}</h1>
        <h2 className="font-semibold p-4">{author}</h2>
      </div>

      <p className="p-4 pb-8 text-center">{reference}</p>
    </div>
  );
};
