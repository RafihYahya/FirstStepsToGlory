import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View } from 'react-native';
import TopAppBar from './Components/topAppbar';
import BottomNavigationBar from './Components/BottomNavigationBar';
import HomeCard from './Components/HomeCard';

export default function App() {
  return (
    <View style={styles.mainView}>
      <TopAppBar />
      <View style={styles.flexcard}>
        <HomeCard title='Konosuba'>
          <Image style={styles.image} source={require('./../assets/maiimg.jpg')} />
        </HomeCard >
        <HomeCard title="Hollow Knight">
          <Image style={styles.image} source={require('./../assets/hk1.jpg')} />
        </HomeCard >
        <HomeCard title="Elden Ring">
          <Image style={styles.image} source={require('./../assets/elden1.jpg')} />
        </HomeCard >
        <HomeCard title="Bloodborne">
          <Image style={styles.image} source={require('./../assets/bb1.webp')} />
        </HomeCard >
        <HomeCard title="Sekiro">
          <Image style={styles.image} source={require('./../assets/sekiro1.jpg')} />
        </HomeCard >
        <HomeCard title="Portal 2">
          <Image style={styles.image} source={require('./../assets/portal2.jpg')} />
        </HomeCard >



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
  flexcard: {
    paddingTop: 8,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12
  },
  image: {
    position:'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 16,
    opacity: 0.50

  },

});
