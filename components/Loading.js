import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';


export default class Loading extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator
          animating={true}
          color="black"
          size="large"
          style={{margin: 15}}
        />

        <Text style={{fontSize:12,fontFamily:'Avenir',}}>
          Nhấn chọn thành phố sau đó chọn tab mà bạn muốn xem ;)
        </Text>
      </View>
    );
  }
}