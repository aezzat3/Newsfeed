/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from '../Tabs';
import {common_nav_options} from '../../styles';

const MainStack = createStackNavigator();

const MainNavigator = () => (
  <MainStack.Navigator
    screenOptions={{...common_nav_options}}
    headerMode={'screen'}>
    <MainStack.Screen
      component={Tabs}
      name={'Tabs'}
      options={{headerShown: false}}
    />
  </MainStack.Navigator>
);

export default MainNavigator;
