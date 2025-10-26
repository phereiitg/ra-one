// This is the "Foreman's Clipboard".
// It maps a 'type' string (from the JSON) to the
// actual, imported React component.
// This makes the engine incredibly scalable.

import { Panel } from './Panel';
import { TextBox } from './TextBox';
import { TextBlock } from './TextBlock';
import { Icon } from './Icon';

export const componentMap = {
  panel: Panel,
  text: TextBox,
  textBlock: TextBlock,
  icon: Icon,
  // When you're ready, you can add more:
  // chart: Chart,
  // table: Table,
};

