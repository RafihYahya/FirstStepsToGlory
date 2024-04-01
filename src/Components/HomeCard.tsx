import { StyleSheet,Image, View } from 'react-native'
import React from 'react'


const HomeCard = () => {
  return (
    <>
  
       <Image style={styles.image} source={require('./../../assets/maiimg.jpg')}/>
    
    </>
  )
}

export default HomeCard

const styles = StyleSheet.create({
 
  image:{
    
    height: 125,
    width:190,
    borderRadius: 16

  }

})