import { useState } from "react";

export const FontWeightDemo = () => {
  const [copiedValue, setCopiedValue] = useState(null);

  const fontWeights = [
    { label: "font-thin", weight: "100" },
    { label: "font-extralight", weight: "200" },
    { label: "font-light", weight: "300" },
    { label: "font-normal", weight: "400" },
    { label: "font-medium", weight: "500" },
    { label: "font-semibold", weight: "600" },
    { label: "font-bold", weight: "700" },
    { label: "font-extrabold", weight: "800" },
    { label: "font-black", weight: "900" },
  ];

  const copyToClipboard = (className) => {
    navigator.clipboard.writeText(`.${className}`)
      .then(() => {
        setCopiedValue(className);
        setTimeout(() => setCopiedValue(null), 1500);
      })
      .catch(() => {});
  };

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
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {fontWeights.map((item) => (
            <div
              key={item.label}
              onClick={() => copyToClipboard(item.label)}
              style={{
                padding: "0.875rem 1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",
              }}
              className="bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-sm dark:bg-zinc-800/30 dark:border-zinc-700/50 dark:hover:bg-zinc-800/50 dark:hover:border-zinc-600"
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <code style={{ fontFamily: "monospace", fontSize: "0.75rem", fontWeight: "500", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
                  .{item.label}
                </code>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    opacity: copiedValue === item.label ? 1 : 0,
                    transform: copiedValue === item.label ? "translateY(0px)" : "translateY(4px)",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                  }}
                  className="text-green-600 dark:text-green-400"
                >
                  copied
                </span>
              </div>
              <div style={{ fontSize: "1.125rem", fontWeight: item.weight, transition: "color 0.2s ease" }} className="text-zinc-900 dark:text-zinc-100">
                The bundled weight scale
              </div>
            </div>
          ))}
        </div>

        <div
          style={{ marginTop: "1rem", paddingTop: "1rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }}
          className="border-t border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400"
        >
          Click any row to copy the class name from the full shipped weight scale.
        </div>
      </div>
    </div>
  );
};
