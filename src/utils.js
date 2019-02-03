import React from "react"
import _ from "lodash"
import { deepMerge } from "grommet/utils"

import ParamInput from "./components/forms/ParamInput"
import SectionInput from "./components/forms/SectionInput"

export const inputs = ({
  param,
  paramValue,
  onChange,
  section,
  path: basePath,
}) => {
  let path
  if (basePath) {
    path = `${basePath}.${param}`
  } else {
    path = section ? `${section}.${param}` : param
  }

  if (typeof paramValue === "string") {
    return (
      <ParamInput
        onChange={(key, value) => onChange(key, value)}
        key={param}
        param={paramValue}
        name={param}
        path={path}
      />
    )
  }

  if (Object.keys(paramValue).length === 0) {
    return null
  }

  return (
    <SectionInput
      onChange={(key, value) => onChange(key, value)}
      key={param}
      params={paramValue}
      section={param}
      path={path}
    />
  )
}

export const mergeTheme = (base, path, value) => {
  const params = _.set({}, path, value)
  return deepMerge(base, params)
}
