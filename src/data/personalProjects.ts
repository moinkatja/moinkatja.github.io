import type { Project } from "../types";
import { tableauStaticImageUrl } from "../lib/tableau";
import { tableauVizBase } from "./site";

const repo = "https://github.com/moinkatja/animal-crossing-zodiac-map";

export const personalProjects: Project[] = [
  {
    id: "animal-crossing-zodiac",
    title: "Animal Crossing Zodiac Map",
    description:
      "391 villagers on an interactive zodiac wheel with birthday picker and personality breakdowns. Started as a project with my daughter, built with Python prep and custom polar coordinates in Tableau.",
    tools: ["tableau", "python"],
    tableauWorkbook: "AnimalCrossingZodiacMap",
    tableauView: "Dashboard",
    thumbnail: tableauStaticImageUrl("AnimalCrossingZodiacMap", "Dashboard"),
    links: {
      tableau: `${tableauVizBase}/AnimalCrossingZodiacMap/Dashboard`,
      repo,
      notebook: `${repo}/blob/main/notebooks/zodiac_wheel.ipynb`,
    },
  },
];
