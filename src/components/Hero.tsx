import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "../data/site";
import { fadeUp } from "./motion";

const tags = ["Tableau", "SQL", "Python", "Pandas", "Jupyter", "Data viz"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] items-center px-5 pb-20 pt-24"
    >
      <motion.div style={{ opacity, y }} className="mx-auto w-full max-w-5xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="section-label"
        >
          Data analytics portfolio
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="headline mt-4 max-w-3xl"
        >
          I love{" "}
          <span className="gradient-text gradient-text-animated">data storytelling</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 max-w-lg text-lg text-muted"
        >
          {site.name} · {site.location}. Dashboards, queries, and notebooks, clean
          curious, and built to be remembered.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#projects" className="btn-primary">
            View work
          </a>
          <a href="#story" className="btn-secondary">
            My process
          </a>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-12 flex flex-wrap gap-2"
        >
          {tags.map((tag) => (
            <li key={tag} className="pill">
              {tag}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
