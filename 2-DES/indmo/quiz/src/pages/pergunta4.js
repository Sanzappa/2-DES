import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

    const [value, setValue] = React.useState('');

    var resp 

    const ler = async () => {
        try {
            const data = await AsyncStorage.getItem('Pergunta')
            console.log(data)
            var d = data != null ? JSON.parse(data) : null
            resp = d
            resp.push(value)
            console.log(resp)
            AsyncStorage.setItem('Pergunta', JSON.stringify(resp));
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <View style={styles.main}>
        <Text style={styles.text}>O que o guilherme mais gosta?</Text>
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item color='#71DFBE' style={{flexDirection: 'row-reverse'}} label="Luiza" labelStyle={styles.butao} value="f" />
                <RadioButton.Item color='#71DFBE' style={{flexDirection: 'row-reverse'}} label="Sonegar imposto" labelStyle={styles.butao} value="v"/>
        </RadioButton.Group>
        <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate("Pergunta 5"); ler()}}><Text>Proxima Pergunta</Text></TouchableOpacity>
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