export type Tool = "sql" | "python" | "tableau";

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: Tool[];
  /** Shown in the default curated grid */
  featured?: boolean;
  thumbnail?: string;
  /** Tableau workbook + sheet name (required for real thumbnails) */
  tableauWorkbook?: string;
  tableauView?: string;
  emoji?: string;
  links: {
    tableau?: string;
    /** GitHub repo root */
    repo?: string;
    /** Direct link to .ipynb on GitHub (or nbviewer) */
    notebook?: string;
  };
}

export interface Skill {
  name: string;
  description: string;
  icon: "sql" | "python" | "tableau" | "frontend";
  tags: string[];
}

