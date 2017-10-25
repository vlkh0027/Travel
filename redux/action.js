export function SelectedCity(city,arrChoi,arrNghi,arrAn,arrAtm,arrXang){
    return {type: 'CITY' ,
        cityName:city,
        arrVuiChoi:arrChoi,
        arrNhaNghi:arrNghi,
        arrAnUong:arrAn,
        arrATM:arrAtm,
        arrCayXang:arrXang,
       
    };
}


