import { useState } from "react";

export const FlexAlignDemo = () => {
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");

  const justifyOptions = [
    { value: "start", label: "justify-start" },
    { value: "center", label: "justify-center" },
    { value: "end", label: "justify-end" },
    { value: "space-between", label: "justify-between" },
    { value: "space-around", label: "justify-around" }
  ];

  const alignOptions = [
    { value: "start", label: "items-start" },
    { value: "center", label: "items-center" },
    { value: "end", label: "items-end" },
    { value: "stretch", label: "items-stretch" }
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
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', transition: 'color 0.2s ease' }}
              className="text-zinc-700 dark:text-zinc-300">
              Justify (horizontal)
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={justifyContent}
                onChange={(e) => setJustifyContent(e.target.value)}
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
                {justifyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', transition: 'color 0.2s ease' }}
              className="text-zinc-700 dark:text-zinc-300">
              Align (vertical)
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={alignItems}
                onChange={(e) => setAlignItems(e.target.value)}
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
                {alignOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div style={{ padding: '1.5rem', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div style={{
            display: 'flex',
            justifyContent: justifyContent,
            alignItems: alignItems,
            height: '180px',
            gap: '0.5rem',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '2px dashed',
            transition: 'all 0.3s ease'
          }}
          className="border-zinc-400 dark:border-zinc-500">
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '0.375rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '1.125rem',
              transition: 'all 0.2s ease'
            }}
            className="bg-blue-500 dark:bg-blue-600 text-white shadow-sm">1</div>
            <div style={{
              width: '50px',
              height: '70px',
              borderRadius: '0.375rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '1.125rem',
              transition: 'all 0.2s ease'
            }}
            className="bg-blue-500 dark:bg-blue-600 text-white shadow-sm">2</div>
            <div style={{
              width: '50px',
              height: '60px',
              borderRadius: '0.375rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '1.125rem',
              transition: 'all 0.2s ease'
            }}
            className="bg-blue-500 dark:bg-blue-600 text-white shadow-sm">3</div>
          </div>
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          Dashed border shows the flex container
        </div>
      </div>
    </div>
  );
};
