import React from 'react';
import { componentMap } from './componentMap';

/**
 * This is the "Foreman" or "Dispatcher".
 * Its ONLY job is to look at an element's 'type'
 * and render the correct specialist component for it.
 */
export function ElementRenderer({ element, theme }) {
  // Look up the component to render based on the 'type' string
  const ComponentToRender = componentMap[element.type];

  if (!ComponentToRender) {
    // If the type is unknown, log a warning and render nothing
    console.warn(`No component found for type: ${element.type}`);
    return null;
  }

  // Pass all the element's data and the theme to the
  // specialist component (e.g., <Panel>, <TextBox>)
  return <ComponentToRender data={element} theme={theme} />;
}

