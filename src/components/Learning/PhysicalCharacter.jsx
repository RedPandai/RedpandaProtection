import React from "react";

export const PhysicalCharacter = () => {
  return (
    <div className="flex flex-col justify-start items-start py-6">
      <h1 className="font-bold text-xl">Physical Characteristics</h1>
      <ul className="flex flex-col p-4 text-start list-outside list-disc text-lg">
        <li>
          Red pandas are relatively <strong>small mammals</strong>. They are
          typically slightly larger than a domestic cat.
        </li>
        <li>
          Their fur is primarily a <strong>reddish-brown colour</strong>, which
          is where they get their name.
        </li>
        <li>
          Their face has <strong>white markings</strong>, including a white
          muzzle and distinctive "tear tracks" extending from the eyes to the
          sides of the face. The fur on their ears is dark and triangular.
        </li>
        <li>
          Red pandas have a specialized thumb-like wrist bone, called a "
          <strong>false thumb</strong>," which they use for gripping bamboo
          stems and other objects. This adaptation makes them efficient bamboo
          eaters.
        </li>
        <li>
          Red pandas are primarily nocturnal, which means they are more active
          during the night. Their <strong>dark eyes</strong> are adapted for low
          light conditions.
        </li>
      </ul>
      <div className="grid items-center justify-center w-full gap-6 md:flex">
        <div className="flex flex-col">
          <img
            src="images/Learning/paws.png"
            alt="redpanda paws"
            className="object-cover h-72"
          />
          <p className="text-sm p-2">©Mathias Appel</p>
        </div>
        <div className="flex flex-col">
          <img
            src="images/Learning/redpanda.jpg"
            alt="redpanda paws"
            className="object-cover h-72"
          />
          <p className="text-sm p-2">©Mathias Appel</p>
        </div>
      </div>
    </div>
  );
};
