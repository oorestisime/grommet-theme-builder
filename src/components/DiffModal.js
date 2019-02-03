import React from "react"
import { Box, Layer, Heading, Paragraph } from "grommet"

export const DiffModal = ({ data, onClose }) => (
  <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
    <Box align="center" overflow="scroll" pad="medium" gap="small">
      <Box flex={false} pad={{ bottom: "small" }} gap="small" />
      <Heading alignSelf="center" color="brand" level={4} margin="none">
        Diff between base theme and current modifications
      </Heading>
      <Paragraph align="center" size="medium">
        Copy this code into your theme file, and then use import it to use it in
        the Grommet component.
      </Paragraph>
      <pre>{`
import { deepFreeze } from "grommet/utils"

export const customTheme = deepFreeze(
  ${JSON.stringify(data, null, 2)}
)
      `}</pre>
    </Box>
  </Layer>
)
