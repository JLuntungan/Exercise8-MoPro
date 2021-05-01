import React from 'react'
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native'


const TextInput = ({title, placeholder}) =>{
    return (
        <View>
            <Text style={styles.text}> Email Address</Text>
            <TextInputRN style={styles.input} placeholder={placeholder}></TextInputRN>
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        fontFamily:'Poppins-Regular',
    },
    input:{
        borderWidth:1,
        borderColor:'#020202',
        borderRadius: 8,
        paddingLeft:10,
        paddingHorizontal:10,
    },
    
})