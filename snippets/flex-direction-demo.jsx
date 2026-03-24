import { useState } from "react";

export const FlexDirectionDemo = () => {
  const [selectedDirection, setSelectedDirection] = useState("flex-row");

  const directions = [
    { label: "flex-row", value: "row", description: "Horizontal →" },
    { label: "flex-col", value: "column", description: "Vertical ↓" },
    { label: "flex-row-reverse", value: "row-reverse", description: "Horizontal ←" },
    { label: "flex-col-reverse", value: "column-reverse", description: "Vertical ↑" }
  ];

  return (
    <div className="not-prose" style={{ margin: '1.5rem 0' }}>
      <div style={{
        maxWidth: '650px',
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
            Flex Direction
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedDirection}
              onChange={(e) => setSelectedDirection(e.target.value)}
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
              {directions.map((dir) => (
                <option key={dir.label} value={dir.label}>
                  {dir.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ padding: '1.5rem', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div style={{
            display: 'flex',
            flexDirection: directions.find(d => d.label === selectedDirection)?.value,
            gap: '0.75rem',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '2px dashed',
            minHeight: '200px',
            transition: 'all 0.3s ease'
          }}
          className="border-zinc-400 dark:border-zinc-500">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  minWidth: '70px',
                  minHeight: '70px',
                  transition: 'all 0.2s ease'
                }}
                className={
                  num === 1 ? 'bg-blue-500 dark:bg-blue-600 text-white shadow-sm' :
                  num === 2 ? 'bg-purple-500 dark:bg-purple-600 text-white shadow-sm' :
                  'bg-pink-500 dark:bg-pink-600 text-white shadow-sm'
                }
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          {directions.find(d => d.label === selectedDirection)?.description}
        </div>
      </div>
    </div>
  );
};




