export interface Credential {
  name: string;
  issuer: string;
  /** Optional link to Coursera, Credly, Kaggle profile, etc. */
  href?: string;
}

export const credentials: Credential[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
  },
  {
    name: "Tableau Fundamentals",
    issuer: "Corporate Finance Institute",
  },
  {
    name: "SQL Fundamentals for Data Analysts",
    issuer: "Corporate Finance Institute",
  },
  {
    name: "Python",
    issuer: "Kaggle Learn",
  },
  {
    name: "Pandas",
    issuer: "Kaggle Learn",
  },
];
