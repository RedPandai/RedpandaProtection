import React from "react";

export const Conservation = () => {
  return (
    <div className="flex flex-col justify-start items-start py-6">
      <h1 className="font-bold text-xl">Conservation</h1>
      <h1 className="font-bold text-red-700 text-start">
        Conservation strategies have included the establishment of protected
        areas in red panda range countries to safeguard not only red pandas but
        also other endangered species. These plans have been on the rise and
        encompass various approaches, such as creating corridors, managing
        community conservation sites, and promoting community forestry within
        the areas where red pandas are found.
      </h1>
      <ul className="flex flex-col p-4 text-start list-outside list-disc text-lg">
        <li>
          <strong>
            Assessing Populations and Habitat for Red Panda Conservation:
          </strong>{" "}
          Several Population and Habitat Viability Assessment (PHVA) workshops
          have been conducted in red panda range countries, including Nepal,
          China, and India, with participation from Bhutan and Myanmar. These
          workshops focus on the conservation planning of red pandas within each
          country's distinct populations.
        </li>
        <li>
          <strong>
            Building Human Resources and Strengthening Institutions for Red
            Panda Conservation:
          </strong>{" "}
          While local-level wildlife monitoring and patrolling activities take
          place in various red panda range countries, regional coordination has
          often been lacking. Conservation organizations, in collaboration with
          government authorities, have played a pivotal role in providing
          technical skills to park managers, forest rangers, and local
          communities for the monitoring and protection of endangered fauna.
        </li>{" "}
        <li>
          <strong>Field Activities for Red Panda Conservation: </strong>
          While some mammals, such as the giant panda, have received significant
          attention and regular monitoring in countries like China,
          national-scale censuses and surveys have been conducted for red pandas
          in Nepal. The Department of Forest and the Department of National Park
          and Wildlife Conservation in Nepal carried out a national-scale survey
          of red panda distribution in 2016, which has been a positive step in
          red panda conservation efforts. Additionally, organizations like the
          Red Panda Network have trained local community members as Forest
          Guardians to monitor red panda populations in eastern Nepal since
          2007.
        </li>
        <li>
          <strong>Enforcing Wildlife Protection Laws and Regulations:</strong>{" "}
          Most countries within the red panda's range have implemented laws and
          regulations aimed at protecting wildlife and their habitats. These
          legal frameworks reflect a commitment to conserving rare and
          endangered species like the red panda. While these laws and
          regulations are effective in most cases, illegal hunting and poaching
          remain persistent challenges in specific regions.
        </li>{" "}
      </ul>
      <div className="grid items-center justify-center w-full gap-6 md:flex">
        <div className="flex flex-col items-center">
          <img
            src="images/Learning/conservation.jpg"
            alt="redpanda in a cage"
            className="object-cover h-96"
          />
          <p className="text-sm p-2">©Jingyang Ai</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="images/Learning/conservation2.jpg"
            alt="redpanda in a cage"
            className="object-cover h-96"
          />
          <p className="text-sm p-2">©Jingyang Ai</p>
        </div>
      </div>
    </div>
  );
};
