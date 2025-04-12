// npm imports
import { createStackNavigator } from '@react-navigation/stack';

// local imports
import SelectLocation from '../../screens/SelectLocation';
import CustomHeader from '../../components/CustomHeader';
import Verification from '../../screens/Verification';
import OnBoarding from '../../screens/OnBoarding';
import SingIn from '../../screens/SingIn';
import Number from '../../screens/Number';
import Login from '../../screens/Login';


export type RootStackParamsLogin = {
  OnBoarding: undefined,
  SingIn: undefined,
  Number: {y: number},
  Verification: undefined,
  SelectLocation: undefined,
  Login: undefined,
}

const Stack = createStackNavigator<RootStackParamsLogin>();

const renderHeader = () => {
  return (
    <CustomHeader />
  );
};

function StackLoginModule() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        cardStyle: {backgroundColor: 'transparent'},
        header: renderHeader,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="Number" component={Number} options={{headerShown: true}} />
      <Stack.Screen name="Verification" component={Verification} options={{headerShown: true}} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} options={{headerShown: true}} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default StackLoginModule;
