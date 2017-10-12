
import React,{Component } from 'react';
import {StackNavigator} from 'react-navigation';

import NhaNghiView from './NhaNghiView';
import NhaNghiDetail from './NhaNghiDetail';

const NhaNghiStack = StackNavigator({

    NhaNghiView:{ screen: NhaNghiView },
    NhaNghiDetail:{ screen: NhaNghiDetail },
    },
  
    {
        initialRouteName:'NhaNghiView',
        headerMode:'none',
         navigationOptions :{
            
         }
    }
  );

export default NhaNghiStack;