import React from 'react';
import {View} from 'react-native';
import {SpacerProps} from './Spacer.props';

const Spacer = ({
  size,
  style,
  horizontal = true,
  vertical = true,
  ...rest
}: SpacerProps) => {
  const sizeStyle = {
    width: horizontal ? size : 0,
    height: vertical ? size : 0,
  };

  return <View style={[sizeStyle, style]} {...rest} />;
};

export default Spacer;
