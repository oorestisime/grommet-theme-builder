import React from "react"
import { Box, Text, TextInput } from "grommet"
import { StatusDisabledSmall } from "grommet-icons"

class ColorInput extends React.Component {
  state = {
    color: this.props.color,
  }

  onChange = event => {
    const { onChange, name } = this.props
    this.setState({ color: event.target.value })
    onChange(name, event.target.value)
  }

  render() {
    const { color } = this.state
    const { name } = this.props

    return (
      <Box
        direction="row"
        gap="small"
        width="large"
        margin={{ vertical: `medium` }}
      >
        <Text size="medium">{name}</Text>
        <Box
          align="center"
          pad={{ horizontal: `small`, vertical: `small` }}
          round="small"
          direction="row"
          border
        >
          <StatusDisabledSmall color={color} />
          <TextInput
            plain
            size="small"
            value={color}
            onChange={this.onChange}
          />
        </Box>
      </Box>
    )
  }
}

export const ColorBuilder = ({ params: colors, onChange }) => (
  <Box>
    {Object.keys(colors)
      .filter(color => typeof colors[color] === `string`)
      .map(color => (
        <ColorInput
          onChange={(c, value) => onChange(c, value)}
          key={color}
          color={colors[color]}
          name={color}
        />
      ))}
  </Box>
)
