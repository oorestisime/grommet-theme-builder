import React from 'react';
import _ from 'lodash';
import { Box, Text } from 'grommet';
import { deepMerge } from 'grommet/utils';

import ParamInput from './ParamInput';
import SectionInput from './SectionInput';

export const inputs = ({
 param, paramValue, onChange, section, path: basePath,
}) => {
  let path;
  if (basePath) {
    path = `${basePath}.${param}`;
  } else {
    path = section ? `${section}.${param}` : param;
  }

  if (typeof paramValue === 'string') {
    return (
      <ParamInput
        onChange={(key, value) => onChange(key, value)}
        key={param}
        param={paramValue}
        name={param}
        path={path}
      />
    );
  }

  if (Object.keys(paramValue).length === 0) {
    return null;
  }

  return (
    <SectionInput
      onChange={(key, value) => onChange(key, value)}
      key={param}
      params={paramValue}
      section={param}
      path={path}
    />
  );
};

export const Cell = ({ name }) => (
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

export const mergeTheme = (base, path, value) => {
  const params = _.set({}, path, value);
  return deepMerge(base, params);
};
