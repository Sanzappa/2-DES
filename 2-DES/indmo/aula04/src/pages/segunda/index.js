import { Image, StyleSheet, Text, View } from 'react-native';

export default function Segunda({ route, navigation }) {
    var { descricao } = route.params
    navigation.setOptions({"title": descricao.nomeRes})
    return (
        <View style={styles.v}>
            <View style={styles.v2}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: descricao.descricao.img,
                    }}
                />
                <View style={styles.infoT}>
                    <Text style={styles.info}> {descricao.descricao.endereco} </Text>
                    <Text style={styles.info}> {descricao.descricao.telefone} </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    v: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 80,
        backgroundColor: "#8470ff"
    },
    v2: {
        height: "50%",
        width: "60%",
        borderWidth: 5,
        borderColor: "#fff",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    tinyLogo: {
        width: 200,
        height: 200,
        borderRadius: "100%"
    },
    infoT: {
        width: 200,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    info: {
        height: 20,
        width: 160,
        display: "flex",
        alignItems: "center",
        margin: 5
    }
});