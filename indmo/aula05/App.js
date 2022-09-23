import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import compromissos from './src/pages/compromissos/index.js';
import descricao from './src/pages/descricao/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Compromissos" component={compromissos} />
        <Stack.Screen name="Descricao" component={descricao}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}