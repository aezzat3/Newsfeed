import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {AppIcon} from '../AppIcon';
import {calcHeight} from '../../utils';
import styles from './styles';
import {ICONS} from '../../common';

let SearchBox = ({containerStyle, onPressSearch, ...rest}) => {
  return (
    <View style={[styles.search, containerStyle]}>
      {!!onPressSearch && (
        <TouchableOpacity
          onPress={onPressSearch}
          activeOpacity={0.8}
          style={styles.overlay}
        />
      )}
      <View style={styles.leftIconPlacholder}>
        <AppIcon
          name={ICONS.search}
          size={calcHeight(25)}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.textInput}
          editable={!onPressSearch}
          {...rest}
        />
      </View>
    </View>
  );
};
SearchBox = React.memo(SearchBox);
export {SearchBox};
