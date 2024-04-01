import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TextProp = {
    title: String,
    size: number,
    fontWeight:"normal"|"bold"
}

const MyText = (props: TextProp) => {
    const styles = StyleSheet.create({
        text: {
            fontSize:props.size,
            color:'#F5F5F5',
            fontWeight:props.fontWeight
        }
        
    })
    return (
        <>
            <Text style={styles.text}>{props.title}</Text>
        </>
    )
}

export default MyText

