import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,  Pressable } from 'react-native';

class MyApp extends Component {
  state = {
    nome: null,
    peso: null,
    altura: null,
    imcFinal:null,
    situacaoFinal: null
  };

  getIMC(){
    let situacao = ""
    let imc = parseFloat(this.state.peso) / (parseFloat(this.state.altura)*parseFloat(this.state.altura))

    if (imc < 20){
      situacao = "Abaixo do peso"
    }else if(imc >= 20 && imc <= 25){
      situacao = "Peso normal"
    } else if (imc >= 25 && imc <= 30){
      situacao = "Sobre Peso"
    }else if (imc >= 30 && imc <= 35){
      situacao = "Obeso"
    }else{
      situacao = "Obeso mórbido"
    }
    this.setState({imcFinal: imc.toFixed(1).toString(), situacaoFinal: situacao.toString()})
  }

  clear(){
    console.log("Here")
    this.setState({
      nome: "",
      peso: "",
      altura: "",
      imcFinal:"",
      situacaoFinal: ""
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(nome) => this.setState({nome})}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          onChangeText={(peso) => this.setState({peso})}
          placeholder="Peso"
          keyboardType= "numeric"
          />
        <TextInput
          style={styles.input}
          onChangeText={(altura) => this.setState({altura})}
          placeholder="Altura"
          keyboardType= "numeric"
        />
        <Text style={styles.input}>
          IMC: {this.state.imcFinal}
        </Text>
        <Text style={styles.input}>
          Situação: {this.state.situacaoFinal}
        </Text>
        <Pressable        
          style={styles.button}
          onPress={() => this.clear()}>
          <Text>Limpar</Text>
        </Pressable>
        <Pressable 
          style={styles.button}
          onPress={() => this.getIMC()}
        >
          <Text>Calcular IMC</Text>
        </Pressable>
      </View>
    );
  }
}
export default MyApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    borderRadius:8,
    padding: 10,
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    margin: 10,
    backgroundColor: 'purple',
    height: 50,
    width: '80%',
  },
});
