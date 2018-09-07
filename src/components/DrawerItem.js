import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerItem = ({
    title,
    onPress,
    icon
}) => {
    return(
        <View style={styles.container}>
        <TouchableOpacity
        onPress={onPress}
        >
        <View style={styles.btncontainer}>
        <Icon name={icon} size={30}/>
        <Text style={styles.txtStyle}>{title}</Text>
        </View>
        </TouchableOpacity>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
    },
    btncontainer:{
        flex:1,
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center',
        
        
    },
    txtStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
    }
})

export default DrawerItem;