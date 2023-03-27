import React from 'react';
import {View, Image, Animated, Pressable} from 'react-native';
import {HeaderProps} from './Header.props';
import {styles} from './Header.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Header = ({onClose, onMore}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const height = 50 + insets.top;

  return (
    <View style={[styles.container, {paddingTop: insets.top, height}]}>
      <Pressable onPress={onClose}>
        <Image source={require('../../assets/close.png')} style={styles.icon} />
      </Pressable>
      <Animated.View style={[styles.slider]} />
      <Pressable onPress={onMore}>
        <Image source={require('../../assets/more.png')} style={styles.icon} />
      </Pressable>
    </View>
  );
};
