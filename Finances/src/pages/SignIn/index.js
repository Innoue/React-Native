import React, { useContext, useState } from "react";
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
} from './styles'
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn(){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { user } = useContext(AuthContext)

  const navigation = useNavigation()

  function handleLogin(){
    console.log(user.uid)
    console.log(user.name)
  }

  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/Logo.png')}/>
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
        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link>
          <LinkText onPress={() => navigation.navigate('SignUp')}>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  )
}