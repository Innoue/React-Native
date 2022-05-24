import React, { useLayoutEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function About(){
  const route = useRoute()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name == '' ? 'Pagina Sobre' : route.params?.name
    })
  }, [navigation])

  return(
    <View style={styles.container}>
      <Text>About</Text>
      <Text>{route.params?.name}</Text>
      <Text>{route.params?.email}</Text>
      <Button title='Contact' onPress={() => navigation.navigate('Contact')}/>
      <Button title='Back' onPress={() => navigation.goBack()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

