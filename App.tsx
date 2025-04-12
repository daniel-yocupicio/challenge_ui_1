/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator';
import { UIProvider } from './src/Context/UIContext/UIProvider';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  return (
      <UIProvider>
        <StatusBar translucent={true} backgroundColor={'transparent'} animated={true} />
        <StackNavigator />
      </UIProvider>
  );
}


export default App;
