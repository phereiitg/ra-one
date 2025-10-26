import React from 'react';

/**
 * Specialist Worker: Icon
 * Renders an icon.
 * For Phase 1, this is a simple placeholder.
 * For Phase 2, this would contain a large library
 * of SVG <path> data.
 */
export function Icon({ data, theme }) {
  const {
    x, y,
    size = 32,
    fillColor = theme.colors.textPrimary,
    iconName // We'll use this later
  } = data;

  // Placeholder: a simple circle.
  // We use <g> to easily position and scale the icon.
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle 
        cx={size / 2} // Center the circle
        cy={size / 2} 
        r={size / 2} 
        fill={fillColor} 
      />
      {/* A real implementation would be:
        <g transform={`scale(${size / 24})`}>
          {iconLibrary[iconName] || <defaultPath />}
        </g>
      */}
    </g>
  );
}

