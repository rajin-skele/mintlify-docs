import { useState } from "react";

const MIN_WIDTH = 360;
const MAX_WIDTH = 2400;

const getActiveBreakpoint = (width) => {
  if (width >= 2400) return { label: "--on-xxl", query: "min-width: 2400px" };
  if (width <= 767) return { label: "--on-xs", query: "max-width: 767px" };
  if (width <= 880) return { label: "--on-s", query: "max-width: 880px" };
  if (width <= 1024) return { label: "--on-m", query: "max-width: 1024px" };
  if (width <= 1200) return { label: "--on-l", query: "max-width: 1200px" };
  if (width <= 1366) return { label: "--on-xl", query: "max-width: 1366px" };
  return { label: "base", query: "between 1367px and 2399px" };
};

export const ResponsiveUtilitiesDemo = () => {
  const [viewportWidth, setViewportWidth] = useState(1024);

  const activeBreakpoint = getActiveBreakpoint(viewportWidth);
  const isXLDown = viewportWidth <= 1366;
  const isMDown = viewportWidth <= 1024;
  const isSDown = viewportWidth <= 880;
  const isXSDown = viewportWidth <= 767;

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
          Simulated viewport width
        </label>

        <input
          type="range"
          min={MIN_WIDTH}
          max={MAX_WIDTH}
          step="1"
          value={viewportWidth}
          onChange={(e) => setViewportWidth(Number(e.target.value))}
          style={{ width: "100%", marginBottom: "1rem", accentColor: "#2563eb" }}
        />

        <div style={{ marginBottom: "1rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          {viewportWidth}px • {activeBreakpoint.label} ({activeBreakpoint.query})
        </div>

        <div
          style={{ padding: "1rem", borderRadius: "0.5rem", marginBottom: "1rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
        >
          <div
            style={{
              padding: "1rem",
              borderRadius: "0.75rem",
              background: "white",
              border: "1px solid rgba(148, 163, 184, 0.24)",
              display: "flex",
              flexDirection: isMDown ? "column" : "row",
              gap: "0.75rem",
            }}
          >
            <div style={{ width: isMDown ? "100%" : "120px", minHeight: "84px", borderRadius: "0.6rem", background: "#60a5fa" }} />

            <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {!isXLDown && (
                <div style={{ display: "flex", gap: "0.45rem" }}>
                  <span style={{ padding: "0.3rem 0.55rem", borderRadius: "999px", fontSize: "0.72rem", background: "rgba(37,99,235,0.08)", color: "#1d4ed8", fontWeight: "700" }}>
                    Docs
                  </span>
                  <span style={{ padding: "0.3rem 0.55rem", borderRadius: "999px", fontSize: "0.72rem", background: "rgba(37,99,235,0.08)", color: "#1d4ed8", fontWeight: "700" }}>
                    Audit
                  </span>
                </div>
              )}

              <div>
                <div style={{ fontSize: "1rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.25rem" }}>
                  Responsive suffix preview
                </div>
                <div style={{ fontSize: "0.88rem", lineHeight: "1.5", color: "#475569" }}>
                  The card changes in a few obvious ways as the slider crosses the shipped breakpoint thresholds.
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: isSDown ? "wrap" : "nowrap", gap: "0.45rem" }}>
                <span style={{ padding: "0.35rem 0.55rem", borderRadius: "999px", fontSize: "0.72rem", background: "#e2e8f0", color: "#0f172a", fontWeight: "600" }}>
                  Layout
                </span>
                <span style={{ padding: "0.35rem 0.55rem", borderRadius: "999px", fontSize: "0.72rem", background: "#e2e8f0", color: "#0f172a", fontWeight: "600" }}>
                  Display
                </span>
                <span style={{ padding: "0.35rem 0.55rem", borderRadius: "999px", fontSize: "0.72rem", background: "#e2e8f0", color: "#0f172a", fontWeight: "600" }}>
                  Wrap
                </span>
              </div>

              {!isXSDown && (
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                  This minimal preview focuses on the clearest visual changes, while the readout above still tracks all shipped suffix breakpoints.
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          style={{ padding: "1rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }}
          className="bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700"
        >
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "0.625rem 0.75rem", borderRadius: "0.5rem" }} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700">
              <code style={{ fontFamily: "monospace", fontSize: "0.82rem" }} className="text-zinc-900 dark:text-zinc-100">
                inline-flex hidden--on-xl
              </code>
              <span style={{ fontSize: "0.72rem", fontWeight: "600", padding: "0.3rem 0.55rem", borderRadius: "999px", whiteSpace: "nowrap" }} className={isXLDown ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900" : "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"}>
                {isXLDown ? "override active" : "base layout active"}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "0.625rem 0.75rem", borderRadius: "0.5rem" }} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700">
              <code style={{ fontFamily: "monospace", fontSize: "0.82rem" }} className="text-zinc-900 dark:text-zinc-100">
                flex flex-row flex-col--on-m
              </code>
              <span style={{ fontSize: "0.72rem", fontWeight: "600", padding: "0.3rem 0.55rem", borderRadius: "999px", whiteSpace: "nowrap" }} className={isMDown ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900" : "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"}>
                {isMDown ? "override active" : "base layout active"}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "0.625rem 0.75rem", borderRadius: "0.5rem" }} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700">
              <code style={{ fontFamily: "monospace", fontSize: "0.82rem" }} className="text-zinc-900 dark:text-zinc-100">
                flex-nowrap flex-wrap--on-s
              </code>
              <span style={{ fontSize: "0.72rem", fontWeight: "600", padding: "0.3rem 0.55rem", borderRadius: "999px", whiteSpace: "nowrap" }} className={isSDown ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900" : "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"}>
                {isSDown ? "override active" : "base layout active"}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "0.625rem 0.75rem", borderRadius: "0.5rem" }} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700">
              <code style={{ fontFamily: "monospace", fontSize: "0.82rem" }} className="text-zinc-900 dark:text-zinc-100">
                hidden--on-xs
              </code>
              <span style={{ fontSize: "0.72rem", fontWeight: "600", padding: "0.3rem 0.55rem", borderRadius: "999px", whiteSpace: "nowrap" }} className={isXSDown ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900" : "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"}>
                {isXSDown ? "override active" : "inactive until xs"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
