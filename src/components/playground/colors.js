import React from "react"
import { Box, Text } from "grommet"

const Cell = ({ name, color, onMouseEnter, onMouseLeave }) => (
  <Box
    onMouseEnter={() => onMouseEnter(color)}
    onMouseLeave={onMouseLeave}
    basis="xsmall"
    margin={{ bottom: `medium` }}
  >
    <Box pad="medium" background={name} round="small" />
    <Text>
      <strong>{name}</strong>
    </Text>
  </Box>
)

export const Set = ({ colors, ...layering }) => (
  <Box direction="row" wrap gap="medium">
    {Object.keys(colors)
      .filter(name => typeof colors[name] === `string`)
      .map(name => (
        <Cell {...layering} key={name} name={name} color={colors[name]} />
      ))}
  </Box>
)
