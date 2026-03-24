import { useState } from "react";

export const BorderStyleDemo = () => {
  const [copiedValue, setCopiedValue] = useState(null);

  const borderStyles = [
    { label: "border-solid", style: "solid" },
    { label: "border-dashed", style: "dashed" },
    { label: "border-dotted", style: "dotted" },
    { label: "border-double", style: "double" },
    { label: "border-none", style: "none" }
  ];

  const copyToClipboard = (className) => {
    navigator.clipboard.writeText(`.${className}`)
      .then(() => {
        setCopiedValue(className);
        setTimeout(() => setCopiedValue(null), 1500);
      })
      .catch(() => {});
  };

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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {borderStyles.map((item) => (
            <div
              key={item.label}
              onClick={() => copyToClipboard(item.label)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.875rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              className="bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-sm dark:bg-zinc-800/30 dark:border-zinc-700/50 dark:hover:bg-zinc-800/50 dark:hover:border-zinc-600"
            >
              <code style={{ fontFamily: 'monospace', fontSize: '0.875rem', fontWeight: '500', transition: 'color 0.2s ease' }}
                className="text-zinc-600 dark:text-zinc-400">
                .{item.label}
              </code>

              <div style={{
                width: '64px',
                height: '64px',
                borderWidth: '3px',
                borderStyle: item.style,
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease'
              }}
              className={item.style === 'none' 
                ? 'bg-zinc-200 dark:bg-zinc-700' 
                : 'border-blue-500 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/30'} />

              {copiedValue === item.label && (
                <span style={{ fontSize: '0.75rem', fontWeight: '600', marginLeft: '0.5rem', transition: 'opacity 0.2s ease', animation: 'fadeIn 0.2s ease' }}
                  className="text-green-600 dark:text-green-400">✓</span>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1rem', paddingTop: '1rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="border-t border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400">
          Click any row to copy the class name
        </div>
      </div>

      {copiedValue && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', padding: '0.75rem 1rem',
          borderRadius: '0.5rem', fontSize: '0.875rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)', zIndex: 9999,
          transition: 'all 0.2s ease',
          animation: 'slideUp 0.2s ease'
        }}
        className="bg-white border border-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white">
          Copied <code style={{ fontWeight: '600', transition: 'color 0.2s ease' }} className="text-blue-600 dark:text-blue-400">.{copiedValue}</code>
        </div>
      )}
    </div>
  );
};
