import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MagnifyingGlass } from 'phosphor-react-native'

export default function TopAppBar() {
    return (
        <View style={styles.appbar}>
            <View style={styles.container}>
                <View></View>
                <Text style={styles.text}>Explore</Text>
                <MagnifyingGlass size={24} color='#F5F5F5' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#212121',
        height: 75,
        width: '100%'
    },
    container: {
        paddingHorizontal:28,
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: '#F5F5F5',
        fontSize:22,
        fontWeight:'200',
    }
})