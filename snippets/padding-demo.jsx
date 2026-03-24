import { useState } from "react";

export const PaddingDemo = () => {
  const [selectedSize, setSelectedSize] = useState(8);

  const paddingSizes = [
    { value: 1, label: "p-1", pixels: "4px" },
    { value: 2, label: "p-2", pixels: "8px" },
    { value: 4, label: "p-4", pixels: "16px" },
    { value: 6, label: "p-6", pixels: "24px" },
    { value: 8, label: "p-8", pixels: "32px" },
    { value: 12, label: "p-12", pixels: "48px" }
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
            Padding Size
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(Number(e.target.value))}
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
              {paddingSizes.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label} ({size.pixels})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div style={{
            padding: paddingSizes.find(s => s.value === selectedSize)?.pixels,
            borderRadius: '0.5rem',
            border: '2px solid',
            transition: 'all 0.3s ease'
          }}
          className="bg-blue-500 dark:bg-blue-600 border-blue-600 dark:border-blue-700 shadow-sm">
            <div style={{
              padding: '0.5rem',
              borderRadius: '0.25rem',
              textAlign: 'center',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              fontWeight: '600',
              border: '2px dashed',
              transition: 'all 0.2s ease'
            }}
            className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600">
              Content
            </div>
          </div>
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          Blue area shows the padding space
        </div>
      </div>
    </div>
  );
};
