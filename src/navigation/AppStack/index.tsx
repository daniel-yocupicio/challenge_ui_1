// npm imports
import { createStackNavigator } from '@react-navigation/stack';

// local imports
import Home from '../../screens/Home';


export type RootStackParamsApp = {
    Home: {},
}

const Stack = createStackNavigator<RootStackParamsApp>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        cardStyle: {backgroundColor: 'transparent'},
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppStack;
