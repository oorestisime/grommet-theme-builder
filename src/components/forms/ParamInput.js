import React from "react"
import { Box, TextInput, Text } from "grommet"

class ParamInput extends React.Component {
  state = {
    param: this.props.param,
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    const { param } = this.state
    const { param: nextStateParam } = nextState
    const { param: propsParam } = nextProps

    return param !== nextStateParam || param !== propsParam
  }

  onChange = event => {
    const { onChange, path } = this.props
    onChange(`${path}`, event.target.value)
    this.setState({ param: event.target.value })
  }

  render() {
    const { param } = this.state
    const { name } = this.props

    return (
      <Box
        align="center"
        direction="row"
        gap="small"
        width="medium"
        margin={{ vertical: "small" }}
      >
        <Text size="medium">{name}</Text>
        <TextInput size="small" value={param} onChange={this.onChange} />
      </Box>
    )
  }
}

export default ParamInput
