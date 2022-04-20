import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Movie from './movie';
import api from './services/api';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    await api.get("batman").then((response) => {
      setMovies(response.data.Search);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {movies.map((item) => <Movie uri={item.Poster} title={item.Title}/>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});
