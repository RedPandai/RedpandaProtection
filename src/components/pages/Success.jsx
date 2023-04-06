import React, { useContext, useEffect, useState } from "react";
import { DonationContext } from "../context/DonationContext";

export const Success = ({ panda }) => {
  const [name] = useContext(DonationContext);
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    setisActive(true);
    const timer = setTimeout(() => setisActive(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isActive && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white pointer-events-none transition-all animate-slidein"></div>
      )}
      <div className="bg-orange-200 md:p-10 p-6 w-full grid justify-center gap-2 items-center h-auto">
        <h1 className="font-bold text-xl py-6 text-center">
          Thank you for your Support!
        </h1>
        <img
          className="rounded-lg md:max-w-lg max-w-sm justify-self-center"
          src="/images/Success.jpg"
        />
        <section className="flex-col flex-wrap justify-center items-center py-6 gap-2">
          <h2 className="font-bold text-md pb-4">
            Dear {name ? name : "Red Panda Guardian"},
          </h2>
          <p className="text-md flex-col flex-wrap">
            We want to extend my sincere gratitude for your contribution to Red
            Panda Protection and <strong>{panda}</strong>. Your generous gift
            will have a major impact on helping protect the Red Pandas. <br />
            We want to thank you for helping us make a positive difference. Your
            support encourages our continued commitment to reaching our goal.
          </p>
          <h2 className="text-md font-bold pt-4 text-right">
            Red Panda Protection Team
          </h2>
        </section>
      </div>
    </>
  );
};
