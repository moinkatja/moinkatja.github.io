import type { Project } from "../types";
import { tableauStaticImageUrl, tableauThumbUrl } from "../lib/tableau";
import { tableauVizBase } from "./site";

function thumb(workbook: string, view = "Dashboard", featured = false) {
  return featured
    ? tableauStaticImageUrl(workbook, view)
    : tableauThumbUrl(workbook, view);
}

/**
 * featured = shown by default. Add links.notebook when the GitHub repo is public.
 */
export const projects: Project[] = [
  {
    id: "happiness",
    title: "Global Happiness",
    description:
      "147 countries compared: Finland leads, and freedom vs GDP tell different stories by year.",
    tools: ["tableau"],
    featured: true,
    tableauWorkbook: "Happiness_17774093190550",
    tableauView: "Dashboard",
    thumbnail: thumb("Happiness_17774093190550", "Dashboard", true),
    links: { tableau: `${tableauVizBase}/Happiness_17774093190550/Dashboard` },
  },
  {
    id: "churn",
    title: "Customer Churn",
    description:
      "Who leaves, when, and which signals matter most in a deep-dive churn dashboard.",
    tools: ["tableau"],
    featured: true,
    tableauWorkbook: "Churn_17770163509080",
    tableauView: "DashboardDeepDive",
    thumbnail: thumb("Churn_17770163509080", "DashboardDeepDive", true),
    links: { tableau: `${tableauVizBase}/Churn_17770163509080/DashboardDeepDive` },
  },
  {
    id: "food-delivery",
    title: "Food Delivery Performance",
    description:
      "Pandas EDA on delivery data, then Tableau on speed, volume, and what drives performance.",
    tools: ["tableau", "python"],
    featured: true,
    tableauWorkbook: "food_delivery_17793110647910",
    tableauView: "Dashboard",
    thumbnail: thumb("food_delivery_17793110647910", "Dashboard", true),
    links: {
      tableau: `${tableauVizBase}/food_delivery_17793110647910/Dashboard`,
    },
  },
  {
    id: "airlines",
    title: "Airlines Over the World",
    description:
      "EDA on 23k+ airline reviews, then Tableau on ratings by category, traveller type, and top destinations.",
    tools: ["tableau", "python"],
    featured: true,
    tableauWorkbook: "Airlinesovertheworld",
    tableauView: "Dashboard",
    thumbnail: thumb("Airlinesovertheworld", "Dashboard", true),
    links: { tableau: `${tableauVizBase}/Airlinesovertheworld/Dashboard` },
  },
  {
    id: "purchase-behavior",
    title: "Purchase Behavior",
    description: "Segments, timing, and patterns in how customers buy over time.",
    tools: ["tableau"],
    featured: false,
    tableauWorkbook: "Purchase_Behavior",
    tableauView: "Dashboard",
    thumbnail: thumb("Purchase_Behavior", "Dashboard"),
    links: { tableau: `${tableauVizBase}/Purchase_Behavior/Dashboard` },
  },
  {
    id: "job-offers",
    title: "Job Offer Analysis",
    description: "Roles and offers compared to see what stands out in the market.",
    tools: ["tableau"],
    featured: false,
    tableauWorkbook: "JobOfferAnalysis",
    tableauView: "Dashboard",
    thumbnail: thumb("JobOfferAnalysis", "Dashboard"),
    links: { tableau: `${tableauVizBase}/JobOfferAnalysis/Dashboard` },
  },
  {
    id: "summer-vibes",
    title: "Summer Vibes",
    description: "Seasonal mood and patterns in one interactive view.",
    tools: ["tableau"],
    featured: false,
    tableauWorkbook: "SummerVibes",
    tableauView: "Dashboard",
    thumbnail: thumb("SummerVibes", "Dashboard"),
    links: { tableau: `${tableauVizBase}/SummerVibes/Dashboard` },
  },
];

export const featuredProjectCount = projects.filter((p) => p.featured).length;
export const moreProjectCount = projects.length - featuredProjectCount;
