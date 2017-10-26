import React,{Component} from 'react';
import {View, Text, FlatList,Dimensions,StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import Loading from './../Loading';

 class LichTrinh extends Component{
    render(){
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
                            <Text style={infoText}>Đây là lịch trình gợi ý cho bạn, tuy nhiên bạn vẫn có thể đi tự do theo ý của bạn ;).{'\n'}
                            Chúc bạn có 1 chuyến đi vui vẻ hihi
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:5, paddingHorizontal:10}}> 
                        <FlatList
                        keyExtractor={(item, index) => item.key}
                            data={this.props.arrLichTrinh}
                            renderItem={({item}) => 
                            <View style={list}>
                                <View style={titleContainer}>
                                    <Text style={textMain}>
                                    <Text style={textBlack}>{`Ngày ${item.key}`.toUpperCase()}</Text>
                                    </Text>
                                </View>
                                <View style={{marginLeft:10,}}>
                                    <Text style={textSmoke}>{item.phuot.content} </Text>
                                
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
        width:width-20,
        alignItems:'center',
        backgroundColor:'#DBDBDB',
        justifyContent:'center',
        margin: 10,
        borderRadius: 10,
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
    arrLichTrinh:state.arrLichTrinh,
      cityName:state.cityName,
      isLoading:state.isLoading,
    };
  };
  
  export default connect(mapStateToProps)(LichTrinh);