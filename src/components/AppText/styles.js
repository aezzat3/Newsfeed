import {StyleSheet, Platform} from 'react-native';
import {FONTS, COLORS} from '../../common';

const styles = StyleSheet.create({
  text: {
    color: COLORS.main,
    textAlign: Platform.OS === 'ios' ? 'left' : 'auto',
  },
  loadingContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
