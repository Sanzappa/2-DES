import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function canceladas({ route }) {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        listarTarefas();
    }, [])

    const listarTarefas = () => {
        fetch("http://localhost:5000/listarCancelada")
        .then(response => {return response.json();})
        .then(data => {
            setTarefas(data);
        })
    }

    const finalizarTarefa = (id) => {
        fetch("http://localhost:5000/updateCancelada",{
            "method":"PUT",
        })
        .then(response => {
            if(response.status === 200) {
                listarTarefas();
            }else {
                console.log(response.status);
            }
        })
    }

    return(
        <View style={styles.v} >
            <Text style={styles.text} >Tarefas Canceladas</Text>
            {
                tarefas.map((tarefa, index) => {
                    return (
                        <View style={styles.tarefa} key={index}>
                            <View style={styles.tarefaL} >
                            <Text style={styles.info}>Descrição : {tarefa.descricao}</Text>
                            <Text style={styles.info}>Horario da Tarefa : {tarefa.horario_tarefa}</Text>
                            <Text style={styles.info}>Horario do Fim da Tarefa : {tarefa.horario_encerramento}</Text>
                            <Text style={styles.info}>Status : {tarefa.status_tarefa}</Text>
                            <View style={styles.viBTN}>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viBTN :{
        display: "flex",
        flexDirection: "row",
        gap: "30px"
    },
    v: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#505050",
        width: "100%",
        flex: 1,
        padding: 20
    },
    sv: {
        height: "100%",
        backgroundColor: "#46589c",
        width: "100%",
    },
    btn: {
        height: 40,
        width: 70,
        backgroundColor: "#e53f86",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "Black",
        borderWidth: "1px",
        borderRadius: "10px"
    },
    te: {
        fontSize: "10pt"
    },
    tarefa: {
        width: "100%",
        height: "200px",
        backgroundColor: "#46589c",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: "20px",
        alignItems: "center",
        borderRadius: "10px",
        marginBottom: "30px"
    },
    tarefaL: {
        maxWidth: "78%"
    },
    info: {
        fontSize: "13pt",
        fontWeight: "bold",
        color: "#fff"
    },
    infoP: {
        fontSize: "11pt",
        fontWeight: "normal",
        color: "#000"
    },
    text: {
        fontSize: "30pt",
        color: "#fff"
    }

});