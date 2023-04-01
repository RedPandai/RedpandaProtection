import React from "react";
import { QandAs } from "../QandAs";
import { Meetteam } from "../Meetteam";

export const About = () => {
  return (
    <div className="grid justify-center items-center w-screen p-6 gap-6">
      <h1 className="font-bold text-2xl">About Us</h1>
      <section className="bg-slate-100 p-6 flex flex-wrap justify-center items-center"> 
        <img
          src="/images/see.jpg"
          alt="see you"
          className="md:max-w-lg mx-auto rounded-lg"
        />
        <p className="text-lg p-6 font-bold">
          Thanks for visiting our website. We hope to see you again soon!
        </p>
      </section>

      <section className="bg-slate-100 p-6">
        <h2 className="font-bold text-xl text-center p-2">Meet Our Team</h2>
        <Meetteam />
      </section>
      <section className="flex-col bg-slate-100 p-6">
        <h2 className="font-bold text-lg py-6">Frequently Ask Questions</h2>
        <QandAs />
      </section>
    </div>
  );
};
