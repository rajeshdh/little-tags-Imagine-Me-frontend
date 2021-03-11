import { ADD_TO_CART } from "./actionTypes"

export const addToCart = (id) => async (dispatch) => {
    // SAVE THE DATA TO SERVER - THEN
    dispatch({ type: ADD_TO_CART, payload: id })
}

export const addToWishList = id => async (dispatch) => {
    // SAVE DATA TO SERVER - THEN
    
} 