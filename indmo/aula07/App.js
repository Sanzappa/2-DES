import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [sal, setSal] = useState("")
  const [info, setInfo] = useState("");
  const [lida, setLida] = useState("");

  const salvar = async () =>{
    try{
      await AsyncStorage.setItem("nome", nome)
      await AsyncStorage.setItem("cargo", cargo)
      await AsyncStorage.setItem("sal", sal)
      setInfo("")
    }catch(err){
      console.log(err)
    }
  }

  const ler = async () =>{
    try{
      const jsonValue = await AsyncStorage.getItem('data')
      var valores = jsonValue != null ? JSON.parse(jsonValue) : null
      setLida(
        <View>
          <Text>Nome: {valores.nome}</Text>
          <Text>Cargo: {valores.cargo}</Text>
          <Text>Salario: {valores.sal}</Text>
        </View>
      )
    }catch(err){
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={(val) => { setNome(val) }} />
      <Text>Cargo:</Text>
      <TextInput value={cargo} onChangeText={(val) => { setCargo(val) }} />
      <Text>Salario:</Text>
      <TextInput value={sal} onChangeText={(val) => { setSal(val) }} />
      <Button title="Salvar" onPress={() => {salvar() }}/>
      <Button title="Ler" onPress={() => {ler()}}/>
      <Text>{lida}</Text>
    </View>
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
