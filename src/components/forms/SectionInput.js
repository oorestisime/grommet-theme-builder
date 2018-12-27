import React from 'react';
import { Box, Heading } from 'grommet';
import { inputs } from '../../utils';


const SectionInput = ({
  section, params, onChange, path,
}) => (
  <Box elevation="xsmall" margin={{ vertical: 'xsmall' }} pad={{ left: 'small' }}>
    <Heading color="brand" level={3}>{section}</Heading>
    <Box margin={{ left: 'small' }}>
      {Object.keys(params).map(param => (
        inputs({
        param, paramValue: params[param], onChange, section, path,
        })
      ))}
    </Box>
  </Box>
);

export default SectionInput;
