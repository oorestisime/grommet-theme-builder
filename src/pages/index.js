import React from "react"
import Helmet from "react-helmet"
import { Box, Grommet, Button } from "grommet"
import { grommet } from "grommet/themes"
import { updatedDiff } from "deep-object-diff"
import { FormClose } from "grommet-icons"

import { forms, themes } from "../constants"
import { mergeTheme, ratio } from "../utils"
import {
  Builder,
  Sidebar,
  Playground,
  Header,
  DiffModal,
  Toast,
} from "../components"

class Index extends React.Component {
  state = {
    theme: themes.base,
    layer: false,
    layerForm: ``,
    params: {},
    copied: false,
    diffModal: false,
    selectValue: `base`,
    colorContrastLayer: false,
    textColor: `white`,
  }

  openLayer = (layerForm, params) =>
    this.setState({ layer: true, layerForm, params })

  onSave = (key, value) =>
    this.setState(state => {
      return {
        theme: mergeTheme(state.theme, key, value),
        layer: false,
      }
    })

  reset = () => {
    const { selectValue } = this.state
    this.setState({ theme: themes[selectValue] })
  }

  toggleTextColor = event =>
    this.setState({
      textColor: event.target.checked ? `black` : `white`,
    })

  show = layer => this.setState({ [layer]: true })

  hide = layer => this.setState({ [layer]: false })

  changeBaseTheme = ({ option }) => {
    this.setState({
      theme: themes[option],
      selectValue: option,
    })
  }

  colorContrast = color => {
    const { textColor } = this.state
    let info
    let contrastRatio = 0

    try {
      contrastRatio = ratio(color, textColor === `white` ? `#fff` : `#000`)
      info =
        contrastRatio > 4
          ? `Contrast (${contrastRatio}:1) for this color on ${textColor} text is adequate`
          : `The color is too light to provide adequate contrast for ${textColor} text to be used on top of it. Current contrast is at ${contrastRatio}:1 ratio and 4.5:1 is recommended`
    } catch (e) {
      console.log(e)
      info = `Could not calculate information`
    }
    this.setState({
      colorContrastLayer: true,
      contrastText: info,
      contrastScore: contrastRatio || 0,
    })
  }

  render() {
    const {
      theme,
      layer,
      layerForm,
      params,
      copied,
      selectValue,
      diffModal,
      colorContrastLayer,
      contrastText,
      contrastScore,
      textColor,
    } = this.state

    return (
      <Grommet theme={grommet} full>
        <Helmet>
          <html lang="en" />
          <title>Grommet theme builder</title>
          <link
            rel="canonical"
            href="https://grommet-theme-builder.netlify.com"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
          />
        </Helmet>
        <Box direction="row" fill>
          <Sidebar callback={this.openLayer} theme={theme} />
          <Box flex fill overflow="auto">
            <Header
              selectValue={selectValue}
              theme={theme}
              changeBaseTheme={this.changeBaseTheme}
              themes={themes}
              showNotification={() => this.show(`copied`)}
              diff={() => this.show(`diffModal`)}
              reset={this.reset}
              checked={textColor === `black`}
              onChangeToggle={this.toggleTextColor}
            />
            <Playground
              onMouseEnter={this.colorContrast}
              onMouseLeave={() => this.hide(`colorContrastLayer`)}
              theme={theme}
            />
          </Box>
        </Box>
        {layer && (
          <Builder
            {...forms[layerForm]}
            params={params}
            onClose={() => this.hide(`layer`)}
            onSave={this.onSave}
          />
        )}
        {copied && (
          <Toast
            text="Theme copied to your clipboard"
            esc={() => this.hide(`copied`)}
            confirm={
              <Button
                plain
                icon={<FormClose size="large" />}
                onClick={() => this.hide(`copied`)}
              />
            }
          />
        )}
        {colorContrastLayer && (
          <Toast
            background={contrastScore > 4 ? `status-ok` : `status-warning`}
            text={contrastText}
            esc={() => this.hide(`colorContrastLayer`)}
            confirm={
              <Button
                plain
                icon={<FormClose size="large" />}
                onClick={() => this.hide(`colorContrastLayer`)}
              />
            }
          />
        )}
        {diffModal && (
          <DiffModal
            onClose={() => this.hide(`diffModal`)}
            data={updatedDiff(themes.base, theme)}
          />
        )}
      </Grommet>
    )
  }
}

export default Index
