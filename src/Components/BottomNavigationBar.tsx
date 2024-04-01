import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './MyText'
import { BookOpen, House, MagnifyingGlass } from 'phosphor-react-native'

const BottomNavigationBar = () => {
  return (
    <View style={[styles.botbar, styles.botbartext]}>
      <View style={styles.navbarentry}>
        <House size={28} color='#F5F5F5' />
        <MyText title='Home' size={11} fontWeight={'normal'} />
      </View>
      <View style={styles.navbarentry}>
        <MagnifyingGlass size={28} color='#F5F5F5' />
        <MyText title='Search' size={11} fontWeight={'normal'} />
      </View>
      <View style={styles.navbarentry}>
        <BookOpen size={28} color='#F5F5F5' />
        <MyText title='Library' size={11} fontWeight={'normal'} />
      </View>
    </View>
  )
}

export default BottomNavigationBar

const styles = StyleSheet.create({
  botbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    backgroundColor: '#282828',
  },
  
  botbartext: {
    paddingHorizontal: 36,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navbarentry:{
    gap:4,
    justifyContent:'center',
    alignItems:'center'
  }

})