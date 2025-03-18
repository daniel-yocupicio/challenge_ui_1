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
import SingInProvider from './src/Context/SingInContext';

function App(): React.JSX.Element {

  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} animated={true} />
      <SingInProvider>
        <StackNavigator />
      </SingInProvider>
    </>
  );
}


export default App;
