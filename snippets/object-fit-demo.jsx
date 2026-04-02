import { useState } from "react";

const demoImage = "/images/framework-light.png";

export const ObjectFitDemo = () => {
  const [selectedFit, setSelectedFit] = useState("object-cover");

  const fitValue = selectedFit === "object-contain" ? "contain" : "cover";
  const fitNote =
    selectedFit === "object-contain"
      ? "Keeps the whole image visible inside the frame."
      : "Fills the frame and crops the edges when needed.";

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
        <label
          style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }}
          className="text-zinc-700 dark:text-zinc-300"
        >
          Object fit utility
        </label>
        <select
          value={selectedFit}
          onChange={(e) => setSelectedFit(e.target.value)}
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
          <option value="object-cover">object-cover</option>
          <option value="object-contain">object-contain</option>
        </select>

        <div
          style={{ padding: "1.5rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
        >
          <div
            style={{
              width: "260px",
              height: "170px",
              maxWidth: "100%",
              margin: "0 auto",
              borderRadius: "0.75rem",
              overflow: "hidden",
              border: "1px solid rgba(148, 163, 184, 0.35)",
              background: "rgba(15, 23, 42, 0.05)",
              transition: "border-color 0.2s ease, background-color 0.2s ease",
            }}
          >
            <img
              src={demoImage}
              alt="Object fit preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: fitValue,
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          .{selectedFit} • {fitNote}
        </div>
      </div>
    </div>
  );
};
