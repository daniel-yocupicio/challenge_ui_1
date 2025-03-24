import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../screens/OnBoarding';
import SingIn from '../../screens/SingIn';
import Number from '../../screens/Number';
import Verification from '../../screens/Verification';
import SelectLocation from '../../screens/SelectLocation';
import { Text, TouchableOpacity, View } from 'react-native';
import { useContext, useEffect } from 'react';
import { UIContext } from '../../Context/UIContext/UIContext';

const Stack = createStackNavigator();

function StackLoginModule() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        cardStyle: {backgroundColor: 'transparent'},
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
}

//<Stack.Screen name="Demo" component={DemoScreen} options={{cardStyle: {backgroundColor: 'transparent'}}} />

export default StackLoginModule;

/*
const DemoScreen = () => {
  const {showBackground1, hideBackground1, showBackground2, hideBackground2, showBlurBackground2, hideBlurBackground2} = useContext(UIContext);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'transparent'}}>
      <Text style={{color: 'white'}}>Demo Screen</Text>
      <Text style={{color: '#000000'}}>Demo Screen</Text>

      <TouchableOpacity onPress={showBackground1}>
        <Text>show bg</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={hideBackground1}>
        <Text>hide bg</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showBackground2}>
        <Text>show bg2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={hideBackground2}>
        <Text>hide bg2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showBlurBackground2}>
        <Text>show BLUR bg2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={hideBlurBackground2}>
        <Text>hide BLUR bg2</Text>
      </TouchableOpacity>
    </View>
  );
};
*/

/*

*/
