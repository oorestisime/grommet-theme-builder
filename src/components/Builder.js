import React from 'react';
import {
 Box, Text, Heading, Button, Layer,
} from 'grommet';
import { mergeTheme } from './utils';

class Builder extends React.Component {
  state = {
    ...this.props.params,
  }

  onFormChange = (key, value) => {
    this.setState({ ...mergeTheme(Object.assign({}, this.state), key, value) });
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
          <Box pad={{ bottom: 'medium' }}>
            <Heading level={3} margin="none">{name}</Heading>
            <Text>{desc}</Text>
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

export default Builder;
