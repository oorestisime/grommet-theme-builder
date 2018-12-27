import React from 'react';
import {
  Box, Text, Heading, Button, Layer,
} from 'grommet';
import { mergeTheme } from '../../utils';

export class Builder extends React.Component {
  state = {
    ...this.props.params,
  }

  onFormChange = (key, value) => {
    this.setState(state => ({ ...mergeTheme(Object.assign({}, state), key, value) }));
  }

  render() {
    const {
      Component, themeArea, name, desc, params, onSave, onClose,
    } = this.props;

    return (
      <Layer
        position="center"
        modal
        full="vertical"
        onClickOutside={onClose}
        onEsc={onClose}
      >
        <Box overflow="scroll" pad="medium" gap="small" width="large">
          <Box flex={false} pad={{ bottom: 'small' }} gap="small">
            <Heading alignSelf="center" color="brand" level={3} margin="none">{name}</Heading>
            <Text>{desc}</Text>
            {name !== 'Global' && (
              <Text size="xsmall">
                Be aware that some components use theme properties from the global
                properties so fully styling these components may require modifying
                that as well. Grommet documentation mentions all the theme properties
                used in a component.
              </Text>
            )}
          </Box>
          <Box
            gap="small"
            direction="row"
            align="center"
            justify="end"
            margin={{ vertical: 'medium' }}
          >
            <Button
              label="Cancel"
              onClick={onClose}
            />
            <Button
              type="submit"
              label="Submit"
              onClick={() => onSave(themeArea, this.state)}
              primary
            />
          </Box>
          <Component onChange={this.onFormChange} params={params} />
        </Box>
      </Layer>
    );
  }
}
