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
import {SelectedCity,SelectedStart} from './../redux/action';
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
      cityName: 'Nhấn Chọn thành phố',
      arrAn:[],
      arrNghi:[],
      arrChoi:[],
      arrATM:[],
      arrCayXang:[],
      arrLichTrinh:[],
      isLoading:true,
    }
   
  }

  componentWillMount(){
    var itemChoi=[];
    var itemNghi=[];
    var itemAn=[];
    var itemATM=[];
    var itemCayXang=[];
    var itemLichTrinh=[];
    

    itemRef = firebase.database();

    phuotChoi = itemRef.ref('phuot').child("DaLat").child('choi').child('thongtin');
    phuotNghi = itemRef.ref('phuot').child("DaLat").child('nghi').child('thongtin');
    phuotAn = itemRef.ref('phuot').child("DaLat").child('an').child('thongtin');
    phuotATM = itemRef.ref('phuot').child("DaLat").child('atm');
    phuotCayXang = itemRef.ref('phuot').child("DaLat").child('xang');
    phuotLichTrinh = itemRef.ref('phuot').child("DaLat").child('lichtrinh');
   
  
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
    phuotATM.on('value', (snap)=>{
        
              snap.forEach((data)=>{
                  
                itemATM.push(
                  { 
                      key:data.key,
                      phuot:data.val(),
                  });
                 
              });        
          });  
    phuotCayXang.on('value', (snap)=>{
    
            snap.forEach((data)=>{
                
            itemCayXang.push(
                { 
                    key:data.key,
                    phuot:data.val(),
                });
                
            });        
        });  
        phuotLichTrinh.on('value', (snap)=>{
            
                    snap.forEach((data)=>{
                        
                    itemLichTrinh.push(
                        { 
                            key:data.key,
                            phuot:data.val(),
                        });
                        
                    });        
                });  
  

    this.props.SelectedCity("DaLat",itemChoi,itemNghi,itemAn,itemATM,itemCayXang,itemLichTrinh)
  }

    render() {
      let index = 0;
      const data = [
          { key: index++, section: true, label: 'Du Lịch' },
          { key: index++, label: 'Cần Thơ',name:'CanTho' },
          { key: index++, label: 'Côn Đảo',name:'ConDao' },
          { key: index++, label: 'Đà Lạt',name:'DaLat' },
          { key: index++, label: 'Đà Nẵng',name:'DaNang' },
          { key: index++, label: 'Hà Nội',name:'HaNoi' },
          { key: index++, label: 'Hạ Long',name:'HaLong' },
          { key: index++, label: 'Hải Phòng',name:'HaiPhong' },
          { key: index++, label: 'Hồ Chí Minh',name:'HoChiMinh' },
          { key: index++, label: 'Hội An',name:'HoiAn' },
          { key: index++, label: 'Huế',name:'Hue' },
          { key: index++, label: 'Lý Sơn',name:'LySon' },
          { key: index++, label: 'Mũi Né',name:'MuiNe' },
          { key: index++, label: 'Nha Trang',name:'NhaTrang' },
          { key: index++, label: 'Ninh Thuận',name:'NinhThuan' },
          { key: index++, label: 'Phú Quốc',name:'PhuQuoc' },
          { key: index++, label: 'Phan Thiết',name:'PhanThiet' },
          { key: index++, label: 'Phú Yên',name:'PhuYen' },
          { key: index++, label: 'Quy Nhơn - Bình Định',name:'QuyNhon' },
          { key: index++, label: 'Vũng Tàu',name:'VungTau' },   
          { key: index++, label: 'Sa Pa',name:'SaPa' },
                 
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
                        var itemATM=[];
                        var itemCayXang=[];
                        var itemLichTrinh=[];
                     this.setState({cityName:option.label}),
                    itemRef = firebase.database();
                   
                        phuotChoi = itemRef.ref('phuot').child(option.name).child('choi').child('thongtin');
                        phuotNghi = itemRef.ref('phuot').child(option.name).child('nghi').child('thongtin');
                        phuotAn = itemRef.ref('phuot').child(option.name).child('an').child('thongtin');
                        phuotATM = itemRef.ref('phuot').child("DaLat").child('atm');
                        phuotCayXang = itemRef.ref('phuot').child("DaLat").child('xang');
                        phuotLichTrinh = itemRef.ref('phuot').child("DaLat").child('lichtrinh');
                 
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
                        phuotATM.on('value', (snap)=>{
                            
                                  snap.forEach((data)=>{
                                      
                                    itemATM.push(
                                      { 
                                          key:data.key,
                                          phuot:data.val(),
                                      });
                                     
                                  });        
                              });  
                        phuotCayXang.on('value', (snap)=>{
                        
                                snap.forEach((data)=>{
                                    
                                itemCayXang.push(
                                    { 
                                        key:data.key,
                                        phuot:data.val(),
                                    });
                                    
                                });        
                            });  
                            phuotLichTrinh.on('value', (snap)=>{
                                
                                        snap.forEach((data)=>{
                                            
                                        itemLichTrinh.push(
                                            { 
                                                key:data.key,
                                                phuot:data.val(),
                                            });
                                            
                                        });        
                                    });  
                    
                     this.props.SelectedStart(option.name,itemChoi,itemNghi,itemAn,itemATM,itemCayXang,itemLichTrinh);
                     //this.props.SelectedStart();
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
        height:height/12,
        padding:10,
        backgroundColor:'#1D93F4',
        justifyContent:'center'
    },
    
    textInput:{
        fontSize: 18,
        marginTop:12,
        backgroundColor:'#1D93F4',
        padding:10, height:height/15, textAlign:'center',
        color:'#fff',
        
    },
 
  });

  export default connect(null,{SelectedCity,SelectedStart})(HeaderPicker);
