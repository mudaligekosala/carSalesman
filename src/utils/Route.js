import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
import { NavigationActions, DrawerActions } from 'react-navigation';
import {color} from './themes';
//import views
import LoginScreen from '../features/Auth/Auth';
import HelperScreen from '../features/Helper/Helper';
import AddUser from '../features/AddUserInfo/AddUserInfo';
import MyBusiness from '../features/MyBusiness/MyBusiness';
import MyInventory from '../features/MyIventory/MyInventory';
import DrawerScreen from '../components/DrawerScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';


//helper stack
const HelperStack = createStackNavigator({
    HelperScreen:{
        screen:HelperScreen,
        navigationOptions:{
            header:null
        }
    }
})
//login stack
const LoginStack = createStackNavigator({
    LoginScreen:{
        screen:LoginScreen,
        navigationOptions:{
            header:null
        }
    }
})
//material tabs
const MaterialTabs  = createMaterialTopTabNavigator({
    MyBusiness:{
        screen:MyBusiness,
        navigationOptions:{
            tabBarLabel:'Home'
        }
    },
    MyInventory:{
        screen: MyInventory,
        navigationOptions:{
            tabBarLabel:'Inventory'
        }
    }
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: color.colorPrimary,
        },
        indicatorStyle: {
            backgroundColor: color.colorDark,
        },
    }
})

//drawer

const Drawer = createDrawerNavigator({
    Tabs:MaterialTabs
},
    {
        initialRouteName:'Tabs',
        contentComponent:DrawerScreen,
        drawerWidth:300
    }
)

//drawer icon

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){

        return <Icon name={'menu'} size={30}/>
    }else{
        return <Icon name={'menu'} size={30}/>
    }
}

//stack navigator for customer drawer

const DrawerStack = createStackNavigator({
        Drawer:Drawer
},
    {
        navigationOptions: ({ navigation }) => ({
            title: 'Car Salesman',  // Title to appear in status bar
            headerLeft: 
            <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
                <MenuImage style="styles.bar" navigation={navigation}/>
            </TouchableOpacity>,
            headerStyle: {
                backgroundColor: color.colorPrimary,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: '100',
            },
    
        })
    }
)

//switch
const SwitchNavigator = createSwitchNavigator({
    Helper:HelperStack,
    LoginStack:LoginStack,
    AddUser:AddUser,
    DrawerStack:DrawerStack
})

export default SwitchNavigator;