import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  if (reduced) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, var(--color-blau), var(--color-turquoise), var(--color-pink))",
      }}
      aria-hidden
    />
  );
}
