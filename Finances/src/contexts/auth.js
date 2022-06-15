import React, { useState, createContext, useContext } from 'react'

export const AuthContext = createContext({})

function AuthProvider({ children }){
  const [user, setUser] = useState({
    name: 'teste',
    uid: 12312312321
  })
  return(
    <AuthContext.Provider value={{user}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider