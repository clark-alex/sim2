
const initialState = {
    propertyname : 'house de huge',
    propertydescription : 'its a big house',
	address : '',
	city: '',
	housestate: '',
	zip: 0,
	picUrl: '',
	loanamount: 0,
	monthlymortgage:0,
	desiredrent:0,

}
const PROPERTY_NAME = 'PROPERTY_NAME';
const PROPERTY_DESCRIPTION = 'PROPERTY_DESCRIPTION';




export function updatePropertyName (propertyname) {
    return {
        type: updatePropertyName,
        payload: propertyname
    }
    
}
export function updatePropertyDescription (propertydescription) {
    return {
        type: updatePropertyDescription,
        payload: propertydescription
    }
    
}
export function updateAddress (address) {
    return {
        type: updateAddress,
        payload: address
    }
    
}

export function updateCity (city) {
    return {
        type: updateCity,
        payload: city
    }
    
}

export function updateHouseState (housestate) {
    return {
        type: updateHouseState,
        payload: housestate
    }
    
}

export function updateZip (zip) {
    return {
        type: updateZip,
        payload: zip
    }
    
}








function reducer(state = initialState, action){
    switch(action.type){
        case updatePropertyName:
            return Object.assign({}, state, {propertyname: action.payload})
        case updatePropertyDescription:
            return Object.assign({}, state, {propertydescription: action.payload})
        case updateAddress:
            return Object.assign({}, state, {address: action.payload})
         case updateCity:
            return Object.assign({}, state, {city: action.payload})
        case updateHouseState:
            return Object.assign({}, state, {housestate: action.payload})
        case updateZip:
            return Object.assign({}, state, {zip: action.payload})
        

            default: return state;
    }
}

export default reducer