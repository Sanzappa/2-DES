import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import AddPizza from "../../components/btAdicionar/index";
import carrinho from "../../components/btCarrinho/index";

export default function Home({ navigation }) {

  const pizzas = [
    {
      id: 1,
      nome: "Calabresa",
      desc: "Mussarela e Calabresa",
      img: "https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
    },
    {
      id: 2,
      nome: "Holandesa",
      desc: "Mussarela, atum, requeijão e cebola",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/29/holandesa.jpg",
    },
    {
      id: 3,
      nome: "Italiana",
      desc: "Mussarela, salame italiano",
      img: "https://cdn1.intriper.com/wp-content/uploads/2020/06/19173148/italia-pizza-aurelien-lemasson-unsplash.jpg",
    },
    {
      id: 4,
      nome: "Bolonhesa",
      desc: "Mussarela e carne moída à bolonhesa",
      img: "https://i.ytimg.com/vi/mz-HOh-6ArU/maxresdefault.jpg"
    },
    {
      id: 5,
      nome: "Camponesa",
      desc: "Mussarela, bacon, tomate, milho e ovos",
      img: "https://pt.petitchef.com/imgupl/recipe/pizza-camponesa--165267p247532.jpg",
    },
    {
      id: 6,
      nome: "Brócolis c/ bacon",
      desc: "Mussarela, brócolis e bacon",
      img: "https://claudia.abril.com.br/wp-content/uploads/2020/02/pizza-brocolis-caboclo.jpg",
    },
    {
      id: 7,
      nome: "Canadense",
      desc: "Mussarela, lombo e champignon",
      img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-lombo-1-730x449.jpg",
    },
  ];

  const salvar = async () => {
    try {
      const p = JSON.stringify({pizzas})
      await AsyncStorage.setItem('pizzas', p)
      setInfo1("")
      setInfo2("")
      setInfo3("")
    } catch (err) {
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
        <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>Carrinho</TouchableOpacity>
    </View>
  );
}
