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

function App(): React.JSX.Element {
  return (
      <UIProvider>
        <StackNavigator />
      </UIProvider>
  );
}


export default App;
