import React from "react"
import _ from "lodash"
import { Box, Text } from "grommet"
import { Gremlin, Install } from "grommet-icons"

import { sidebar, SideBarButton, SideBarHeading } from "./sidebar"

export class Sidebar extends React.Component {
  state = Object.assign(
    {},
    ...Object.keys(sidebar).map(key => ({ [key]: true }))
  )

  toggleSubHeading = title =>
    this.setState(state => ({ [title]: !state[title] }))

  render() {
    const { callback, theme } = this.props
    const { ...subheadings } = this.state
    const globalContext = Object.assign({}, theme.global)
    delete globalContext.colors

    return (
      <Box
        fill="vertical"
        overflow="auto"
        width="small"
        elevation="medium"
        background="dark-2"
        pad={{ vertical: "medium" }}
      >
        <Box
          flex={false}
          gap="xsmall"
          align="center"
          margin={{ bottom: "medium" }}
        >
          <Gremlin color="white" />
        </Box>
        <Box
          flex={false}
          align="start"
          margin={{ horizontal: "small", bottom: "small" }}
        >
          <SideBarHeading
            key="General"
            open={subheadings.General}
            title="General"
            onClick={this.toggleSubHeading}
          >
            {sidebar.General.map(({ context, ...rest }) => (
              <SideBarButton
                {...rest}
                onClick={callback}
                context={_.get(theme, context)}
                key={context}
              />
            ))}
            <SideBarButton
              Icon={Install}
              area="Global"
              key="global-context"
              onClick={callback}
              context={globalContext}
            />
          </SideBarHeading>
          {Object.keys(sidebar)
            .filter(key => key !== "General")
            .map(head => (
              <SideBarHeading
                key={head}
                open={subheadings[head]}
                title={head}
                onClick={this.toggleSubHeading}
              >
                {sidebar[head].map(({ context, ...rest }) => (
                  <SideBarButton
                    {...rest}
                    key={context}
                    onClick={callback}
                    context={_.get(theme, context)}
                  />
                ))}
              </SideBarHeading>
            ))}
        </Box>
      </Box>
    )
  }
}
// <SideBarButton
//
//             />
