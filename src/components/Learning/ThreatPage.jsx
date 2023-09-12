import React from "react";

export const ThreatPage = () => {
  return (
    <div className="flex flex-col justify-start items-start py-6">
      <h1 className="font-bold text-xl">Threat</h1>
      <h1 className="font-bold text-red-700 text-start">
        'The global red panda population has declined by 50% in 20 years and
        there may be as few as 2,500 remaining in the wild. Habitat Loss is the
        #1 Threat' (The Red Panda Network)
      </h1>
      <div className="flex flex-col">
        <img
          src="images/Learning/cage.jpg"
          alt="redpanda in a cage"
          className="object-cover h-72"
        />
        <p className="text-sm p-2">©flowermaze/CC0</p>
      </div>

      <ul className="flex flex-col p-4 text-start list-outside list-disc text-lg">
        <li>
          <strong>Habitat Loss and Fragmentation:</strong> Deforestation: The
          conversion of red panda habitats into agricultural land, logging, and
          infrastructure development has led to significant habitat loss.
          Fragmentation: Remaining forests are often fragmented, isolating red
          panda populations and making it difficult for them to find mates and
          maintain genetic diversity. Livestock herding is a another major
          driver of red panda habitat destruction. Herders cut down trees to
          maintain sheds and collect fuelwood from the forest. Unsustainable
          herding practices degrade habitat quality as livestock graze in the
          forest and eat and trample bamboo and other red panda food species. An
          increasing trend toward dairies in red panda range has fueled the
          demand for fodder (bamboo) and firewood.
        </li>
        <li>
          <strong>Poaching and Illegal Wildlife Trade:</strong> Poaching: Red
          pandas are hunted for their fur, which is prized in some regions, and
          for body parts believed to have medicinal properties. Illegal Pet
          Trade: Red panda cubs are sometimes captured and sold as exotic pets,
          leading to their removal from the wild.
        </li>{" "}
        <li>
          <strong>Bamboo Flowering: </strong>
          Red panda diet is 98% bamboo. The life cycle of these plants is mass
          flowering followed by die-off. Bamboo does not easily re-establish in
          disturbed areas and becomes difficult to find in fragmented forest.
          Red pandas become vulnerable to other threats when crossing unsuitable
          habitat in search of it.
        </li>
        <li>
          <strong>Climate Change:</strong> Climate change is affecting red panda
          habitats by altering the distribution and availability of bamboo,
          their primary food source. Shifts in temperature and precipitation
          patterns can also impact red panda populations and their ability to
          adapt to changing conditions.
        </li>{" "}
        <li>
          <strong>Free-roaming Dogs and Disease:</strong>Free-roaming dogs and
          disease are major contributors to red panda mortality. Herders in red
          panda range have dogs that protect their livestock from potential
          predators. They also kill red pandas. Dogs can also spread seven
          species of gastrointestinal parasites to red pandas. The canine
          distemper virus, which is highly infectious and always fatal to red
          pandas, is another threat from free-roaming dogs. Get more information
          below on how we are protecting red pandas from dogs.
        </li>
      </ul>
      <div className="grid items-center justify-center w-full gap-6 md:flex">
        <div className="flex flex-col items-center">
          <img
            src="images/Learning/threat.jpg"
            alt="redpanda in a cage"
            className="object-cover w-1/2"
          />
          <p className="text-sm p-2">
            Thapa, A., Hu, Y., & Wei, F. (2018). The endangered red panda
            (Ailurus fulgens): Ecology and conservation approaches across the
            entire range. Biological Conservation, 220, 112-121.
            https://doi.org/https://doi.org/10.1016/j.biocon.2018.02.014
          </p>
        </div>
      </div>
    </div>
  );
};
