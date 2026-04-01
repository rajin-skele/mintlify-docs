import { useState } from "react";

export const BorderWidthDemo = () => {
  const [copiedValue, setCopiedValue] = useState(null);

  const borderWidths = [
    { label: "border-0", width: "0px" },
    { label: "border-1", width: "clamp(0.0625rem, calc(0.053rem + 0.023vw), 0.078rem)" },
    { label: "border-2", width: "clamp(0.125rem, calc(0.107rem + 0.046vw), 0.156rem)" },
    { label: "border-4", width: "clamp(0.25rem, calc(0.21rem + 0.09vw), 0.31rem)" },
    { label: "border-8", width: "clamp(0.5rem, calc(0.43rem + 0.18vw), 0.63rem)" },
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
      <div style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)" }} className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {borderWidths.map((item) => (
            <div key={item.label} onClick={() => copyToClipboard(item.label)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.875rem 1rem", borderRadius: "0.5rem", cursor: "pointer" }} className="bg-zinc-50 border border-zinc-200 dark:bg-zinc-800/30 dark:border-zinc-700/50">
              <code style={{ fontFamily: "monospace", fontSize: "0.875rem", fontWeight: "500" }} className="text-zinc-600 dark:text-zinc-400">
                .{item.label}
              </code>
              <div style={{ width: "64px", height: "64px", borderWidth: item.width, borderStyle: "solid", borderRadius: "0.375rem" }} className="border-blue-500 bg-blue-50/50 dark:bg-blue-950/30" />
              {copiedValue === item.label && (
                <span style={{ fontSize: "0.75rem", fontWeight: "600", marginLeft: "0.5rem" }} className="text-green-600 dark:text-green-400">
                  copied
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
