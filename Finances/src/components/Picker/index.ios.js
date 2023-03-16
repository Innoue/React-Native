import React from "react";
import RNPickerSelect from 'react-native-picker-select'
import {PickerView} from "./styles"

export default function Picker ({onChange, type}){
  return(
    <PickerView>
      <RNPickerSelect
        style={{
          inputIOS:{
            height:50,
            padding:5,
            backgroundColor: '#FFF',
            fontSize:16
          }
        }}
        placeholder={{
          label: "Selecione o tipo",
          color: "#222",
          value: null
        }}
        value={type}
        onValueChange = {(value) => onChange(value)}
        items={[
          {label: "Receita", value: "receita", color: "#222"},
          {label: "Despesa", value: "despesa", color: "#222"}
        ]}

      />
    </PickerView>
  )
}
