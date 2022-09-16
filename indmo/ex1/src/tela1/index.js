import {View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Restaurantes({navigation}){
    const restaurante = [
        {
            "nomeRest":"Detergente",
            "nota":"4",
            "descricao":{
                "marca":"Ype",
                "sabor":"Morte"
            }
        },
        {
            "nomeRest":"Sabão em Barra",
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
                restaurante.map((restaurante, indice) => {
                    return(
                        <TouchableOpacity onPress={() => {navigation.navigate("Descricao", {"descricao":produto.descricao})}}>
                            <Text>{restaurante.nomeRest}</Text>
                            <Text>R$ {restaurante.preco}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}