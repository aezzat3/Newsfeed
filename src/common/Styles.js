import {StyleSheet} from 'react-native';
import {calcWidth} from '../utils';
import {COLORS} from './Colors';

export const STYLES = StyleSheet.create({
  shaddow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,

    elevation: 12,
    backgroundColor: COLORS.white,
  },

  headerHorizontal: {
    paddingHorizontal: calcWidth(20),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
