import React from 'react';
import {View, Image, Animated, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderProps} from './Header.props';
import {styles} from './Header.styles';
import images from '../../assets/images';

export const Header = ({
  onClose,
  onMore,
  duration,
  animatedProgress,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const height = 50 + insets.top;
  const successFlexValue = animatedProgress.interpolate({
    inputRange: [0, duration],
    outputRange: [0, 1],
  });
  const disabledFlexValue = animatedProgress.interpolate({
    inputRange: [0, duration],
    outputRange: [1, 0],
  });

  return (
    <View style={[styles.container, {paddingTop: insets.top, height}]}>
      <Pressable onPress={onClose}>
        <Image source={images.close} style={styles.icon} />
      </Pressable>
      <Animated.View style={styles.slider}>
        <Animated.View
          style={[
            styles.fillSlider,
            {
              flex: successFlexValue,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.remainingSlider,
            {
              flex: disabledFlexValue,
            },
          ]}
        />
      </Animated.View>
      <Pressable onPress={onMore}>
        <Image source={images.more} style={styles.icon} />
      </Pressable>
    </View>
  );
};
