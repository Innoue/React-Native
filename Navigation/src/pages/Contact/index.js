import { useNavigation, StackActions } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Contact(){
  const navigation = useNavigation()
  function backHome(){
    navigation.dispatch(StackActions.popToTop())
  }

  return(
    <View style={styles.container}>
      <Text>Contact</Text>
      <Button title='Home' onPress={backHome}/>
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

