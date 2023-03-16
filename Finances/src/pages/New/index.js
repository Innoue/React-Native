import React, { useState } from "react";
import { TouchableWithoutFeedback, SafeAreaView, Keyboard } from "react-native";
import { Background, Input, SubmitButton, SubmitText} from "./styles"
import Picker  from "./../../components/Picker"

export default function New(){
  const [value, setValue] = useState()
  const [type, setType] = useState('despesa')

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <SafeAreaView style={{alignItems:'center'}}>
          <Input 
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(text)=>setValue(text)}
          />
          <Picker onChange={setType} type={type}/>
          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  )
}