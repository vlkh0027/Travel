import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

import ModalPicker from 'react-native-modal-picker'
import {SelectedCity} from './../redux/action';
import {connect} from 'react-redux';

import firebase from './../components/FirebaseConf';

var {height, width} = Dimensions.get('window');

  class HeaderPicker extends Component {

  constructor(props){
    super(props);
    console.ignoredYellowBox = [
        'Setting a timer'
    ];
    if (this.refs.myRef) 
        this.setState({myVar: true});
    this.state={
      cityName: 'Chọn thành phố',
      arrAn:[],
      arrNghi:[],
      arrChoi:[],
    }
   
  }

  componentWillMount(){
    var itemChoi=[];
    var itemNghi=[];
    var itemAn=[];
    

    itemRef = firebase.database();

    phuotChoi = itemRef.ref('phuot').child("DaLat").child('choi').child('thongtin');
    phuotNghi = itemRef.ref('phuot').child("DaLat").child('nghi').child('thongtin');
    phuotAn = itemRef.ref('phuot').child("DaLat").child('an').child('thongtin');
   
  
    phuotChoi.on('value', (snap)=>{
  
        snap.forEach((data)=>{
            
            itemChoi.push(
            { 
                key:data.key,
                phuot:data.val(),
            });
           
        });        
    });  
    phuotNghi.on('value', (snap)=>{
  
        snap.forEach((data)=>{
            
            itemNghi.push(
            { 
                key:data.key,
                phuot:data.val(),
            });
           
        });        
    }); 
    phuotAn.on('value', (snap)=>{
  
        snap.forEach((data)=>{
            
            itemAn.push(
            { 
                key:data.key,
                phuot:data.val(),
            });
           
        });        
    }); 
  

    this.props.SelectedCity("DaLat",itemChoi,itemNghi,itemAn)
  }

    render() {
      let index = 0;
      const data = [
          { key: index++, section: true, label: 'Du Lịch' },
          { key: index++, label: 'Đà Lạt',name:'DaLat' },
          { key: index++, label: 'Vũng Tàu',name:'VungTau' },
          
      ];

      const{screenProps} = this.props;
      return (
        <View style={styles.wrapper}>
           
                <ModalPicker
                    data={data}
                    onChange={(option)=>{
                        var itemChoi=[];
                        var itemNghi=[];
                        var itemAn=[];
                       
                     this.setState({cityName:option.label}),
                    itemRef = firebase.database();
                   
                        phuotChoi = itemRef.ref('phuot').child(option.name).child('choi').child('thongtin');
                        phuotNghi = itemRef.ref('phuot').child(option.name).child('nghi').child('thongtin');
                        phuotAn = itemRef.ref('phuot').child(option.name).child('an').child('thongtin');
                 
                        console.log("ko rỗng");
                      
                    phuotChoi.on('value', (snap)=>{
                      
                            snap.forEach((data)=>{
                                
                                itemChoi.push(
                                { 
                                    key:data.key,
                                    phuot:data.val(),
                                });
                               
                            });        
                        });  
                        phuotNghi.on('value', (snap)=>{
                      
                            snap.forEach((data)=>{
                                
                                itemNghi.push(
                                { 
                                    key:data.key,
                                    phuot:data.val(),
                                });
                               
                            });        
                        }); 
                        phuotAn.on('value', (snap)=>{
                      
                            snap.forEach((data)=>{
                                
                                itemAn.push(
                                { 
                                    key:data.key,
                                    phuot:data.val(),
                                });
                               
                            });        
                        }); 

                        
                    
                     this.props.SelectedCity(option.name,itemChoi,itemNghi,itemAn)
                      }}>

                    <Text
                        style={styles.textInput}>
                        {this.state.cityName}
                </Text>
                </ModalPicker>
            </View>
      );
    };
  }

  const styles = StyleSheet.create({
   
    wrapper:{
        height:height/15,
        padding:10,
        backgroundColor:'#1D93F4',
        justifyContent:'center'
    },
    
    textInput:{
        fontSize: 18,
        backgroundColor:'#1D93F4',
        padding:10, height:height/15, textAlign:'center',
        color:'#fff',
        
    },
 
  });

  export default connect(null,{SelectedCity})(HeaderPicker);
