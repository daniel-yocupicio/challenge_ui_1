import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../screens/OnBoarding';
import SingIn from '../../screens/SingIn';
import Number from '../../screens/Number';
import Verification from '../../screens/Verification';
import SelectLocation from '../../screens/SelectLocation';

const Stack = createStackNavigator();

function StackLoginModule() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
    </Stack.Navigator>
  );
}

export default StackLoginModule;
