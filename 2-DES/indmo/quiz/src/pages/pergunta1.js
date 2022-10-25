import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

    const [value, setValue] = React.useState('');

    var resp = []
    function saveData() {
        resp .push(value)
        AsyncStorage.setItem('Pergunta', JSON.stringify(resp));
    }

  return (
    <View style={styles.main}>
        <Text style={styles.text}>O que o sonic é?</Text>
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item color='#71DFBE' style={{flexDirection: 'row-reverse'}} label="Ouriço" labelStyle={styles.butao} value="v" />
                <RadioButton.Item color='#71DFBE' style={{flexDirection: 'row-reverse'}} value="f" label="Pangolim" labelStyle={styles.butao}/>
        </RadioButton.Group>
        <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate("Pergunta 2"); saveData()}}><Text>Proxima Pergunta</Text></TouchableOpacity>
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