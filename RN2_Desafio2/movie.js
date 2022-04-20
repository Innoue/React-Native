import React, { useState, useEffect, View } from "react";
import { StyleSheet } from "react-native";
import { Card, Button, Title } from "react-native-paper";
import api from "./services/api";

function Movie(props) {
  return (
    <Card mode="outlined" style={{margin:20, borderRadius:10}}>
      <Card.Cover source={{ uri: props.uri }} />
      <Card.Content>
        <Title>{props.title}</Title>
      </Card.Content>
    </Card>
  );
}

export default Movie;

const styles = StyleSheet.create({
  card: {
    width: 500,
    height: 500,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
