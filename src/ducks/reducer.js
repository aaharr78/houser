import axios from 'axios'

let initialState = {
    houses:[],
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    image: '',
    monthlyMortgageAmmount: '',
    desiredRent: ''
}
const FULFILLED = "_FULFILLED"
const ADD_NAME = 'ADD_NAME'
const ADD_ADDRESS = 'ADD_ADDRESS'
const ADD_CITY = 'ADD_CITY'
const ADD_STATE = 'ADD_STATE'
const ADD_ZIPCODE = 'ADD_ZIPCODE'
const GET_HOUSES = 'GET_HOUSES'
const ADD_HOUSES = 'ADD_HOUSES'
const REMOVE_HOUSES = 'REMOVE_HOUSES'



export function addName(name) {
    let name = axios.get('./api/houses').then(results => {
        return results.data
    })
    return {
        type: ADD_NAME,
        payload: name
    }
}
export function addAddress(address) {
    let address = axios.get('./api/houses').then(results => {
        return results.data
    })
    return {
        type: ADD_ADDRESS,
        payload: address
    }
}
export function addCity(city) {
    let city = axios.get('./api/houses').then(results => {
        return results.data
    })
    return {
        type: ADD_CITY,
        payload: city
    }
}
export function addState(state) {
    let state = axios.get('./api/houses').then(results => {
        return results.data
    })
    return {
        type: ADD_STATE,
        payload: state
    }
}
export function addZipcode(zipcode) {
    let zipcode = axios.get('./api/houses').then(results => {
        return results.data
    })
    return {
        type: ADD_Zipcode,
        payload: zipcode
    }
}
export function getHouses(houseList) {
    let houseList = axios.get('./api/houses').then(results => {
        return results.data
    })
    return {
        type: GET_HOUSES,
        payload: houseList
    }
}
export function addHouses(id) {
    let houseList = axios.post(`./api/houses/${id}`).then(results => {
        return results.data
    })
    return {
        type: ADD_HOUSES,
        payload: houseList
    }
}
export function deleteHouses(id) {
    let houseList = axios.delete(`./api/houses/${id}`).then(results => {
        return results.data
    })
    return {
        type: REMOVE_HOUSES,
        payload: houseList
    }
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NAME + FULFILLED:
            return Object.assign({}, state, { name: action.payload })
        case ADD_ADDRESS + FULFILLED:
            return Object.assign({}, state, { address: action.payload })
        case ADD_CITY + FULFILLED:
            return Object.assign({}, state, { city: action.payload })
        case ADD_STATE + FULFILLED:
            return Object.assign({}, state, { state: action.payload })
        case ADD_ZIPCODE + FULFILLED:
            return Object.assign({}, state, { zipcode: action.payload })
        case GET_HOUSES + FULFILLED:
            return Object.assign({}, state, { houseList: action.payload })
        case ADD_REMOVE + FULFILLED:
            return Object.assign({}, state, { houseList: action.payload })
        case REMOVE_HOUSES + FULFILLED:
            return Object.assign({}, state, { houseList: action.payload })
        default:
            return state
    }
}