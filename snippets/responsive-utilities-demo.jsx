import { useState } from "react";

export const ResponsiveUtilitiesDemo = () => {
  const [selectedSuffix, setSelectedSuffix] = useState("--on-m");

  const suffixes = [
    { label: "--on-xxl", query: "min-width: 2400px" },
    { label: "--on-xl", query: "max-width: 1366px" },
    { label: "--on-l", query: "max-width: 1200px" },
    { label: "--on-m", query: "max-width: 1024px" },
    { label: "--on-s", query: "max-width: 880px" },
    { label: "--on-xs", query: "max-width: 767px" },
  ];

  const sampleClasses = [
    `flex-row${selectedSuffix}`,
    `justify-between${selectedSuffix}`,
    `items-center${selectedSuffix}`,
    `hidden${selectedSuffix}`,
  ];

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        }}
        className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
      >
        <label
          style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem" }}
          className="text-zinc-700 dark:text-zinc-300"
        >
          Breakpoint suffix
        </label>
        <select
          value={selectedSuffix}
          onChange={(e) => setSelectedSuffix(e.target.value)}
          style={{
            width: "100%",
            padding: "0.625rem 0.75rem",
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            border: "1px solid #d4d4d8",
            fontFamily: "monospace",
            marginBottom: "1rem",
          }}
        >
          {suffixes.map((suffix) => (
            <option key={suffix.label} value={suffix.label}>
              {suffix.label} ({suffix.query})
            </option>
          ))}
        </select>

        <div
          style={{ padding: "1rem", borderRadius: "0.5rem", marginBottom: "1rem" }}
          className="bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700"
        >
          {sampleClasses.map((sample) => (
            <div
              key={sample}
              style={{
                fontFamily: "monospace",
                fontSize: "0.875rem",
                padding: "0.625rem 0.75rem",
                borderRadius: "0.375rem",
                marginBottom: "0.5rem",
              }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100"
            >
              .{sample}
            </div>
          ))}
        </div>

        <p style={{ fontSize: "0.75rem", textAlign: "center" }} className="text-zinc-500 dark:text-zinc-400">
          Use suffixes on structural utilities instead of prefix syntax.
        </p>
      </div>
    </div>
  );
};
