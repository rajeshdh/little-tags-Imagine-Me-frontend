import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, MOVE_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionTypes"

export const addToCart = (id) => async (dispatch) => {
    // TODO SAVE THE DATA TO SERVER - THEN
    dispatch({ type: ADD_TO_CART, payload: id })
}

export const removeCartItem = id => async (dispatch) => {
    //TODO - SEND TO SERVER - THEN
    dispatch({ type: REMOVE_FROM_CART, payload: id })
    dispatch({ type: MOVE_TO_WISHLIST, payload: id })
}
export const moveToWishlist = id => async (dispatch) => {
    //TODO - SEND TO SERVER - THEN
    dispatch({ type: REMOVE_FROM_CART, payload: id })
}

export const addToWishList = id => async (dispatch) => {
    //TODO SAVE DATA TO SERVER - THEN
    dispatch({ type: ADD_TO_WISHLIST, payload: id })
} 

export const removeFromWishList = id => async (dispatch) => {
    //TODO SAVE DATA TO SERVER - THEN
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: id })
} 
