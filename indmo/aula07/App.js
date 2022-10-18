import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';
import Carrinho from './src/pages/carrinho/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pizzas" component={Home} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}