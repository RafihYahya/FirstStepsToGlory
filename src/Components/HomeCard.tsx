import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'



const HomeCard = (props:any) => {
  return (
    <>

      <View style={styles.container}>
        {props.children}
        <Text style={styles.text}>{props.title}</Text>
      </View>

    </>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  container: {
    flex:0,
    justifyContent:'center',
    alignItems:'center',
    height: 125,
    width: 190,
    borderRadius: 16,

  },
  

  text: {
    
    color:'#F5F5F5',
    fontSize:16,
    fontWeight:'300',
    textShadowColor:'#212121',
    textShadowOffset:{width: -1, height: 1},
    textShadowRadius: 10

  }

})