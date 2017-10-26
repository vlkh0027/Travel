import {createStore} from 'redux';

const defaultState = {
    cityName: "",
    arrAnUong:[],
    arrNhaNghi:[],
    arrVuiChoi:[],
    arrATM:[],
    arrCayXang:[],
    arrLichTrinh:[],
    isLoading:true,
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'CITY' :
            return { cityName: action.cityName,
            arrVuiChoi:action.arrVuiChoi,
            arrNhaNghi:action.arrNhaNghi,
            arrAnUong:action.arrAnUong,
            arrATM:action.arrATM,
            arrCayXang:action.arrCayXang,
            arrLichTrinh:action.arrLichTrinh,
            isLoading:true,
            };
        case 'START' :
        return { cityName: action.cityName,
            arrVuiChoi:action.arrVuiChoi,
            arrNhaNghi:action.arrNhaNghi,
            arrAnUong:action.arrAnUong,
            arrATM:action.arrATM,
            arrCayXang:action.arrCayXang,
            arrLichTrinh:action.arrLichTrinh,
            isLoading:false,
            };
        default :
            return state;
    }
    
};

const store = createStore(reducer,defaultState);
export default store;
