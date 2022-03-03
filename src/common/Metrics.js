import { calcHeight, calcWidth } from '../utils';
import { Platform } from 'react-native';
const METRICS = {
  extraHeight: Platform.OS == 'ios' ? calcHeight('200') : calcHeight('230'),
  androidExtraHeight: calcHeight('230'),
  iosExtraHeight: calcHeight('200'),

  headerHeight: calcHeight(113),
  headerHorizontal: calcWidth(20),
};

export { METRICS };
