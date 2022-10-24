import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }) {

    const produtos = [
        {
            "nomeRes": "Divinao",
            "avaliacao": 4.4,
            "descricao": {
                "img": "https://files.menudino.com/cardapios/43722/logo.png",
                "endereco": "Pedreira",
                "telefone": "19989030956"
            }
        },
        {
            "nomeRes": "Mustache",
            "avaliacao": 4.9,
            "descricao": {
                "img": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
                "endereco": "Jaguariuna",
                "telefone": "19995778086"
            }
        },
        {
            "nomeRes": "La casona",
            "avaliacao": 3.5,
            "descricao": {
                "img": "https://wedologos.bladecdn.net/wp-content/uploads/2016/01/logo-restaurante-9.jpg",
                "endereco": "São Paulo",
                "telefone": "19999310990"
            }
        }
    ]

    return (
        <View style={styles.v}>
            {
                produtos.map((produto, indice) => {
                    return (
                        <TouchableOpacity style={styles.infoRes} key={indice} onPress={() => { navigation.navigate("Segunda", { "descricao": produto }) }}>
                            <Text style={styles.text}>{produto.nomeRes}</Text>
                            <Text style={styles.text}>
                                {produto.avaliacao}
                                <Image
                                    style={styles.estrelinha}
                                    source={{
                                        uri: "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
                                    }}
                                />
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    v: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#8470ff"
    },
    estrelinha: {
        width: 15,
        height: 15
    },
    infoRes: {
        height: 60,
        width: 250,
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-around",
        backgroundColor: "#fff",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#fff"
    },
    text: {
        fontSize: 30
    }
});