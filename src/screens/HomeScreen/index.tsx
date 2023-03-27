import React from 'react';
import {Text, View} from 'react-native';
import {useAppNavigation} from '../../../App';
import styles from './styles';

export const HomeScreen = () => {
  const {navigate} = useAppNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => navigate('Conversation')}>
        Go to conversation
      </Text>
    </View>
  );
};
