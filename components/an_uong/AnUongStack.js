
import React,{Component } from 'react';
import {StackNavigator} from 'react-navigation';

import AnUongView from './AnUongView';
import AnUongDetail from './AnUongDetail';

const AnUongStack = StackNavigator({

    AnUongView:{ screen: AnUongView },
    AnUongDetail:{ screen: AnUongDetail },
    },
  
    {
        initialRouteName:'AnUongView',
        headerMode:'none',
         navigationOptions :{
            
         }
    }
  );

export default AnUongStack;