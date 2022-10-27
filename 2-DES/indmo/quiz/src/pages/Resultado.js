import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import {  useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

    const [value, setValue] = React.useState('');

    var resp
    var re = []
    const ler = async () => {
        try {
            const data = await AsyncStorage.getItem('Pergunta')
            var d = data != null ? JSON.parse(data) : null
            resp = d

            resp.forEach(r => {
                if (r == "v") {
                    re.push(r)
                    setValue(re.length)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        ler()
    },[])


  return (
    <View style={styles.main}>
        <Text style={styles.text}>Seu Resultado</Text>
        <View>
                <View>
                    <Text style={styles.text} >Você acertou: {value}</Text>
                </View>
            </View>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Home")}><Text>Retornar a Home</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#1D1F20',
        color: 'black',
    },
    text: {
        fontSize: 40,
        color: '#71DFBE',
    },
    butao: {
        color: '#fff',
        flexDirection: 'row-reverse'
    },
    botao: {
        marginTop: 100,
        borderColor: '#71DFBE',
        borderWidth: 2,
        padding: 20,
        backgroundColor: '#71DFBE',
        fontSize: '10'
    }
})