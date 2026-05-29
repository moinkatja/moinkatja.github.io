import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

const sections = ["story", "about", "skills", "projects", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sections);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="text-ink">{site.name.split(" ")[0]} </span>
          <span className="gradient-text">Blau</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-blau" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a href="#contact" className="btn-pink hidden md:inline-flex">
          Contact
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-surface md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl py-3 text-sm font-medium text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
