import { useState } from "react";

export const TextAlignDemo = () => {
  const [selectedAlign, setSelectedAlign] = useState("text-left");

  const alignments = [
    { label: "text-left", value: "left" },
    { label: "text-center", value: "center" },
    { label: "text-right", value: "right" },
    { label: "text-justify", value: "justify" }
  ];

  return (
    <div className="not-prose" style={{ margin: '1.5rem 0' }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        borderRadius: '0.75rem',
        padding: '2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      className="bg-gradient-to-b from-zinc-50 to-zinc-100 border border-zinc-200 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800">
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.75rem' }}
            className="text-zinc-700 dark:text-zinc-300">
            Text Alignment
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {alignments.map((item) => (
              <button
                key={item.label}
                onClick={() => setSelectedAlign(item.label)}
                style={{
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem',
                  borderRadius: '0.375rem',
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'monospace'
                }}
                className={selectedAlign === item.label 
                  ? 'bg-blue-500 text-white border-blue-600 dark:bg-blue-600 dark:border-blue-700' 
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500'}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ padding: '2rem' }}
          className="bg-white/50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200 dark:border-zinc-700">
          <div style={{
            textAlign: alignments.find(a => a.label === selectedAlign)?.value,
            padding: '1.5rem',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            lineHeight: '1.75',
            transition: 'text-align 0.3s ease'
          }}
          className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-zinc-900 dark:text-zinc-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </div>
        </div>

        <div style={{ marginTop: '1rem', fontSize: '0.75rem', textAlign: 'center' }}
          className="text-zinc-500">
          Text alignment within the container
        </div>
      </div>
    </div>
  );
};




