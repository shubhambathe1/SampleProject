/**
 * React Native Redux Root
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigator/AppNavigator';
import store from './src/redux/store';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
