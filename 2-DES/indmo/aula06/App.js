import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/pages/login/index.js';
//import home from './src/pages/home/index.js';

const Stack = createNativeStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={home}/> */}
        <Stack.Screen name="Login" component={login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}