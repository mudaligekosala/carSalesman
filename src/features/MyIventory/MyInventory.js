import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,FlatList } from 'react-native';
import AddCarModal from '../AddCar/AddCar';
import SellCarModal from '../SellCar/SellCar';
import InventoryListItem from '../../components/InventoryListItem';
import Image1 from '../../Image/cameraPlaceholder.png';
import Image2 from '../../Image/docPlaceholder.png';


export default class MyInventory extends Component {
    state = {
        modalAddCarVisible: false,
        modalSellCarVisible: false
    }

    finishModalAction = (key) => {
        this.setState({
            [key]: false
        })
    }
    render() {
        const fateData = [{image:Image1, title:'Image 1', key:'1'},
        {image:Image1, title:'Image 2', key:'2'},
        {image:Image1, title:'Image 3', key:'3',},
        {image:Image2, title:'Image 4', key:'4'},
        {image:Image1, title:'Image 5', key:'5'},
        {image:Image2, title:'Image 6', key:'6'}    
    ]
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => this.setState({ modalAddCarVisible: true })}>
                    <Text>Add new car</Text>
                    <AddCarModal visible={this.state.modalAddCarVisible} onPress={() => this.finishModalAction('modalAddCarVisible')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setState({ modalSellCarVisible: true })}
                >
                    <Text>Sell car</Text>
                </TouchableOpacity>

                <FlatList
                    data={fateData}
                    style={{ width: 400 }}
                    numColumns={2}
                    renderItem={({item})=> <InventoryListItem title={item.title} imageValue={item.image}/>}

                />


                <AddCarModal visible={this.state.modalSellCarVisible} onPress={() => this.finishModalAction('modalSellCarVisible')} />
                <SellCarModal visible={this.state.modalSellCarVisible} onPress={() => this.finishModalAction('modalSellCarVisible')} />

            </View>
        )
    }
}