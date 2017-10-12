import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity 
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class VuiChoiDetail extends Component {

    goBack() {
        this.props.navigation.goBack()
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
            <ScrollView style={wrapper}>
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image style={backStyle} source={require('./../../icon/back.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={cartStyle} source={require('./../../icon/traveler.png')} />
                        </TouchableOpacity>
                    </View>
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
                                <Text style={textSmoke}>{item.phuot.gia} vnd - 1 vé</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>{item.phuot.mota}</Text>
                            <View style={{ justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtMaterial}>Giờ mở cửa: {item.phuot.giomocua}</Text>
                                <Text style={txtColor}>Địa chỉ: {item.phuot.diachi}</Text>
                                <TouchableOpacity><Text style={txtColor}>=> Chạm để chỉ đường</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const { width,height } = Dimensions.get('window');
const swiperWidth = (width ) - 50;
const swiperHeight = (swiperWidth -70);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        height:height,
        marginBottom:10,
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
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
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