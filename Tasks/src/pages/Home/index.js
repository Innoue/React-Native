import { useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Keyboard } from "react-native";
import TaskList from '../../components/TaskList'
import firebase from  '../../services/firebaseConnection'

export default function Home(){
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('')
  const [update, setUpdate] = useState(false)
  const route = useRoute()
  const refInput = useRef()

  const uid = route.params?.uid
  const tasks = firebase.database().ref('users').child(uid).child('tasks')

  useEffect(()=>{
    function getTasks(){
      if(!uid)
        return
      
      firebase.database().ref('users').child(uid).child('tasks').once('value', (snapshot) =>{
        setTaskList([])
        snapshot?.forEach((childItem) => {
          let data ={
            key: childItem.key,
            name: childItem.val().name
          }
          setTaskList(oldTaskList => [...oldTaskList, data])
        })
      })
    }
    getTasks()
  },[update])

  function deleteItem(key){
    tasks.child(key).remove()
    .then(()=>{
      setUpdate(!update)
    })
  }

  function editItem(data){
    setNewTask(data.name)
    refInput.current.focus()
  }

  function addItem(){
    if(newTask == '')
      return

    let key = tasks.push().key

    tasks.child(key).set({
      name: newTask
    })
    .then(() =>{
      setUpdate(!update)
      setNewTask('')
      Keyboard.dismiss()
    })
    .catch((err) => {
      alert("Algo deu errado, tente novamente")
      console.log(err)
    })
  }
  
  return(
    <SafeAreaView style={[styles.AndroidSafeArea, styles.container]}>
      <View style={styles.areaInput}>
        <TextInput
          style={styles.input}
          placeholder='O que irá fazer hoje?'
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          ref={refInput}
        />
        <TouchableOpacity onPress={addItem} style={styles.btnAdd}>
          <Text style={styles.textBtnAdd}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={taskList}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TaskList data={item} deleteItem={deleteItem} editItem={editItem}/>
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