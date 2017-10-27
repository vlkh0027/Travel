import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const { width,height } = Dimensions.get('window');
export default class Loading extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image
        resizeMode="contain"
            style={{flex:1,width:width, height:height,justifyContent:'center', 
          
            alignItems:'center'}}
            source={require('./../image/phuot.png')}>
            <Text style={{marginLeft:15,fontSize:25,fontFamily:'Avenir',color:'#EC3C45', backgroundColor:'transparent', }}>
              Nhấn chọn thành phố sau đó chọn tab mà bạn muốn xem ;)
            </Text>
              <ActivityIndicator
              animating={true}
              color="#EC3C45"
              size="large"
              style={{margin: 15}}
            />

            
            
        </Image>
          
      </View>
    );
  }
}