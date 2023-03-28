import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  mainView: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
  },
  speakContainer: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: colors.white,
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  speakerImg: {
    height: 24,
    width: 24,
    tintColor: colors.primary,
  },
  title: {
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 16,
    marginLeft: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: 14,
    marginLeft: 8,
    textAlign: 'center',
  },
  micIconView: {
    height: 50,
    width: 50,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: -40,
  },
  micIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  mh16: {
    marginHorizontal: 16,
  },
  tryAgain: {
    textAlign: 'center',
    fontFamily: fonts.regular,
    color: colors.black,
    fontSize: 12,
  },
  dangerBg: {
    backgroundColor: '#ffcccb',
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  dangerTxt: {
    color: colors.danger,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  checkMarkContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.white,
    marginTop: -33,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  checkMark: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  weldone: {
    textAlign: 'center',
    fontFamily: fonts.bold,
    color: colors.success,
    fontSize: 16,
  },
  successBg: {
    backgroundColor: '#d3f8d3',
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  successTxt: {
    color: colors.success,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
});
