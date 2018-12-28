import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import {
  Box,
  Grommet,
  Button,
  Text,
  Layer,
} from 'grommet';
import { grommet } from 'grommet/themes';
import { FormClose } from 'grommet-icons';

import { forms, themes } from '../constants';
import { mergeTheme } from '../utils';
import {
  Builder, Sidebar, Playground, Header,
} from '../components';

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

  reset = () => {
    const { selectValue } = this.theme;
    this.setState({ theme: themes[selectValue] });
  };

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
        <Helmet>
          <html lang="en" />
          <title>Grommet theme builder</title>
          <link rel="canonical" href="https://grommet-theme-builder.netlify.com" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
          />
        </Helmet>
        <FullGlobalStyle />
        <Box direction="row" fill>
          <Sidebar callback={this.openLayer} theme={theme} />
          <Box flex fill overflow="auto">
            <Header
              selectValue={selectValue}
              theme={theme}
              showNotification={this.showNotification}
              reset={this.reset}
              changeBaseTheme={this.changeBaseTheme}
              themes={themes}
            />
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
