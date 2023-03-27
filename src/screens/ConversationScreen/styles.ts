import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    width,
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  userIcon: {
    height: 60,
    width: 60,
    borderRadius: 30,
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
