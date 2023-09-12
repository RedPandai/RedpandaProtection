import React from "react";

export const CourseFinish = () => {
  return (
    <div>
      <div className="font-bold text-xl p-4 text-orange-700">
        Congratulations! You have finished the course!
        <img src="Logo.jpg" className="w-24 absolute left-1/2"></img>
      </div>
      <h1 className="font-bold text-xl items-start text-start">
        Key Take Aways
      </h1>
      <ul className="flex flex-col p-4 text-start list-outside list-disc text-lg">
        <li>Red Panda is the only living animal in its family - Ailuridae</li>
        <li>Red Panda is Endangered</li>
        <li>Red Panda's main diet is Bamboo</li>
        <li>Habitat Loss is the No.1 Threat to the Red Panda</li>
        <li>It is illegal to keep a red panda as pet</li>
      </ul>

      <h1 className="font-bold text-lg text-start">Read More</h1>
      <ul className="text-start">
        <li className="cursor-pointer underline">
          <a
            href="https://redpandanetwork.org/post/15-Fantastic-Facts-about-Red-Pandas"
            target="_blank"
          >
            15 Fantastic Facts About Red Pandas
          </a>
        </li>
        <li className="cursor-pointer underline">
          <a
            href="https://www.treehugger.com/red-pandas-endangered-5024939"
            target="_blank"
          >
            Why Red Pandas Are Endangered
          </a>
        </li>
        <li className="cursor-pointer underline">
          <a
            href="https://www.treehugger.com/red-panda-facts-5115439"
            target="_blank"
          >
            15 Remarkable Red Panda Facts
          </a>
        </li>
        <li className="cursor-pointer underline">
          <a
            href="https://www.nationalgeographic.com/animals/mammals/facts/red-panda"
            target="_blank"
          >
            https://www.nationalgeographic.com/animals/mammals/facts/red-panda
          </a>
        </li>
        <li className="cursor-pointer underline">
          <a
            href="https://nationalzoo.si.edu/animals/red-panda"
            target="_blank"
          >
            https://nationalzoo.si.edu/animals/red-panda
          </a>
        </li>
      </ul>
    </div>
  );
};
