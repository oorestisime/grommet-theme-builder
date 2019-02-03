import React from "react"
import { Button } from "grommet"

export const SideBarButton = ({ onClick, area, context, Icon }) => (
  <Button
    plain
    key={area}
    label={area}
    margin={{ vertical: "small", left: "small" }}
    icon={<Icon color="white" />}
    onClick={() => onClick(area, context)}
  />
)
