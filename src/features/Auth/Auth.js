
import React, { Component } from 'react';
import { StyleSheet, View,Text, TouchableOpacity, TextInput, Icon } from 'react-native';
import {font, color} from '../../utils/themes';
export default class Auth extends Component{

    state={
        loginLabel:'Login',
        isLogin:true,
        registerLabel:`If you don't have a account Register Here.`,
        form:{
            email:{
                value:'',
                valid:false
            },
            password:{
                value:'',
                valid:false
            },
            comfirmPassword:{
                value:'',
                valid:false
            }
        }
    }

    //update userinput
    updateInput = (key,value) => {
        console.log(key,value)
    }

    //register button
    handleRegisterButton = () => {
        let loginStatus = this.state.isLogin;
        if(loginStatus === true){
            this.setState({
                registerLabel:`Alredy have a Account Login here.`,
                loginLabel:'Register',
                isLogin:false
            })
        }else{
            this.setState({
                registerLabel:`If you don't have a account Register Here.`,
                loginLabel:'Login',
                isLogin:true
            })
        }
    }

    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:30}}>

            <Text style={{fontSize:40, alignSelf:'center', marginBottom:60}}> Car SalesMAN</Text>

                <TextInput
                style={styles.txtInput}
                placeholder={'Email'}
                onChangeText={(value) => this.updateInput('email',value)}
                />

                 <TextInput
                style={styles.txtInput}
                placeholder={'Password'}
                onChangeText={(value) => this.updateInput('password',value)}
                />

                { !this.state.isLogin && 
                 <TextInput
                 style={styles.txtInput}
                placeholder={'Comfirm Password'}
                onChangeText={(value) => this.updateInput('comfPassword',value)}
                />
                }

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => this.props.navigation.navigate('AddUser')}
                >
                <Text style={styles.txt}>{this.state.loginLabel}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btnRegister}
                onPress={() => this.handleRegisterButton()}
                >
                <Text style={styles.txtRegister}>{this.state.registerLabel}</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles= StyleSheet.create({
    txtInput:{
        width:'100%',
        fontSize:font.fontNormal,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: 'gray',
        padding:5,
        paddingLeft: 20,
        margin:15
    },
    btn:{
        backgroundColor:color.colorPrimary,
        width:'100%',
        alignItems:'center',
        borderWidth: 0.1,
        borderRadius: 100,
        marginTop:20
    },
    txt:{
        fontSize:font.fontNormal,
        padding:10
    },
    btnRegister:{
       
        width:'100%',
        alignItems:'center',
       
        marginTop:5
    },
    txtRegister:{
        padding:5
    }
})