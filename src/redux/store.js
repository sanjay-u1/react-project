import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducers/ProductReducer'
import { cartReducers } from './reducers/CartReducers'

const myReducers = combineReducers({
    products : productReducer,
    carts: cartReducers
})

const store = configureStore({
    reducer: myReducers
})

export default store
