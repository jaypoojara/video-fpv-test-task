import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: 20,
  },
});
