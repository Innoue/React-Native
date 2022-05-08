import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [sourceImage, setSourceImage] = useState(require('./src/biscoito.png'));
  const [text, setText] = useState('');
  const listPhrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'
  ]
  const open = () =>{
    setSourceImage(require('./src/biscoitoAberto.png'))
    let random = Math.floor(Math.random() * (listPhrases.length))
    setText('" ' + listPhrases[random] + ' "')
  }

  const returnImage = () =>{
    setSourceImage(require('./src/biscoito.png'))
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={returnImage}
        >
        <Image
          source={sourceImage}
          style={styles.image}/>
      </TouchableOpacity>
      
      <View style={styles.textArea}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btnArea}
        onPress={open}
        >
        <Text style={styles.btnText}>
          Quebrar o biscoito
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 250,
    height: 250,
  },
  textArea:{
    padding: 10,
    marginTop: 10,
  },
  text:{
    color: 'orange',
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  btnArea:{
    borderColor:'orange',
    borderWidth: 3,
    padding: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  btnText:{
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
