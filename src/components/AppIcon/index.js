import React from 'react';
import {
  TouchableOpacity,
  ViewPropTypes,
  StyleSheet,
  I18nManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const AppIcon = props =>
  props.icomoon ? (
    <Icon color={'gray'} {...props} />
  ) : (
    <Icon {...props} style={[styles.icon, props.style]} />
  );

AppIcon.propTypes = {
  name: PropTypes.string.isRequired, // icon name
  color: PropTypes.string, // icon color
  size: PropTypes.number, // icon size
  icomoon: PropTypes.bool, // true if you use icomoon
  style: PropTypes.object,
};

const PressedIcon = ({
  onPress,
  containerStyle,
  name,
  size,
  color,
  icomoon,
  disabled,
  ...props
}) => {
  const opacity_style = {opacity: disabled ? 0.5 : 1};
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[containerStyle, opacity_style]}
      activeOpacity={0.7}>
      <AppIcon
        {...props}
        name={name}
        size={size}
        color={color}
        icomoon={icomoon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    transform: [{rotateY: I18nManager.isRTL ? '180deg' : '0deg'}],
  },
});

PressedIcon.propTypes = {
  name: PropTypes.string.isRequired, // icon name
  color: PropTypes.string, // icon color
  size: PropTypes.number, // icon size
  icomoon: PropTypes.bool, // true if you use icomoon
  onPress: PropTypes.func.isRequired, // function called when on press function
  disabled: PropTypes.bool, // icon disabled
  containerStyle: ViewPropTypes.style, // style for the icon container
};

export {AppIcon, PressedIcon};
