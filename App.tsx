/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} animated={true} />
      <StackNavigator />
    </>
  );
}


export default App;
