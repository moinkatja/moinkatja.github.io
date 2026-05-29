import { motion } from "framer-motion";
import type { StoryVisual as StoryVisualType } from "../data/story";
import { TableauThumb } from "./TableauThumb";

interface StoryVisualProps {
  visual: StoryVisualType;
}

export function StoryVisual({ visual }: StoryVisualProps) {
  if (visual.type === "tableau") {
    return (
      <figure className="card overflow-hidden">
        <a
          href={visual.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block bg-bg"
        >
          <TableauThumb
            workbook={visual.workbook}
            view={visual.view}
            src={visual.image}
            alt={visual.caption}
            fit="contain"
            className="rounded-none"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold text-pink shadow-sm backdrop-blur-sm">
            Open viz ↗
          </span>
        </a>
        <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
          {visual.caption}
        </figcaption>
      </figure>
    );
  }

  if (visual.type === "sql") {
    return (
      <div className="code-terminal">
        <div className="code-terminal-header">
          <span className="h-2 w-2 rounded-full bg-pink" />
          <span className="h-2 w-2 rounded-full bg-turquoise" />
          <span className="h-2 w-2 rounded-full bg-blau" />
          <span className="ml-2 text-xs text-white/50">query.sql</span>
        </div>
        <pre className="code-terminal-body">
          <code>
            <span className="sql-kw">SELECT</span> customer_id,{" "}
            <span className="sql-fn">COUNT</span>(*) <span className="sql-kw">AS</span> orders
            {"\n"}
            <span className="sql-kw">FROM</span> orders
            {"\n"}
            <span className="sql-kw">WHERE</span> order_date {">="}{" "}
            <span className="sql-str">'2024-01-01'</span>
            {"\n"}
            <span className="sql-kw">GROUP BY</span> <span className="sql-num">1</span>
            {"\n"}
            <span className="sql-kw">ORDER BY</span> orders <span className="sql-kw">DESC</span>;
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-line bg-gradient-to-r from-turquoise-soft to-pink-soft px-4 py-3">
        <span className="text-xs font-semibold text-blau">analysis.ipynb</span>
      </div>
      <div className="space-y-2 p-4">
        {["import pandas as pd", "df = pd.read_csv(...)", "df.groupby(...).mean()"].map(
          (line, i) => (
            <div key={i} className="rounded-lg bg-bg px-3 py-2 font-mono text-sm text-ink">
              {line}
            </div>
          )
        )}
        <motion.div
          className="rounded-lg border border-dashed border-turquoise/40 bg-turquoise-soft/50 py-8 text-center text-sm text-muted"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          chart output
        </motion.div>
      </div>
    </div>
  );
}
