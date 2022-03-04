import {StyleSheet} from 'react-native';
import {calcHeight, calcFont} from '../../utils';
import {COLORS} from '../../common';

const styles = StyleSheet.create({
  cardStyle: {
    minHeight: calcHeight(320),
    borderRadius: calcHeight('10'),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    marginBottom: calcHeight(20),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imgStyles: {
    width: '100%',
    height: calcHeight(170),
    borderRadius: calcHeight('10'),
  },
  title: {
    fontWeight: 'bold',
    fontSize: calcFont(20),
    color: COLORS.greyishBrown,
    marginVertical: calcHeight(10),
    marginHorizontal: calcHeight(10),
  },
  description: {
    fontSize: calcFont(18),
    color: COLORS.greyishBrown,
    marginHorizontal: calcHeight(10),
    marginBottom: calcHeight(20),
  },
});
export default styles;
