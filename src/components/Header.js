import React from 'react';
import {
  Box,
  Button,
  Paragraph,
  Heading,
  Select,
} from 'grommet';
import { Github, Gremlin } from 'grommet-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const Header = ({
 themes, showNotification, reset, theme, changeBaseTheme, selectValue,
}) => (
  <Box flex={false} margin={{ bottom: 'large', left: 'small' }}>
    <Heading level={2}>Welcome to the theme builder</Heading>
    <Paragraph>
      Modifying the sidebar values will enable you to create your
      customized theme and then export it!
    </Paragraph>
    <Box direction="row">
      <Button margin="small" icon={<Gremlin />} href="https://v2.grommet.io/components" label="Grommet documentation" />
      <Button margin="small" icon={<Github />} href="https://github.com/oorestisime/grommet-theme-builder/issues" label="Report an issue witht the builder" />
    </Box>
    <Box direction="row">
      <CopyToClipboard text={JSON.stringify(theme, null, 2)}>
        <Button
          margin="small"
          label="Copy to clipboard"
          onClick={showNotification}
        />
      </CopyToClipboard>
      <Button margin="small" label="Reset" onClick={reset} />
      <Select
        id="select"
        name="select"
        placeholder="Base theme"
        size="small"
        value={selectValue}
        options={Object.keys(themes)}
        onChange={changeBaseTheme}
      />
    </Box>
  </Box>
);
