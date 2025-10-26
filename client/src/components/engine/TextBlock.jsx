import React from 'react';

/**
 * Specialist Worker: TextBlock
 * Renders multi-line text by reading '\n' characters
 * from the 'content' string and creating a new <tspan>
 * for each line. This is the core of our text-wrap solution.
 */
export function TextBlock({ data, theme }) {
  const {
    x, y, content = '',
    fillColor = theme.colors.textSecondary,
    fontSize = 24,
    lineHeight = 1.6
  } = data;

  // Split the content string by the newline character
  const lines = content.split('\n');

  return (
    <text
      x={x}
      y={y}
      fill={fillColor}
      fontSize={fontSize}
      fontFamily={theme.fontFamily}
      style={{ whiteSpace: 'pre' }} // Respects the <tspan> layout
    >
      {lines.map((line, index) => (
        <tspan
          key={index}
          x={x} // Reset horizontal position for each new line
          dy={index === 0 ? 0 : `${lineHeight}em`} // Push down subsequent lines
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

