import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Box,
  Grommet,
  Button,
  Text,
  Heading,
  Paragraph,
  Layer,
  Calendar,
} from 'grommet';
import { generate } from 'grommet/themes/base';
import { grommet } from 'grommet/themes';
import { Gremlin, FormClose } from 'grommet-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  mergeTheme, Set, Builder, ColorBuilder, BasicForm,
} from '../components/forms';
import Sidebar from '../components/Sidebar';

const FullGlobalStyle = createGlobalStyle`
  body { margin: 0; }
`;

const forms = {
  Colors: {
    name: 'Colors',
    desc: "Modify the theme's colors",
    Component: ColorBuilder,
    themeArea: 'global.colors',
  },
  Button: {
    name: 'Button',
    desc: 'Modify default button theme properties',
    Component: BasicForm,
    themeArea: 'button',
  },
  Calendar: {
    name: 'Calendar',
    desc: 'Modify default calendar theme properties',
    Component: BasicForm,
    themeArea: 'calendar',
  },
  Global: {
    name: 'Global',
    desc: 'Modify global properties',
    Component: BasicForm,
    themeArea: 'global',
  },
};

const NotificationLayer = styled(Layer)`
  background-color: rgba(0, 0, 0, 0);
`;

class Playground extends React.Component {
  state = {
    theme: generate(),
    layer: false,
    layerForm: '',
    params: {},
    copied: false,
  };

  openLayer = (layerForm, params) => this.setState({ layer: true, layerForm, params });

  closeLayer = () => this.setState({ layer: false });

  onSave = (key, value) => this.setState(state => ({
      theme: mergeTheme(state.theme, key, value),
      layer: false,
    }));

  reset = () => this.setState({ theme: generate() });

  showNotification = () => this.setState({ copied: true });

  hideNotification = () => this.setState({ copied: false });

  render() {
    const {
      theme, layer, layerForm, params, copied,
    } = this.state;

    const globalContext = Object.assign({}, theme.global);

    return (
      <Grommet theme={grommet} full>
        <FullGlobalStyle />
        <Box direction="row" fill>
          <Sidebar callback={this.openLayer} theme={theme} />
          <Box flex fill overflow="auto">
            <Grommet theme={theme}>
              <Box align="center">
                <Heading level={2}>Welcome to the theme builder</Heading>
                <Paragraph>
                  Modifying the sidebar values will enable you to create your
                  customized theme and then export it!
                </Paragraph>
                <Box direction="row">
                  <CopyToClipboard text={JSON.stringify(theme, null, 2)}>
                    <Button
                      margin="small"
                      label="Copy to clipboard"
                      onClick={this.showNotification}
                    />
                  </CopyToClipboard>
                  <Button margin="small" label="Reset" onClick={this.reset} />
                </Box>
              </Box>
              <Box align="start" margin="small" gap="small">
                <Box direction="row" gap="small">
                  <Set colors={theme.global.colors} />
                </Box>
                <Box direction="row" gap="small">
                  {Object.keys(globalContext.borderSize).map(size => (
                    <Box pad="small" border={{ size }}>
                      {size}
                    </Box>
                  ))}
                </Box>
                <Box gap="small" direction="row">
                  <Button plain label="Plain button" onClick={() => {}} />
                  <Button label="Button" onClick={() => {}} />
                  <Button primary label="Primary button" onClick={() => {}} />
                  <Button
                    icon={<Gremlin />}
                    label="Icon button"
                    onClick={() => {}}
                  />
                  <Button disabled label="Disabled" onClick={() => {}} />
                </Box>
                <Box direction="row-responsive" gap="medium">
                  <Calendar
                    size="small"
                    bounds={['2018-09-08', '2018-12-13']}
                  />
                  <Calendar
                    size="medium"
                    bounds={['2018-09-08', '2018-12-13']}
                  />
                </Box>
                <Calendar size="large" bounds={['2018-09-08', '2018-12-13']} />
              </Box>
            </Grommet>
          </Box>
        </Box>
        {layer && (
          <Builder
            {...forms[layerForm]}
            params={params}
            onClose={this.closeLayer}
            onSave={this.onSave}
          />
        )}
        {copied && (
          <NotificationLayer
            position="bottom"
            full="horizontal"
            modal={false}
            responsive={false}
            onEsc={this.hideNotification}
          >
            <Box
              align="start"
              pad={{ vertical: 'medium', horizontal: 'small' }}
            >
              <Box
                align="center"
                direction="row"
                gap="small"
                round="medium"
                elevation="medium"
                pad={{ vertical: 'xsmall', horizontal: 'small' }}
                background="status-ok"
              >
                <Box align="center" direction="row" gap="xsmall">
                  <Text>Theme copied to your clipboard</Text>
                </Box>
                <Button
                  icon={<FormClose />}
                  onClick={this.hideNotification}
                  plain
                />
              </Box>
            </Box>
          </NotificationLayer>
        )}
      </Grommet>
    );
  }
}

export default Playground;
