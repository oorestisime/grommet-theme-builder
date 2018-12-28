import React from 'react';
import {
  Box,
  Button,
  Calendar,
  Anchor,
  CheckBox,
  Grommet,
} from 'grommet';
import { Gremlin } from 'grommet-icons';

import { Set } from '../utils';

const func = () => { };

export const Playground = ({ theme }) => (
  <Grommet theme={theme}>
    <Box align="start" margin="small" gap="medium">
      <Box direction="row" gap="small">
        <Set colors={theme.global.colors} />
      </Box>
      <Box direction="row" gap="small">
        {Object.keys(theme.global.borderSize).map(size => (
          <Box pad="small" border={{ size }}>
            {size}
          </Box>
        ))}
      </Box>
      <Box gap="small" direction="row">
        <Button plain label="Plain button" onClick={func} />
        <Button label="Button" onClick={func} />
        <Button primary label="Primary button" onClick={func} />
        <Button
          icon={<Gremlin />}
          label="Icon button"
          onClick={func}
        />
        <Button disabled label="Disabled" onClick={func} />
      </Box>
      <Box gap="small" direction="row">
        <Anchor icon={<Gremlin />} label="Icon Anchor" href="#" />
        {['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'].map(size => (
          <Anchor key={size} label={size} size={size} href="#" />
        ))}
        <Box background="dark-2" pad="small">
          <Anchor reverse icon={<Gremlin />} label="Dark themed" href="#" />
        </Box>
      </Box>
      <Box gap="small" direction="row">
        <CheckBox onChange={func} label="Checked" checked />
        <CheckBox onChange={func} label="Disabled" disable />
        <CheckBox onChange={func} label="Indeterminate" indeterminate />
        <CheckBox onChange={func} label="Off toggle" toggle />
        <CheckBox onChange={func} label="On toggle" toggle checked />
      </Box>
      <Box direction="row-responsive" gap="medium">
        <Calendar
          size="small"
          bounds={['2018-09-08', '2018-12-13']}
        />
        <Calendar
          size="medium"
          bounds={['2018-09-08', '2018-12-13']}
        />
      </Box>
      <Calendar size="large" bounds={['2018-09-08', '2018-12-13']} />
    </Box>
  </Grommet>
);
