import React from "react"
import styled from "styled-components"
import { Box, Text, Layer } from "grommet"

const NotificationLayer = styled(Layer)`
  background-color: rgba(0, 0, 0, 0);
`

export const Toast = ({ text, confirm, esc, background, color }) => (
  <NotificationLayer
    position="bottom"
    full="horizontal"
    modal={false}
    onEsc={esc}
    margin="none"
    responsive
  >
    <Box
      align="center"
      justify="between"
      direction="row"
      gap="small"
      pad={{ vertical: `xsmall`, horizontal: `small` }}
      background={background || `rgba(238,238,238,0.9)`}
      flex={false}
    >
      <Box align="center" direction="row" gap="xsmall">
        <Text color={color || `black`} size="large">
          {text}
        </Text>
      </Box>
      {confirm && confirm}
    </Box>
  </NotificationLayer>
)
