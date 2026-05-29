import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbChartBar } from "react-icons/tb";
import { site } from "../data/site";
import { Reveal } from "./motion";

const connectLinks = [
  { href: site.github, label: "GitHub", icon: FiGithub },
  { href: site.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: site.tableauProfile, label: "Tableau", icon: TbChartBar },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-surface/60 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="headline mt-3 max-w-xl text-3xl sm:text-4xl">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Find my notebooks, profile, and dashboards here.
          </p>

          <ul className="mt-8 flex flex-wrap gap-4">
            {connectLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex w-30 flex-col items-center gap-3 rounded-2xl px-5 py-5 transition-colors"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-blau), var(--color-pink))",
                    }}
                  >
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
