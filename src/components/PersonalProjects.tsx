import { FiExternalLink, FiGithub } from "react-icons/fi";
import { personalProjects } from "../data/personalProjects";
import type { Project, Tool } from "../types";
import { Reveal } from "./motion";
import { TableauThumb } from "./TableauThumb";

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

function hasNotebookLink(project: Project) {
  const url = project.links.notebook?.trim();
  if (!url) return false;
  return !/your-username|example\.com/i.test(url);
}

export function PersonalProjects() {
  return (
    <section id="personal" className="scroll-mt-20 px-5 pb-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">Personal</p>
          <h2 className="headline mt-3 text-3xl sm:text-4xl">
            Made for <span className="gradient-text">fun</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Not every dashboard is for work. These started closer to home, but
            still show the same craft: clean data, clear interaction, and a
            story worth clicking through.
          </p>
        </Reveal>

        <ul className="mt-12 flex flex-col gap-8">
          {personalProjects.map((project) => (
            <li key={project.id}>
              <Reveal>
                <article className="card card-hover group overflow-hidden lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                  <div className="overflow-hidden bg-bg">
                    {project.tableauWorkbook && project.thumbnail ? (
                      <TableauThumb
                        workbook={project.tableauWorkbook}
                        view={project.tableauView ?? "Dashboard"}
                        src={project.thumbnail}
                        alt={project.title}
                        fit="contain"
                        className="min-h-0! aspect-auto! rounded-none! transition duration-500 group-hover:scale-[1.01]"
                      />
                    ) : (
                      <div className="flex aspect-16/10 items-center justify-center text-4xl">
                        {project.emoji ?? "📊"}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-1.5">
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
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
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
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
