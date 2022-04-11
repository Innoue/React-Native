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
        <View styles={styles.card}>  
            {/* Image */}
            <View>
                <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
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

