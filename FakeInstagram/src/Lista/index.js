import { Text, StyleSheet, View, Image } from 'react-native';
export default function List(props) {
  return (
  <View style={styles.container}>
    <Image
      style={styles.img}
      source={{uri: props.data.imgPublicacao}}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  img:{
    height:400,
    width:'100%'
  },
})