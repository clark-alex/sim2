import axios from 'axios'

const initialState = {
    house:'',
    username:'',
    password:'',
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
export function updatePassword (password) {
    return {
        type: updatePassword,
        payload: password
    }
    
}
export function updateUsername (username) {
    return {
        type: updateUsername,
        payload: username
    }
    
}
export function login( obj, history ) {
    return {
      type: login,
      payload: axios.post( 'http://localhost:3030/api/login', obj ).then( response => {
        // history.push('/shop');
        // return response.data;
      })
    };
  }
  
  export function register( obj, history ) {
    return {
      type: register,
      payload: axios.post( 'http://localhost:3030/api/register', obj ).then( response => {
        // history.push('/shop');
        // return response.data;
      })
    };
  }








function reducer(state = initialState, action){
    let {payload} = action
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
        case updatePassword:
            return Object.assign({}, state, {password: action.payload})
        case updateUsername:
            return Object.assign({}, state, {username: action.payload})
        case login + '_FULFILLED':
            return Object.assign({}, state, { user: payload.username, house: payload.cart, total: payload.total });
        case register + '_FULFILLED':
            return Object.assign({}, state, { user: payload.username, house: payload.cart, total: payload.total });
        

            default: return state;
    }
}

export default reducer