import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../screens/OnBoarding';
import SingIn from '../../screens/SingIn';
import Number from '../../screens/Number';
import Verification from '../../screens/Verification';

const Stack = createStackNavigator();

function StackLoginModule() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false, animation: 'none'}} />
      <Stack.Screen name="SingIn" component={SingIn} options={{headerShown: false}} />
      <Stack.Screen name="Number" component={Number} options={{headerShown: false, animation: 'none'}} />
      <Stack.Screen name="Verification" component={Verification} options={{headerShown: false, animation: 'none'}} />
    </Stack.Navigator>
  );
}

export default StackLoginModule;
