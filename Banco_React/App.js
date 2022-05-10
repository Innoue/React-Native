import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Switch, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
export default function App() {
  const [gender, setGender] = useState('Homem');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [limit, setLimit] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  const createUser = () => {
    let errors = ''
    if(name == '')
      errors = 'Nome\n'
    if(age == '')
      errors = errors + 'Idade\n'
    if(limit == 0)
      errors = errors + 'Limite\n'

    if(errors == ''){
      Alert.alert(
        "Dados do usuário",
        `  
        Nome: ${name}
        Idade: ${age}
        Sexo : ${gender}
        Limite: R$ ${limit.toFixed(2)}
        É estudante: ${isStudent ? 'sim' : 'não'}
        `,
        [
          { text: "OK" }
        ]
      );
    } else {
      Alert.alert(
        "Dados faltando",
        errors
      );
    }

  }


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight:'bold', marginBottom:15}}>Banco React</Text>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Nome</Text>
        <TextInput 
          style={styles.input}
          placeholder='Digite o seu nome'
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Idade</Text>
        <TextInput 
          style={styles.input}
          placeholder='Digite a sua idade'
          keyboardType='numeric'
          onChangeText={text => setAge(text)}
        />
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Sexo</Text>
        <View style={styles.input}>
          <Picker
            style={{marginTop:-17, paddingHorizontal: -10}}
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) =>
              setGender(itemValue)
            }>
            <Picker.Item label="Homem" value="Homem" />
            <Picker.Item label="Mulher" value="Mulher" />
          </Picker>
        </View>
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Limite</Text>
        <Slider
          style={{flex:3}}
          minimumValue={0}
          maximumValue={7000}
          value={limit}
          onValueChange={text => setLimit(text)}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View style={{flexDirection:'row'}}>
          <View style={{flex: 1}}></View>
          <Text style={{textAlign:'center', fontSize:25, flex:3}}>R$ {limit.toFixed(2)}</Text>
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.textInput}>Estudante</Text>
        <View
          style={{flex:2,flexDirection:'row', justifyContent:'center'}}
        >
          <Switch 
            onValueChange={input => (setIsStudent(!isStudent))}
            value={isStudent}
          />
        </View>
      </View>
      <View style={styles.areaInput}>
        <Button
          title="Gravar dados"
          onPress={createUser}
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
    fontSize: 22,
  },
});
