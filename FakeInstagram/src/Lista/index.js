import { Text, StyleSheet, View } from 'react-native';
export default function List(props) {
  return (
  <View>
    <Text>Feed {props.data.nome}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
})