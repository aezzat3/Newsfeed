import React from 'react';
import {View, Alert} from 'react-native';
import {calcWidth} from '../../../utils';
import {PressedIcon, AppText} from '../../../components';
import {ICONS, COLORS, METRICS} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useSafeArea} from 'react-native-safe-area-context';

const HomeHeader = () => {
  const navigation = useNavigation();
  const {top} = useSafeArea();
  const extraHeightStyle = {
    height: METRICS.headerHeight + top,
    paddingTop: top,
  };
  return (
    <View style={[styles.container, extraHeightStyle]}>
      <View style={styles.headerContentContainer}>
        <PressedIcon
          name={ICONS.notifications}
          size={calcWidth(20)}
          color={COLORS.dark}
          onPress={() => Alert.alert('NOTIFICATIONS')}
        />
        <AppText style={styles.headerText}>{'NEWS FEED'}</AppText>
        <PressedIcon
          name={'search'}
          size={calcWidth(20)}
          color={COLORS.dark}
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    </View>
  );
};

export {HomeHeader};
