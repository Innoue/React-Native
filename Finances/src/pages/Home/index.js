import React, { useContext, useState } from "react";

import {Background, Container, TextName, TextBalance, TextTitle, List} from './styles'
import {AuthContext} from "../../contexts/auth"
import RecordsList from "../../components/RecordsList";

export default function Home(){
  const [records, useRecords] = useState([
    {key: '1', type:'receita', value:1200},    
    {key: '2', type:'despesa', value:900},    
    {key: '3', type:'receita', value:1548},    
    {key: '4', type:'receita', value:1022},    
    {key: '5', type:'receita', value:100.12},    
  ])

  const {user} = useContext(AuthContext)
  return (
    <Background>
      <Container>
        <TextName>{user && user.name}</TextName>
        <TextBalance>123</TextBalance>
      </Container>
      <TextTitle>Últimas movimentações</TextTitle>
      <List
        showsVerticalScrollIndicator={false}
        key={item => item.key}
        data={records}
        renderItem={({item}) => (<RecordsList data={item}/>)}
      />
    </Background>
  )
}