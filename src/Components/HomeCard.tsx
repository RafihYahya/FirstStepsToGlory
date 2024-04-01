import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'


const HomeCard = () => {
  return (
    <>

      <View style={styles.container}>
        <Image style={styles.image} source={require('./../../assets/maiimg.jpg')} />
        <Text style={styles.text}>Konosuba</Text>
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
  image: {
    position:'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 16,
    opacity: 0.3

  },

  text: {
    
    color:'#F5F5F5',
    fontSize:20,
    fontWeight:'200'
  }

})