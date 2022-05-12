import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import List from './src/Lista';

export default function App() {

  const [feed, setFeed] = useState(
    [
      {
        id: '1', 
        nome: 'Lucas Silva', 
        descricao: 'Mais um dia de muitos bugs :)', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
        likeada: false, 
        likers: 0
       },
      {
        id: '2', 
        nome: 'Matheus', 
        descricao: 'Isso sim é ser raiz!!!!!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
        likeada: false, 
        likers: 0
      },
      {
        id: '3', 
        nome: 'Jose Augusto', 
        descricao: 'Bora trabalhar Haha', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
        likeada: false, 
        likers: 3
      },
      {
        id: '4', 
        nome: 'Gustavo Henrique', 
        descricao: 'Isso sim que é TI!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
        likeada: false, 
        likers: 1
      },
      {
        id: '5', 
        nome: 'Guilherme', 
        descricao: 'Boa tarde galera do insta...', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
        likeada: false, 
        likers: 32
      }
    ]
  )

  return (
    <SafeAreaView style={[styles.AndroidSafeArea, styles.container]}>
      <View style={styles.header}>
        <TouchableOpacity>  
          <Image 
            source={require('./src/img/logo.png')}
            style={styles.logo}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('./src/img/send.png')}
            style={styles.send}/>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({item}) => <List data={item} /> }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    padding: 10,
    paddingVertical: 20,
    // elevation: 1,
    borderBottomWidth: 0.2,
    borderTopColor: null,
    shadowColor: '#000'

  },
  logo:{
    
  },
  send:{
    width: 25,
    height: 25
  }
});
