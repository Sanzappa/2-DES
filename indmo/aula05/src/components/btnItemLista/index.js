import {TouchableOpacity, Text, Image, View} from 'react-native';

import styles from './style';

export default function BtnItemLista(props) {
    const { onPress, text1, text2, tipo } = props;
    var image
    if(tipo === 1)(
    image = require("../../../assets/medico.png")
    ); else if(tipo === 2)(
        image = require("../../../assets/escola.png")
    ); else if(tipo === 3)(
        image = require("../../../assets/mercado.png")
    ); else if(tipo ===4)(
        image = require("../../../assets/cinema.png")
    )
    return(
        <TouchableOpacity style={styles.v} onPress={()=>{onPress()}}>
            <View style={{height: 70, width: 70, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 50, backgroundColor: "#FFF", marginLeft: 10}}>
                <Image source={image} style={styles.imagem}/>
            </View>
               <View style={styles.bv}>
               <Text style={styles.text}>{text1}</Text>
               <Text style={styles.text}>{text2}</Text>
               </View>
        </TouchableOpacity>
    )
}