import { useState } from "react";

export const FontSizeDemo = () => {
  const [copiedValue, setCopiedValue] = useState(null);

  const fontSizes = [
    { label: "text-2xs", size: "clamp(0.58rem, calc(0.49rem + 0.09vw), 0.64rem)" },
    { label: "text-xs", size: "clamp(0.69rem, calc(0.59rem + 0.16vw), 0.8rem)" },
    { label: "text-sm", size: "clamp(0.83rem, calc(0.71rem + 0.25vw), 1rem)" },
    { label: "text-base", size: "clamp(1rem, calc(0.85rem + 0.37vw), 1.25rem)" },
    { label: "text-lg", size: "clamp(1.2rem, calc(1.02rem + 0.53vw), 1.56rem)" },
    { label: "text-xl", size: "clamp(1.44rem, calc(1.22rem + 0.75vw), 1.95rem)" },
    { label: "text-2xl", size: "clamp(1.73rem, calc(1.47rem + 1.05vw), 2.44rem)" },
    { label: "text-3xl", size: "clamp(2.07rem, calc(1.76rem + 1.45vw), 3.05rem)" },
    { label: "text-4xl", size: "clamp(2.49rem, calc(2.12rem + 1.97vw), 3.82rem)" },
    { label: "text-5xl", size: "clamp(2.99rem, calc(2.54rem + 2.63vw), 4.77rem)" },
    { label: "text-6xl", size: "clamp(3.59rem, calc(3.08rem + 3.47vw), 5.96rem)" },
    { label: "text-7xl", size: "clamp(4.31rem, calc(3.74rem + 4.58vw), 7.45rem)" },
    { label: "text-8xl", size: "clamp(5.17rem, calc(4.51rem + 6.05vw), 9.31rem)" },
    { label: "text-9xl", size: "clamp(6.2rem, calc(5.45rem + 7.98vw), 11.64rem)" },
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
          maxWidth: "720px",
          margin: "0 auto",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
        className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {fontSizes.map((item) => (
            <div
              key={item.label}
              onClick={() => copyToClipboard(item.label)}
              style={{
                padding: "0.875rem 1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                overflow: "hidden",
                transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",
              }}
              className="bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-sm dark:bg-zinc-800/30 dark:border-zinc-700/50 dark:hover:bg-zinc-800/50 dark:hover:border-zinc-600"
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "0.5rem" }}>
                <code style={{ fontFamily: "monospace", fontSize: "0.75rem", fontWeight: "500" }} className="text-zinc-500 dark:text-zinc-400">
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
              <div
                style={{
                  maxWidth: "100%",
                  overflowX: "auto",
                  overflowY: "hidden",
                  overscrollBehaviorX: "contain",
                }}
              >
                <div
                  style={{
                    width: "max-content",
                    minWidth: "100%",
                    fontSize: item.size,
                    fontWeight: "700",
                    lineHeight: "1.05",
                    transition: "font-size 0.3s ease, color 0.2s ease",
                  }}
                  className="text-zinc-900 dark:text-zinc-100"
                >
                  Skelementor scale
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{ marginTop: "1rem", paddingTop: "1rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }}
          className="border-t border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400"
        >
          Click any row to copy the class name from the full bundled text scale.
        </div>
      </div>
    </div>
  );
};
