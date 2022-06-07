import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation, StackActions, useRoute } from '@react-navigation/native'
import firebase from '../../firebaseConnection'


export default function Home() {
  const [user, setUser] = useState('')

  const navigation = useNavigation()
  const route = useRoute()

  useEffect(()=>{
    setUser({email: route.params?.email})
  }, [])

  async function logout(){
    await firebase.auth().signOut();
    setUser('');
    // navigation.dispatch(StackActions.popToTop())
    navigation.navigate('HomeLogin')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja Bem vindo!</Text>
      <Text style={styles.text}>{user.email}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={logout}
        >
        <Text style={styles.btnText}>Deslogar</Text>
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