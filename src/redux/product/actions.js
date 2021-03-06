import { ADD_PRODUCT, FETCH_PRODUCT_FAIL } from "./actionTypes"

export const fetchProducts = (url) => async (dispatch) => {
    const response = await fetch(url)
    if (!response) {
        dispatch({ type: FETCH_PRODUCT_FAIL })
    }
    const result = await response.json()
    dispatch({ type: ADD_PRODUCT, payload: result })
}



