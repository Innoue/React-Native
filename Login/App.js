import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeLogin from './src/pages/HomeLogin';
import Home from './src/pages/Home';
import Register from './src/pages/Register';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeLogin"
          component={HomeLogin} 
          options={{
             headerShown: false
          }} 
        />
        <Stack.Screen 
          name="Home"
          component={Home} 
          options={{
             headerShown: false
          }} 
        />
        <Stack.Screen 
          name="Register"
          component={Register} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
