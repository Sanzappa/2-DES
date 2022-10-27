import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './src/pages/home';
import pergunta1 from './src/pages/pergunta1';
import pergunta2 from './src/pages/pergunta2';
import pergunta3 from './src/pages/pergunta3';
import pergunta4 from './src/pages/pergunta4';
import pergunta5 from './src/pages/pergunta5';
import resultado from './src/pages/Resultado';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Pergunta 1" component={pergunta1} />
        <Stack.Screen name="Pergunta 2" component={pergunta2} />
        <Stack.Screen name="Pergunta 3" component={pergunta3} />
        <Stack.Screen name="Pergunta 4" component={pergunta4} />
        <Stack.Screen name="Pergunta 5" component={pergunta5} />
        <Stack.Screen name="Resultado" component={resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}