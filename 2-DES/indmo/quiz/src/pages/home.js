import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }) {

  return (
    <View style={styles.main}>
        <Text style={styles.text}>Quiz Random</Text>
        <TouchableOpacity style={styles.butao} onPress={() => navigation.navigate("Pergunta 1")}><Text>Primeira Pergunta</Text></TouchableOpacity>
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
    butao: {
        marginTop: 100,
        borderColor: '#71DFBE',
        borderWidth: 2,
        padding: 20,
        backgroundColor: '#71DFBE',
        fontSize: '10'
    },
    text: {
        fontSize: 40,
        color: '#71DFBE',
    }
})