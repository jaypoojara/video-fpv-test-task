import {StyleProp, ViewStyle} from 'react-native';

export type SpeakProps = {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
  textToSpeak: string;
};

export type SpeakNowProps = {
  textToSpeak: string;
};

export type AnswerProps = {
  onPress: () => void;
  textToSpeak?: string;
  result?: string;
};
