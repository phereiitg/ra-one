import React from 'react';
import { ElementRenderer } from './ElementRenderer';

/**
 * Specialist Worker: Panel
 * Renders a container <rect> and is "smart" enough
 * to also render its own children by calling the
 * ElementRenderer recursively.
 */
export function Panel({ data, theme }) {
  const { x, y, width, height, children } = data;
  const {
    fillColor = theme.colors.background,
    borderColor = 'none',
    borderRadius = 0,
    borderStyle = 'solid'
  } = data;

  return (
    // <g> is an SVG group. It's like a <div> for SVG.
    <g>
      {/* The panel's rectangle */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fillColor}
        stroke={borderColor}
        strokeWidth={borderColor === 'none' ? 0 : 4}
        rx={borderRadius}
        strokeDasharray={borderStyle === 'dotted' ? '12, 12' : 'none'}
      />

      {/* Render all children *inside* this panel */}
      {children && children.map(childElement => (
        <ElementRenderer 
          key={childElement.id} 
          element={childElement} 
          theme={theme} 
        />
      ))}
    </g>
  );
}

