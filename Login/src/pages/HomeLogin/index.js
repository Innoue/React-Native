import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import firebase from '../../firebaseConnection'

export default function HomeLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  const navigation = useNavigation()

  async function signIn(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value) => {
      setUser(value.user.email)
      navigation.navigate('Home', {email: email})
    })
    .catch((error) =>{
      alert('Erro')
      console.log(error)
      return
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: teste@teste.com"
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
        value={email}
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={signIn}
        >
        <Text style={styles.btnText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{marginTop: 15}}
        onPress={()=>{navigation.navigate('Register')}}
        >
        <Text style={[styles.text, {fontSize: 20}]}>Não possue login? Cadastre-se</Text>
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
  input:{
    marginVertical: 15,
    width: '90%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius:5,
    height: 50,
    fontSize: 22,
    padding: 10
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#386894' 
  },
  btnText: {
    fontSize: 22,
    color: '#FFF'
  },
});