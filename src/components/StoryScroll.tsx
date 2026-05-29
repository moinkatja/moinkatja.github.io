import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { storySteps } from "../data/story";
import { useScrollStoryStep } from "../hooks/useScrollStoryStep";
import { StoryVisual } from "./StoryVisual";

const stepIds = storySteps.map((s) => s.id);

export function StoryScroll() {
  const activeId = useScrollStoryStep(stepIds);
  const active = storySteps.find((s) => s.id === activeId) ?? storySteps[0];
  const reduced = useReducedMotion();

  return (
    <section id="story" className="scroll-mt-20 border-t border-line px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="section-label">Process</p>
        <h2 className="headline mt-3 max-w-2xl text-3xl sm:text-4xl">
          How I tell a <span className="gradient-text gradient-text-animated">story</span>
        </h2>

        <div className="mt-14 flex flex-col gap-14 lg:hidden">
          {storySteps.map((step) => (
            <article key={step.id} className="space-y-5">
              <StoryVisual visual={step.visual} />
              <div>
                <span className="pill pill-accent text-[10px]">{step.tag}</span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-turquoise-ink">
                  {step.label}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-muted">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 hidden lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="sticky top-28 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduced ? false : { opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: 24 }}
                transition={{ duration: 0.4 }}
              >
                <span className="pill pill-accent">{active.tag}</span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-turquoise-ink">
                  {active.label}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-ink">{active.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{active.body}</p>
              </motion.div>
            </AnimatePresence>

            <ul className="mt-10 flex gap-2" aria-label="Progress">
              {storySteps.map((step) => (
                <li key={step.id}>
                  <a
                    href={`#${step.id}`}
                    className={`block h-1.5 rounded-full transition-all ${
                      step.id === activeId
                        ? "w-8 bg-gradient-to-r from-blau via-turquoise to-pink"
                        : "w-1.5 bg-line hover:bg-turquoise/50"
                    }`}
                    aria-label={step.title}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <StoryVisual visual={active.visual} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div aria-hidden>
              {storySteps.map((step) => (
                <div key={step.id} id={step.id} className="story-step-panel" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
