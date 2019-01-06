import React from 'react';
import {
  Box,
  Button,
  Text,
  Collapsible,
} from 'grommet';

import { Down } from 'grommet-icons';


export const SideBarHeading = ({
  title, onClick, children, open,
}) => (
  <React.Fragment>
    <Button margin={{ vertical: 'small' }} onClick={() => onClick(title)}>
      <Box direction="row" align="center" gap="small">
        <Text size="xsmall">
          {title}
        </Text>
        <Down size="small" />
      </Box>
    </Button>
      <Collapsible alignContent="start" open={open}>
        <Box align="start">
          {children}
        </Box>
      </Collapsible>
  </React.Fragment>
);
