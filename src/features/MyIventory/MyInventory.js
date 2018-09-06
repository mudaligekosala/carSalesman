import React, { Component } from 'react';
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';
import AddCarModal from '../AddCar/AddCar';
import SellCarModal from '../SellCar/SellCar';

export default class MyInventory extends Component{
    state={
        modalAddCarVisible:false,
        modalSellCarVisible:false
    }

    finishModalAction = (key) => {
        this.setState({
            [key]:false
        })
    }
    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity 
                onPress={() => this.setState({modalAddCarVisible:true})}
                >

                <Text>Add new car</Text>
               <AddCarModal visible={this.state.modalAddCarVisible} onPress={() => this.finishModalAction('modalAddCarVisible')}/>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={() => this.setState({modalSellCarVisible:true})}
                >

                <Text>Sell car</Text>
               <AddCarModal visible={this.state.modalSellCarVisible} onPress={() => this.finishModalAction('modalSellCarVisible')}/>
               <SellCarModal visible={this.state.modalSellCarVisible} onPress={() => this.finishModalAction('modalSellCarVisible')}/>
                
                </TouchableOpacity>
                
            </View>
        )
    }
}