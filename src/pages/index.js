import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Box,
  Grommet,
  Button,
  Text,
  Layer,
  Paragraph,
  Heading,
  Select,
  Anchor,
} from 'grommet';
import { grommet } from 'grommet/themes';
import { FormClose, Github, Gremlin } from 'grommet-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { forms, themes } from '../constants';
import { mergeTheme, Builder } from '../components/forms';
import Sidebar from '../components/Sidebar';
import Playground from '../components/Playground';


const FullGlobalStyle = createGlobalStyle`
  body { margin: 0; }
`;

const NotificationLayer = styled(Layer)`
  background-color: rgba(0, 0, 0, 0);
`;

class Index extends React.Component {
  state = {
    theme: themes.base,
    layer: false,
    layerForm: '',
    params: {},
    copied: false,
    selectValue: 'base',
  };

  openLayer = (layerForm, params) => this.setState({ layer: true, layerForm, params });

  closeLayer = () => this.setState({ layer: false });

  onSave = (key, value) => this.setState(state => ({
      theme: mergeTheme(state.theme, key, value),
      layer: false,
    }));

  reset = () => this.setState({ theme: themes.base, selectValue: 'base' });

  showNotification = () => this.setState({ copied: true });

  hideNotification = () => this.setState({ copied: false });

  changeBaseTheme = ({ option }) => {
    this.setState({
      theme: themes[option],
      selectValue: option,
    });
  }

  render() {
    const {
      theme, layer, layerForm, params, copied, selectValue,
    } = this.state;

    return (
      <Grommet theme={grommet} full>
        <FullGlobalStyle />
        <Box direction="row" fill>
          <Sidebar callback={this.openLayer} theme={theme} />
          <Box flex fill overflow="auto">
            <Box flex={false} margin={{ bottom: 'large', left: 'small' }}>
              <Heading level={2}>Welcome to the theme builder</Heading>
              <Paragraph>
                Modifying the sidebar values will enable you to create your
                customized theme and then export it!
              </Paragraph>
              <Box direction="row">
                <Button margin="small" icon={<Gremlin />} href="https://v2.grommet.io/components" label="Grommet documentation" />
                <Button margin="small" icon={<Github />} href="https://github.com/oorestisime/grommet-theme-builder/issues" label="Report an issue witht the builder" />
              </Box>
              <Box direction="row">
                <CopyToClipboard text={JSON.stringify(theme, null, 2)}>
                  <Button
                    margin="small"
                    label="Copy to clipboard"
                    onClick={this.showNotification}
                  />
                </CopyToClipboard>
                <Button margin="small" label="Reset" onClick={this.reset} />
                <Select
                  id="select"
                  name="select"
                  placeholder="Base theme"
                  size="small"
                  value={selectValue}
                  options={Object.keys(themes)}
                  onChange={this.changeBaseTheme}
                />
              </Box>
            </Box>
            <Playground theme={theme} />
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

export default Index;
