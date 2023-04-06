import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="h-10 rounded-full bg-gradient-to-r from-green-500 to-green-200 overflow-hidden relative m-2">
        <div className="h-10 bg-green-100 animate-loader"></div>
      </div>
    </>
  );
};
