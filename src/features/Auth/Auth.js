
import React, { Component } from 'react';
import { StyleSheet, View,Text, TouchableOpacity } from 'react-native';

export default class Auth extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('AddUser')}
                >
                <Text>Login</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}