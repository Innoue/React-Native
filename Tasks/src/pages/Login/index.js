import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../services/firebaseConnection"

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  async function login(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value) =>{
      alert(value.user.uid)
      navigation.navigate('Home')
      setEmail('')
      setPassword('')
    })
    .catch((err) => {
      alert("Aconteceu algum erro, tente novamente" )
      setPassword('')
      console.log(err)
    })

  }

  function goToCadastro(){
    navigation.navigate('Cadastro',{email: email})
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        underlineColorAndroid="transparent"
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
        value={email}
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="*********"
        underlineColorAndroid="transparent"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity 
          style={styles.handleLogin}
          onPress={login}
        >
          <Text style={styles.textBtn}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToCadastro}>
          <Text style={{textAlign: 'center', fontSize: 20, marginTop: 15}}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  text:{
    fontSize: 22
  },
  input:{
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#171614',
    borderRadius: 5,
    backgroundColor: '#FFF',
    height: 50
  },
  handleLogin:{
    marginTop: 10,
    backgroundColor: '#52a6bf',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10
  },
  textBtn:{
    textAlign: 'center',
    color: '#FFF',
    fontSize: 22
  },
  
});
