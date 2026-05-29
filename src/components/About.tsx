import { credentials } from "../data/credentials";
import { Reveal } from "./motion";

const highlights = [
  {
    title: "Frontend → Data",
    body: "UI sense meets analytics, with layouts that guide the eye to what matters.",
  },
  {
    title: "How I work",
    body: "Validate data, explore in SQL or Python, ship visuals people trust.",
  },
  {
    title: "Always learning",
    body: "Statistics, cloud warehouses, and sharper stories with every project.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="headline mt-3 text-3xl sm:text-4xl">
            From pixels to <span className="gradient-text">patterns</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal delay={1}>
            <p className="text-lg leading-relaxed text-muted">
              I used to work in frontend development. Now I'm focused on data
              analytics. I care about work that
              feels clear and fresh, the kind of visuals you'd actually want to
              scroll through.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Tableau for dashboards, SQL for truth-checking, Jupyter for
              exploration. My Tableau gallery is public; code and notebooks live on
              GitHub.
            </p>

            {credentials.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-turquoise-ink">
                  Credentials
                </p>
                <ul className="mt-3 space-y-2">
                  {credentials.map((item) => (
                    <li key={item.name} className="text-sm leading-snug text-muted">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-ink hover:text-blau"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="font-medium text-ink">{item.name}</span>
                      )}
                      <span className="text-muted"> · {item.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>

          <ul className="space-y-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i + 1}>
                <li className="card card-hover p-6">
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
