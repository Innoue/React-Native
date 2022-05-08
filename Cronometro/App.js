import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

let controller = null
export default function App() {
  const [timer, setTimer] = useState(0.0)
  const [lastTime, setLastTime] = useState(0)

  const go = () =>{  
    if(controller != null){
      setLastTime(timer)
      clearInterval(controller)
      controller = null;
    }else{
      controller = setInterval( ()=> {        
        setTimer(timer + 0.1)
        console.log(timer)
      }, 100);
    }
    
  }

  const clear = () =>{
    clearInterval(controller)
    controller = null;
    setTimer(0)
  }


  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require('./src/cronometro.png')}
      />
      <Text style={styles.textTimer}>{timer.toFixed(2)}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity 
          onPress={go}
          style={styles.btn}>
          <Text style={styles.textBtn}>GO</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={clear}
          style={styles.btn}>
          <Text style={styles.textBtn}>CLEAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textLastTimer}>
        {lastTime > 0 ? 'Last time: ' + lastTime : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67c6db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 250,
    height: 300,
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 120,
    height: 60
  },
  btn:{
    flex:1,
    padding: 10,
    marginHorizontal: 40,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textTimer:{
    fontSize: 60,
    marginTop: -165,
    color: 'white',
    fontWeight:'bold'
  },
  textBtn:{
    color:'#1b97b3',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textLastTimer:{
    color:'white',
    marginTop: 25,
    fontSize: 25,
    fontStyle: 'italic'
  }
});
