import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  featuredProjectCount,
  moreProjectCount,
  projects,
} from "../data/projects";
import { site } from "../data/site";
import type { Project, Tool } from "../types";
import { Reveal } from "./motion";
import { TableauThumb } from "./TableauThumb";

const allFilters: { id: "all" | Tool; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tableau", label: "Tableau" },
  { id: "python", label: "Jupyter" },
];

const toolBadge: Record<Tool, string> = {
  sql: "tool-sql",
  python: "tool-python",
  tableau: "tool-tableau",
};

const toolLabel: Record<Tool, string> = {
  sql: "SQL",
  python: "Jupyter",
  tableau: "Tableau",
};

function sortProjects(list: Project[]) {
  return [...list].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}

function hasNotebookLink(project: Project) {
  const url = project.links.notebook?.trim();
  if (!url) return false;
  return !/your-username|example\.com/i.test(url);
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | Tool>("all");
  const [showAll, setShowAll] = useState(false);

  const filters = useMemo(
    () =>
      allFilters.filter(
        (f) => f.id !== "sql" || projects.some((p) => p.tools.includes("sql"))
      ),
    []
  );

  const filtered = useMemo(() => {
    const pool = showAll ? projects : projects.filter((p) => p.featured);
    const byTool =
      filter === "all" ? pool : pool.filter((p) => p.tools.includes(filter));
    return sortProjects(byTool);
  }, [filter, showAll]);

  const gridClass = showAll
    ? "sm:grid-cols-2 lg:grid-cols-3"
    : "sm:grid-cols-2";

  return (
    <section id="projects" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="section-label">Projects</p>
            <h2 className="headline mt-3 text-3xl sm:text-4xl">
              Selected <span className="gradient-text">work</span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              {showAll ? (
                <>
                  Full gallery. More on{" "}
                  <a
                    href={site.tableauProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blau hover:text-pink"
                  >
                    Tableau Public
                  </a>
                  .
                </>
              ) : (
                <>
                  {featuredProjectCount} highlights.{" "}
                  {moreProjectCount > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowAll(true)}
                      className="font-semibold text-blau hover:text-pink"
                    >
                      View all {projects.length} projects
                    </button>
                  )}
                </>
              )}
            </p>
          </Reveal>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`filter-btn ${
                    filter === f.id ? "filter-btn-active" : "filter-btn-idle"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            {showAll && moreProjectCount > 0 && (
              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="text-sm font-semibold text-muted hover:text-blau"
              >
                Show selected only
              </button>
            )}
          </div>
        </div>

        <motion.ul layout className={`mt-14 grid gap-6 ${gridClass}`}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                className={project.featured && !showAll ? "lg:col-span-1" : undefined}
              >
                <article
                  className={`card card-hover group flex h-full flex-col overflow-hidden ${
                    project.featured ? "ring-1 ring-blau/10" : ""
                  }`}
                >
                  <div className="overflow-hidden bg-bg">
                    {project.tableauWorkbook && project.thumbnail ? (
                      <TableauThumb
                        workbook={project.tableauWorkbook}
                        view={project.tableauView ?? "Dashboard"}
                        src={project.thumbnail}
                        alt={project.title}
                        fit={project.featured ? "contain" : "cover"}
                        className={`rounded-none! transition duration-500 group-hover:scale-[1.01] ${
                          project.featured ? "min-h-0! aspect-auto!" : ""
                        }`}
                      />
                    ) : (
                      <div className="flex aspect-16/10 items-center justify-center text-4xl">
                        {project.emoji ?? "📊"}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.featured && (
                        <span className="rounded-full bg-blau/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blau">
                          Featured
                        </span>
                      )}
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${toolBadge[t]}`}
                        >
                          {toolLabel[t]}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 font-semibold text-ink transition-colors group-hover:text-blau">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                      {project.links.tableau && (
                        <a
                          href={project.links.tableau}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-pink hover:underline"
                        >
                          <FiExternalLink size={14} aria-hidden />
                          Tableau
                        </a>
                      )}
                      {hasNotebookLink(project) && (
                        <a
                          href={project.links.notebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blau hover:underline"
                        >
                          <FiGithub size={14} aria-hidden />
                          Notebook
                        </a>
                      )}
                      {project.links.repo && (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-muted hover:text-turquoise-ink"
                        >
                          <FiGithub size={14} aria-hidden />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted">
            No projects in this category yet.
          </p>
        )}

        {!showAll && moreProjectCount > 0 && filtered.length > 0 && (
          <p className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              View all {projects.length} projects
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
