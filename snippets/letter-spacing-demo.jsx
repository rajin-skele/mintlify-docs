import { useState } from "react";

export const LetterSpacingDemo = () => {
  const [selectedSpacing, setSelectedSpacing] = useState("tracking-normal");

  const spacings = [
    { label: "tracking-tightest", value: "-0.1em" },
    { label: "tracking-tighter", value: "-0.05em" },
    { label: "tracking-tight", value: "-0.025em" },
    { label: "tracking-normal", value: "0em" },
    { label: "tracking-wide", value: "0.025em" },
    { label: "tracking-wider", value: "0.05em" },
    { label: "tracking-widest", value: "0.1em" }
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
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', transition: 'color 0.2s ease' }}
            className="text-zinc-700 dark:text-zinc-300">
            Letter Spacing
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedSpacing}
              onChange={(e) => setSelectedSpacing(e.target.value)}
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
              {spacings.map((s) => (
                <option key={s.label} value={s.label}>
                  {s.label} ({s.value})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ padding: '2rem', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Heading Example */}
            <div>
              <div style={{ 
                fontSize: '0.75rem', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              className="text-zinc-500 dark:text-zinc-400">
                Heading
              </div>
              <h2 style={{
                letterSpacing: spacings.find(s => s.label === selectedSpacing)?.value,
                fontSize: '2rem',
                fontWeight: '700',
                transition: 'letter-spacing 0.3s ease, color 0.2s ease',
                margin: 0
              }}
              className="text-zinc-900 dark:text-zinc-100">
                Typography
              </h2>
            </div>

            {/* Uppercase Example */}
            <div>
              <div style={{ 
                fontSize: '0.75rem', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              className="text-zinc-500 dark:text-zinc-400">
                Uppercase
              </div>
              <div style={{
                letterSpacing: spacings.find(s => s.label === selectedSpacing)?.value,
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                transition: 'letter-spacing 0.3s ease, color 0.2s ease'
              }}
              className="text-zinc-700 dark:text-zinc-300">
                Button Text
              </div>
            </div>

            {/* Paragraph Example */}
            <div>
              <div style={{ 
                fontSize: '0.75rem', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              className="text-zinc-500 dark:text-zinc-400">
                Paragraph
              </div>
              <p style={{
                letterSpacing: spacings.find(s => s.label === selectedSpacing)?.value,
                fontSize: '1rem',
                lineHeight: '1.6',
                transition: 'letter-spacing 0.3s ease, color 0.2s ease',
                margin: 0
              }}
              className="text-zinc-700 dark:text-zinc-300">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          .{selectedSpacing} • {spacings.find(s => s.label === selectedSpacing)?.value}
        </div>
      </div>
    </div>
  );
};




