import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackLoginModule from '../StackLoginModule';
import AppStack from '../AppStack';

export type RootStackParamsNavigator = {
  StackLoginModule: {},
  AppStack: {},
}


const Stack = createStackNavigator<RootStackParamsNavigator>();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StackLoginModule" component={StackLoginModule} options={{headerShown: false, cardStyle: {backgroundColor: 'transparent'}}} />
        <Stack.Screen name="AppStack" component={AppStack} options={{headerShown: false, cardStyle: {backgroundColor: 'transparent'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
