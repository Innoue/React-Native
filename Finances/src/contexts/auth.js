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
        setUser({
          name: name,
          email: email,
          uid: uid
        })
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
    <AuthContext.Provider value={{signed: !!user, user, signUp}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider