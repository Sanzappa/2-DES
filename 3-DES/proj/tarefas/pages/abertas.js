import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';

export default function Abertas({ route }) {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        listarTarefas();
    }, [])

    const listarTarefas = () => {
        fetch("http://localhost:5000/listarAberta")
            .then(response => { return response.json(); })
            .then(data => {
                setTarefas(data);
            })
    }

    const finalizarTarefa = (id) => {

        console.log(id)

        const date = new Date();
        var time

        if (date.getHours() < 10) {
            time = '0' + date.getHours() + ":" + date.getMinutes()
        } else {
            time = date.getHours() + ":" + date.getMinutes()
        }

        var tarefa = {
            "id_tarefa": id,
            "horario_encerramento": time,
            "status_tarefa": "2 - Finalizada"
        }

        fetch("http://localhost:5000/updateFinalizada", {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(tarefa)
        })
            .then(response => {
                if (response !== undefined) {
                    window.location.reload()
                }

            })
    }

    const cancelarTarefa = (id) => {

        console.log(id)

        const date = new Date();
        var time

        if (date.getHours() < 10) {
            time = '0' + date.getHours() + ":" + date.getMinutes()
        } else {
            time = date.getHours() + ":" + date.getMinutes()
        }

        var tarefa = {
            "id_tarefa": id,
            "horario_encerramento": time,
            "status_tarefa": "3 - Cancelada"
        }

        fetch("http://localhost:5000/updateFinalizada", {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(tarefa)
        })
            .then(response => {
                if (response !== undefined) {
                    window.location.reload()
                }

            })
    }

    return (
        <View style={styles.v} >
            <ScrollView>
                <Text style={styles.text} >Tarefas</Text>
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
                                        <TouchableOpacity style={styles.btn} onPress={() => {
                                            finalizarTarefa(tarefa.id_tarefa)
                                        }}>
                                            <Text>Finalizar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={() => {
                                            cancelarTarefa(tarefa.id_tarefa)
                                        }}>
                                            <Text>Cancelar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    viBTN: {
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
