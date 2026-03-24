import { useState } from "react";

export const TextStyleDemo = () => {
  const [transform, setTransform] = useState("none");
  const [decoration, setDecoration] = useState("none");
  const [style, setStyle] = useState("normal");

  const transforms = [
    { label: "none", value: "none" },
    { label: "uppercase", value: "uppercase" },
    { label: "lowercase", value: "lowercase" },
    { label: "capitalize", value: "capitalize" }
  ];

  const decorations = [
    { label: "none", value: "none" },
    { label: "underline", value: "underline" },
    { label: "line-through", value: "line-through" }
  ];

  const styles = [
    { label: "normal", value: "normal" },
    { label: "italic", value: "italic" }
  ];

  return (
    <div className="not-prose" style={{ margin: '1.5rem 0' }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease'
      }}
      className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1rem' }}>
          {/* Transform */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', transition: 'color 0.2s ease' }}
              className="text-zinc-700 dark:text-zinc-300">
              Text Transform
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={transform}
                onChange={(e) => setTransform(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 2.5rem 0.5rem 0.75rem',
                  fontSize: '0.875rem',
                  borderRadius: '0.375rem',
                  border: '1px solid',
                  cursor: 'pointer',
                  fontFamily: 'monospace',
                  transition: 'all 0.15s ease',
                  outline: 'none',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
                className="bg-white text-zinc-900 border-zinc-300 hover:border-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:focus:border-blue-500"
              >
                {transforms.map((t) => (
                  <option key={t.label} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Decoration and Style in 2 columns on desktop */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', transition: 'color 0.2s ease' }}
                className="text-zinc-700 dark:text-zinc-300">
                Decoration
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  value={decoration}
                  onChange={(e) => setDecoration(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 2.5rem 0.5rem 0.75rem',
                    fontSize: '0.875rem',
                    borderRadius: '0.375rem',
                    border: '1px solid',
                    cursor: 'pointer',
                    fontFamily: 'monospace',
                    transition: 'all 0.15s ease',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                  className="bg-white text-zinc-900 border-zinc-300 hover:border-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:focus:border-blue-500"
                >
                  {decorations.map((d) => (
                    <option key={d.label} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', transition: 'color 0.2s ease' }}
                className="text-zinc-700 dark:text-zinc-300">
                Style
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 2.5rem 0.5rem 0.75rem',
                    fontSize: '0.875rem',
                    borderRadius: '0.375rem',
                    border: '1px solid',
                    cursor: 'pointer',
                    fontFamily: 'monospace',
                    transition: 'all 0.15s ease',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                  className="bg-white text-zinc-900 border-zinc-300 hover:border-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:focus:border-blue-500"
                >
                  {styles.map((s) => (
                    <option key={s.label} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '2rem', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <p style={{
            textTransform: transform,
            textDecoration: decoration,
            fontStyle: style,
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.4',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            margin: 0
          }}
          className="text-zinc-900 dark:text-zinc-100">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          Mix and match styles to see the effects
        </div>
      </div>
    </div>
  );
};




