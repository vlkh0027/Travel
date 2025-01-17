import React,{Component} from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import AnUongStack from './an_uong/AnUongStack';
import HoTroView from './lien_he/HoTroView';
import NhaNghiStack from './nha_nghi/NhaNghiStack';
import VuiChoiStack from './vui_choi/VuiChoiStack';
import AnUongView from './an_uong/AnUongView';
import LichTrinh from './lien_he/LichTrinh';


import HeaderPicker from './HeaderPicker';

import {connect} from 'react-redux';


var {height, width} = Dimensions.get('window');

export default  class Home extends Component {
  
  constructor(props){
    super(props);
    this.state= {
      //selectedTab: 'vuichoi',
      //selectedCity:"asd",
      
    }
  }

    render() {
        return(
            <View style={{flex:1}}>
              <HeaderPicker />
                 <TabNavigator 
                tabBarStyle={{ height:height/12 , borderWidth: 0, 
                 borderTopColor: 'gray', paddingBottom:5 }}
              >
              <TabNavigator.Item
                selected={this.state.selectedTab === 'anuong'}
                title="Ăn uống" 
                renderIcon={() => <Image style={styles.icon}  source={require('./../icon/restaurant.png')}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('./../icon/restaurant_fill.png')}/>} 
                selectedTitleStyle={{color:'#1D93F4', fontFamily:'Avenir'}}    
                onPress={() => this.setState({ selectedTab: 'anuong' })}>
                <AnUongStack 
                  />

              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'nhanghi'}
                title="Chỗ ở"
                renderIcon={() => <Image style={styles.icon}  source={require('./../icon/hotel.png')}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('./../icon/hotel_fill.png')}/>}
                selectedTitleStyle={{color:'#1D93F4', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'nhanghi' })}>
                <NhaNghiStack />

              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'vuichoi'}
                title="Điểm vui chơi"
                renderIcon={() => <Image style={styles.icon}  source={require('./../icon/traveler.png')}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('./../icon/traveler_fill.png')}/>}  
                selectedTitleStyle={{color:'#1D93F4', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'vuichoi' })}>
                <VuiChoiStack />

              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'lichtrinh'}
                title="Lịch trình"
                renderIcon={() => <Image style={styles.icon}  source={require('./../icon/brain.png')}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('./../icon/brainfill.png')}/>} 
                selectedTitleStyle={{color:'#1D93F4', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'lichtrinh' })}>
                <LichTrinh/>

              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'tienich'}
                title="Tiên ích"
                renderIcon={() => <Image style={styles.icon}  source={require('./../icon/atm.png')}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={require('./../icon/atmfill.png')}/>} 
                selectedTitleStyle={{color:'#1D93F4', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'tienich' })}>
                <HoTroView/>

              </TabNavigator.Item>
            </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  
});

