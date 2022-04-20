import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movie from './movie';
import api from './services/api';
import { createPortal } from "react-dom";

export default function App() {
  const [movies, setMovies] = useState(null)

  useEffect(async() => {
    await api.get("batman")
    .then(response => {
      setMovies(response.data)
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <Movie/>
      <StatusBar style="auto" />
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
});
