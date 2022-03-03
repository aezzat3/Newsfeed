import {StyleSheet} from 'react-native';
import {COLORS, STYLES} from '../common';
import {calcWidth, calcFont, calcHeight} from '../utils';

const styles = StyleSheet.create({
  headerTitleStyle: {},
  headerStyle: {
    height: calcHeight(115),
    backgroundColor: COLORS.white,
    shadowOpacity: 0,
    elevation: 0,
  },
  orderHeaderStyle: {
    elevation: 0,
    borderBottomWidth: 0,
  },
  cardStyle: {
    backgroundColor: '#f4f5f9',
  },
  headerSidesContainerStyle: {
    paddingHorizontal: calcWidth('20'),
  },
  backTitleFontStyle: {
    marginStart: calcWidth(14),
    fontSize: calcFont(16.7),
    color: COLORS.brownishGrey,
  },
});

export const common_nav_options = {
  headerTintColor: COLORS.brownishGreyTwo,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerTitleStyle,
  cardStyle: styles.cardStyle,
  headerStyle: styles.headerStyle,
  headerBackTitleVisible: false,
  headerRightContainerStyle: STYLES.headerHorizontal,
  headerLeftContainerStyle: STYLES.headerHorizontal,
};
