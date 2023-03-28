import {StyleProp, ViewStyle} from 'react-native';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor: string;
  color: string;
  style?: StyleProp<ViewStyle>;
};
