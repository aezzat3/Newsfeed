import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ICONS, COLORS} from '../../../common';
import {AppIcon} from '../../../components';
import {common_nav_options} from '../../styles';
import {HomeHeader} from '../../headers/home';
import Home from '../../../screens/Home';
import Account from '../../../screens/Account';

const tabs_options = () => ({
  HomeTab: {
    icon: ICONS.home,
    label: 'home',
  },
  AccountTab: {
    icon: ICONS.account,
    label: 'account',
  },
});

const HomeNav = createStackNavigator();
const HomeStack = () => (
  <HomeNav.Navigator screenOptions={{...common_nav_options}}>
    <HomeNav.Screen
      component={Home}
      name={'Home'}
      options={{header: () => <HomeHeader />}}
    />
  </HomeNav.Navigator>
);

const AccountNav = createStackNavigator();
const AccountStack = () => (
  <AccountNav.Navigator screenOptions={{...common_nav_options}}>
    <AccountNav.Screen
      component={Account}
      name={'account'}
      options={{header: () => <HomeHeader />}}
    />
  </AccountNav.Navigator>
);

const BottomTab = createBottomTabNavigator();
const TabNavigator = () => {
  const tabs_data = tabs_options();
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: tabs_data[route.name].label,
        tabBarIcon: options => (
          <AppIcon
            icomoon
            name={
              options.focused
                ? tabs_data[route.name].icon
                : `${tabs_data[route.name].icon}-outline`
            }
            color={options.color}
            size={25}
            type={'MaterialCommunityIcons'}
          />
        ),
      })}
      tabBarOptions={{
        activeTintColor: COLORS.main,
        inactiveTintColor: COLORS.blueyGrey,
        labelPosition: 'below-icon',
      }}>
      <BottomTab.Screen component={HomeStack} name={'HomeTab'} />
      <BottomTab.Screen component={AccountStack} name={'AccountTab'} />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
