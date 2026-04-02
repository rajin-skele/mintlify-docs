import { useState } from "react";

export const ZIndexDemo = () => {
  const [selectedZ, setSelectedZ] = useState("z-20");

  const zIndexes = [
    { label: "z-0", value: 0 },
    { label: "z-10", value: 10 },
    { label: "z-20", value: 20 },
    { label: "z-50", value: 50 },
    { label: "z-100", value: 100 },
  ];

  const currentZ = zIndexes.find((item) => item.label === selectedZ);
  const activeZ = currentZ?.value ?? 20;
  const activeNote =
    activeZ < 10
      ? "The active panel drops behind both preset layers."
      : activeZ < 20
        ? "The active panel clears the background, but still sits below the middle layer."
        : activeZ === 20
          ? "The active panel matches the middle layer, so document order decides the overlap."
          : "The active panel rises above the preset layers.";

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div
        style={{
          maxWidth: "680px",
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
            Z-Index Layer
          </label>
          <select
            value={selectedZ}
            onChange={(e) => setSelectedZ(e.target.value)}
            style={{ width: "100%", padding: "0.625rem 0.75rem", fontSize: "0.875rem", borderRadius: "0.375rem", border: "1px solid #d4d4d8", fontFamily: "monospace", transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease" }}
          >
            {zIndexes.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ padding: "1.5rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }} className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div
            style={{
              position: "relative",
              height: "260px",
              borderRadius: "0.75rem",
              overflow: "hidden",
              background: "linear-gradient(180deg, rgba(59,130,246,0.08), rgba(34,197,94,0.08))",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                backgroundImage:
                  "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "168px",
                height: "96px",
                borderRadius: "1rem",
                padding: "0.9rem",
                background: "rgba(255,255,255,0.96)",
                border: "1px solid rgba(148,163,184,0.24)",
                boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
                zIndex: 10,
                transform: "translate(-138px, -10px)",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "0.35rem" }}>z-10</div>
              <div style={{ fontSize: "1rem", fontWeight: "700", color: "#0f172a" }}>Base layer</div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "168px",
                height: "96px",
                borderRadius: "1rem",
                padding: "0.9rem",
                background: "#f8fafc",
                border: "1px solid rgba(148,163,184,0.24)",
                boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
                zIndex: 20,
                transform: "translate(-8px, 8px)",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "0.35rem" }}>z-20</div>
              <div style={{ fontSize: "1rem", fontWeight: "700", color: "#0f172a" }}>Middle layer</div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "184px",
                minHeight: "126px",
                borderRadius: "1rem",
                padding: "0.95rem",
                background: "#2563eb",
                color: "white",
                boxShadow: "0 14px 28px rgba(37,99,235,0.22)",
                border: "1px solid rgba(255,255,255,0.24)",
                zIndex: activeZ,
                transform: "translate(-82px, -102px)",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.2rem 0.45rem",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  background: "rgba(255,255,255,0.16)",
                  marginBottom: "0.55rem",
                }}
              >
                active {selectedZ}
              </div>
              <div style={{ fontSize: "1rem", fontWeight: "700" }}>Selected panel</div>
              <div style={{ fontSize: "0.8rem", opacity: 0.9, marginTop: "0.45rem", lineHeight: "1.35", maxWidth: "13ch" }}>
                Moves through the stack as you change the class.
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          .{selectedZ} on a positioned element • current z-index: {activeZ} • {activeNote}
        </div>
      </div>
    </div>
  );
};
