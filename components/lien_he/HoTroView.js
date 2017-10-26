import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';


import {connect} from 'react-redux';
import Loading from './../Loading';
import getDirections from 'react-native-google-maps-directions'

class HoTroView extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          latitude: null,
          longitude: null,
          error: null,
        };
      }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
        );
      }
    
      componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
      }

    GoATM = (lat, long) => {
        
        const data = {
           source: {
            latitude: this.state.latitude,
            longitude: this.state.longitude
          },
          destination: {
            latitude: lat,
            longitude: long
          },
          params: [
            {
              key: "dirflg",
              value: "c"
            }
          ]
        }
     
        getDirections(data)
      }

      GoCayXang = (lat, long) => {
        
        const data = {
           source: {
            latitude: this.state.latitude,
            longitude: this.state.longitude
          },
          destination: {
            latitude: lat,
            longitude: long
          },
          params: [
            {
              key: "dirflg",
              value: "c"
            }
          ]
        }
     
        getDirections(data)
      }

    render() {
        const {
            mapContainer, wrapper, title,titleContainer,txtColor, list, textATM,
            rowInfoContainer, imageStyle, infoText,textMain,textBlack,textHighlight,textSmoke
        } = styles;
        if(this.props.isLoading === true ){
            return <Loading/>
        }else{
            return (
                <View style={wrapper}>
                <View style={{flex:1, alignItems:'center'}}>
                    <View style={title}>
                        <Text style={infoText}>Trụ rút tiền ATM</Text>
                    </View>
                </View>
                <View style={{flex:5, paddingHorizontal:10}}> 
                    <FlatList
                    keyExtractor={(item, index) => item.key}
                        data={this.props.arrATM}
                        renderItem={({item}) => 
                        <View style={list}>
                            <View style={titleContainer}>
                                <Text style={textMain}>
                                <Text style={textBlack}>{`${item.phuot.ten}`.toUpperCase()}</Text>
                                </Text>
                            </View>
                            <View style={{marginLeft:10,}}>
                                <Text style={textSmoke}>{item.phuot.diachi} </Text>
                                <TouchableOpacity
                                onPress={()=>this.GoATM(item.phuot.lat, item.phuot.long)}><Text style={txtColor}>=> Chạm để chỉ đường</Text></TouchableOpacity>
                            </View>
                        </View>
                        }
                    />
                </View>

                <View style={{flex:1, alignItems:'center'}}>
                    <View style={title}>
                        <Text style={infoText}>Cây Xăng </Text>
                    </View>
                </View>
                <View style={{flex:5, paddingHorizontal:10, paddingBottom:15}}> 
                <FlatList
                keyExtractor={(item, index) => item.key}
                    data={this.props.arrCayXang}
                    renderItem={({item}) => 
                    <View style={list}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                            <Text style={textATM}>{`Trạm xăng dầu ${item.key}`.toUpperCase()}</Text>
                            </Text>
                        </View>
                        <View style={{marginLeft:10,}}>
                            <Text style={textSmoke}> {item.phuot.diachi} </Text>
                            <TouchableOpacity
                            onPress={()=>this.GoCayXang(item.phuot.lat, item.phuot.long)}><Text style={txtColor}>=> Chạm để chỉ đường</Text></TouchableOpacity>
                        </View>
                    </View>
                    }
                />
            </View>
                    
                </View>
            );
        }
    }
}

const { width,height } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    title: {
        padding: 5,
        flex:1,
        width:width/2,
        alignItems:'center',
        backgroundColor:'#DBDBDB',
        justifyContent:'center',
        margin: 10,
        borderRadius: 20,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2

    },
    textMain: {
        paddingLeft: 10,
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#21A365'
    },
    textATM: {
        fontFamily: 'Avenir',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#24B4D8'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 15,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 15,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        //paddingBottom: 5
    },
    
    infoText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        flex:1,
        
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir',
        marginBottom:3,
    },
    list:{
        margin:5,
        backgroundColor:'#FFFFFF',
        padding:5,
        borderRadius:10,
        justifyContent:'center',
        shadowColor:'#404040',
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        marginBottom:5,
    }
});
function mapStateToProps(state) {
    return {
        arrATM:state.arrATM,
        arrCayXang:state.arrCayXang,
      cityName:state.cityName,
      isLoading:state.isLoading,
    };
  };
  
  export default connect(mapStateToProps)(HoTroView);
 