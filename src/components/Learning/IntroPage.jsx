import React from "react";

export const IntroPage = () => {
  return (
    <div className="flex flex-col text-left">
      <h1 className="font-bold text-xl py-6">Introduction</h1>
      <div>
        <h1 className="font-bold">Red panda - the first panda</h1>
        <p className="">
          Red pandas, much like giant pandas, are herbivores native to the high
          forests of Asia. Despite their shared dietary preference and name,
          these two species are not closely related. Red pandas are notably
          smaller than giant pandas and stand as the sole surviving member of
          their family, Ailuridae. The classification of the red panda and the
          assignment of its scientific name, Ailurus fulgens, occurred in 1825.
          In contrast, giant pandas received their "panda" designation later on
          due to shared traits such as bamboo consumption. Hence, one might
          argue that red pandas could be seen as the original, or perhaps the
          sole true pandas, even though giant pandas have gained more widespread
          recognition over the years.
        </p>
        <p className="py-4">
          <strong>The red panda occupies a distinct family, Ailuridae,</strong>{" "}
          setting it apart from other well-known carnivore families such as
          Felidae (cats) and Canidae (dogs). Within the superfamily Musteloidea,
          which includes Mustelidae and Procyonidae (raccoons), Family Ailuridae
          remains isolated. This separation at the family level underscores the
          red panda's evolutionary uniqueness. Within the Ailuridae family,
          Ailurus fulgens, commonly known as the red panda or lesser panda, is
          the sole species.
        </p>
      </div>
    </div>
  );
};
