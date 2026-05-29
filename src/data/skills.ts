import type { Skill } from "../types";

export const skills: Skill[] = [
  {
    name: "SQL",
    description:
      "Joins, CTEs, window functions, and aggregations for reporting and ad-hoc analysis.",
    icon: "sql",
    tags: ["PostgreSQL", "BigQuery", "Reporting"],
  },
  {
    name: "Python · Pandas",
    description:
      "Data cleaning, EDA, and reproducible Jupyter notebooks.",
    icon: "python",
    tags: ["Jupyter", "Pandas", "Matplotlib"],
  },
  {
    name: "Tableau",
    description:
      "Interactive dashboards, calculated fields, and data stories for stakeholders.",
    icon: "tableau",
    tags: ["Public viz", "LOD", "Dashboards"],
  },
  {
    name: "Frontend background",
    description:
      "Years in React, Git, and UX, now applied to dashboards and clear data stories.",
    icon: "frontend",
    tags: ["React", "Git", "Figma"],
  },
];
