import { useState } from "react";

export const GapDemo = () => {
  const [selectedFamily, setSelectedFamily] = useState("gap");
  const [selectedToken, setSelectedToken] = useState("4");

  const families = [
    { label: "gap-*", value: "gap", property: "gap" },
    { label: "gap-x-*", value: "gap-x", property: "columnGap" },
    { label: "gap-y-*", value: "gap-y", property: "rowGap" },
  ];

  const gapSizes = [
    { token: "px", value: "1px" },
    { token: "1", value: "clamp(0.25rem, calc(0.21rem + 0.09vw), 0.31rem)" },
    { token: "2", value: "clamp(0.5rem, calc(0.43rem + 0.18vw), 0.63rem)" },
    { token: "3", value: "clamp(0.75rem, calc(0.64rem + 0.27vw), 0.94rem)" },
    { token: "4", value: "clamp(1rem, calc(0.85rem + 0.37vw), 1.25rem)" },
    { token: "6", value: "clamp(1.5rem, calc(1.28rem + 0.56vw), 1.88rem)" },
    { token: "8", value: "clamp(2rem, calc(1.71rem + 0.74vw), 2.5rem)" },
    { token: "10", value: "clamp(2.5rem, calc(2.14rem + 0.93vw), 3.13rem)" },
    { token: "12", value: "clamp(3rem, calc(2.56rem + 1.1vw), 3.75rem)" },
    { token: "14", value: "clamp(3.5rem, calc(2.99rem + 1.29vw), 4.38rem)" },
    { token: "16", value: "clamp(4rem, calc(3.42rem + 1.48vw), 5rem)" },
    { token: "18", value: "clamp(4.5rem, calc(3.84rem + 1.67vw), 5.63rem)" },
    { token: "20", value: "clamp(5rem, calc(4.27rem + 1.85vw), 6.25rem)" },
    { token: "22", value: "clamp(5.5rem, calc(4.7rem + 2.04vw), 6.88rem)" },
    { token: "24", value: "clamp(6rem, calc(5.13rem + 2.22vw), 7.5rem)" },
  ];

  const currentFamily = families.find((item) => item.value === selectedFamily);
  const currentSize = gapSizes.find((item) => item.token === selectedToken);
  const activeClass = `${currentFamily?.value}-${selectedToken}`;

  const previewStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "320px",
    [currentFamily?.property]: currentSize?.value,
  };

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
          transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
        className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }} className="text-zinc-700 dark:text-zinc-300">
              Gap Family
            </label>
            <select
              value={selectedFamily}
              onChange={(e) => setSelectedFamily(e.target.value)}
              style={{ width: "100%", padding: "0.625rem 0.75rem", fontSize: "0.875rem", borderRadius: "0.375rem", border: "1px solid #d4d4d8", fontFamily: "monospace", transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease" }}
            >
              {families.map((family) => (
                <option key={family.value} value={family.value}>
                  {family.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }} className="text-zinc-700 dark:text-zinc-300">
              Token
            </label>
            <select
              value={selectedToken}
              onChange={(e) => setSelectedToken(e.target.value)}
              style={{ width: "100%", padding: "0.625rem 0.75rem", fontSize: "0.875rem", borderRadius: "0.375rem", border: "1px solid #d4d4d8", fontFamily: "monospace", transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease" }}
            >
              {gapSizes.map((size) => (
                <option key={size.token} value={size.token}>
                  {currentFamily?.value}-{size.token}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ padding: "1.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }} className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={previewStyle}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  style={{
                    width: "96px",
                    height: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "background-color 0.2s ease, transform 0.2s ease",
                  }}
                  className="bg-blue-500 text-white"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          .{activeClass} • {currentFamily?.property}: {currentSize?.value}
        </div>
      </div>
    </div>
  );
};
