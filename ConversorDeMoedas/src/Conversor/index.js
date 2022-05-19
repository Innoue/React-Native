import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Conversor(props) {
  const [currencyA, setCurrencyA] = useState(props.currencyA)
  const [currencyB, setCurrencyB] = useState(props.currencyB)
  const [currency, setCurrency] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currencyA} para {currencyB}</Text>
      <TextInput
        onChangeText={text => setCurrency(text)}
        value={currency.toString()}
        keyboardType='numeric'
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Resultado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5
  },
  input:{
    borderWidth: 0.7,
    backgroundColor: '#aeb1b5',
    width: 150,
    borderRadius: 10,
    margin: 5,
    textAlign:'center',
    height: 40,
    fontSize: 20
  },
  btn:{
    margin: 5,
    backgroundColor: '#c74e64',
    padding: 10,
    borderRadius: 10
  },
  btnText:{
    color: 'white'
  },
  result:{
    margin: 5,
    fontSize: 35,
    fontWeight: 'bold'
  }
});
