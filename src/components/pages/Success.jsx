import React from "react";

export const Success = ({ name,redpanda }) => {
  return (
    <div className="bg-orange-300 md:p-10 p-6 w-full grid justify-center gap-2 items-center h-auto">
      <h1 className="font-bold text-xl py-6 text-center">Thank you for your Support!</h1>
      <img className='rounded-lg md:max-w-lg max-w-sm justify-self-center' src='/images/Success.jpg'/>
      <section className="flex-col flex-wrap justify-center items-center py-6 gap-2">
        <h2 className="font-bold text-md">Dear {name},</h2>
        <p className="text-md flex-col flex-wrap">
          We want to extend my sincere gratitude for your contribution to Red
          Panda Protection and <strong>{redpanda}</strong>. Your generous gift will have a major impact
          on helping protect the Red Pandas. <br />
          We want to thank you for helping us make a positive difference. Your
          support encourages our continued commitment to reaching our goal.
        </p>
        <h2 className="text-md font-bold justify-self-end">Red Panda Protection Team</h2>
      </section>
    </div>
  );
};
