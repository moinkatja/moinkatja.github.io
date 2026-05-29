import { tableauStaticImageUrl } from "../lib/tableau";
import { tableauVizBase } from "./site";

export type StoryVisual =
  | {
      type: "tableau";
      workbook: string;
      view: string;
      image: string;
      caption: string;
      href: string;
    }
  | { type: "sql" }
  | { type: "jupyter" };

export const storySteps = [
  {
    id: "story-step-1",
    label: "01 · The hook",
    title: "Every dataset has a story",
    body: "Numbers alone rarely convince anyone. I look for the narrative: what changed, for whom, and why it matters.",
    tag: "Story",
    visual: {
      type: "tableau" as const,
      workbook: "Happiness_17774093190550",
      view: "Dashboard",
      image: tableauStaticImageUrl("Happiness_17774093190550", "Dashboard"),
      caption: "Happiness dashboard: spot the pattern, then the story",
      href: `${tableauVizBase}/Happiness_17774093190550/Dashboard`,
    },
  },
  {
    id: "story-step-2",
    label: "02 · Ask",
    title: "SQL asks the right questions",
    body: "Joins, filters, and aggregations turn raw tables into answers. I use SQL to frame the plot before drawing a single chart.",
    tag: "SQL",
    visual: { type: "sql" as const },
  },
  {
    id: "story-step-3",
    label: "03 · Explore",
    title: "Jupyter is where ideas wander",
    body: "In notebooks I clean, test, and play, following curiosity until a pattern feels real enough to share.",
    tag: "Jupyter",
    visual: { type: "jupyter" as const },
  },
  {
    id: "story-step-4",
    label: "04 · Share",
    title: "Tableau makes the story land",
    body: "Interactive dashboards let people lean in: filter, compare, and reach their own “aha” at their own pace.",
    tag: "Tableau",
    visual: {
      type: "tableau" as const,
      workbook: "Churn_17770163509080",
      view: "DashboardDeepDive",
      image: tableauStaticImageUrl("Churn_17770163509080", "DashboardDeepDive"),
      caption: "Churn dashboard, built for exploration",
      href: `${tableauVizBase}/Churn_17770163509080/DashboardDeepDive`,
    },
  },
] as const;
