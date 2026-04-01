import { useState } from "react";

export const MarginDemo = () => {
  const [selectedSize, setSelectedSize] = useState("m-4");

  const marginSizes = [
    { label: "m-1", value: "clamp(0.25rem, calc(0.21rem + 0.09vw), 0.31rem)" },
    { label: "m-2", value: "clamp(0.5rem, calc(0.43rem + 0.18vw), 0.63rem)" },
    { label: "m-4", value: "clamp(1rem, calc(0.85rem + 0.37vw), 1.25rem)" },
    { label: "m-6", value: "clamp(1.5rem, calc(1.28rem + 0.56vw), 1.88rem)" },
    { label: "m-8", value: "clamp(2rem, calc(1.71rem + 0.74vw), 2.5rem)" },
    { label: "m-12", value: "clamp(3rem, calc(2.56rem + 1.1vw), 3.75rem)" },
  ];

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)" }} className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} style={{ width: "100%", padding: "0.625rem 0.75rem", fontSize: "0.875rem", borderRadius: "0.375rem", border: "1px solid #d4d4d8", fontFamily: "monospace", marginBottom: "1rem" }}>
          {marginSizes.map((size) => (
            <option key={size.label} value={size.label}>{size.label}</option>
          ))}
        </select>
        <div style={{ display: "flex", justifyContent: "center", padding: "1.5rem" }} className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg">
          <div style={{ padding: marginSizes.find((s) => s.label === selectedSize)?.value, border: "2px dashed #94a3b8", borderRadius: "0.5rem" }}>
            <div style={{ padding: "1rem 1.5rem", borderRadius: "0.375rem", fontFamily: "monospace", fontSize: "0.875rem", fontWeight: "600" }} className="bg-blue-500 text-white">
              .{selectedSize}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
