import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './CloseModal.styles';
import Spacer from '../Spacer/Spacer';
import {Button} from '../Button/Button';
import images from '../../assets/images';
import locales from '../../assets/locales/en.json';
import colors from '../../assets/colors';
import {CloseModalProps} from './CloseModal.props';

export const CloseModal = ({keepLearning, endSession}: CloseModalProps) => {
  return (
    <View style={styles.modalContainer}>
      <Spacer size={16} />
      <Image style={styles.userIcon} source={images.user} />
      <Spacer size={24} />
      <Text style={styles.title}>{locales.close_modal.title}</Text>
      <Spacer size={16} />
      <Text style={styles.subtitle}>{locales.close_modal.subtitle}</Text>
      <Spacer size={24} />
      <Button
        title={locales.close_modal.keep_learning}
        onPress={keepLearning}
        backgroundColor={colors.primary}
        color={colors.white}
      />
      <Spacer size={16} />
      <Button
        title={locales.close_modal.end_session}
        onPress={endSession}
        backgroundColor={colors.disabled}
        color={colors.danger}
      />
      <Spacer size={16} />
    </View>
  );
};
