import React, { useState, createContext, useContext, useEffect } from 'react'
import { LogBox } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../services/firebaseConnection'
export const AuthContext = createContext({})

LogBox.ignoreAllLogs(true)

function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    async function getUser(){
      await AsyncStorage.getItem('auth_user')
      .then((value)=>{
        let dataUser = JSON.parse(value)
        setUser(dataUser)
      })
      .catch((err)=>{
        console.log('Async Storage error ' + err.code)
      })
    }
    getUser()
  },[])

  async function storageUser(data){
    await AsyncStorage.setItem('auth_user', JSON.stringify(data))
    .then(()=>{
      
    })
    .catch((err)=>{
      console.log('Async Storage error ' + err.code)
    })
  }

  async function signUp(email, password, name){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value)=>{
      let uid = value.user.uid
      await firebase.database().ref('users').child(uid).set({
        name: name,
        balance: 0
      })
      .then(async (value)=>{
        let data={
          name: name,
          email: email,
          uid: uid
        }
        setUser(data)
        storageUser(data)
      })
      .catch((err)=>{
        console('Firebase error ' + err.code)
      })
    })
    .catch((err) =>{
      console('Auth error ' + err.code)
    })
  }

  async function signIn(email, password){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid
      await firebase.database().ref('users').child(uid).once('value')
      .then(async (snapshot)=>{
        let data={
          uid: uid,
          name: snapshot.val().name,
          email: value.user.email,
        }
        storageUser(data)
        setUser(data)
      })
      .catch((err)=>{
        console('Firebase error ' + err.code)
      })
    })
    .catch((err) =>{
      console('Auth error ' + err.code)
    })
  }

  return(
    <AuthContext.Provider value={{signed: !!user, user, signUp, signIn}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider