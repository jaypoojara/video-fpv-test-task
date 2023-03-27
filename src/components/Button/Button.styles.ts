import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '100%',
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 15,
    fontFamily: fonts.semiBold,
  },
});
