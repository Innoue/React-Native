import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import TaskList from '../../components/TaskList'

export default function Home(){
  let tasks = [
    {key: 1, name: 'Aaaaaaa'},
    {key: 2, name: 'Bbbbbbb'},
    {key: 3, name: 'Ccccccc'}
  ]
  
  const [newTask, setNewTask] = useState('')
  return(
    <SafeAreaView style={[styles.AndroidSafeArea, styles.container]}>
      <View style={styles.areaInput}>
        <TextInput
          style={styles.input}
          placeholder='O que irá fazer hoje?'
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.textBtnAdd}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TaskList data={item}/>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 20,
    paddingHorizontal: 20
  },  
  areaInput:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 30,
    marginHorizontal: 10
  },
  input:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#171614',
    borderRadius: 10,
    backgroundColor: '#FFF',
    width:'85%'
  },
  btnAdd:{
    backgroundColor: '#000',
    width: '15%',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textBtnAdd:{
    color: '#FFF',
    fontSize: 22
  }
});