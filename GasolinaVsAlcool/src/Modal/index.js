import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Button } from 'react-native';
export default function GasVsAlcool(props) {
  function calcWorth(){
    let result = Number(props.alcool) / Number(props.gas)
    if(result < 0.7)
      return 'Álcool'
    else
      return 'Gasolina'
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/gas.png')}
        style={styles.img}
      />
      <Text style={styles.greenText}>
        Compensa usar {calcWorth()}
      </Text>
      <View style={styles.containerText}>
        <Text style={[styles.textBold, styles.text]}>Com os preços:</Text>
        <Text style={styles.text}>Álcool: R$ {Number(props.alcool).toFixed(2)}</Text>
        <Text style={styles.text}>Gasolina: R$ {Number(props.gas).toFixed(2)}</Text>
      </View>
      <TouchableOpacity 
        style={{flexDirection: 'row'}}
        onPress={props.close}
      >
        <View style={styles.input}>
          <Text style={[styles.text, styles.textRed]}>Calcular novamente</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#282424',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    height: 168,
    width: 168,
    marginBottom: 20
  },
  greenText:{
    color: '#30ef5a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  containerText:{
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: 'white',
    fontSize: 22,
    padding: 2
  },
  textBold:{
    fontWeight: 'bold'
  },
  input:{
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#f04434',
    padding: 15,
    alignItems: 'center'
  },
  textRed:{
    color: '#f04434',
  }
})