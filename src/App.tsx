import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopAppBar from './Components/topAppbar';
import BottomNavigationBar from './Components/BottomNavigationBar';
import HomeCard from './Components/HomeCard';

export default function App() {
  return (
    <View style={styles.mainView}>
      <TopAppBar />
      <View style={styles.flexcard}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
       
      </View>
      <BottomNavigationBar />
      <StatusBar hidden />

    </View>

  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#212121',
  },
  flexcard:{
    paddingTop:8,
    flexDirection:'row',
    flex:1,
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    gap:12
  },

});
