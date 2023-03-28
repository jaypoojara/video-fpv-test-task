import React from 'react';
import {Pressable, Text} from 'react-native';
import {ButtonProps} from './Button.props';
import {styles} from './Button.styles';

export const Button = ({
  title,
  onPress,
  backgroundColor,
  color,
  style,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, {backgroundColor}, style]}>
      <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
    </Pressable>
  );
};
