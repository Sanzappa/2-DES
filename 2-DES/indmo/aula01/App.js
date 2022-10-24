import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button} from 'react-native';

export default function App() {
  const usuarios = [
    {
      nome: "Fulano",
      cargo: "Gerente",
      perfil: "https://safetec.com.br/wp-content/uploads/2016/11/gerente-de-vendas.jpg"
    },
    {
      nome: "Beltrano",
      cargo: "Funcionario",
      perfil: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3140837:1632692765/Funcionario-da-cadeirada-em-homem-durante-assalto-em-padaria-de-Porto-Velho-Rondonia.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=5fd6fa5"
    },
    {
      nome: "Tobias",
      cargo: "Zelador",
      perfil: "https://www.solidacondominios.com.br/wp-content/uploads/2017/06/02.png"
    }
  ]

 
  return(
    <View style={style.container}>
      {
        
    usuarios.map(usuario =>{
        return(
          <View style={style.container}>
            <View style={style.card}>
              <Image source={{uri: usuario.perfil}} style={style.img}/>
              <Text>{usuario.nome}</Text>
              <Text>{usuario.cargo}</Text>
            </View>
          </View>
        )
    })
  }
    </View>
  )
  
      
      
 
// const imgXaropin = require('./assets/xaropinho.png')
// const trashIcon = require('./assets/lixo.png')
//     <View style={style.container}>
//       <View style={style.primeira}>
//       <Text>Bem vindo, {usuarios[2].nome}</Text>
//       <TextInput style={style.input} placeholder="Email"/>
//       <Button title="Cadastrar"/>
//       <TouchableOpacity>
//         <Image style={{width: '32px', height: '32px'}} source={trashIcon}/>
//         <Text>Apagar Texto</Text>
//       </TouchableOpacity>
//       {
//         usuarios.map(usuario =>{
//           return(
//             <Text>{usuario.nome}</Text>
//           )
//         })
//       }
//       </View>
//       {/* <View style={style.segunda}>
//       <Text>SECUNDARY OMG</Text> */}
//       <Image source={{uri: 'https://pbs.twimg.com/media/Egttig1X0AAGWau.jpg'}} style={{ width: 400, height: 300 }}/>
//       <Image source={imgXaropin} style={{ width: 400, height: 500 }}/>
//       </View>
//     // </View>
 }

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },

  card:{
    backgroundColor: '#F1D2E7',
    padding: 25,
    flex: 1,
    marginTop: 60,
    maxHeight: 80,
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 60
  },
  primeira:{
    flex: 1,
    backgroundColor: '#F1D2E7'
  },
  segunda: {
    flex: 1,
    backgroundColor: '#E2F5C8'
  },
  input:{
    border: '1px solid gray',
  },
  img:{
    height: '60px',
    width: '60px',
    borderRadius: 50,
  }

});