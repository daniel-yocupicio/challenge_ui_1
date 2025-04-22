import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackLoginModule from '../StackLoginModule';
import AppStack from '../AppStack';
import { useUserStore } from '../../store/user';

export type RootStackParamsNavigator = {
  StackLoginModule: {},
  AppStack: {},
}


const Stack = createStackNavigator<RootStackParamsNavigator>();

function StackNavigator() {
  const isLoged = useUserStore((state) => state.isLoged);

  return (
    <NavigationContainer onStateChange={e => console.log(e)}>
      <Stack.Navigator>
        {isLoged ? (
          <Stack.Screen name="AppStack" component={AppStack} options={{headerShown: false, cardStyle: {backgroundColor: 'transparent'}}} />
        ) : (
          <Stack.Screen name="StackLoginModule" component={StackLoginModule} options={{headerShown: false, cardStyle: {backgroundColor: 'transparent'}}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
