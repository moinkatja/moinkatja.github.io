import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-ink">{site.name}</span>
        </p>
        <a
          href="#"
          className="font-semibold text-blau transition hover:text-pink"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
