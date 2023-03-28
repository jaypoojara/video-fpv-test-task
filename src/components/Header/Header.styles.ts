import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  slider: {
    flexDirection: 'row',
    height: 5,
    backgroundColor: 'red',
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  fillSlider: {
    height: 5,
    backgroundColor: colors.success,
  },
  remainingSlider: {
    height: 5,
    backgroundColor: colors.sliderDisabled,
  },
});
