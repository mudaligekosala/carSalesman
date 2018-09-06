import React, { Component } from 'react';
import { StyleSheet, View,Text, TouchableOpacity } from 'react-native';

export default class Helper extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('LoginStack')}
                >
                <Text>Helperr</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}