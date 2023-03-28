import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import {HomeScreen} from './src/screens/HomeScreen';
import {ConversationScreen} from './src/screens/ConversationScreen';

type RootStackParamList = {
  Home: undefined;
  Conversation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
type AppStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<AppStackNavigationProp>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Conversation" component={ConversationScreen} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
