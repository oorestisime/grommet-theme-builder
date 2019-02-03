import React, { createRef, Component } from "react"
import { Box, Text, Drop } from "grommet"
import contrast from "get-contrast"

class Cell extends Component {
  state = {
    openDrop: false,
  }

  targetRef = createRef()

  onCloseDrop = () => this.setState({ openDrop: false })

  onOpenDrop = () => this.setState({ openDrop: true })

  getColorInfo = color => {
    const info = []
    const ratio = (base, color) => Math.round(contrast.ratio(base, color))
    const score = (base, color) => contrast.score(base, color)
    const isAccessible = (base, color) => contrast.isAccessible(base, color)
    try {
      info.push(
        `White contrast: ${ratio(`white`, color)} ${score(`white`, color)}`
      )
      info.push(
        `White contrast is ${
          isAccessible(`white`, color) ? `accessible` : `not accessible`
        }`
      )

      info.push(
        `Black contrast: ${ratio(`black`, color)} ${score(`black`, color)}`
      )
      info.push(
        `Black contrast is ${
          isAccessible(`black`, color) ? `accessible` : `not accessible`
        }`
      )
      return info
    } catch {
      return [`Could not calculate information`]
    }
  }

  render() {
    const { name, color } = this.props
    const { openDrop } = this.state
    console.log(color)
    return (
      <Box
        ref={this.targetRef}
        onMouseEnter={this.onOpenDrop}
        onMouseLeave={this.onCloseDrop}
        basis="xsmall"
        margin={{ bottom: `medium` }}
      >
        <Box pad="medium" background={name} round="small" />
        <Text>
          <strong>{name}</strong>
        </Text>
        {openDrop && (
          <Drop
            align={{ top: `bottom`, left: `left` }}
            target={this.targetRef.current}
          >
            <Box pad="small">
              <pre>{this.getColorInfo(color).join(`\n`)}</pre>
            </Box>
          </Drop>
        )}
      </Box>
    )
  }
}

export const Set = ({ colors }) => (
  <Box direction="row" wrap gap="medium">
    {Object.keys(colors)
      .filter(name => typeof colors[name] === `string`)
      .map(name => (
        <Cell key={name} name={name} color={colors[name]} />
      ))}
  </Box>
)
