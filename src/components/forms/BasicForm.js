import React from "react"
import { Box } from "grommet"
import { inputs } from "../../utils"

export const BasicForm = ({ params, onChange }) => (
  <Box flex={false}>
    {Object.keys(params).map(param =>
      inputs({ param, paramValue: params[param], onChange })
    )}
  </Box>
)
