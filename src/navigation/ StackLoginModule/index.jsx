import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../screens/OnBoarding';
import SingIn from '../../screens/SingIn';
import Number from '../../screens/Number';
import Verification from '../../screens/Verification';
import SelectLocation from '../../screens/SelectLocation';
import CustomHeader from '../../components/CustomHeader';

const Stack = createStackNavigator();

function StackLoginModule() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'none',
        cardStyle: {backgroundColor: 'transparent'},
        header: (props) => <CustomHeader {...props} />,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="Number" component={Number} options={{headerShown: true}} />
      <Stack.Screen name="Verification" component={Verification} options={{headerShown: true}} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} options={{headerShown: true}} />
    </Stack.Navigator>
  );
}

export default StackLoginModule;
