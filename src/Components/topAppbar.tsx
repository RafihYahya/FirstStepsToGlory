import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TopAppBar() {
    return (
        <View style={styles.appbar}>
            <View style={styles.container}>
                <Text style={styles.text}>Explore</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#F5F5F5',
        fontSize:18,
        fontWeight:'700',
    }
})