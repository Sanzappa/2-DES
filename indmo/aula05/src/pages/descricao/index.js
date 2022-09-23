import { Image, StyleSheet, Text, View } from 'react-native';

import styles from './style.js'

export default function Descricao({ route, navigation }) {
    const data = [
        {
            "id_compromisso": 1,
            "descricao":"- Entrega da Atividade.\n- Matéria Nova.",
            "observacoes":"",
        },
        {
            "id_compromisso": 4,
            "descricao":"",
            "observacoes":"Não esquecer a carteirinha !!!",
        },
        {
            "id_compromisso": 3,
            "descricao":"- Pão.\n- Presunto.\n- Queijo.",
            "observacoes":"Ver se o sabão está em promoção e levar uma caixa.",
        },
        {
            "id_compromisso": 2,
            "descricao":"Consulta de retorno.",
            "observacoes":"Levar os exames.",
        },
    ]
    
const {id} = route.params;
var compromisso;
data.forEach(comp =>{
    if (id == comp.id_compromisso){
        compromisso = comp
    }
})

    return(
        <View style={styles.v} >
            <Text style={styles.text} >Descricao:</Text>
            <Text style={styles.text} >{compromisso.descricao}</Text>
            <Text style={styles.text} >Observacoes:</Text>
            <Text style={styles.text} >{compromisso.observacoes}</Text>
        </View>
    );
}