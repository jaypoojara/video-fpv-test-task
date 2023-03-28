import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  userIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: fonts.medium,
    textAlign: 'center',
    marginHorizontal: 8,
    color: colors.black,
  },
});
