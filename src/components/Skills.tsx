import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  SiFigma,
  SiGit,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";
import { TbChartBar } from "react-icons/tb";
import { skills } from "../data/skills";
import { Reveal, staggerContainer } from "./motion";

const iconMap: Record<string, ReactNode> = {
  sql: <SiPostgresql className="text-2xl text-sql" />,
  python: <SiPython className="text-2xl text-python" />,
  tableau: <TbChartBar className="text-2xl text-blau" />,
  frontend: <SiReact className="text-2xl text-pink" />,
};

const accents = [
  "from-blau/10 to-turquoise-soft",
  "from-pink-soft to-blau/5",
  "from-turquoise-soft to-pink-soft",
  "from-blau/5 to-turquoise-soft",
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-surface/50 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="headline mt-3 text-3xl sm:text-4xl">What I work with</h2>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skills.map((skill, i) => (
            <motion.article
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className={`card card-hover bg-gradient-to-br p-6 ${accents[i % accents.length]}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface shadow-sm">
                {iconMap[skill.icon]}
              </div>
              <h3 className="mt-5 font-semibold text-ink">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <li key={tag} className="pill text-[10px]">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-10 flex justify-center gap-4 text-xl text-muted/40">
          {[SiPandas, SiGit, SiFigma].map((Icon, i) => (
            <span
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface shadow-sm transition hover:text-pink"
            >
              <Icon />
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
