import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 8px;
  padding: 10px;
  box-shadow: 2px 2px rgba(0,0,0 0.4);
  background-color: rgba(0,0,0 0.02);
`
export const Type = styled.View`
  flex-direction: row;
`
export const IconView = styled.View`
  background-color: ${props => props.type == 'despesa' ? '#c62c36': '#049301'};
  flex-direction: row;
  padding-bottom: 3px;
  padding-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 7px;
  
`
export const TextType = styled.Text`
  color: #fff;
  font-size:16px;
  font-style: italic;
`
export const TextMoney = styled.Text`
  color: #222;
  font-size: 22px;
  font-weight: bold;
`
