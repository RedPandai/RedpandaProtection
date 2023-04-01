import React from "react";

export const Events = () => {
  return (
    <div className="grid justify-center items-center w-full text-center p-6">
      <h1 className="font-bold text-xl">Donation Events</h1>
      <section className="grid items-center justify-center p-6">
        <div className="grid items-center justify-center gap-2">
          <h1 className="font-semibold text-md">2 Red pandas Helped in Mushroom Mountain</h1>
          <p className="font-semibold text-md">$1,0000 raised of $2,0000</p>
          <div className="relative justify-self-center w-60 h-60 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg"><div className="absolute bottom-0 w-60 h-32 bg-green-600 hover:h-full hover:transition-all"><span className="absolute font-bold text-xl right-1/2 text-white">50%</span></div></div>
        </div>
      </section>
    </div>
  );
};
