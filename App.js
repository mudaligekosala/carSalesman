/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View} from 'react-native';
import Route from './src/utils/Route';
import Store from './src/store';
import { Provider } from 'react-redux';
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
       <Route/>
      </Provider>

    );
  }
}
