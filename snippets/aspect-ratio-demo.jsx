import { useState } from "react";

export const AspectRatioDemo = () => {
  const [selectedRatio, setSelectedRatio] = useState("aspect-video");

  const ratios = [
    { label: "aspect-square", value: "1 / 1", note: "Square tiles and avatars." },
    { label: "aspect-video", value: "16 / 9", note: "Video, hero, and editorial media." },
  ];

  const currentRatio = ratios.find((item) => item.label === selectedRatio);

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
            Aspect Ratio
          </label>
          <select
            value={selectedRatio}
            onChange={(e) => setSelectedRatio(e.target.value)}
            style={{ width: "100%", padding: "0.625rem 0.75rem", fontSize: "0.875rem", borderRadius: "0.375rem", border: "1px solid #d4d4d8", fontFamily: "monospace", transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease" }}
          >
            {ratios.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ padding: "1.5rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }} className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div
            style={{
              width: "100%",
              maxWidth: selectedRatio === "aspect-square" ? "280px" : "420px",
              aspectRatio: currentRatio?.value,
              margin: "0 auto",
              borderRadius: "0.9rem",
              background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #22c55e 100%)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "1.25rem",
              color: "white",
              transition: "max-width 0.3s ease, aspect-ratio 0.3s ease, border-radius 0.2s ease",
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.72 }}>Media Frame</div>
              <div style={{ fontSize: "1.3rem", fontWeight: "700" }}>{selectedRatio}</div>
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: "600", padding: "0.5rem 0.75rem", borderRadius: "999px", background: "rgba(255,255,255,0.16)" }}>
              {currentRatio?.value}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          .{selectedRatio} • {currentRatio?.note}
        </div>
      </div>
    </div>
  );
};
