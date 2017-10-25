import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity 
} from 'react-native';

import Swiper from 'react-native-swiper';
import getDirections from 'react-native-google-maps-directions'
import Communications from 'react-native-communications';

export default class NhaNghiDetail extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          latitude: null,
          longitude: null,
          error: null,
        };
      }
    goBack() {
        this.props.navigation.goBack()
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

    Go = () => {
        
        const data = {
           source: {
            latitude: this.state.latitude,
            longitude: this.state.longitude
          },
          destination: {
            latitude: this.props.navigation.state.params.item.phuot.lat,
            longitude: this.props.navigation.state.params.item.phuot.long
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
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor
        } = styles;
        
        const{item} = this.props.navigation.state.params;
        return (
            <View style={{flex:1}}>
            
            <ScrollView style={wrapper}>
                <View style={cardStyle}>
                    
                    <View style={imageContainer}>
                       
                    <Swiper showsButtons={true} autoplay={true} loop={true}
                    showsPagination width={swiperWidth} height={swiperHeight}
                 style={{marginTop:10}}> 
                       
                           <Image source={{uri:`${item.phuot.hinhtonghop.hinh1}`}} style={productImageStyle} />
                           <Image source={{uri:`${item.phuot.hinhtonghop.hinh2}`}} style={productImageStyle} />
                          <Image source={{uri:`${item.phuot.hinhtonghop.hinh3}`}} style={productImageStyle} />
                           <Image source={{uri:`${item.phuot.hinhtonghop.hinh4}`}} style={productImageStyle} />
                           <Image source={{uri:`${item.phuot.hinhtonghop.hinh5}`}} style={productImageStyle} />
                        
                   </Swiper>

                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{`${item.phuot.ten}`.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>Chỉ từ {item.phuot.gia} 1 ngày - Cuối tuần giá khác</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>{item.phuot.mota}</Text>
                            <View style={{ justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtColor}>Địa chỉ: {item.phuot.diachi} </Text>
                                <TouchableOpacity
                                onPress={()=>this.Go()}><Text style={txtColor}>=> Chạm để chỉ đường</Text></TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => Communications.phonecall(item.phuot.sdt, true)}
                                ><Text style={txtColor}>Số Điện Thoại: {item.phuot.sdt} -> Đặt phòng</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
                <View style={header}>
                    <Text></Text>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image style={backStyle} source={require('./../../icon/back.png')} />
                        <Text style={{fontSize:10}}>Quay về</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width,height } = Dimensions.get('window');
const swiperWidth = (width ) - 50;
const swiperHeight = (swiperWidth +50);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        
        //marginBottom:10,
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:"#D6D6D6",
        height:height/15,
        paddingHorizontal: 15,
       
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25,
        
    },
    
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir',
        marginBottom:3,
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});