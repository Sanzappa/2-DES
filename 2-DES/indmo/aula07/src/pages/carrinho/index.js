import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import AddPizza from "../../components/btAdicionar/index";
import carrinho from "../../components/btCarrinho/index";

export default function Home({ navigation }) {


    const ler = async () => {
        try {
          const data = await AsyncStorage.getItem('data')
          console.log(data)
          var d = data != null ? JSON.parse(data) : null
          setLida(
            <View>
              <Text>{d.info1}</Text>
              <Text>{d.info2}</Text>
              <Text>{d.info3}</Text>
            </View>
          )
        } catch(err) {
          console.log(err)
        }
      }

      

  return (
    <View>
      <ScrollView>
        {pizzas.map((item, index) => {
          return <AddPizza key={index} pizza={item}></AddPizza>;
        })}
      </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Carrinho")} >Carrinho</TouchableOpacity>
    </View>
  );
}
