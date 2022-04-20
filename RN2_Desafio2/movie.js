import React from 'react'
import {Text, Image, View, Button, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    card: {
      width:500,
      height:500,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

function Movie(props) {
    return( 
        <View style={styles.card}>  
            {/* Image */}
            <View style={{flex:1}}>
                <Image style={{width:20, height:20}}
                source={{uri: 'https://legalsolucoes.com/wp-content/uploads/2019/05/legal.png'}}
                />
            </View>
            {/* Name and Button */}
            <View>
                <View>
                    <Text>{props.Title}</Text>
                </View>
                <View>
                    <Button
                        title="Press me!"
                    />
                </View>
            </View>
        </View>
    )
}

export default Movie

