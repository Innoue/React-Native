import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movie from './movie';
import api from './services/api';
import { createPortal } from "react-dom";

export default function App() {
  // const [movies, setMovies] = useState(null)
  // const apiConsume = async () => {
  //   const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=51e0824a`);
  //   const data = await response.json();
  //   return data;
  // };
  // useEffect(() => {
  //   console.log(apiConsume().then(data => {setMovies(data)}))
  //   console.log(movies.Title)
  // }, [])
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
