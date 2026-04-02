import { useState } from "react";

export const FlexWrapDemo = () => {
  const [selectedWrap, setSelectedWrap] = useState("flex-wrap");

  const wrapOptions = [
    { label: "flex-wrap", value: "wrap", note: "Items flow onto new rows." },
    { label: "flex-nowrap", value: "nowrap", note: "Items stay on one line and can overflow." },
    { label: "flex-wrap-reverse", value: "wrap-reverse", note: "Rows stack in reverse order." },
  ];

  const currentWrap = wrapOptions.find((item) => item.label === selectedWrap);

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
            Flex Wrap
          </label>
          <select
            value={selectedWrap}
            onChange={(e) => setSelectedWrap(e.target.value)}
            style={{ width: "100%", padding: "0.625rem 0.75rem", fontSize: "0.875rem", borderRadius: "0.375rem", border: "1px solid #d4d4d8", fontFamily: "monospace", transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease" }}
          >
            {wrapOptions.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ padding: "1.5rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }} className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div
            style={{
              display: "flex",
              flexWrap: currentWrap?.value,
              gap: "0.75rem",
              width: "100%",
              minHeight: "200px",
              alignContent: currentWrap?.value === "wrap-reverse" ? "flex-start" : "stretch",
              overflow: currentWrap?.value === "nowrap" ? "auto" : "hidden",
              padding: "1rem",
              borderRadius: "0.75rem",
              border: "2px dashed rgba(148, 163, 184, 0.7)",
              transition: "border-color 0.2s ease",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                style={{
                  width: "120px",
                  minWidth: "120px",
                  height: "72px",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "1rem",
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                }}
                className="bg-blue-500 text-white shadow-sm"
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          .{selectedWrap} • {currentWrap?.note}
        </div>
      </div>
    </div>
  );
};
