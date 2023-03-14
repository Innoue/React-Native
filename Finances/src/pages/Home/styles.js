import styled from 'styled-components/native'

export const Background = styled.View`
  flex: 1;
  background-color:#131313;
`
export const Container = styled.View`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 25px;
`
export const TextName = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-style: italic;
`
export const TextBalance = styled.Text`
  color: #FFF;
  font-weight:bold;
  font-size: 30px;
  margin-top: 5px;
`
export const TextTitle = styled.Text`
  color: #00b94a;
  margin-left: 15px;
  margin-bottom: 10px;
`
export const List = styled.FlatList.attrs({
  marginHorizontal:15
})`
  padding-top: 15px;
  background-color: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: 8px;
  margin-right: 8px;
`
