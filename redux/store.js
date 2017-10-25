import {createStore} from 'redux';

const defaultState = {
    cityName: "",
    arrAnUong:[],
    arrNhaNghi:[],
    arrVuiChoi:[],
    arrATM:[],
    arrCayXang:[],
    isLoading:true,
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'CITY' :
            return { cityName: action.cityName,
            arrAnUong:action.arrAnUong,
            arrNhaNghi:action.arrNhaNghi,
            arrVuiChoi:action.arrVuiChoi,
            arrATM:action.arrATM,
            arrCayXang:action.arrCayXang,
            isLoading:false, 
            };
        default :
            return state;
    }
};

const store = createStore(reducer,defaultState);
export default store;
