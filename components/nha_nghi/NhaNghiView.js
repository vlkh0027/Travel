import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList ,
  TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import Loading from './../Loading';
var {height, width} = Dimensions.get('window');
var imageWidth = width-40;
var imageHeight = height*0.35 - 45;

class NhaNghiView extends Component {

    constructor(props){
        super(props);
        
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
        if (this.refs.myRef) 
            this.setState({myVar: true});
        
        
    }

    gotoDetail(item){
        const {navigate} = this.props.navigation;
        navigate('NhaNghiDetail',{item});
    }
    
    render() {
        
        if(this.props.isLoading === true || this.props.arrNhaNghi === []){
            return <Loading/>
        }else{
            return(
                <FlatList
                
                //style={{marginBottom:20}}
                keyExtractor={(item, index) => item.key}
                data={this.props.arrNhaNghi}
                renderItem={({item}) => 
                <View style={styles.wapper}>
                <View style={styles.textViewTittle}> 
                        <Text style={styles.textTittle}>{item.key}. {item.phuot.ten}</Text>
                    </View>
                    <TouchableHighlight 
                        onPress={()=>{this.gotoDetail(item)}} >
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={{uri:`${item.phuot.hinh}`}}/>
                    </View>
                    </TouchableHighlight>
                    <View style={styles.lastRowInfo}> 
                    <Text style={styles.textPrice}>Giá chỉ từ: {item.phuot.gia} </Text>  
                    </View>
                    
                </View>
                
                }
            />
            );
        }
    }
}

const styles=StyleSheet.create({
    wapper:{
        paddingTop:-25,
        width:width-20,
        margin:10,
        backgroundColor:'#FFFFFF',
        padding:10,
        //paddingBottom:5,
        borderRadius:10,
        justifyContent:'center',
        shadowColor:'#404040',
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        marginBottom:5,
    },
    textViewTittle:{
        height:42,
        justifyContent:'center',
       
    },
    image:{
        width:imageWidth,
        height:imageHeight,
        borderRadius:40,
    },
    imageView:{
       
    },
    textTittle:{
        fontFamily:'Avenir',
        fontSize:16,
        fontWeight:'200',
        color:'#1F2328'
    },
    text:{
        fontSize:12,
        fontFamily:'Avenir',
    },
    textPrice:{
        fontSize:12,
        fontFamily:'Avenir',
        color:'#F04F1E'
    },
    lastRowInfo:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    txtShowDetail:{
        fontFamily:'Avenir',
        fontWeight:'bold',
        color:'#EF596F',
        fontSize:12,
    },
});

function mapStateToProps(state) {
    return {
      arrNhaNghi: state.arrNhaNghi,
      cityName:state.cityName,
      isLoading:state.isLoading,
    };
  };
  
  export default connect(mapStateToProps)(NhaNghiView);