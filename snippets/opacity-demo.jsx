import { useState } from "react";

export const OpacityDemo = () => {
  const [selectedOpacity, setSelectedOpacity] = useState(100);

  const opacities = [
    { value: 0, label: "opacity-0", percent: "0%" },
    { value: 25, label: "opacity-25", percent: "25%" },
    { value: 50, label: "opacity-50", percent: "50%" },
    { value: 75, label: "opacity-75", percent: "75%" },
    { value: 100, label: "opacity-100", percent: "100%" }
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
            Opacity: {selectedOpacity}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="25"
            value={selectedOpacity}
            onChange={(e) => setSelectedOpacity(Number(e.target.value))}
            style={{
              width: '100%',
              height: '0.5rem',
              borderRadius: '0.25rem',
              outline: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            className="bg-zinc-200 dark:bg-zinc-700"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
            {opacities.map((op) => (
              <button
                key={op.value}
                onClick={() => setSelectedOpacity(op.value)}
                style={{
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                  borderRadius: '0.25rem',
                  border: '1px solid',
                  cursor: 'pointer',
                  fontFamily: 'monospace',
                  transition: 'all 0.15s ease'
                }}
                className={selectedOpacity === op.value 
                  ? 'bg-blue-500 text-white border-blue-600 dark:bg-blue-600 dark:border-blue-700' 
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500'}
              >
                {op.value}%
              </button>
            ))}
          </div>
        </div>

        <div style={{ 
          padding: '2rem', 
          borderRadius: '0.5rem', 
          transition: 'all 0.2s ease',
          backgroundImage: 'repeating-conic-gradient(#f3f4f6 0% 25%, #e5e7eb 0% 50%)',
          backgroundPosition: '0 0, 10px 10px',
          backgroundSize: '20px 20px'
        }}
        className="border border-zinc-200 dark:border-zinc-700">
          <div style={{ position: 'relative', height: '200px', borderRadius: '0.5rem', overflow: 'hidden' }}>
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              borderRadius: '0.5rem'
            }}
            className="bg-zinc-100 dark:bg-zinc-800" />

            {/* Foreground with Opacity */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: selectedOpacity / 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '1rem',
              borderRadius: '0.5rem',
              transition: 'opacity 0.3s ease'
            }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700">
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '700',
                transition: 'all 0.2s ease'
              }}
              className="text-white">
                {selectedOpacity}%
              </div>
              <div style={{ 
                fontSize: '0.875rem', 
                fontFamily: 'monospace',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              className="text-white">
                .opacity-{selectedOpacity}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', textAlign: 'center', transition: 'color 0.2s ease' }}
          className="text-zinc-500 dark:text-zinc-400">
          Checkered pattern shows transparency
        </div>
      </div>
    </div>
  );
};




