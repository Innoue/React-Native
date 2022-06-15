import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { 
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText 
} from '../SignIn/styles'

export default function SignUp(){
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigation = useNavigation()
  const { signUp } = useContext(AuthContext)

  function handleSignUp(){
    signUp(email, password, name)
  }
  

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize='none'
            value={name}
            onChangeText={(text)=> setName(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(text)=> setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            value={password}
            onChangeText={(text)=> setPassword(text)}
          />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}