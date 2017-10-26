export function SelectedCity(city,arrChoi,arrNghi,arrAn,arrAtm,arrXang,arrLich){
    return {type: 'CITY' ,
        cityName:city,
        arrVuiChoi:arrChoi,
        arrNhaNghi:arrNghi,
        arrAnUong:arrAn,
        arrATM:arrAtm,
        arrCayXang:arrXang,
       arrLichTrinh:arrLich,
    };
    
};
export function SelectedStart(city,arrChoi,arrNghi,arrAn,arrAtm,arrXang,arrLich){
    return {type: 'START' ,
    cityName:city,
    arrVuiChoi:arrChoi,
    arrNhaNghi:arrNghi,
    arrAnUong:arrAn,
    arrATM:arrAtm,
    arrCayXang:arrXang,
    arrLichTrinh:arrLich,
   
    };
};

