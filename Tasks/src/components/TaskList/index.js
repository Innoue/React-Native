import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function TaskList({data, deleteItem, editItem}){
  return(
    <View style={styles.container}>
      <TouchableWithoutFeedback  onPress={() => editItem(data)}>
        <View style={styles.textTask}>
          <Text style={styles.text}>{data.name}</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity style={styles.trashTask} onPress={() => deleteItem(data.key)}>
        <FontAwesome name="trash-o" size={20} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTask:{
    backgroundColor: '#292d33',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    flex: 1
  },
  trashTask:{
    backgroundColor: '#6b0700',
    width: '15%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text:{
    color: '#FFF',
  }
})
