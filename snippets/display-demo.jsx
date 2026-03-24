import { useState } from "react";

export const DisplayDemo = () => {
  const [selectedDisplay, setSelectedDisplay] = useState("block");

  const displays = [
    { label: "block", description: "Full width, new line" },
    { label: "inline-block", description: "Inline with width/height" },
    { label: "flex", description: "Flexbox container" },
    { label: "inline-flex", description: "Inline flex container" },
    { label: "hidden", description: "Not displayed" }
  ];

  return (
    <div className="not-prose" style={{ margin: '1.5rem 0' }}>
      <div style={{
        maxWidth: '600px',
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
            Display Type
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedDisplay}
              onChange={(e) => setSelectedDisplay(e.target.value)}
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
              {displays.map((item) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ padding: '1.5rem', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div style={{
            display: selectedDisplay === 'hidden' ? 'none' : selectedDisplay,
            padding: '0.75rem',
            borderRadius: '0.5rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            ...(selectedDisplay === 'flex' || selectedDisplay === 'inline-flex' ? {
              gap: '0.5rem',
              justifyContent: 'center'
            } : {})
          }}
          className="bg-blue-500 dark:bg-blue-600 text-white shadow-sm">
            {selectedDisplay === 'hidden' ? '' : (
              selectedDisplay === 'flex' || selectedDisplay === 'inline-flex' ? (
                <>
                  <span style={{ padding: '0.5rem', borderRadius: '0.25rem', transition: 'all 0.2s ease' }} className="bg-blue-600 dark:bg-blue-700">1</span>
                  <span style={{ padding: '0.5rem', borderRadius: '0.25rem', transition: 'all 0.2s ease' }} className="bg-blue-600 dark:bg-blue-700">2</span>
                  <span style={{ padding: '0.5rem', borderRadius: '0.25rem', transition: 'all 0.2s ease' }} className="bg-blue-600 dark:bg-blue-700">3</span>
                </>
              ) : `.${selectedDisplay}`
            )}
          </div>
          {selectedDisplay === 'hidden' && (
            <div style={{ textAlign: 'center', fontSize: '0.875rem', fontStyle: 'italic', transition: 'color 0.2s ease' }}
              className="text-zinc-500 dark:text-zinc-400">
              Element is hidden (display: none)
            </div>
          )}
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          {displays.find(d => d.label === selectedDisplay)?.description}
        </div>
      </div>
    </div>
  );
};
