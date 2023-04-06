import React from "react";
import { Card } from "../Research/Card";
import { researchContent } from "../CardNames";

export const Researchpage = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-8 justify-center w-full">
      {researchContent.map((content, index) => (
        <Card
          key={index}
          author={content.name}
          image={content.image}
          reference={content.reference}
          title={content.title}
        />
      ))}
    </div>
  );
};
