import React, { Component } from 'react';
import { StyleSheet, View,Text, TouchableOpacity } from 'react-native';

export default class AddUserInfo extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('DrawerStack')}
                >
                <Text>AddUserInfo</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}