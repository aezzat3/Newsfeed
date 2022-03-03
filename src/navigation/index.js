import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './Stacks/Main';

export const navigationRef = React.createRef();

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator headerMode={'none'}>
      <RootStack.Screen name={'MainStack'} component={MainStack} />
    </RootStack.Navigator>
  );
};

export default () => (
  <NavigationContainer ref={navigationRef}>
    <RootNavigation />
  </NavigationContainer>
);

export const navigate = (name, params) => {
  navigationRef.current
    ? navigationRef.current.navigate(name, params)
    : undefined;
};
