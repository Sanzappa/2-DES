import {View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Segunda({navigation}){
    const produtos = [
        {
            "nomeProd":"Detergente",
            "preco":1.75,
            "descricao":{
                "marca":"Ype",
                "sabor":"Morte"
            }
        },
        {
            "nomeProd":"Sabão em Barra",
            "preco":3.50,
            "descricao":{
                "marca":"Ype",
                "sabor":"Coco"
            }
        }
    ]

    return(
        <View>
            {
                produtos.map((produto, indice) => {
                    return(
                        <TouchableOpacity onPress={() => {navigation.navigate("Descricao", {"descricao":produto.descricao})}}>
                            <Text>{produto.nomeProd}</Text>
                            <Text>R$ {produto.preco}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}