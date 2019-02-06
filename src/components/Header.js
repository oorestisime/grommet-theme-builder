import React from "react"
import {
  Box,
  Button,
  Paragraph,
  Heading,
  Select,
  Anchor,
  CheckBox,
} from "grommet"
import { Github, Gremlin } from "grommet-icons"
import { CopyToClipboard } from "react-copy-to-clipboard"

export const Header = ({
  themes,
  changeBaseTheme,
  selectValue,
  reset,
  showNotification,
  diff,
  theme,
  checked,
  onChangeToggle,
}) => (
  <Box flex={false} margin={{ bottom: `large` }}>
    <Box
      direction="row"
      background="light-2"
      elevation="small"
      pad={{ vertical: `xsmall`, left: `small` }}
      justify="between"
    >
      <Heading level={3}>Grommet theme builder</Heading>
      <Box direction="row" align="center" gap="small">
        <Select
          id="select"
          name="select"
          placeholder="Base theme"
          size="small"
          value={selectValue}
          options={Object.keys(themes)}
          onChange={changeBaseTheme}
        />
        <Anchor icon={<Gremlin />} href="https://v2.grommet.io/components" />
        <Anchor
          icon={<Github />}
          href="https://github.com/oorestisime/grommet-theme-builder"
        />
      </Box>
    </Box>
    <Box margin="small" justify="between">
      <Paragraph size="medium">
        Modifying the sidebar values will enable you to create your customized
        theme and then export it!
      </Paragraph>
      <Box gap="small" direction="row-responsive">
        <Button color="status-ok" label="Export diff" onClick={diff} />
        <CopyToClipboard text={JSON.stringify(theme, null, 2)}>
          <Button
            color="status-warning"
            label="Copy to clipboard"
            onClick={showNotification}
          />
        </CopyToClipboard>
        <Button color="status-critical" label="Reset" onClick={reset} />
        <CheckBox
          label={!checked ? `White text color` : `Black text color`}
          checked={checked}
          onChange={onChangeToggle}
          toggle
        />
      </Box>
    </Box>
  </Box>
)
