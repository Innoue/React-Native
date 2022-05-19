import { useState } from 'react';
import { StyleSheet, Image,Text, View, Modal, TextInput,ToastAndroid, TouchableOpacity } from 'react-native';
import GasVsAlcool from './src/Modal';

export default function App() {
  const [visible, setVisible] = useState(false)
  const [alcool, setAlcool] = useState(0)
  const [gas, setGas] = useState(0)

  const close = function(){
    setVisible(false)
    setAlcool(0)
    setGas(0)
  }

  function enter(){
    if (alcool <= 0){
      ToastAndroid.show("Insira o preço do álcool!", ToastAndroid.LONG);
      return
    } 
    if (gas <= 0){
      ToastAndroid.show("Insira o preço da gasolina!", ToastAndroid.LONG);
      return
    }
    setVisible(true)
  }

  
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/img/logo.png')}
        style={styles.img}
      />
      <Text style={styles.title}>
        Qual melhor opção?
      </Text>
      <View style={styles.containerHint}>
        <Text style={styles.hint}>
          Álcool (preço por litro):
        </Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={text => setAlcool(text)}
          value={alcool}
          keyboardType='numeric'
        />
      </View>
      <Text style={styles.hint}>
        Gasolina (preço por litro):
      </Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={text => setGas(text)}
          value={gas}
          keyboardType='numeric'
        />
      </View>
      <TouchableOpacity 
        onPress={enter}
        style={[styles.containerInput]} 
      >
        <View style={styles.touchable}>
          <Text style={styles.title}>
            Calcular
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
      >
        <GasVsAlcool gas={gas} alcool={alcool} close={close}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height: 168,
    width: 168,
  },
  title:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 20,
  },
  hint:{
    color: 'white',
    fontSize: 22,
    textAlign: 'left'
  },
  input:{
    backgroundColor: 'white',
    flex: 1,
    height: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  containerInput:{
    flexDirection: 'row'
  },
  containerHint:{
    
  },
  touchable:{
    backgroundColor: '#f04434',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10
  }
});
