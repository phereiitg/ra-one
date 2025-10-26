import React from 'react';
import { ElementRenderer } from './ElementRenderer';

/**
 * This is the "Assembly Line" or "Canvas".
 * Its job is to render the main <svg> artboard and
 * loop through all elements for a given slide,
 * delegating the rendering of each one to the ElementRenderer.
 */
export function Slide({ blueprint, theme }) {
  if (!blueprint) {
    // Don't try to render if no blueprint is provided
    return (
      <svg viewBox="0 0 1920 1080">
        <text x="50" y="50">No slide data provided.</text>
      </svg>
    );
  }

  return (
    <svg
      // The viewBox is the "coordinate system" of our canvas.
      // We will always design for 1920x1080.
      viewBox={`0 0 ${blueprint.width || 1920} ${blueprint.height || 1080}`}
      style={{
        width: '100%',
        height: '100%',
        fontFamily: theme?.fontFamily || 'sans-serif',
      }}
    >
      {/* Render the slide background first */}
      <rect
        width="100%"
        height="100%"
        fill={theme?.colors?.background || '#FFFFFF'}
      />

      {/* Loop through all elements and tell the Foreman to render them */}
      {blueprint.elements.map(element => (
        <ElementRenderer 
          key={element.id} 
          element={element} 
          theme={theme} 
        />
      ))}
    </svg>
  );
}

