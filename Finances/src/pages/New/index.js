import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function New(){
  const { user, signOut } = useContext(AuthContext)
  return (
    <View>
      <Text>New</Text>
    </View>
  )
}