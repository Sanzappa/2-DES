import { useState, useSyncExternalStore } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet} from "react-native";

export default function App(){
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [res, setRes] = useState("");
  const [op, setOp] = useState("");

  const calcular = () => {
    if(op == "+"){
    setRes(Number(n1) + Number(n2));
    }else if(op == "-"){
      setRes(Number(n1) - Number(n2));
    }else if(op == "/"){
      setRes(Number(n1) / Number(n2));
    }else if(op == "*"){
      setRes(Number(n1) * Number(n2));
    }
  }

  return(
    <View style={style.container}>
      <TextInput placeholder="Primeiro numero" value={n1} onChangeText={(val) => { setN1(val);}}/>
      <TextInput placeholder="Segundo numero" value={n2} onChangeText={(val) => { setN2(val);}}></TextInput>
      <View style={style.icons}>
      <TouchableOpacity onPress={() => {setOp("+")}}>
      <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setOp("-")}}>
      <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setOp("/")}}>
      <Text>/</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setOp("*")}}>
      <Text>*</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {calcular()}}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      </View>
      <Text>{res}</Text>
    </View>
  );

}

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderBottomColor: 'black',
    borderBottomWidth: '4px',
    borderRightWidth: '4px',

  },
  icons:{
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10px',
    

  }
})
