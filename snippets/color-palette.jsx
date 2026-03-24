import { useState, useEffect } from "react";

export const ColorPalette = () => {
  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [copiedColor, setCopiedColor] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Shift') {
        setIsShiftPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Shift') {
        setIsShiftPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Convert hex to OKLCH
  const hexToOklch = (hex) => {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    // Convert sRGB to linear RGB
    const toLinear = (c) => {
      return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };

    const rLin = toLinear(r);
    const gLin = toLinear(g);
    const bLin = toLinear(b);

    // Convert linear RGB to OKLab (using D65 illuminant)
    const l = 0.4122214708 * rLin + 0.5363325363 * gLin + 0.0514459929 * bLin;
    const m = 0.2119034982 * rLin + 0.6806995451 * gLin + 0.1073969566 * bLin;
    const s = 0.0883024619 * rLin + 0.2817188376 * gLin + 0.6299787005 * bLin;

    const l_ = Math.cbrt(l);
    const m_ = Math.cbrt(m);
    const s_ = Math.cbrt(s);

    const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
    const a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
    const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;

    // Convert OKLab to OKLCH
    const C = Math.sqrt(a * a + b_ * b_);
    let H = Math.atan2(b_, a) * 180 / Math.PI;
    if (H < 0) H += 360;

    return `oklch(${(L * 100).toFixed(2)}% ${C.toFixed(3)} ${H.toFixed(2)})`;
  };

  const copyToClipboard = (color, isHex) => {
    const textToCopy = isHex ? color : hexToOklch(color);
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log(`Copied ${textToCopy} to clipboard!`);
        setCopiedColor(color);
        setTimeout(() => {
          setCopiedColor(null);
        }, 1500);
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  };

  const colorPalette = [
    {
      name: 'Red',
      shades: ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a']
    },
    {
      name: 'Orange',
      shades: ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407']
    },
    {
      name: 'Amber',
      shades: ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03']
    },
    {
      name: 'Yellow',
      shades: ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12', '#422006']
    },
    {
      name: 'Lime',
      shades: ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314', '#1a2e05']
    },
    {
      name: 'Green',
      shades: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#052e16']
    },
    {
      name: 'Emerald',
      shades: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22']
    },
    {
      name: 'Teal',
      shades: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e']
    },
    {
      name: 'Cyan',
      shades: ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344']
    },
    {
      name: 'Sky',
      shades: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49']
    },
    {
      name: 'Blue',
      shades: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554']
    },
    {
      name: 'Indigo',
      shades: ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b']
    },
    {
      name: 'Violet',
      shades: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#2e1065']
    },
    {
      name: 'Purple',
      shades: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87', '#3b0764']
    },
    {
      name: 'Fuchsia',
      shades: ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75', '#4a044e']
    },
    {
      name: 'Pink',
      shades: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724']
    },
    {
      name: 'Rose',
      shades: ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337', '#4c0519']
    },
    {
      name: 'Slate',
      shades: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617']
    },
    {
      name: 'Gray',
      shades: ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827', '#030712']
    },
    {
      name: 'Zinc',
      shades: ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b', '#09090b']
    }
  ];

  const shadeLabels = ['l-5', 'l-4', 'l-3', 'l-2', 'l-1', 'base', 'd-1', 'd-2', 'd-3', 'd-4', 'd-5'];

  return (
    <div className="not-prose" style={{ maxWidth: '100%', margin: '0 auto' }}>
      {/* Mobile: Scrollable container */}
      <div className="md:hidden">
        <div className="overflow-x-auto">
          <div style={{ minWidth: '640px' }}>
            {/* Header row */}
            <div className="flex items-center mb-3">
              <div className="w-16 flex-shrink-0"></div>
              <div className="flex flex-1 gap-1.5">
                {shadeLabels.map((label) => (
                  <div 
                    key={label} 
                    className={`text-xs font-medium w-7 text-center ${
                      label === 'base' 
                        ? 'text-zinc-950 dark:text-white' 
                        : 'text-zinc-950/70 dark:text-white/70'
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Color rows */}
            <div className="space-y-2">
              {colorPalette.map((colorFamily) => (
                <div key={colorFamily.name} className="flex items-center">
                  <div className="w-16 flex-shrink-0 text-xs text-zinc-950/80 dark:text-white/80 font-medium pr-2">
                    {colorFamily.name}
                  </div>
                  <div className="flex flex-1 gap-1.5">
                    {colorFamily.shades.map((shade, index) => (
                      <div
                        key={index}
                        className="aspect-square w-7 rounded cursor-pointer transition-transform hover:scale-110 active:scale-95 relative group border border-zinc-950/10 dark:border-white/10"
                        style={{ backgroundColor: shade }}
                        onClick={(e) => copyToClipboard(shade, e.shiftKey)}
                        onMouseEnter={() => setHoveredColor(shade)}
                        onMouseLeave={() => setHoveredColor(null)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile instruction text */}
        <div className="mt-4 text-xs text-center text-zinc-500 dark:text-zinc-400">
          Tap any color to copy • Scroll horizontally to see all shades
        </div>
      </div>

      {/* Desktop: Centered, non-scrollable */}
      <div className="hidden md:block">
        {/* Header row */}
        <div className="flex items-center mb-4">
          <div className="w-24 flex-shrink-0"></div>
          <div className="flex flex-1 gap-3">
            {shadeLabels.map((label) => (
              <div 
                key={label} 
                className={`text-xs font-medium w-10 text-center ${
                  label === 'base' 
                    ? 'text-zinc-950 dark:text-white' 
                    : 'text-zinc-950/70 dark:text-white/70'
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Color rows */}
        <div className="space-y-4">
          {colorPalette.map((colorFamily) => (
            <div key={colorFamily.name} className="flex items-center">
              <div className="w-24 flex-shrink-0 text-sm text-zinc-950/80 dark:text-white/80 font-medium">
                {colorFamily.name}
              </div>
              <div className="flex flex-1 gap-3">
                {colorFamily.shades.map((shade, index) => (
                  <div
                    key={index}
                    className="aspect-square w-10 rounded-lg cursor-pointer transition-transform hover:scale-110 relative group border border-zinc-950/10 dark:border-white/10"
                    style={{ backgroundColor: shade }}
                    onClick={(e) => copyToClipboard(shade, e.shiftKey)}
                    onMouseEnter={() => setHoveredColor(shade)}
                    onMouseLeave={() => setHoveredColor(null)}
                  >
                    {/* Tooltips */}
                    {copiedColor === shade ? (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white/90 dark:bg-zinc-950/90 text-zinc-950 dark:text-white text-xs rounded-lg border border-zinc-950/20 dark:border-white/20 whitespace-nowrap opacity-100 pointer-events-none transition-opacity z-10 shadow-sm">
                        Copied!
                      </div>
                    ) : (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white/90 dark:bg-zinc-950/90 text-zinc-950 dark:text-white text-xs rounded-lg border border-zinc-950/20 dark:border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 shadow-sm">
                        {isShiftPressed ? shade : hexToOklch(shade)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop instruction text */}
        <div className="mt-4 text-xs text-center text-zinc-500 dark:text-zinc-400">
          Click to copy • Hold Shift to copy HEX instead of OKLCH
        </div>
      </div>

      {/* Mobile toast notification */}
      {copiedColor && (
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 px-3 py-2 bg-white/90 dark:bg-zinc-950/90 text-zinc-950 dark:text-white text-sm rounded-lg border border-zinc-950/20 dark:border-white/20 shadow-lg z-50 backdrop-blur-sm">
          Copied!
        </div>
      )}
    </div>
  );
};
