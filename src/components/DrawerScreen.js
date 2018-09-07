import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View,FlatList, Switch,Button } from 'react-native';
import { NavigationActions, DrawerActions } from 'react-navigation';
import DrawerItem from './DrawerItem' 

class Drawer extends PureComponent{

    state={

    }

    //navigate to screen
    navigateToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }

    render(){

        const arr = [{title:'Home', screenName:'MyBusiness', icon:'home'}, {title:'Inventory',screenName:'MyInventory', icon:'list'}, {title:'Add New Car',screenName:'AddCar', icon:'add'}, {title: 'History',screenName:'history', icon:'history'}, {title:'Setting',screenName:'Setting', icon:'settings'}]

        return(
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                </View>

                <View style={styles.body}>
                <FlatList
                data={arr}
                renderItem={({item}) => <DrawerItem title={item.title} onPress={() => this.navigateToScreen(item.screenName)} icon={item.icon} />}
                />
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    header:{
        flex:1,
        backgroundColor:'yellow'
    },
    body:{
        flex:2
    },
    footer:{
        flex:1
    }
})

export default Drawer;