import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Home from './components/Home';

import {Provider} from 'react-redux';
import store from './redux/store';
export default class App extends Component {

 
    render() {
     
      return (
        <Provider store = {store}>
           <Home/>
       </Provider>

      );
    };
  }

 