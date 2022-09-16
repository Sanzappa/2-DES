import {View, Text} from 'react-native';

export default function Descricao({ route }) {
    var {descricao} = route.params;

    return(
        <View>
            <Text>{descricao.marca}</Text>
            <Text>{descricao.sabor}</Text>
        </View>
    )
}