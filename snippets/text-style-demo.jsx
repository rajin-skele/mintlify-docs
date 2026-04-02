import { useState } from "react";

export const TextStyleDemo = () => {
  const [transform, setTransform] = useState("");
  const [decoration, setDecoration] = useState("");
  const [fontStyle, setFontStyle] = useState("");

  const transforms = [
    { label: "default", className: "", value: "none" },
    { label: "uppercase", className: "uppercase", value: "uppercase" },
    { label: "lowercase", className: "lowercase", value: "lowercase" },
  ];

  const decorations = [
    { label: "default", className: "", value: "none" },
    { label: "underline", className: "underline", value: "underline" },
    { label: "no-underline", className: "no-underline", value: "none" },
  ];

  const styles = [
    { label: "default", className: "", value: "normal" },
    { label: "italic", className: "italic", value: "italic" },
  ];

  const activeClasses = [transform, decoration, fontStyle].filter(Boolean);

  return (
    <div className="not-prose" style={{ margin: "1.5rem 0" }}>
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
        className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }} className="text-zinc-700 dark:text-zinc-300">
              Text Transform
            </label>
            <div style={{ position: "relative" }}>
              <select
                value={transform}
                onChange={(e) => setTransform(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem 2.5rem 0.5rem 0.75rem",
                  fontSize: "0.875rem",
                  borderRadius: "0.375rem",
                  border: "1px solid",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease",
                  outline: "none",
                  appearance: "none",
                  backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                }}
                className="bg-white text-zinc-900 border-zinc-300 hover:border-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:focus:border-blue-500"
              >
                {transforms.map((item) => (
                  <option key={item.label} value={item.className}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }} className="text-zinc-700 dark:text-zinc-300">
                Decoration
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={decoration}
                  onChange={(e) => setDecoration(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem 2.5rem 0.5rem 0.75rem",
                    fontSize: "0.875rem",
                    borderRadius: "0.375rem",
                    border: "1px solid",
                    cursor: "pointer",
                    fontFamily: "monospace",
                    transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease",
                    outline: "none",
                    appearance: "none",
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                  className="bg-white text-zinc-900 border-zinc-300 hover:border-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:focus:border-blue-500"
                >
                  {decorations.map((item) => (
                    <option key={item.label} value={item.className}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", transition: "color 0.2s ease" }} className="text-zinc-700 dark:text-zinc-300">
                Font Style
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={fontStyle}
                  onChange={(e) => setFontStyle(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem 2.5rem 0.5rem 0.75rem",
                    fontSize: "0.875rem",
                    borderRadius: "0.375rem",
                    border: "1px solid",
                    cursor: "pointer",
                    fontFamily: "monospace",
                    transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease",
                    outline: "none",
                    appearance: "none",
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                  className="bg-white text-zinc-900 border-zinc-300 hover:border-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:focus:border-blue-500"
                >
                  {styles.map((item) => (
                    <option key={item.label} value={item.className}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "2rem", borderRadius: "0.5rem", transition: "background-color 0.2s ease, border-color 0.2s ease" }} className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <p
            style={{
              textTransform: transforms.find((item) => item.className === transform)?.value,
              textDecoration: decorations.find((item) => item.className === decoration)?.value,
              fontStyle: styles.find((item) => item.className === fontStyle)?.value,
              fontSize: "1.5rem",
              fontWeight: "600",
              lineHeight: "1.4",
              textAlign: "center",
              transition: "color 0.2s ease",
              margin: 0,
            }}
            className="text-zinc-900 dark:text-zinc-100"
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div style={{ marginTop: "0.75rem", fontSize: "0.75rem", textAlign: "center", transition: "color 0.2s ease" }} className="text-zinc-500 dark:text-zinc-400">
          {activeClasses.length ? activeClasses.map((className) => `.${className}`).join(" • ") : "Default text state (no utility selected)"}
        </div>
      </div>
    </div>
  );
};
