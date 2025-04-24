// npm imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// local imports
import Shop from '../../screens/Shop';
import Explore from '../../screens/Explore';
import Cart from '../../screens/Cart';
import Favorite from '../../screens/Favorite';
import Account from '../../screens/Account';


export type RootStackParamsApp = {
    Shop: {},
    Explore: {},
    Cart: {},
    Favorite: {},
    Account: {},
}

const Stack = createBottomTabNavigator<RootStackParamsApp>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="Shop"
    >
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Account" component={Account} />

    </Stack.Navigator>
  );
}

export default AppStack;
