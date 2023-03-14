import React from "react";
import { Container,Type, IconView,TextType, TextMoney } from './styles'
import Icon from 'react-native-vector-icons/Feather'



export default function RecordsList({data}){
  return (
    <Container>
      <Type>
        <IconView type ={data.type}>
          <Icon 
          name={data.type == 'despesa' ? "arrow-down" : "arrow-up"} 
          color="#FFF" 
          size={20}/>
          <TextType>{data.type == 'despesa' ? "Despesa" : "Receita"} </TextType>
        </IconView>
      </Type>
      <TextMoney>R$ {data.value}</TextMoney>
    </Container>
  )
}