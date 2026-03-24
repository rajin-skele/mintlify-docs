import { useState } from "react";

export const OverflowDemo = () => {
  const [selectedOverflow, setSelectedOverflow] = useState("overflow-auto");

  const overflows = [
    { label: "overflow-hidden", description: "Content is clipped" },
    { label: "overflow-auto", description: "Scrollbars when needed" }
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
            Overflow Behavior
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedOverflow}
              onChange={(e) => setSelectedOverflow(e.target.value)}
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
              {overflows.map((o) => (
                <option key={o.label} value={o.label}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ padding: '1.5rem', borderRadius: '0.5rem', transition: 'all 0.2s ease' }}
          className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
          <div style={{
            height: '200px',
            overflow: selectedOverflow === 'overflow-hidden' ? 'hidden' : 'auto',
            borderRadius: '0.5rem',
            padding: '1rem',
            transition: 'all 0.3s ease'
          }}
          className="bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-600">
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              marginBottom: '0.75rem',
              transition: 'color 0.2s ease'
            }}
            className="text-zinc-900 dark:text-zinc-100">
              Scrollable Content
            </h3>
            <p style={{ 
              marginBottom: '0.75rem',
              transition: 'color 0.2s ease'
            }}
            className="text-zinc-700 dark:text-zinc-300">
              This container has a fixed height of 200px. When content exceeds this height, the overflow behavior determines what happens.
            </p>
            <p style={{ 
              marginBottom: '0.75rem',
              transition: 'color 0.2s ease'
            }}
            className="text-zinc-700 dark:text-zinc-300">
              With <code style={{ 
                padding: '0.125rem 0.25rem', 
                borderRadius: '0.25rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease'
              }}
              className="bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400">overflow-hidden</code>, 
              content that doesn't fit is clipped and hidden from view.
            </p>
            <p style={{ 
              marginBottom: '0.75rem',
              transition: 'color 0.2s ease'
            }}
            className="text-zinc-700 dark:text-zinc-300">
              With <code style={{ 
                padding: '0.125rem 0.25rem', 
                borderRadius: '0.25rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease'
              }}
              className="bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400">overflow-auto</code>, 
              scrollbars appear automatically when content overflows, allowing users to scroll and access all content.
            </p>
            <p style={{ 
              marginBottom: '0.75rem',
              transition: 'color 0.2s ease'
            }}
            className="text-zinc-700 dark:text-zinc-300">
              Try switching between the two modes to see the difference!
            </p>
            <p style={{ 
              fontWeight: '600',
              transition: 'color 0.2s ease'
            }}
            className="text-zinc-900 dark:text-zinc-100">
              Keep scrolling to see more content...
            </p>
          </div>
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          {overflows.find(o => o.label === selectedOverflow)?.description}
        </div>
      </div>
    </div>
  );
};




