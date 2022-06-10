import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function TaskList({data, deleteItem, editItem}){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => deleteItem(data.key)}>
        <FontAwesome name="trash-o" size={24} color="white" />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => editItem(data)}>
        <Text style={styles.text}>{data.name}</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center'
  },
  text:{
    color: '#FFF',
    marginLeft: 10
  }
})
