import React, { Component } from 'react';
import { StyleSheet, View,Text, Modal, Button } from 'react-native';

const SellCar =({
    visible,
    onPress

})=>{
        return(
            <View>
               <Modal
               animationType={"slide"}
               transparent={false}
               visible={visible}
               onRequestClose={() => console.log('modal close')}
               >
                   <View>
                       <Text>Sell car modal</Text>
                       <Button
                       title={'Close'}
                       onPress={onPress}
                       />
                       </View>
               </Modal>
            </View>
        )
    
}

export default SellCar;