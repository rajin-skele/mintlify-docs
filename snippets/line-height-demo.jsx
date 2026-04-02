import { useState } from "react";

export const LineHeightDemo = () => {
  const [selectedLineHeight, setSelectedLineHeight] = useState("leading-normal");

  const lineHeights = [
    { label: "leading-tight", value: "clamp(1, calc(0.85 + 0.37vw), 1.25)" },
    { label: "leading-normal", value: "clamp(1.125, calc(0.96rem + 0.42vw), 1.41rem)" },
    { label: "leading-relaxed", value: "clamp(1.5, calc(1.28rem + 0.56vw), 1.88rem)" },
    { label: "leading-loose", value: "clamp(2, calc(1.71rem + 0.74vw), 2.5rem)" },
  ];

  const currentLeading = lineHeights.find((item) => item.label === selectedLineHeight);

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div
        style={{
          maxWidth: "620px",
          margin: "0 auto",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
        className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
      >
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }} className="text-zinc-700 dark:text-zinc-300">
          Leading class
        </label>
        <select
          value={selectedLineHeight}
          onChange={(e) => setSelectedLineHeight(e.target.value)}
          style={{
            width: "100%",
            padding: "0.625rem 0.75rem",
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            border: "1px solid #d4d4d8",
            fontFamily: "monospace",
            marginBottom: "1rem",
            transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease",
          }}
        >
          {lineHeights.map((item) => (
            <option key={item.label} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        <div style={{ padding: "1.5rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }} className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div
            style={{
              lineHeight: currentLeading?.value,
              fontSize: "clamp(1rem, calc(0.85rem + 0.37vw), 1.25rem)",
              transition: "line-height 0.25s ease, color 0.2s ease",
            }}
            className="text-zinc-900 dark:text-zinc-100"
          >
            The bundled leading classes keep headings compact and paragraphs readable across the responsive type scale.
          </div>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          .{selectedLineHeight} • {currentLeading?.value}
        </div>
      </div>
    </div>
  );
};
