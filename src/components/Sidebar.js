import React from 'react';
import {
  Box,
  Button,
  Text,
} from 'grommet';

import {
  Paint,
  Gremlin,
  Action,
  Plan,
  Install,
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

const SideBarButton = ({
    onClick, area, context, Icon,
}) => (
  <Button
    plain
    label={area}
    margin={{ vertical: 'small' }}
    icon={<Icon color="white" />}
    onClick={() => onClick(area, context)}
  />
);

export const Sidebar = ({ callback, theme }) => {
  const globalContext = Object.assign({}, theme.global);
  delete globalContext.colors;

  return (
    <Box
      fill="vertical"
      overflow="auto"
      width="small"
      elevation="medium"
      background="dark-2"
      pad={{ vertical: 'medium' }}
    >
      <Box
        border="bottom"
        gap="xsmall"
        align="center"
        margin={{ bottom: 'small' }}
        pad={{ vertical: 'xsmall' }}
      >
        <Gremlin color="white" />
        <Text size="xsmall">Theme builder</Text>
      </Box>
      <Box align="start" margin={{ horizontal: 'small' }}>
        <SideBarButton
          Icon={Paint}
          area="Colors"
          onClick={callback}
          context={theme.global.colors}
        />
        <SideBarButton
          Icon={Install}
          area="Global"
          onClick={callback}
          context={globalContext}
        />
        <SideBarButton
          Icon={Monospace}
          area="Heading"
          onClick={callback}
          context={theme.heading}
        />
        <SideBarButton
          Icon={TextAlignLeft}
          area="Paragraph"
          onClick={callback}
          context={theme.paragraph}
        />
        <SideBarButton
          Icon={Action}
          area="Button"
          onClick={callback}
          context={theme.button}
        />
        <SideBarButton
          Icon={Link}
          area="Anchor"
          onClick={callback}
          context={theme.anchor}
        />
        <SideBarButton
          Icon={CheckboxSelected}
          area="Checkbox"
          onClick={callback}
          context={theme.checkBox}
        />
        <SideBarButton
          Icon={Radial}
          area="RadioButton"
          onClick={callback}
          context={theme.radioButton}
        />
        <SideBarButton
          Icon={FormEdit}
          area="FormField"
          onClick={callback}
          context={theme.formField}
        />
        <SideBarButton
          Icon={Columns}
          area="Tabs"
          onClick={callback}
          context={theme.tab}
        />
        <SideBarButton
          Icon={Table}
          area="Table"
          onClick={callback}
          context={theme.table}
        />
        <SideBarButton
          Icon={Database}
          area="DataTable"
          onClick={callback}
          context={theme.dataTable}
        />
        <SideBarButton
          Icon={Clock}
          area="Clock"
          onClick={callback}
          context={theme.clock}
        />
        <SideBarButton
          Icon={Plan}
          area="Calendar"
          onClick={callback}
          context={theme.calendar}
        />
      </Box>
    </Box>
  );
};
