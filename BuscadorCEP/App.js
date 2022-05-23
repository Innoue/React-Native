import { useState, useRef } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('')
  const [cepUser, setCepUser] = useState(null)
  const refInput = useRef()

  function clear(){
    setCep('')
    setCepUser(null)
    refInput.current.focus()
  }

  async function search(){
    if(cep == ''){
      alert('Preencha o CEP')
      return
    }

    try {
      const response = await api.get(cep + '/json')
      setCepUser(response.data)
      Keyboard.dismiss()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaInput}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 06364550"
          onChangeText={(text) => setCep(text)}
          keyboardType='numeric'
          value={cep}
          ref={refInput}
        />
        <View style={styles.areaBtn}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#1d75cd' }]}
            onPress={search}
            >
            <Text style={styles.btnText}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, {backgroundColor: '#cd3e1d' }]}
            onPress={clear}
            >
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {cepUser && 
        <View style={styles.areaResult}>
          <Text style={styles.textResult}>CEP: {cepUser.cep}</Text>
          <Text style={styles.textResult}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.textResult}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.textResult}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.textResult}>Estado: {cepUser.uf}</Text>
        </View>
      }
      
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
  areaInput:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 30
  },
  input:{
    marginTop: 15,
    width: '80%',
    backgroundColor: '#DDD',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius:5,
    height: 50,
    fontSize: 22,
    padding: 10
  },
  areaBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    padding: 10,
    borderRadius: 5
  },
  btnText: {
    fontSize: 22,
    color: '#FFF'
  },
  areaResult:{
    marginTop: 50,
    alignItems:'center',
    justifyContent: 'center'
  },
  textResult:{
    fontSize: 20
  }


});
