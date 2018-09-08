import React, { PureComponent } from 'react';
import { StyleSheet,View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InventoryListItem= ({
    onPress,
    imageValue,
    title
})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                
            >
            <View style={styles.btnContainer}> 
            
            <ImageBackground source={imageValue ? imageValue : '../Image/DocPlaceholder.png'}  
            style={styles.imageStyle}>

            <View stye={styles.textContainer}>
            <Text style={styles.titleMain}>{title}</Text>
            <Text style={styles.title}>Title Make</Text>
            <Text style={styles.title}>Title Year</Text>
            <Text style={styles.title}>Price</Text>
            </View>
            </ImageBackground>
            </View>
            
            

            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        margin:5
    },
    imageStyle:{
        width:150,
        height:150,
        backgroundColor:'#e1e1e1',
       
    },
    textContainer:{
       flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    btnContainer:{
        flex:1,
        backgroundColor:'#e1ede2',
        
    }

})
export default InventoryListItem;