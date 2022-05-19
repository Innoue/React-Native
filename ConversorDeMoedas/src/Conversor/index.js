import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';

export default function Conversor(props) {
  const [currency, setCurrency] = useState('')
  const [result, setResult] = useState('')
  

  async function convert(){
    let currencyRequest = props.currencyA + '_' + props.currencyB
    const response = await api.get('convert?q=' +  currencyRequest + '&compact=ultra&apiKey=1db6265c78f03ddac2db')
    let value = parseFloat(response.data[currencyRequest]) * currency
    setResult(value)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.currencyA} para {props.currencyB}</Text>
      <TextInput
        onChangeText={text => setCurrency(text)}
        value={currency.toString()}
        keyboardType='numeric'
        style={styles.input}
      />
      <TouchableOpacity 
        style={styles.btn}
        onPress={convert}
      >
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{Number(result).toFixed(2)}</Text>
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
    paddingHorizontal: 30,
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
