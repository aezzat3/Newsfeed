import React from 'react';
import {View, StyleSheet, ViewPropTypes, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {calcHeight, calcFont, calcWidth} from '../../utils';
import {AppText, AppIcon} from '..';
import {ICONS, COLORS} from '../../common';

let LanguageCard = ({title, selected, cardStyle, ...props}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.container, cardStyle]}
        activeOpacity={0.8}
        {...props}>
        <AppText style={styles.titleStyle}>{title}</AppText>
        <View style={styles.iconStyle}>
          {selected && (
            <AppIcon
              name={ICONS.check}
              size={calcWidth(17)}
              color={COLORS.dark}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: calcWidth(413),
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    height: calcHeight(78.3),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: calcHeight(5),
    borderWidth: calcWidth(1.3),
    padding: calcWidth(10),
    justifyContent: 'space-between',
    borderColor: COLORS.paleGrey,
  },
  active: {
    borderColor: COLORS.dark,
  },
  titleStyle: {
    fontSize: calcFont(18.3),
    color: COLORS.dark,
    textAlign: 'left',
    marginLeft: calcWidth(30),
  },
  iconStyle: {
    marginRight: calcWidth(30),
  },
});

LanguageCard = React.memo(LanguageCard);
export {LanguageCard};

LanguageCard.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  cardStyle: ViewPropTypes.object,
};
