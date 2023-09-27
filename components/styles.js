import {StyleSheet} from 'react-native'
import React from 'react'

const darkStyle = StyleSheet.create({
    container: {
        backgroundColor: "black",
    },
    text:{
        color: "white"
    }
})

const lightStyle = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    text:{
        color: "black"
    }
})

export {darkStyle, lightStyle}