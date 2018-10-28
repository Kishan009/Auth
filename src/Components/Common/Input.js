import React, { Component } from 'react';
import {  View, TextInput  } from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry }) =>
{

    return(

        <View style ={ styles.container }>
            <TextInput  
            secureTextEntry ={ secureTextEntry }
            style={ styles.inputStyle } 
            placeholder={ label }
            onChangeText ={ onChangeText }
            value ={ value }
            />
        </View>
    );


};


const styles ={
    inputStyle :
    {
        color : '#000',
        fontSize :18,
        flex : 1,
        lineHeight : 23
    },
    container :
    {
        flex: 1,
        height:50
    }
};


export { Input };