import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect, useState } from 'react';


export default function App() {

  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    listarPedidos()
  }, [])

  const listarPedidos = () => {
    fetch('')
  }

  return (
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
