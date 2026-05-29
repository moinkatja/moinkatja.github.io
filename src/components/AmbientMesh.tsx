import { motion } from "framer-motion";

export function AmbientMesh() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full opacity-60 blur-[100px]"
        style={{ background: "rgba(59, 110, 255, 0.35)" }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-1/4 h-[380px] w-[380px] rounded-full opacity-50 blur-[100px]"
        style={{ background: "rgba(255, 62, 184, 0.3)" }}
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full opacity-45 blur-[90px]"
        style={{ background: "rgba(24, 230, 212, 0.35)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
