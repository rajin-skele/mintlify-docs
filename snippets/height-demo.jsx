import { useState } from "react";

export const HeightDemo = () => {
  const [selectedHeight, setSelectedHeight] = useState("h-screen");

  const heights = [
    { label: "h-auto", value: "Auto", previewHeight: "auto", note: "Element grows with content." },
    { label: "h-full", value: "100%", previewHeight: "100%", note: "Matches the parent height." },
    { label: "h-screen", value: "100vh", previewHeight: "100%", note: "Fills the viewport height." },
    { label: "min-h-full", value: "100%", previewHeight: "100%", note: "Won't be smaller than its parent." },
    { label: "min-h-screen", value: "100vh", previewHeight: "100%", note: "Won't be smaller than the viewport." }
  ];

  const selected = heights.find((height) => height.label === selectedHeight);

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease"
        }}
        className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
      >
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }}
            className="text-zinc-700 dark:text-zinc-300"
          >
            Height Class
          </label>
          <div style={{ position: "relative" }}>
            <select
              value={selectedHeight}
              onChange={(e) => setSelectedHeight(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem 2.5rem 0.5rem 0.75rem",
                fontSize: "0.875rem",
                borderRadius: "0.375rem",
                border: "1px solid",
                cursor: "pointer",
                fontFamily: "monospace",
                transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease",
                outline: "none",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em"
              }}
              className="bg-white text-zinc-900 border-zinc-300 hover:border-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:focus:border-blue-500"
            >
              {heights.map((height) => (
                <option key={height.label} value={height.label}>
                  {height.label} ({height.value})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          style={{ padding: "1.5rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease", display: "flex", justifyContent: "center", alignItems: "flex-end" }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
        >
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "0.75rem",
              padding: "1rem",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              transition: "background-color 0.2s ease, border-color 0.2s ease"
            }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
          >
            <div
              style={{
                width: "100px",
                minHeight: selectedHeight.startsWith("min-") ? selected?.previewHeight : undefined,
                height: selectedHeight.startsWith("min-") ? undefined : selected?.previewHeight,
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: "0.875rem",
                fontWeight: "600",
                padding: selectedHeight === "h-auto" ? "1rem 0.75rem" : "0.75rem",
                transition: "height 0.3s ease, min-height 0.3s ease, background-color 0.2s ease"
              }}
              className="bg-blue-500 dark:bg-blue-600 text-white shadow-sm"
            >
              .{selectedHeight}
            </div>
          </div>
        </div>

        <div
          style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }}
          className="text-zinc-500 dark:text-zinc-400"
        >
          {selected?.value} • {selected?.note}
        </div>
      </div>
    </div>
  );
};
