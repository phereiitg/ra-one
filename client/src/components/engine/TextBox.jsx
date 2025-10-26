import React from 'react';

/**
 * Specialist Worker: TextBox
 * Renders a SINGLE line of text.
 * It does not handle line breaks.
 */
export function TextBox({ data, theme }) {
  const {
    x, y, content,
    fillColor = theme.colors.textPrimary,
    fontSize = 32,
    fontWeight = 400,
    textAnchor = 'start'
  } = data;

  return (
    <text
      x={x}
      y={y}
      fill={fillColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAnchor={textAnchor}
      fontFamily={theme.fontFamily}
    >
      {content}
    </text>
  );
}

