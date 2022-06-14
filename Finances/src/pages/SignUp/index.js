import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigation = useNavigation()

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize='none'
            value={nome}
            onChangeText={(text)=> setNome(text)}
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
        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}