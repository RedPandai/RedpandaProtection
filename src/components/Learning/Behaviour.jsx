import React from "react";

export const Behaviour = () => {
  return (
    <div className="flex flex-col justify-start items-start py-6">
      <h1 className="font-bold text-xl">Behaviour</h1>
      <ul className="flex flex-col p-4 text-start list-outside list-disc text-lg">
        <li>
          In very cold temperatures, red pandas can become dormant, lowering
          their metabolic rate and raising it every few hours as they wake up to
          look for food.
        </li>
        <li>
          Red pandas are excellent climbers and spend a significant portion of
          their time in trees, using their sharp claws and long, bushy tails for
          balance. They can descend trees headfirst, which is a unique ability
          among carnivores.
        </li>
        <li>
          Red pandas are crepuscular, arboreal and solitary. They are most
          active in the early morning and late afternoon (crepuscular) spending
          most of the day resting in trees (arboreal) conserving their energy.
          Red pandas are territorial and defend their territories, which can
          range from about 1 to 3 square kilometres (0.4 to 1.2 square miles).
          Males and females may have overlapping territories, but they generally
          avoid each other outside of the breeding season.
        </li>
        <li>
          Red pandas are normally solitary creatures but come together in pairs
          in the breeding season.
        </li>
        <li>
          Breeding usually occurs in the winter months, with a gestation period
          of about 112 to 158 days. After giving birth, female red pandas are
          responsible for raising their cubs, and they often create dens in tree
          hollows or burrows for protection.
        </li>
      </ul>
      <div className="grid items-center justify-center w-full gap-6 md:flex">
        <div className="flex flex-col">
          <img
            src="images/Learning/redpanda2.png"
            alt="redpanda paws"
            className="object-cover h-72"
          />
          <p className="text-sm p-2">©Ivan Cujic</p>
        </div>
        <div className="flex flex-col">
          <img
            src="images/Learning/cubs.jpg"
            alt="redpanda paws"
            className="object-cover h-72"
          />
          <p className="text-sm p-2">
            ©Sam Allworthy/Longleat Safari & Adventure Park
          </p>
        </div>
      </div>
    </div>
  );
};
