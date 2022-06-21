import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import { Container, Name, NewLink, Logout, TextWhite } from "./styles";

export default function Profile(){
  const navigation = useNavigation()
  const { user, signOut } = useContext(AuthContext)
  return (
    <Container>
      <Name>{ user && user.name}</Name>
        <NewLink onPress={() => navigation.navigate('New')}>
          <TextWhite>Registrar gastos</TextWhite>
        </NewLink>
        <Logout onPress={() => signOut()}>
          <TextWhite>Logout</TextWhite>
        </Logout>
    </Container>
  )
}