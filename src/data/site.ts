/** Gallery URL (Tableau Public profile). */
export const tableauProfile =
  "https://public.tableau.com/app/profile/katja.blau/vizzes";

/** Base for links to individual workbooks on your profile. */
export const tableauVizBase =
  "https://public.tableau.com/app/profile/katja.blau/viz";

export const site = {
  name: "Katja Blau",
  role: "Data Analyst",
  location: "Hamburg, Germany",
  github: "https://github.com/moinkatja",
  linkedin: "https://de.linkedin.com/in/katja-blau-726436244",
  tableauProfile,
};

export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;
