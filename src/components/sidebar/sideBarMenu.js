import {
  Paint,
  Action,
  Plan,
  Link,
  CheckboxSelected,
  Columns,
  Table,
  Database,
  TextAlignLeft,
  Monospace,
  Radial,
  FormEdit,
  Clock,
} from 'grommet-icons';


export const sidebar = {
  General: [
    {
      Icon: Paint,
      area: 'Colors',
      context: 'global.colors',
    },
  ],
  Typography: [
    {
      Icon: Monospace,
      area: 'Heading',
      context: 'heading',
    },
    {
      Icon: TextAlignLeft,
      area: 'Paragraph',
      context: 'paragraph',
    },
  ],
  Controls: [
    {
      Icon: Action,
      area: 'Button',
      context: 'button',
    },
    {
      Icon: Link,
      area: 'Anchor',
      context: 'anchor',
    },
    {
      Icon: CheckboxSelected,
      area: 'Checkbox',
      context: 'checkBox',
    },
    {
      Icon: Radial,
      area: 'RadioButton',
      context: 'radioButton',
    },
    {
      Icon: FormEdit,
      area: 'FormField',
      context: 'formField',
    },
    {
      Icon: Columns,
      area: 'Tabs',
      context: 'tab',
    },
  ],
  Visualizations: [
    {
      Icon: Table,
      area: 'Table',
      context: 'table',
    },
    {
      Icon: Database,
      area: 'DataTable',
      context: 'dataTable',
    },
    {
      Icon: Clock,
      area: 'Clock',
      context: 'clock',
    },
    {
      Icon: Plan,
      area: 'Calendar',
      context: 'calendar',
    },
  ],
};
