import React from 'react';
import { Box, Text } from 'grommet';

const Cell = ({ name }) => (
  <Box basis="xsmall" margin={{ bottom: 'medium' }}>
    <Box pad="medium" background={name} round="small" />
    <Text>
      <strong>{name}</strong>
    </Text>
  </Box>
);

export const Set = ({ colors }) => (
  <Box direction="row" wrap gap="medium">
    {Object.keys(colors).filter(color => typeof colors[color] === 'string').map(color => (
        <Cell key={color} name={color} />
      ))}
  </Box>
);
