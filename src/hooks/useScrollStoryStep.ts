import { useEffect, useState } from "react";

/**
 * Picks the step whose center is closest to a point in the viewport.
 * Reliable for tall scrollytelling panels (IntersectionObserver often sticks on step 1).
 */
export function useScrollStoryStep(stepIds: string[]) {
  const [active, setActive] = useState(stepIds[0] ?? "");

  useEffect(() => {
    if (stepIds.length === 0) return;

    const measure = () => {
      const anchorY = window.scrollY + window.innerHeight * 0.4;
      let closestId = stepIds[0];
      let minDistance = Infinity;

      for (const id of stepIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const centerY = window.scrollY + rect.top + rect.height / 2;
        const distance = Math.abs(centerY - anchorY);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      }

      setActive((prev) => (prev === closestId ? prev : closestId));
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [stepIds]);

  return active;
}
