import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';
import {calcHeight, calcWidth, calcFont} from '../../utils';

export default StyleSheet.create({
  search: {
    height: calcHeight(50),
    backgroundColor: COLORS.paleGreyTwo,
    width: '93%',
    borderRadius: calcHeight(5),
    paddingHorizontal: calcWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: calcHeight(20),
    borderColor: COLORS.greyishBrown,
    borderWidth: 0.6,
  },
  leftIconPlacholder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: calcFont(18),
    color: COLORS.secondryFont,
    padding: calcWidth(5),
    flex: 1,
  },
  searchIcon: {
    marginRight: calcWidth(10),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
});
