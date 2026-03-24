import { useState } from "react";

export const BorderRadiusDemo = () => {
  const [selectedRadius, setSelectedRadius] = useState("rounded");

  const radii = [
    { label: "rounded-none", value: "0px", display: "0" },
    { label: "rounded-sm", value: "4px", display: "4px" },
    { label: "rounded", value: "6px", display: "6px" },
    { label: "rounded-lg", value: "8px", display: "8px" },
    { label: "rounded-xl", value: "12px", display: "12px" },
    { label: "rounded-2xl", value: "16px", display: "16px" },
    { label: "rounded-full", value: "9999px", display: "Full" }
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
            Border Radius
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedRadius}
              onChange={(e) => setSelectedRadius(e.target.value)}
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
              {radii.map((r) => (
                <option key={r.label} value={r.label}>
                  {r.label} ({r.display})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ padding: '2rem', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'center' }}>
            {/* Square/Rectangle Preview */}
            <div>
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: radii.find(r => r.label === selectedRadius)?.value,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                margin: '0 auto'
              }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white shadow-lg">
                Square
              </div>
              <div style={{ marginTop: '0.75rem', textAlign: 'center', fontSize: '0.75rem', transition: 'color 0.2s ease' }}
                className="text-zinc-500 dark:text-zinc-400">
                140 × 140px
              </div>
            </div>

            <div>
              <button style={{
                borderRadius: radii.find(r => r.label === selectedRadius)?.value,
                padding: '0.75rem 1.5rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}
              className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 text-white shadow-lg hover:shadow-xl">
                Button
              </button>
              <div style={{ marginTop: '0.75rem', textAlign: 'center', fontSize: '0.75rem', transition: 'color 0.2s ease' }}
                className="text-zinc-500 dark:text-zinc-400">
                Button Shape
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          .{selectedRadius} • {radii.find(r => r.label === selectedRadius)?.display}
        </div>
      </div>
    </div>
  );
};


