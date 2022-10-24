import {TouchableOpacity, Text} from 'react-native';

import styles from './style';

export default function ButtonFinComp(props) {
    const { value, onPress } = props;

    return(
        <TouchableOpacity style={styles.button} onPress={()=>{onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}

// import ButtonFinComp from '../../components/buttonFinComp/index';
// <ButtonCadastrar value="Finalizar Compromisso" onPress={funcao}/>