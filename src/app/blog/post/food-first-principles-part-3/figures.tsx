import Image from "next/image";

import DataProteinOpex from "./protein-opex.svg";
import DataBfCapex from "./bf-capex.svg";
import DataBfCogs from "./bf-cogs.svg";
import DataOilsCost from "./oils-cost.svg";
import DataOilsLandUse from "./oils-land-use.svg";

export const FigureProteinOpex = () => (
  <figure>
    <Image
      src={DataProteinOpex}
      alt=""
      width={800}
      height={800}
    />
  </figure>
);

export const FigureBfCapex = () => (
  <figure>
    <Image
      src={DataBfCapex}
      alt=""
      width={800}
      height={800}
    />
  </figure>
);

export const FigureBfCogs = () => (
  <figure>
    <Image
      src={DataBfCogs}
      alt=""
      width={800}
      height={800}
    />
  </figure>
);

export const FigureOilsCost = () => (
  <figure>
    <Image
      src={DataOilsCost}
      alt="The relationship between the food system and the environment"
      width={800}
      height={800}
    />
  </figure>
);

export const FigureOilsLandUse = () => (
  <figure>
    <Image
      src={DataOilsLandUse}
      alt="The relationship between the food system and the environment"
      width={800}
      height={800}
    />
  </figure>
);