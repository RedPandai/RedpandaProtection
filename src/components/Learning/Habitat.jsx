import React from "react";

export const Habitat = () => {
  return (
    <div className="flex flex-col justify-start items-start py-6">
      <h1 className="font-bold text-xl">Habitat</h1>
      <ul className="flex flex-col p-4 text-start list-outside list-disc text-lg">
        <li>
          Red pandas are primarily found in <strong>temperate forests</strong>,
          which include a mix of broadleaf trees and coniferous trees.
        </li>
        <li>
          Red pandas are native to several countries in&nbsp;
          <strong>South Asia</strong>, including: Nepal, Bhutan, Northern India,
          Southern China (Sichuan, Yunnan, and Tibet) and Myanmar (Burma).
        </li>
        <li>
          Their habitat consists of{" "}
          <strong>hilly and mountainous terrain</strong>, with steep slopes and
          valleys. They are well adapted to life in these elevated and rugged
          landscapes.
        </li>
        <li>
          <strong>Bamboo</strong> is a crucial component of their habitat and
          diet. Red pandas are often associated with bamboo forests. Besides
          bamboo, their habitat contains a diversity of plant species, including
          rhododendrons, mosses, and lichens. While they are primarily
          herbivorous, red pandas occasionally consume small invertebrates and
          birds' eggs.
        </li>
        <li>
          Red pandas are primarily <strong>arboreal</strong>, meaning they spend
          a significant amount of time in trees. Their habitat experiences cold
          winters with snowfall, and the pandas have adaptations to cope with
          colder temperatures.
        </li>
      </ul>
      <img
        src="/images/Learning/habitat.gif"
        className="rounded-lg self-center p-2"
      ></img>
      <p></p>
    </div>
  );
};
