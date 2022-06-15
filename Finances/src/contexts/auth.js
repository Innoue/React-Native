import React, { useState, createContext, useContext } from 'react'
import firebase from '../services/firebaseConnection'
export const AuthContext = createContext({})

function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  async function signUp(email, password, name){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value)=>{
      let uid = value.user.uid
      await firebase.database().ref('users').child(uid).set({
        name: name,
        balance: 0
      })
      .then((value)=>{
        let data={
          name: name,
          email: email,
          uid: uid
        }
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

  async function signIn(email, password){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid
      await firebase.database().ref('users').child(uid).once('value')
      .then((snapshot)=>{
        let data={
          uid: uid,
          name: snapshot.val().name,
          email: value.user.email,
        }
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