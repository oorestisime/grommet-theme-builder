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

export default ({ callback, theme }) => {
  const globalContext = Object.assign({}, theme.global);
  delete globalContext.colors;

  return (
    <Box
      fill="vertical"
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
        Icon={Action}
        area="Button"
        onClick={callback}
        context={theme.button}
      />
      <SideBarButton
        Icon={Plan}
        area="Calendar"
        onClick={callback}
        context={theme.calendar}
      />
    </Box>
  );
};
