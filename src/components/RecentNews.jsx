import React from "react";
import mainNews from "../moduleImage/newsMain.jpg";
import LearnMoreBtn from "./LearnMoreBtn";
import { newsLinks } from "./CardNames";

const RecentNews = () => {
  return (
    <div className="bg-white m-6 rounded-lg">
      <div className="flex items-center gap-6">
        <h1 className="font-bold text-xl p-5">RecentNews</h1>
        <LearnMoreBtn />
      </div>

      <div className="flex lg:flex-nowrap flex-wrap justify-center">
        <img
          src={mainNews}
          alt="news"
          className="rounded-lg object-cover md:h-96 h-44 mx-6"
        />
        <div className="px-6">
          <h1 className="font-bold md:text-lg text-base">
            Endangered red panda cub named Little Red born in Hertfordshire's
            Paradise Wildlife Park
          </h1>
          <p className="font-semibold py-3">Tuesday 16 August 2022</p>
          <p className="text-lg">
            The cub of an endangered red panda born in a UK zoo has been
            described as a “symbol of hope” by its keepers. Red panda Tilly,
            from Paradise Wildlife Park in Hertfordshire, gave birth to a cub
            affectionally referred to as Little Red on July 16, and the
            “incredible” moment was captured by CCTV cameras at the zoo.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-6 my-3 p-6 justify-center lg:justify-between items-center">
        {newsLinks.map((item) => (
          <div key={item.id} className="h-80">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-60 rounded-xl object-cover hover:scale-110 hover:drop-shadow-lg cursor-pointer"
            />
            <p className="font-bold py-3">{item.date}</p>
            <h1 className="font-semibold max-w-sm">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
