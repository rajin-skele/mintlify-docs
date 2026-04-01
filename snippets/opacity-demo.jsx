import { useState } from "react";

export const OpacityDemo = () => {
  const [selectedOpacity, setSelectedOpacity] = useState(85);

  const opacities = [0, 25, 50, 75, 85, 100];

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)" }} className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem" }} className="text-zinc-700 dark:text-zinc-300">
          Opacity: {selectedOpacity}%
        </label>
        <input type="range" min="0" max="100" step="5" value={selectedOpacity} onChange={(e) => setSelectedOpacity(Number(e.target.value))} style={{ width: "100%", marginBottom: "0.75rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {opacities.map((value) => (
            <button key={value} onClick={() => setSelectedOpacity(value)} style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem", borderRadius: "0.25rem", border: "1px solid #d4d4d8", fontFamily: "monospace", cursor: "pointer" }} className={selectedOpacity === value ? "bg-blue-500 text-white" : "bg-white text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}>
              {value}%
            </button>
          ))}
        </div>
        <div style={{ padding: "2rem", borderRadius: "0.5rem" }} className="border border-zinc-200 dark:border-zinc-700">
          <div style={{ height: "180px", borderRadius: "0.5rem", opacity: selectedOpacity / 100 }} className="bg-blue-500 text-white flex items-center justify-center">
            <div style={{ fontSize: "1rem", fontWeight: "600", fontFamily: "monospace" }}>
              .opacity-{selectedOpacity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
