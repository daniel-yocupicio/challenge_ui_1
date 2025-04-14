// npm imports
import { createStackNavigator } from '@react-navigation/stack';

// local imports
import Home from '../../screens/Home';
import { useNavigation } from '@react-navigation/native';


export type RootStackParamsApp = {
    Home: {},
}

const Stack = createStackNavigator<RootStackParamsApp>();

function AppStack() {
  console.log('appstack');
  const navigation = useNavigation();

  console.log(navigation.getState());

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        cardStyle: {backgroundColor: 'transparent'},
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppStack;
