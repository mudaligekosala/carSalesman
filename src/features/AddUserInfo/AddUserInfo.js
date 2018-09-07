import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import Fab from '../../components/Fab';

//theme
import {font, color} from '../../utils/themes';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AddUserInfo extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.header}>
          <Image source={require("../../Image/proPlaceholder.png")} style={styles.Image} />
        </View>

        <View style={styles.Body}>
          <TextInput
            style={styles.txtInput}
            placeholder={"Your name"}
            onChangeText={value => this.updateInput("password", value)}
          />

          <TextInput
            style={styles.txtInput}
            placeholder={"Comapny Name"}
            onChangeText={value => this.updateInput("password", value)}
          />
        </View>

        <View style={styles.Footer} />
        <Fab 
        onPress={() => this.props.navigation.navigate("DrawerStack")}
        icon={'done'}

         />
      </View>
    );
  }
}

const styles= StyleSheet.create({
    header:{
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',

    },
    Body:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding:20

    },
    Footer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'flex-start',

    },

    txtInput:{
        width:'100%',
        fontSize:font.fontNormal,
        padding:10,
        paddingLeft: 15,
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 100,
        marginTop:30
    },
    
    Image:{
        width:150,
        height:150,
        borderRadius:77
    }
})
