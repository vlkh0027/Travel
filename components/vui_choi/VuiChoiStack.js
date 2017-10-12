
import React,{Component } from 'react';
import {StackNavigator} from 'react-navigation';

import VuiChoiView from './VuiChoiView';
import VuiChoiDetail from './VuiChoiDetail';

const VuiChoiStack = StackNavigator({

    VuiChoiView:{ screen: VuiChoiView },
    VuiChoiDetail:{ screen: VuiChoiDetail },
    },
  
    {
        initialRouteName:'VuiChoiView',
        headerMode:'none',
         navigationOptions :{
            
         }
    }
  );

export default VuiChoiStack;