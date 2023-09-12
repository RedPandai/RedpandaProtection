import React from "react";

export const PetThem = () => {
  return (
    <div className="flex flex-col justify-start items-start py-6">
      <h1 className="font-bold text-xl">
        Why You Should Not Keep a Red Panda as Pet: Protecting Their Precarious
        Existence
      </h1>
      <h1 className="font-bold text-red-700 text-start">
        After the previous learning, I believe you already know that the Red
        Pandas are undoubtedly among the most captivating and endearing
        creatures on our planet. Their striking appearance, fluffy tails, and
        gentle demeanour make them incredibly alluring, and it's only natural to
        want to interact with them. However, there are compelling reasons why
        you should resist the urge to pet red pandas and instead support their
        conservation in the wild or responsible sanctuaries. .
      </h1>
      <ul className="flex flex-col p-4 text-start list-outside list-disc text-lg">
        <li>
          <strong>They are Endangered:</strong> As mentioned before, red pandas
          are classified as "endangered" on the International Union for
          Conservation of Nature (IUCN) Red List of Threatened Species. They are
          even more vulnerable than the giant panda. Their populations are
          declining due to habitat loss, poaching, and the illegal pet trade.
          Interfering with them in the wild or purchasing them as pets only
          exacerbates their precarious situation. market.
        </li>
        <li>
          <strong>Disrupting Natural Behaviours:</strong> Red pandas are
          solitary, shy animals that rely on stealth and camouflage to survive
          in their forested habitats. Approaching them, attempting to touch
          them, or keeping them as pets disrupts their natural behaviours and
          can lead to stress, injury, and even death.
        </li>{" "}
        <li>
          <strong>Stress and Disease:</strong> Handling wild animals, including
          red pandas, exposes them to stress and the potential transmission of
          diseases between humans and wildlife. Stress can weaken their immune
          systems, making them susceptible to illnesses.
        </li>
        <li>
          <strong> Legal and Ethical Considerations:</strong> In many countries,
          it is illegal to keep red pandas as pets without the necessary permits
          and licenses. Engaging in illegal pet trade poses significant legal
          and ethical consequences, harming not only red pandas but also
          contributing to the wildlife black market.
        </li>{" "}
      </ul>
      <div className="grid items-center justify-center w-full gap-6 md:flex">
        <div className="flex flex-col items-center">
          <img
            src="images/Learning/shy.jpg"
            alt="redpanda in a cage"
            className="object-cover h-96"
          />
          <p className="text-sm p-2">©Jingyang Ai</p>
        </div>
      </div>
    </div>
  );
};
