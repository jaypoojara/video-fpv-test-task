import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import colors from '../../assets/colors';
import images from '../../assets/images';
import {Button} from '../Button/Button';
import Spacer from '../Spacer/Spacer';
import {AnswerProps, SpeakNowProps, SpeakProps} from './SpeechToText.props';
import {styles} from './SpeechToText.styles';

export const Speak = ({style, onPress, textToSpeak}: SpeakProps) => {
  return (
    <View style={styles.speakContainer}>
      <View style={styles.flexRow}>
        <Image style={styles.speakerImg} source={images.speaker} />
        <Text style={styles.title}>{textToSpeak}</Text>
      </View>
      <Spacer size={16} />
      <Pressable onPress={onPress} style={styles.micIconView}>
        <Image style={styles.micIcon} source={images.mic} />
      </Pressable>
    </View>
  );
};

export const SpeakNow = ({textToSpeak}: SpeakNowProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.mainView, {marginBottom: 70}]}>
        <Text style={styles.subtitle}>Speak now...</Text>
        <Spacer size={16} />
        <Text style={styles.title}>{textToSpeak}</Text>
      </View>
    </View>
  );
};

export const RightAnswer = ({onPress, textToSpeak}: AnswerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.checkMarkContainer}>
          <View style={styles.checkMark}>
            <Image style={styles.checkIcon} source={images.check} />
          </View>
        </View>
        <Spacer size={10} />
        <Text style={styles.weldone}>WEL DONE!</Text>
        <Spacer size={8} />
        <View style={styles.successBg}>
          <Text style={styles.successTxt}>{textToSpeak}</Text>
        </View>
      </View>
      <Spacer size={10} />
      <View style={styles.mh16}>
        <Button
          title="CONTINUE"
          onPress={onPress}
          color={colors.white}
          backgroundColor={colors.success}
        />
      </View>
      <Spacer size={10} />
    </View>
  );
};

export const WrongAnswer = ({onPress, result}: AnswerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.tryAgain}>LET'S TRY AGAIN</Text>
        <Spacer size={8} />
        <View style={styles.dangerBg}>
          <Text style={styles.dangerTxt}>{result}</Text>
        </View>
      </View>
      <Spacer size={10} />
      <View style={styles.mh16}>
        <Button
          title="TRY AGAIN"
          onPress={onPress}
          color={colors.white}
          backgroundColor={colors.primary}
        />
      </View>
      <Spacer size={10} />
    </View>
  );
};
