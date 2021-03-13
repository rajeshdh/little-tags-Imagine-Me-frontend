import { ADD_TO_CART, ADD_TO_WISHLIST } from "./actionTypes"

export const addToCart = (id) => async (dispatch) => {
    // SAVE THE DATA TO SERVER - THEN
    dispatch({ type: ADD_TO_CART, payload: id })
}

export const addToWishList = id => async (dispatch) => {
    // SAVE DATA TO SERVER - THEN
    dispatch({ type: ADD_TO_WISHLIST, payload: id })
} 
