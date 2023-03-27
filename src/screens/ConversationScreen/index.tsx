import React, {useState} from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import {Header} from '../../components/Header/Header';
import locales from '../../assets/locales/en.json';
import {Button} from '../../components/Button/Button';
import Spacer from '../../components/Spacer/Spacer';
import colors from '../../assets/colors';
import {useAppNavigation} from '../../../App';

export const ConversationScreen = () => {
  const [paused, setPaused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {goBack} = useAppNavigation();
  const {height} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const videoHeight = height - (insets.top + 50); // header height
  const onMore = () => {
    setPaused(true);
    setModalVisible(true);
  };

  const onClose = () => {
    setModalVisible(false);
    setPaused(false);
  };

  const keepLearning = () => {
    setModalVisible(false);
    setPaused(false);
  };

  const endSession = () => goBack();

  const onLoad = (data: any) => {};

  const onProgress = (data: any) => {};

  return (
    <View style={styles.container}>
      <Header onMore={onMore} onClose={onClose} />
      <Video
        source={require('../../assets/dummy.mp4')}
        style={[styles.backgroundVideo, {height: videoHeight}]}
        paused={paused}
        resizeMode="cover"
        onLoad={onLoad}
        onProgress={onProgress}
      />
      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <Image
            style={styles.userIcon}
            source={require('../../assets/user.png')}
          />
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
        </View>
      </Modal>
    </View>
  );
};
