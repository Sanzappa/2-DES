import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './pages/abertas';
import finalizadas from './pages/finalizadas';
import canceladas from './pages/canceladas';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="inicio"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#3b2fa3' }}
    >
      <Tab.Screen
        name="inicio"
        component={Home}
        options={{
          tabBarLabel: 'Abertas',
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={26} name="home"/>
          ),
        }}
      />
      <Tab.Screen
        name="finalizadas"
        component={finalizadas}
        options={{
          tabBarLabel: 'Finalizadas',
          tabBarIcon: ({ color }) => (
            <Ionicons name="checkbox" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="canceladas"
        component={canceladas}
        options={{
          tabBarLabel: 'Canceladas',
          tabBarIcon: ({ color }) => (
            <Ionicons name="close" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}