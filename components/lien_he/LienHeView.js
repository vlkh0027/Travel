import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';


export default class LienHeView extends Component {
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <Image 
                        style={{ flex: 1, alignSelf: 'stretch', width: undefined }} source={require('./../../image/map.jpeg')} 
                    />
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={require('./../../icon/location.png')} style={imageStyle} />
                        <Text style={infoText}>12 Mạc Đĩnh Chi, Phường Da Ka, Quận 1, TP Hồ Chí Minh</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={require('./../../icon/phone.png')} style={imageStyle} />
                        <Text style={infoText}>(+84) 0962935611</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={require('./../../icon/sent.png')} style={imageStyle} />
                        <Text style={infoText}>nlinh20011995@gmail.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <Image source={require('./../../icon/message.png')} style={imageStyle} />
                        <Text style={infoText}>(+84) 0962935611</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2

    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6',
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500',
        flexWrap: 'wrap',
        flex:1,
        marginLeft:10,
    }
});

 