import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Switch } from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight:'bold', marginBottom:15}}>Banco React</Text>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Nome</Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Idade</Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Sexo</Text>
        <View style={styles.input}>
          <Picker
            style={{marginTop:-17, paddingHorizontal: -10}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Limite</Text>
        <Slider
          style={{flex:3}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View style={{flexDirection:'row'}}>
          <View style={{flex: 1}}></View>
          <Text style={{textAlign:'center', fontSize:25, flex:3}}>R$ 50,00</Text>
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Estudante</Text>
        <Switch 
          style={{flex:2}}
        />
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaInput:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width:320,
  },
  input: {
    flex:3,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black'
  },
  textInput: {
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
    fontSize: 25,
  },
});
