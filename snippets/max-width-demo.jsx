import { useState } from "react";

export const MaxWidthDemo = () => {
  const [selectedMaxWidth, setSelectedMaxWidth] = useState("max-w-lg");

  const maxWidths = [
    { label: "max-w-sm", value: "clamp(20rem, calc(17rem + 7.4vw), 25rem)" },
    { label: "max-w-md", value: "clamp(30rem, calc(25.5rem + 11.1vw), 37.5rem)" },
    { label: "max-w-lg", value: "clamp(40rem, calc(34rem + 14.8vw), 50rem)" },
    { label: "max-w-xl", value: "clamp(50rem, calc(42.5rem + 18.5vw), 62.5rem)" },
    { label: "max-w-2xl", value: "clamp(60rem, calc(51rem + 22.2vw), 75rem)" },
    { label: "max-w-full", value: "100%" },
  ];

  const currentWidth = maxWidths.find((item) => item.label === selectedMaxWidth);

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
        className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
      >
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }} className="text-zinc-700 dark:text-zinc-300">
            Max Width
          </label>
          <select
            value={selectedMaxWidth}
            onChange={(e) => setSelectedMaxWidth(e.target.value)}
            style={{ width: "100%", padding: "0.625rem 0.75rem", fontSize: "0.875rem", borderRadius: "0.375rem", border: "1px solid #d4d4d8", fontFamily: "monospace", transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease" }}
          >
            {maxWidths.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ padding: "1.5rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }} className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div style={{ padding: "1rem", borderRadius: "0.75rem", border: "2px dashed rgba(148, 163, 184, 0.7)" }}>
            <div
              style={{
                width: "100%",
                maxWidth: currentWidth?.value,
                margin: "0 auto",
                borderRadius: "0.75rem",
                padding: "1.25rem",
                background: "white",
                border: "1px solid rgba(148, 163, 184, 0.24)",
                boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
                transition: "max-width 0.3s ease, border-color 0.2s ease, background-color 0.2s ease",
              }}
            >
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }} className="text-zinc-500 dark:text-zinc-400">
                Readable content width
              </div>
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.3rem", fontWeight: "700" }} className="text-zinc-900 dark:text-zinc-100">
                {selectedMaxWidth}
              </h3>
              <p style={{ margin: 0, lineHeight: "1.6" }} className="text-zinc-700 dark:text-zinc-300">
                Max-width utilities keep long-form content readable while still allowing the outer layout to stretch when the page has more room.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          .{selectedMaxWidth} • {currentWidth?.value}
        </div>
      </div>
    </div>
  );
};
