import React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';
import {font, color} from '../utils/themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
const FabButton = ({
    icon,
    onPress,
}) => {
return(
    <TouchableOpacity
    style={styles.btn}
      onPress={onPress}
    >
      <Icon name={icon} size={30} color={'white'}/>
    </TouchableOpacity>
)
}

const styles=StyleSheet.create({
    btn:{
        width:60,
        height:60,
        right:0,
        bottom:0,
        position:'absolute',
        padding:5,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        backgroundColor:color.colorPrimary,
        margin:40,
        borderRadius: 100,
    },
})

export default FabButton