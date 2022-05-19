import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
export default function List(props) {
  const [feed, setFeed] = useState(props.data)
  function showLikes(){
    let likes = props.data.likers
    if (likes <= 0)
      return
    
    return(
      <Text style={styles.textName}>
        {likes} {likes > 1  ? 'curtidas' :' curtida'}
      </Text>
    )
  }

  function liked(){
    let post = feed
    setFeed({
      ...post,
      likeada : !feed.likeada,
      likers: feed.likers + 1
    })
    console.log(feed)
  }

  return (
  <View style={styles.containerColumn}>
    <View style={styles.containerRow}>
      <Image 
        style={styles.iconProfile}
        source={{uri: props.data.imgperfil}}
      />
      <Text style={styles.text}>
        {props.data.nome}
      </Text>
    </View>
    <Image
      style={styles.img}
      source={{uri: props.data.imgPublicacao}}
    />
    <View style={styles.containerRow}>
      <TouchableOpacity onPress={liked}>
        <Image
          style={styles.icon}
          source={props.data.likeada ? require('../img/likeada.png') : require('../img/like.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../img/send.png')}
        />
      </TouchableOpacity>
    </View>
    <View>
      <View style={styles.containerRow}>
        {showLikes()}
      </View>
      <View style={styles.containerRow}>
        <Text style={styles.textName}>{props.data.nome}</Text>
        <Text>  {props.data.descricao}</Text>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  containerColumn: {
    marginBottom: 20,
  },
  text:{
    fontSize: 25,
    marginLeft: 15,
  },
  img:{
    height:400,
    width:'100%'
  },
  containerRow:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  icon:{
    width: 40,
    height: 40,
  },
  iconProfile:{
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textName:{
    fontWeight: 'bold'
  }
})